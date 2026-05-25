import { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Search, Dumbbell, Calendar, Clock, Users } from 'lucide-react';

const DEPOT_LABELS = {
  'KARWA-CITY': 'Karwa City',
  MSD: 'Mesaimeer (MSD)',
  AKD: 'Al Khor (AKD)',
  ARD: 'Al Rayyan (ARD)',
  IND: 'Industrial Area',
  LUD: 'Lusail (LUD)',
  WAD: 'Wadi Aba Saleel (WAD)',
};

const STATUS_COLOR = {
  'Not Expired': 'bg-green-100 text-green-700',
  Expired: 'bg-red-100 text-red-700',
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

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Dumbbell size={22} className="text-[#8CC63F]" /> Gym Subscriptions
          </h2>
          <p className="text-sm text-gray-500">{gymMembers.length.toLocaleString()} total members across all depots</p>
        </div>
      </div>

      {/* Depot stats cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {Object.entries(DEPOT_LABELS).map(([id, label]) => (
          <button key={id}
            onClick={() => { setDepotFilter(depotFilter === id ? 'all' : id); setPage(1); }}
            className={`p-3 rounded-xl border text-left transition-all ${
              depotFilter === id ? 'border-[#8CC63F] bg-[#8CC63F]/10' : 'bg-white border-gray-200 hover:border-[#8CC63F]/50'
            }`}>
            <div className="text-xl font-bold text-gray-800">{(stats[id] || 0).toLocaleString()}</div>
            <div className="text-xs text-gray-500 leading-tight mt-0.5">{label}</div>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" value={search} onChange={handleSearch}
            placeholder="Search name, employee ID or department…"
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CC63F]" />
        </div>
        <select value={depotFilter} onChange={handleFilterChange(setDepotFilter)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]">
          <option value="all">All Depots</option>
          {depots.map(d => <option key={d} value={d}>{DEPOT_LABELS[d] || d}</option>)}
        </select>
        <select value={statusFilter} onChange={handleFilterChange(setStatusFilter)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]">
          <option value="all">All Statuses</option>
          <option value="Not Expired">Active</option>
          <option value="Expired">Expired</option>
        </select>
      </div>

      {/* Results count + pagination top */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{filtered.length.toLocaleString()} result{filtered.length !== 1 ? 's' : ''}</p>
        {totalPages > 1 && (
          <div className="flex items-center gap-2 text-sm">
            <button disabled={page === 1} onClick={() => setPage(p => p - 1)}
              className="px-3 py-1 rounded border border-gray-200 disabled:opacity-40 hover:bg-gray-50">←</button>
            <span className="text-gray-600">{page} / {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}
              className="px-3 py-1 rounded border border-gray-200 disabled:opacity-40 hover:bg-gray-50">→</button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">Emp No.</th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">Nationality</th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">Department</th>
                <th className="px-4 py-3 text-left">Depot</th>
                <th className="px-4 py-3 text-left hidden xl:table-cell">
                  <span className="flex items-center gap-1"><Calendar size={12} /> Subscribed</span>
                </th>
                <th className="px-4 py-3 text-left hidden xl:table-cell">
                  <span className="flex items-center gap-1"><Clock size={12} /> Expires</span>
                </th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">Days Left</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginated.length === 0 ? (
                <tr><td colSpan={10} className="text-center py-12 text-sm text-gray-400">No members found.</td></tr>
              ) : paginated.map((m, i) => (
                <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-xs text-gray-400">{(page - 1) * PAGE_SIZE + i + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#8CC63F]/20 flex items-center justify-center text-[#558B2F] text-xs font-bold shrink-0">
                        {m.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{m.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">{m.empNo}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 hidden lg:table-cell">{m.nationality}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">
                    <span className="truncate block max-w-[160px]">{m.department}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{DEPOT_LABELS[m.locationId] || m.depot}</td>
                  <td className="px-4 py-3 text-sm text-gray-500 hidden xl:table-cell">{m.subscriptionDate || '—'}</td>
                  <td className="px-4 py-3 text-sm text-gray-500 hidden xl:table-cell">{m.expiryDate || '—'}</td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    <span className={`text-sm font-semibold ${m.daysLeft < 30 ? 'text-red-600' : m.daysLeft < 60 ? 'text-amber-600' : 'text-green-700'}`}>
                      {m.daysLeft > 0 ? m.daysLeft : '—'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${STATUS_COLOR[m.status] || 'bg-gray-100 text-gray-600'}`}>
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
          <button disabled={page === 1} onClick={() => setPage(1)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50">«</button>
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50">‹ Prev</button>
          <span className="px-4 py-1.5 text-gray-600">Page {page} of {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50">Next ›</button>
          <button disabled={page === totalPages} onClick={() => setPage(totalPages)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50">»</button>
        </div>
      )}
    </div>
  );
}
