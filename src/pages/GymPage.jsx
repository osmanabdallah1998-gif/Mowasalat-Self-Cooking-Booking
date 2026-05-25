import { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Search, Dumbbell, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const DEPOT_LABELS = {
  'KARWA-CITY': 'Karwa City',
  MSD: 'Mesaimeer (MSD)',
  AKD: 'Al Khor (AKD)',
  ARD: 'Al Rayyan (ARD)',
  IND: 'Industrial Area',
  LUD: 'Lusail (LUD)',
  WAD: 'Wadi Aba Saleel (WAD)',
};

export default function GymPage() {
  const { gymMembers } = useApp();
  const [search, setSearch] = useState('');
  const [depotFilter, setDepotFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 50;

  const depots = useMemo(() => [...new Set(gymMembers.map(m => m.locationId))].filter(Boolean).sort(), [gymMembers]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return gymMembers.filter(m =>
      (!q || m.name.toLowerCase().includes(q) || m.empNo.includes(q) || m.department.toLowerCase().includes(q)) &&
      (depotFilter === 'all' || m.locationId === depotFilter) &&
      (statusFilter === 'all' || m.status === statusFilter)
    );
  }, [gymMembers, search, depotFilter, statusFilter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const stats = useMemo(() => {
    const byDepot = {};
    gymMembers.forEach(m => {
      byDepot[m.locationId] = (byDepot[m.locationId] || 0) + 1;
    });
    return byDepot;
  }, [gymMembers]);

  const handleFilterChange = (setter) => (e) => { setter(e.target.value); setPage(1); };
  const handleSearch = (e) => { setSearch(e.target.value); setPage(1); };

  const daysLeftColor = (days) => {
    if (days < 30) return 'text-red-600';
    if (days < 60) return 'text-amber-600';
    return 'text-green-700';
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <Dumbbell size={22} className="text-[#8CC63F]" /> Gym Members
          </h2>
          <p className="text-sm text-[#64748B] mt-0.5">
            {gymMembers.length.toLocaleString()} total members across all depots
          </p>
        </div>
      </div>

      {/* Depot filter cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {Object.entries(DEPOT_LABELS).map(([id, label]) => (
          <button
            key={id}
            onClick={() => { setDepotFilter(depotFilter === id ? 'all' : id); setPage(1); }}
            className={`p-3 rounded-xl border text-left transition-all duration-200 ${
              depotFilter === id
                ? 'border-[#8CC63F] bg-[#F0F9E8] shadow-sm'
                : 'bg-white border-[#E2E8F0] hover:border-[#8CC63F]/50 shadow-[0_1px_3px_rgba(0,0,0,0.07)]'
            }`}
          >
            <div className={`text-xl font-bold leading-none ${depotFilter === id ? 'text-[#6BA32D]' : 'text-[#0F172A]'}`}>
              {(stats[id] || 0).toLocaleString()}
            </div>
            <div className={`text-xs leading-tight mt-1 ${depotFilter === id ? 'text-[#6BA32D]' : 'text-[#64748B]'}`}>
              {label}
            </div>
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
            onChange={handleSearch}
            placeholder="Search name, employee ID or department…"
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition-all duration-200 text-[#0F172A] placeholder-[#94A3B8]"
          />
        </div>
        <select
          value={depotFilter}
          onChange={handleFilterChange(setDepotFilter)}
          className="border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F] text-[#0F172A] bg-white transition-all duration-200"
        >
          <option value="all">All Depots</option>
          {depots.map(d => <option key={d} value={d}>{DEPOT_LABELS[d] || d}</option>)}
        </select>
        <select
          value={statusFilter}
          onChange={handleFilterChange(setStatusFilter)}
          className="border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F] text-[#0F172A] bg-white transition-all duration-200"
        >
          <option value="all">All Statuses</option>
          <option value="Not Expired">Active</option>
          <option value="Expired">Expired</option>
        </select>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#64748B]">
          {filtered.length.toLocaleString()} result{filtered.length !== 1 ? 's' : ''}
        </p>
        {totalPages > 1 && (
          <div className="flex items-center gap-2 text-sm">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="p-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft size={16} className="text-[#64748B]" />
            </button>
            <span className="text-[#64748B] px-2">{page} / {totalPages}</span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(p => p + 1)}
              className="p-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 transition-colors"
            >
              <ChevronRight size={16} className="text-[#64748B]" />
            </button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">#</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden md:table-cell">Emp No.</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden lg:table-cell">Nationality</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden sm:table-cell">Department</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">Depot</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden xl:table-cell">
                  <span className="flex items-center gap-1"><Calendar size={12} /> Subscribed</span>
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden xl:table-cell">
                  <span className="flex items-center gap-1"><Clock size={12} /> Expires</span>
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden lg:table-cell">Days Left</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9]">
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={10} className="text-center py-16 text-sm text-[#94A3B8]">
                    No members found.
                  </td>
                </tr>
              ) : paginated.map((m, i) => (
                <tr key={m.id} className="hover:bg-[#F8FAFC] transition-colors duration-150">
                  <td className="px-4 py-3 text-xs text-[#94A3B8]">{(page - 1) * PAGE_SIZE + i + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#F0F9E8] flex items-center justify-center text-[#6BA32D] text-xs font-bold shrink-0">
                        {m.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-sm font-semibold text-[#0F172A]">{m.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#64748B] hidden md:table-cell">{m.empNo}</td>
                  <td className="px-4 py-3 text-sm text-[#64748B] hidden lg:table-cell">{m.nationality}</td>
                  <td className="px-4 py-3 text-sm text-[#64748B] hidden sm:table-cell">
                    <span className="truncate block max-w-[160px]">{m.department}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#64748B]">{DEPOT_LABELS[m.locationId] || m.depot}</td>
                  <td className="px-4 py-3 text-sm text-[#94A3B8] hidden xl:table-cell">{m.subscriptionDate || '—'}</td>
                  <td className="px-4 py-3 text-sm text-[#94A3B8] hidden xl:table-cell">{m.expiryDate || '—'}</td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    <span className={`text-sm font-semibold ${daysLeftColor(m.daysLeft)}`}>
                      {m.daysLeft > 0 ? m.daysLeft : '—'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      m.status === 'Not Expired'
                        ? 'bg-[#F0F9E8] text-[#6BA32D]'
                        : 'bg-red-50 text-red-600'
                    }`}>
                      {m.status === 'Not Expired' ? 'Active' : m.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination bottom */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 text-sm">
          <button
            disabled={page === 1}
            onClick={() => setPage(1)}
            className="px-3 py-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 text-[#64748B] transition-colors"
          >«</button>
          <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="px-3 py-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 text-[#64748B] transition-colors"
          >‹ Prev</button>
          <span className="px-4 py-1.5 text-[#64748B]">Page {page} of {totalPages}</span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
            className="px-3 py-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 text-[#64748B] transition-colors"
          >Next ›</button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(totalPages)}
            className="px-3 py-1.5 rounded-xl border border-[#E2E8F0] disabled:opacity-40 hover:bg-slate-50 text-[#64748B] transition-colors"
          >»</button>
        </div>
      )}
    </div>
  );
}
