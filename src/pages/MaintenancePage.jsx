import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Modal from '../components/Modal';
import { Plus, Search, Wrench } from 'lucide-react';

const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'];
const STATUSES   = ['Open', 'In Progress', 'Resolved'];

const PRIORITY_COLOR = {
  Critical: 'bg-red-50 text-red-600',
  High:     'bg-orange-50 text-orange-600',
  Medium:   'bg-amber-50 text-amber-600',
  Low:      'bg-blue-50 text-blue-600',
  Mid:      'bg-amber-50 text-amber-600',
};

const STATUS_COLOR = {
  Open:                  'bg-red-50 text-red-600',
  'In Progress':         'bg-amber-50 text-amber-600',
  Resolved:              'bg-[#F0F9E8] text-[#6BA32D]',
  Completed:             'bg-[#F0F9E8] text-[#6BA32D]',
  'Pending (Internal)':  'bg-amber-50 text-amber-600',
  Pending:               'bg-red-50 text-red-600',
  Cancelled:             'bg-slate-100 text-slate-500',
};

const EMPTY = { locationId: '', title: '', description: '', priority: 'Medium', reportedBy: '' };

export default function MaintenancePage() {
  const { locations, maintenance, addMaintenanceRequest, updateMaintenanceStatus } = useApp();
  const [searchParams] = useSearchParams();

  const [search, setSearch]             = useState('');
  const [locFilter, setLocFilter]       = useState(searchParams.get('location') || 'all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [showModal, setShowModal]       = useState(false);
  const [form, setForm]                 = useState({ ...EMPTY });

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
  maintenance.forEach(r => {
    if (r.status === 'Open' || r.status === 'Pending') counts['Open']++;
    else if (r.status === 'In Progress' || r.status === 'Pending (Internal)') counts['In Progress']++;
    else if (r.status === 'Resolved' || r.status === 'Completed') counts['Resolved']++;
  });

  const locationName = (id, fallback) => locations.find(l => l.id === id)?.name || fallback || id;

  const inputCls = 'w-full border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent text-[#0F172A] transition-all duration-200';

  const STATUS_CHIP_ACTIVE = {
    Open:          'bg-red-500 text-white border-red-500',
    'In Progress': 'bg-amber-500 text-white border-amber-500',
    Resolved:      'bg-[#8CC63F] text-white border-[#8CC63F]',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <Wrench size={22} className="text-[#8CC63F]" /> Maintenance &amp; Inspections
          </h2>
          <p className="text-sm text-[#64748B] mt-0.5">
            {maintenance.length.toLocaleString()} total records
          </p>
        </div>
        <button
          onClick={() => { setForm({ ...EMPTY, locationId: locFilter !== 'all' ? locFilter : '' }); setShowModal(true); }}
          className="flex items-center gap-2 bg-[#8CC63F] hover:bg-[#6BA32D] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm shrink-0"
        >
          <Plus size={16} /> New Request
        </button>
      </div>

      {/* Status summary chips */}
      <div className="flex gap-3 flex-wrap">
        {Object.entries(counts).map(([status, count]) => (
          <button
            key={status}
            onClick={() => setStatusFilter(statusFilter === status ? 'all' : status)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 flex items-center gap-2 ${
              statusFilter === status
                ? STATUS_CHIP_ACTIVE[status]
                : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-slate-300 shadow-[0_1px_3px_rgba(0,0,0,0.07)]'
            }`}
          >
            {status}
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
              statusFilter === status ? 'bg-white/25 text-white' : STATUS_COLOR[status]
            }`}>
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Filter bar */}
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search issues or reported by…"
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent text-[#0F172A] placeholder-[#94A3B8] transition-all duration-200"
          />
        </div>
        <select
          value={locFilter}
          onChange={e => setLocFilter(e.target.value)}
          className="border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F] text-[#0F172A] bg-white transition-all duration-200"
        >
          <option value="all">All Locations</option>
          {locations.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
        </select>
        <select
          value={priorityFilter}
          onChange={e => setPriorityFilter(e.target.value)}
          className="border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F] text-[#0F172A] bg-white transition-all duration-200"
        >
          <option value="all">All Priorities</option>
          {PRIORITIES.map(p => <option key={p}>{p}</option>)}
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-[#64748B]">
        {filtered.length.toLocaleString()} result{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">Issue</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden sm:table-cell">Location</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden md:table-cell">Reported By</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden lg:table-cell">Date</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">Priority</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden xl:table-cell">Resolved</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-16 text-sm text-[#94A3B8]">
                    No requests found.
                  </td>
                </tr>
              ) : filtered.map(r => (
                <tr key={r.id} className="hover:bg-[#F8FAFC] transition-colors duration-150">
                  <td className="px-4 py-3">
                    <div className="text-sm font-semibold text-[#0F172A]">{r.title}</div>
                    <div className="text-xs text-[#94A3B8] truncate max-w-xs hidden sm:block mt-0.5">{r.description}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#64748B] hidden sm:table-cell">
                    {locationName(r.locationId, r.locationName)}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#64748B] hidden md:table-cell">{r.reportedBy}</td>
                  <td className="px-4 py-3 text-sm text-[#94A3B8] hidden lg:table-cell">{r.reportedDate}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${PRIORITY_COLOR[r.priority] || 'bg-slate-100 text-slate-500'}`}>
                      {r.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={r.status}
                      onChange={e => updateMaintenanceStatus(r.id, e.target.value)}
                      className={`text-xs font-semibold rounded-full px-2.5 py-1 border-0 cursor-pointer focus:outline-none ${STATUS_COLOR[r.status] || 'bg-slate-100 text-slate-500'}`}
                    >
                      {STATUSES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#94A3B8] hidden xl:table-cell">{r.resolvedDate || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {showModal && (
        <Modal title="New Maintenance Request" onClose={() => setShowModal(false)} wide>
          <form
            onSubmit={e => {
              e.preventDefault();
              addMaintenanceRequest({ ...form, status: 'Open' });
              setForm({ ...EMPTY });
              setShowModal(false);
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Location *</label>
                <select required value={form.locationId} onChange={e => setForm(f => ({ ...f, locationId: e.target.value }))} className={inputCls}>
                  <option value="">-- Select --</option>
                  {locations.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Issue Title *</label>
                <input required type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Brief description of the issue" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Description *</label>
                <textarea required rows={3} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className={`${inputCls} resize-none`} placeholder="Detailed description…" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Priority *</label>
                <select required value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value }))} className={inputCls}>
                  {PRIORITIES.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Reported By *</label>
                <input required type="text" value={form.reportedBy} onChange={e => setForm(f => ({ ...f, reportedBy: e.target.value }))} className={inputCls} placeholder="Your name" />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex-1 border border-[#E2E8F0] text-[#64748B] py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#8CC63F] hover:bg-[#6BA32D] text-white py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              >
                Submit Request
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
