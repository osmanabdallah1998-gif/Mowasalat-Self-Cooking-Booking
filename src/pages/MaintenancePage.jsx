import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Modal from '../components/Modal';
import { Plus, Search } from 'lucide-react';

const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'];
const STATUSES   = ['Open', 'In Progress', 'Resolved'];

const PRIORITY_COLOR = {
  Critical: 'bg-red-100 text-red-700',
  High:     'bg-orange-100 text-orange-700',
  Medium:   'bg-amber-100 text-amber-700',
  Low:      'bg-blue-100 text-blue-700',
};
const STATUS_COLOR = {
  Open:          'bg-red-100 text-red-700',
  'In Progress': 'bg-amber-100 text-amber-700',
  Resolved:      'bg-green-100 text-green-700',
};

const EMPTY = { locationId: '', title: '', description: '', priority: 'Medium', reportedBy: '' };

export default function MaintenancePage() {
  const { locations, maintenance, addMaintenanceRequest, updateMaintenanceStatus } = useApp();
  const [searchParams] = useSearchParams();

  const [search, setSearch]           = useState('');
  const [locFilter, setLocFilter]     = useState(searchParams.get('location') || 'all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [showModal, setShowModal]     = useState(false);
  const [form, setForm]               = useState({ ...EMPTY });

  const filtered = maintenance
    .filter(r => {
      const q = search.toLowerCase();
      return (
        (!q || r.title.toLowerCase().includes(q) || r.reportedBy.toLowerCase().includes(q)) &&
        (locFilter === 'all' || r.locationId === locFilter) &&
        (statusFilter === 'all' || r.status === statusFilter) &&
        (priorityFilter === 'all' || r.priority === priorityFilter)
      );
    })
    .sort((a, b) => b.reportedDate.localeCompare(a.reportedDate));

  const counts = { Open: 0, 'In Progress': 0, Resolved: 0 };
  maintenance.forEach(r => { if (r.status in counts) counts[r.status]++; });

  const locationName = id => locations.find(l => l.id === id)?.name || id;

  const input = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]';

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Maintenance</h2>
          <p className="text-sm text-gray-500">{filtered.length} request{filtered.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={() => { setForm({ ...EMPTY, locationId: locFilter !== 'all' ? locFilter : '' }); setShowModal(true); }}
          className="flex items-center gap-2 bg-[#8CC63F] hover:bg-[#7AB035] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shrink-0"
        >
          <Plus size={16} /> New Request
        </button>
      </div>

      {/* Status chips */}
      <div className="flex gap-3 flex-wrap">
        {Object.entries(counts).map(([status, count]) => (
          <button key={status} onClick={() => setStatusFilter(statusFilter === status ? 'all' : status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              statusFilter === status ? 'border-[#8CC63F] bg-[#8CC63F] text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}>
            {status} <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${STATUS_COLOR[status]}`}>{count}</span>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…"
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CC63F]" />
        </div>
        <select value={locFilter} onChange={e => setLocFilter(e.target.value)} className={`border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]`}>
          <option value="all">All Locations</option>
          {locations.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
        </select>
        <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)} className={`border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]`}>
          <option value="all">All Priorities</option>
          {PRIORITIES.map(p => <option key={p}>{p}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Issue</th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">Location</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">Reported By</th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">Date</th>
                <th className="px-4 py-3 text-left">Priority</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left hidden xl:table-cell">Resolved</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0
                ? <tr><td colSpan={7} className="text-center py-12 text-sm text-gray-400">No requests found.</td></tr>
                : filtered.map(r => (
                  <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-gray-800">{r.title}</div>
                      <div className="text-xs text-gray-400 truncate max-w-xs hidden sm:block">{r.description}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">{locationName(r.locationId)}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">{r.reportedBy}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 hidden lg:table-cell">{r.reportedDate}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${PRIORITY_COLOR[r.priority]}`}>{r.priority}</span>
                    </td>
                    <td className="px-4 py-3">
                      <select value={r.status} onChange={e => updateMaintenanceStatus(r.id, e.target.value)}
                        className={`text-xs font-semibold rounded-full px-2 py-0.5 border-0 cursor-pointer focus:outline-none ${STATUS_COLOR[r.status]}`}>
                        {STATUSES.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 hidden xl:table-cell">{r.resolvedDate || '—'}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {showModal && (
        <Modal title="New Maintenance Request" onClose={() => setShowModal(false)} wide>
          <form onSubmit={e => { e.preventDefault(); addMaintenanceRequest({ ...form, status: 'Open' }); setForm({ ...EMPTY }); setShowModal(false); }} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <select required value={form.locationId} onChange={e => setForm(f => ({ ...f, locationId: e.target.value }))} className={input}>
                  <option value="">-- Select --</option>
                  {locations.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Issue Title *</label>
                <input required type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className={input} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea required rows={3} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className={`${input} resize-none`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority *</label>
                <select required value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value }))} className={input}>
                  {PRIORITIES.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reported By *</label>
                <input required type="text" value={form.reportedBy} onChange={e => setForm(f => ({ ...f, reportedBy: e.target.value }))} className={input} />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setShowModal(false)} className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button>
              <button type="submit" className="flex-1 bg-[#8CC63F] hover:bg-[#7AB035] text-white py-2.5 rounded-lg text-sm font-medium transition-colors">Submit</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
