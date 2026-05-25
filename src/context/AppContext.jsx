import { createContext, useContext, useState, useEffect } from 'react';
import { LOCATIONS, INITIAL_TENANTS, INITIAL_MAINTENANCE } from '../data/initialData';

const AppContext = createContext(null);

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }) {
  const [user, setUser]             = useState(() => load('karwa_user', null));
  const [locations, setLocations]   = useState(() => load('karwa_locations', LOCATIONS));
  const [tenants, setTenants]       = useState(() => load('karwa_tenants', INITIAL_TENANTS));
  const [maintenance, setMaintenance] = useState(() => load('karwa_maintenance', INITIAL_MAINTENANCE));

  useEffect(() => { localStorage.setItem('karwa_locations',   JSON.stringify(locations)); },   [locations]);
  useEffect(() => { localStorage.setItem('karwa_tenants',     JSON.stringify(tenants)); },     [tenants]);
  useEffect(() => { localStorage.setItem('karwa_maintenance', JSON.stringify(maintenance)); }, [maintenance]);
  useEffect(() => {
    if (user) localStorage.setItem('karwa_user', JSON.stringify(user));
    else      localStorage.removeItem('karwa_user');
  }, [user]);

  const login = (username, password) => {
    if (username === 'admin' && password === 'karwa2024') {
      setUser({ username: 'admin', name: 'Admin User', role: 'Administrator' });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const addTenant = (tenant) =>
    setTenants(prev => [...prev, { ...tenant, id: `T${Date.now()}` }]);

  const removeTenant = (id) =>
    setTenants(prev => prev.filter(t => t.id !== id));

  const updateTenantStatus = (id, status) =>
    setTenants(prev => prev.map(t => t.id === id ? { ...t, status } : t));

  const addMaintenanceRequest = (req) =>
    setMaintenance(prev => [
      ...prev,
      { ...req, id: `MR${Date.now()}`, reportedDate: new Date().toISOString().slice(0, 10), resolvedDate: null },
    ]);

  const updateMaintenanceStatus = (id, status) =>
    setMaintenance(prev =>
      prev.map(r =>
        r.id === id
          ? { ...r, status, resolvedDate: status === 'Resolved' ? new Date().toISOString().slice(0, 10) : r.resolvedDate }
          : r,
      ),
    );

  const updateLocationCapacity = (locationId, capacity, occupancy) =>
    setLocations(prev =>
      prev.map(l => l.id === locationId ? { ...l, capacity: Number(capacity), occupancy: Number(occupancy) } : l),
    );

  return (
    <AppContext.Provider value={{
      user, login, logout,
      locations, tenants, maintenance,
      addTenant, removeTenant, updateTenantStatus,
      addMaintenanceRequest, updateMaintenanceStatus,
      updateLocationCapacity,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
