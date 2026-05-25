import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Modal from '../components/Modal';
import ImportExcelModal from '../components/ImportExcelModal';
import { UserPlus, Trash2, Search, Upload } from 'lucide-react';
import { DEPARTMENTS, NATIONALITIES } from '../data/initialData';

const EMPTY_FORM = {
  name: '', employeeId: '', department: 'Operations', locationId: '',
  room: '', checkIn: new Date().toISOString().slice(0, 10),
  phone: '', nationality: 'Indian', status: 'Active',
};

export default function TenantsPage() {
  const { locations, tenants, addTenant, removeTenant, updateTenantStatus } = useApp();
  const [searchParams] = useSearchParams();

  const [search, setSearch]         = useState('');
  const [locFilter, setLocFilter]   = useState(searchParams.get('location') || 'all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showModal, setShowModal]   = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [form, setForm]             = useState({ ...EMPTY_FORM });
  const [deleteId, setDeleteId]     = useState(null);

  const staffLocs = locations.filter(l => l.category.includes('Staff'));

  const filtered = tenants.filter(t => {
    const q = search.toLowerCase();
    return (
      (!q || t.name.toLowerCase().includes(q) || t.employeeId.toLowerCase().includes(q) || t.room.toLowerCase().includes(q)) &&
      (locFilter === 'all' || t.locationId === locFilter) &&
      (statusFilter === 'all' || t.status === statusFilter)
    );
  });

  const locationName = id => locations.find(l => l.id === id)?.name || id;

  const input = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]';

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Tenants</h2>
          <p className="text-sm text-gray-500">{filtered.length} record{filtered.length !== 1 ? 's' : ''}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowImport(true)}
            className="flex items-center gap-2 border border-gray-300 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
            <Upload size={15} /> Import Excel
          </button>
          <button
            onClick={() => { setForm({ ...EMPTY_FORM, locationId: locFilter !== 'all' ? locFilter : '' }); setShowModal(true); }}
            className="flex items-center gap-2 bg-[#8CC63F] hover:bg-[#7AB035] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shrink-0"
          >
            <UserPlus size={16} /> Add Tenant
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search name, ID or room…"
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CC63F]" />
        </div>
        <select value={locFilter} onChange={e => setLocFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]">
          <option value="all">All Locations</option>
          {staffLocs.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
        </select>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]">
          <option value="all">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">Emp ID</th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">Department</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">Room</th>
                <th className="px-4 py-3 text-left hidden xl:table-cell">Check-in</th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">Nationality</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr><td colSpan={9} className="text-center py-12 text-sm text-gray-400">No tenants found.</td></tr>
              ) : filtered.map(t => (
                <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">{t.name}</div>
                        <div className="text-xs text-gray-400 md:hidden">{t.employeeId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">{t.employeeId}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 hidden lg:table-cell">{t.department}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{locationName(t.locationId)}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">{t.room}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 hidden xl:table-cell">{t.checkIn}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 hidden lg:table-cell">{t.nationality}</td>
                  <td className="px-4 py-3">
                    <select value={t.status} onChange={e => updateTenantStatus(t.id, e.target.value)}
                      className={`text-xs font-semibold rounded-full px-2 py-0.5 border-0 cursor-pointer focus:outline-none ${
                        t.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => setDeleteId(t.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1" title="Remove">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {showModal && (
        <Modal title="Add New Tenant" onClose={() => setShowModal(false)} wide>
          <form onSubmit={e => { e.preventDefault(); addTenant(form); setForm({ ...EMPTY_FORM }); setShowModal(false); }} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input required type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={input} /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Employee ID *</label>
                <input required type="text" value={form.employeeId} onChange={e => setForm(f => ({ ...f, employeeId: e.target.value }))} className={input} placeholder="EMP-XXXX" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
                <select required value={form.department} onChange={e => setForm(f => ({ ...f, department: e.target.value }))} className={input}>
                  {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}</select></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <select required value={form.locationId} onChange={e => setForm(f => ({ ...f, locationId: e.target.value }))} className={input}>
                  <option value="">-- Select --</option>
                  {staffLocs.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}</select></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Room *</label>
                <input required type="text" value={form.room} onChange={e => setForm(f => ({ ...f, room: e.target.value }))} className={input} placeholder="A-101" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Check-in *</label>
                <input required type="date" value={form.checkIn} onChange={e => setForm(f => ({ ...f, checkIn: e.target.value }))} className={input} /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className={input} placeholder="+974 XXXX XXXX" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                <select value={form.nationality} onChange={e => setForm(f => ({ ...f, nationality: e.target.value }))} className={input}>
                  {NATIONALITIES.map(n => <option key={n}>{n}</option>)}</select></div>
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setShowModal(false)} className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button>
              <button type="submit" className="flex-1 bg-[#8CC63F] hover:bg-[#7AB035] text-white py-2.5 rounded-lg text-sm font-medium transition-colors">Add Tenant</button>
            </div>
          </form>
        </Modal>
      )}

      {/* Delete Confirm */}
      {deleteId && (
        <Modal title="Remove Tenant" onClose={() => setDeleteId(null)}>
          <p className="text-sm text-gray-600 mb-6">Remove <strong>{tenants.find(t => t.id === deleteId)?.name}</strong>? This cannot be undone.</p>
          <div className="flex gap-3">
            <button onClick={() => setDeleteId(null)} className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button>
            <button onClick={() => { removeTenant(deleteId); setDeleteId(null); }} className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg text-sm font-medium">Remove</button>
          </div>
        </Modal>
      )}

      {showImport && <ImportExcelModal onClose={() => setShowImport(false)} />}
    </div>
  );
}
