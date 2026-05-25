import { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Home, Search, MapPin } from 'lucide-react';

const STATUS_COLOR = {
  Occupied: 'bg-green-100 text-green-700',
  'Occupied Room 1': 'bg-blue-100 text-blue-700',
  'Occupied Room 2': 'bg-indigo-100 text-indigo-700',
  'Bed Space Room 1': 'bg-amber-100 text-amber-700',
  'Bed Space Room 2': 'bg-orange-100 text-orange-700',
  Shop: 'bg-purple-100 text-purple-700',
  Office: 'bg-gray-100 text-gray-700',
};

export default function FamilyAccoPage() {
  const { familyUnits } = useApp();
  const [search, setSearch] = useState('');
  const [locFilter, setLocFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const locations = useMemo(() => [...new Set(familyUnits.map(u => u.location))].filter(Boolean).sort(), [familyUnits]);
  const statuses = useMemo(() => [...new Set(familyUnits.map(u => u.status))].filter(Boolean).sort(), [familyUnits]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return familyUnits.filter(u =>
      (!q || u.unit.toLowerCase().includes(u) || (u.occupant||'').toLowerCase().includes(q) || (u.jobTitle||'').toLowerCase().includes(q)) &&
      (locFilter === 'all' || u.location === locFilter) &&
      (statusFilter === 'all' || u.status === statusFilter)
    );
  }, [familyUnits, search, locFilter, statusFilter]);

  const counts = useMemo(() => {
    const c = { Occupied: 0, Vacant: 0 };
    familyUnits.forEach(u => {
      if ((u.status || '').toLowerCase().includes('occupied') || (u.status || '').toLowerCase().includes('bed space')) c.Occupied++;
      else c.Vacant++;
    });
    return c;
  }, [familyUnits]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Home size={22} className="text-[#8CC63F]" /> Family Accommodation
        </h2>
        <p className="text-sm text-gray-500">{familyUnits.length} units across Al Thumama, Al Saad, and Mansoura Tower</p>
      </div>

      {/* Summary chips */}
      <div className="flex gap-3 flex-wrap">
        {Object.entries(counts).map(([label, count]) => (
          <div key={label} className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-4 py-2">
            <span className={`w-2.5 h-2.5 rounded-full ${label === 'Occupied' ? 'bg-[#8CC63F]' : 'bg-gray-300'}`} />
            <span className="text-sm font-medium text-gray-700">{label}</span>
            <span className="text-sm font-bold text-gray-900">{count}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-4 py-2">
          <span className="text-sm font-medium text-gray-700">Total Revenue</span>
          <span className="text-sm font-bold text-[#8CC63F]">
            QAR {familyUnits.filter(u=>u.rent>0).reduce((s,u)=>s+Number(u.rent),0).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search unit or occupant…"
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CC63F]" />
        </div>
        <select value={locFilter} onChange={e => setLocFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]">
          <option value="all">All Locations</option>
          {locations.map(l => <option key={l}>{l}</option>)}
        </select>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]">
          <option value="all">All Statuses</option>
          {statuses.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.length === 0
          ? <div className="col-span-4 text-center py-16 text-sm text-gray-400">No units found.</div>
          : filtered.map(u => (
          <div key={u.id} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-bold text-gray-800">{u.unit}</div>
                <div className="flex items-center text-xs text-gray-400 mt-0.5 gap-1">
                  <MapPin size={11} /> {u.location}
                </div>
              </div>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_COLOR[u.status] || 'bg-gray-100 text-gray-600'}`}>
                {u.status || 'Unknown'}
              </span>
            </div>

            {u.occupant && (
              <div className="space-y-1.5 text-sm">
                <div className="font-medium text-gray-700">{u.occupant}</div>
                {u.jobTitle && <div className="text-xs text-gray-500">{u.jobTitle}</div>}
                {u.department && <div className="text-xs text-gray-400">{u.department}</div>}
                {u.nationality && <div className="text-xs text-gray-400">{u.nationality}</div>}
              </div>
            )}

            <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs">
              {u.allocationDate && (
                <div>
                  <span className="text-gray-400">Allocated</span>
                  <div className="font-medium text-gray-700">{u.allocationDate}</div>
                </div>
              )}
              {u.rent > 0 && (
                <div className="text-right">
                  <span className="text-gray-400">Monthly Rent</span>
                  <div className="font-bold text-[#8CC63F]">QAR {Number(u.rent).toLocaleString()}</div>
                </div>
              )}
            </div>

            {u.remarks && (
              <div className="mt-2 text-xs text-gray-400 italic line-clamp-2">{u.remarks}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
