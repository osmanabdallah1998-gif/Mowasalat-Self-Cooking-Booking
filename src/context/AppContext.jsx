import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { LOCATIONS, INITIAL_TENANTS, INITIAL_MAINTENANCE, GYM_MEMBERS, FAMILY_UNITS } from '../data/initialData';
import {
  connectFirebase, getDb, isConnected,
  collection, doc, setDoc, deleteDoc, onSnapshot, getDocs, writeBatch,
} from '../lib/firebase';

const AppContext = createContext(null);

function load(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}

export function AppProvider({ children }) {
  const [user, setUser]               = useState(() => load('karwa_user', null));
  const [locations, setLocations]     = useState(() => load('karwa_locations', LOCATIONS));
  const [tenants, setTenants]         = useState(() => load('karwa_tenants', INITIAL_TENANTS));
  const [maintenance, setMaintenance] = useState(() => load('karwa_maintenance', INITIAL_MAINTENANCE));
  const [gymMembers]                  = useState(GYM_MEMBERS);
  const [familyUnits]                 = useState(FAMILY_UNITS);
  const [syncStatus, setSyncStatus]   = useState('offline'); // 'offline' | 'connecting' | 'online' | 'error'
  const unsubRefs = useRef([]);

  // Persist to localStorage
  useEffect(() => { localStorage.setItem('karwa_locations',   JSON.stringify(locations)); },   [locations]);
  useEffect(() => { localStorage.setItem('karwa_tenants',     JSON.stringify(tenants)); },     [tenants]);
  useEffect(() => { localStorage.setItem('karwa_maintenance', JSON.stringify(maintenance)); }, [maintenance]);
  useEffect(() => {
    if (user) localStorage.setItem('karwa_user', JSON.stringify(user));
    else localStorage.removeItem('karwa_user');
  }, [user]);

  // Auto-reconnect on mount
  useEffect(() => {
    const saved = localStorage.getItem('karwa_firebase_config');
    if (saved) { try { _startFirebase(JSON.parse(saved)); } catch {} }
  }, []); // eslint-disable-line

  function _startFirebase(config) {
    setSyncStatus('connecting');
    try {
      const db = connectFirebase(config);
      const subs = [];

      subs.push(onSnapshot(collection(db, 'locations'), snap => {
        if (!snap.empty) setLocations(snap.docs.map(d => ({ ...d.data(), id: d.id })));
      }));
      subs.push(onSnapshot(collection(db, 'tenants'), snap => {
        setTenants(snap.docs.map(d => ({ ...d.data(), id: d.id })));
      }));
      subs.push(onSnapshot(collection(db, 'maintenance'), snap => {
        setMaintenance(snap.docs.map(d => ({ ...d.data(), id: d.id })));
      }));

      unsubRefs.current.forEach(u => u());
      unsubRefs.current = subs;
      setSyncStatus('online');
      return true;
    } catch (e) {
      setSyncStatus('error');
      return false;
    }
  }

  const connectToFirebase = async (config) => {
    const ok = _startFirebase(config);
    if (ok) {
      localStorage.setItem('karwa_firebase_config', JSON.stringify(config));
      // Push local data to Firestore if empty
      const db = getDb();
      const snap = await getDocs(collection(db, 'locations'));
      if (snap.empty) await pushLocalDataToFirebase(db);
    }
    return ok;
  };

  const disconnectFirebase = () => {
    unsubRefs.current.forEach(u => u());
    unsubRefs.current = [];
    localStorage.removeItem('karwa_firebase_config');
    setSyncStatus('offline');
  };

  const pushLocalDataToFirebase = async (db) => {
    const batch = writeBatch(db);
    locations.forEach(l =>  batch.set(doc(collection(db, 'locations'),   l.id), l));
    tenants.forEach(t =>    batch.set(doc(collection(db, 'tenants'),     t.id), t));
    maintenance.forEach(m => batch.set(doc(collection(db, 'maintenance'), m.id), m));
    await batch.commit();
  };

  // --- CRUD helpers ---
  async function _write(colName, item) {
    if (isConnected()) await setDoc(doc(collection(getDb(), colName), item.id), item);
  }
  async function _delete(colName, id) {
    if (isConnected()) await deleteDoc(doc(collection(getDb(), colName), id));
  }

  // --- Auth ---
  const login = (username, password) => {
    if (username === 'admin' && password === 'karwa2024') {
      setUser({ username: 'admin', name: 'Admin User', role: 'Administrator' });
      return true;
    }
    return false;
  };
  const logout = () => setUser(null);

  // --- Locations ---
  const updateLocationCapacity = async (locationId, capacity, occupancy) => {
    const updated = locations.map(l =>
      l.id === locationId ? { ...l, capacity: Number(capacity), occupancy: Number(occupancy) } : l
    );
    setLocations(updated);
    const item = updated.find(l => l.id === locationId);
    if (item) await _write('locations', item);
  };

  const importLocations = async (newLocations) => {
    setLocations(newLocations);
    if (isConnected()) {
      const batch = writeBatch(getDb());
      newLocations.forEach(l => batch.set(doc(collection(getDb(), 'locations'), l.id), l));
      await batch.commit();
    }
  };

  // --- Tenants ---
  const addTenant = async (tenant) => {
    const t = { ...tenant, id: `T${Date.now()}` };
    setTenants(prev => [...prev, t]);
    await _write('tenants', t);
  };
  const removeTenant = async (id) => {
    setTenants(prev => prev.filter(t => t.id !== id));
    await _delete('tenants', id);
  };
  const updateTenantStatus = async (id, status) => {
    const updated = tenants.map(t => t.id === id ? { ...t, status } : t);
    setTenants(updated);
    const item = updated.find(t => t.id === id);
    if (item) await _write('tenants', item);
  };
  const importTenants = async (newTenants) => {
    setTenants(newTenants);
    if (isConnected()) {
      const batch = writeBatch(getDb());
      newTenants.forEach(t => batch.set(doc(collection(getDb(), 'tenants'), t.id), t));
      await batch.commit();
    }
  };

  // --- Maintenance ---
  const addMaintenanceRequest = async (req) => {
    const r = { ...req, id: `MR${Date.now()}`, reportedDate: new Date().toISOString().slice(0, 10), resolvedDate: null };
    setMaintenance(prev => [...prev, r]);
    await _write('maintenance', r);
  };
  const updateMaintenanceStatus = async (id, status) => {
    const updated = maintenance.map(r =>
      r.id === id
        ? { ...r, status, resolvedDate: status === 'Resolved' ? new Date().toISOString().slice(0, 10) : r.resolvedDate }
        : r
    );
    setMaintenance(updated);
    const item = updated.find(r => r.id === id);
    if (item) await _write('maintenance', item);
  };

  return (
    <AppContext.Provider value={{
      user, login, logout,
      locations, tenants, maintenance, gymMembers, familyUnits,
      syncStatus, connectToFirebase, disconnectFirebase, pushLocalDataToFirebase,
      addTenant, removeTenant, updateTenantStatus, importTenants,
      addMaintenanceRequest, updateMaintenanceStatus,
      updateLocationCapacity, importLocations,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
