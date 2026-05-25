import { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { LOCATIONS, OCCUPANCY_SUMMARY } from '../data/initialData';
import { Building2, Home, Search, MapPin, BedDouble, Users } from 'lucide-react';

function pct(occ, cap) { return cap ? Math.round((occ / cap) * 100) : 0; }

function UtilBar({ value }) {
  const color = value >= 95 ? 'bg-red-500' : value >= 80 ? 'bg-amber-400' : 'bg-[#8CC63F]';
  const textColor = value >= 95 ? 'text-red-700' : value >= 80 ? 'text-amber-700' : 'text-green-700';
  const bg = value >= 95 ? 'bg-red-50' : value >= 80 ? 'bg-amber-50' : 'bg-green-50';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div className={`${color} h-2 rounded-full transition-all`} style={{ width: `${Math.min(value, 100)}%` }} />
      </div>
      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${bg} ${textColor} w-10 text-center`}>{value}%</span>
    </div>
  );
}

export default function HousingPage() {
  const { tenants, familyUnits } = useApp();
  const [tab, setTab] = useState('staff');
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('occupancy');
  const [sortDir, setSortDir] = useState('desc');

  const staffLocs = LOCATIONS.filter(l => l.category.includes('Staff'));
  const adminLocs = LOCATIONS.filter(l => l.category.includes('Admin'));

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('desc'); }
  };

  const SortArrow = ({ k }) => (
    <span className="ml-1 opacity-60">{sortKey === k ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}</span>
  );

  const filteredStaff = useMemo(() => {
    const q = search.toLowerCase();
    let rows = staffLocs.map(l => ({
      ...l,
      tenantCount: tenants.filter(t => t.locationId === l.id).length,
      util: pct(l.occupancy, l.capacity),
      available: (l.capacity || 0) - (l.occupancy || 0),
    })).filter(l => !q || l.name.toLowerCase().includes(q) || l.location.toLowerCase().includes(q));

    rows.sort((a, b) => {
      const v = { name: (a.name > b.name ? 1 : -1), capacity: a.capacity - b.capacity, occupancy: a.occupancy - b.occupancy, util: a.util - b.util, available: a.available - b.available };
      return sortDir === 'asc' ? (v[sortKey] || 0) : -(v[sortKey] || 0);
    });
    return rows;
  }, [staffLocs, tenants, search, sortKey, sortDir]);

  const totalCap = staffLocs.reduce((s, l) => s + (l.capacity || 0), 0);
  const totalOcc = staffLocs.reduce((s, l) => s + (l.occupancy || 0), 0);
  const totalAvail = totalCap - totalOcc;

  // Family acco grouped
  const famByLoc = useMemo(() => {
    const g = {};
    familyUnits.forEach(u => {
      if (!g[u.location]) g[u.location] = { occupied: 0, vacant: 0, total: 0, units: [] };
      g[u.location].total++;
      g[u.location].units.push(u);
      const isOcc = (u.status || '').toLowerCase().includes('occupied') || (u.status || '').toLowerCase().includes('bed space') || (u.status || '').toLowerCase().includes('shop') || (u.status || '').toLowerCase().includes('office');
      if (isOcc) g[u.location].occupied++; else g[u.location].vacant++;
    });
    return g;
  }, [familyUnits]);

  const thCls = 'px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-pointer hover:text-gray-800 select-none';

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Building2 size={22} className="text-[#8CC63F]" /> Housing Information
        </h2>
        <p className="text-sm text-gray-500">Full accommodation status across all Mowasalat locations</p>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Beds',   value: totalCap.toLocaleString(),          icon: BedDouble, color: 'bg-gray-700' },
          { label: 'Occupied',     value: totalOcc.toLocaleString(),           icon: Users,     color: 'bg-[#8CC63F]' },
          { label: 'Available',    value: totalAvail.toLocaleString(),         icon: BedDouble, color: 'bg-indigo-500' },
          { label: 'Utilisation',  value: `${pct(totalOcc, totalCap)}%`,       icon: Building2, color: 'bg-amber-500' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`}>
              <Icon size={18} className="text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">{value}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tab switcher */}
      <div className="flex bg-white rounded-xl border border-gray-200 p-1 w-fit">
        {[['staff', 'Staff Depots (13)'], ['admin', 'Admin / Family (3)']].map(([k, label]) => (
          <button key={k} onClick={() => setTab(k)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${tab === k ? 'bg-[#8CC63F] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
            {label}
          </button>
        ))}
      </div>

      {tab === 'staff' && (
        <>
          {/* Search */}
          <div className="bg-white rounded-xl border border-gray-200 p-3 flex gap-3">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search depot or location…"
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CC63F]" />
            </div>
          </div>

          {/* Staff depots table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className={thCls} onClick={() => toggleSort('name')}>Depot <SortArrow k="name" /></th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase hidden sm:table-cell">Location</th>
                    <th className={thCls} onClick={() => toggleSort('capacity')}>Capacity <SortArrow k="capacity" /></th>
                    <th className={thCls} onClick={() => toggleSort('occupancy')}>Occupied <SortArrow k="occupancy" /></th>
                    <th className={thCls} onClick={() => toggleSort('available')}>Available <SortArrow k="available" /></th>
                    <th className={`${thCls} hidden md:table-cell`} onClick={() => toggleSort('util')}>Utilisation <SortArrow k="util" /></th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase hidden lg:table-cell">Blocks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredStaff.map(l => (
                    <tr key={l.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-semibold text-sm text-gray-800">{l.name}</div>
                        <div className="text-xs text-gray-400 sm:hidden flex items-center gap-1 mt-0.5"><MapPin size={10}/>{l.location}</div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500 hidden sm:table-cell">
                        <span className="flex items-center gap-1"><MapPin size={12}/>{l.location}</span>
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-800">{(l.capacity||0).toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-800">{l.occupancy.toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <span className={`text-sm font-semibold ${l.available < 200 ? 'text-red-600' : 'text-green-700'}`}>
                          {l.available.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell w-44">
                        <UtilBar value={l.util} />
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {(l.blocks || []).slice(0, 4).map(b => (
                            <span key={b} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{b}</span>
                          ))}
                          {(l.blocks || []).length > 4 && <span className="text-xs text-gray-400">+{l.blocks.length - 4}</span>}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-[#8CC63F]/10 border-t border-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-sm font-bold text-gray-800" colSpan={2}>TOTAL ({filteredStaff.length} depots)</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-800">{filteredStaff.reduce((s,l)=>s+(l.capacity||0),0).toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-800">{filteredStaff.reduce((s,l)=>s+l.occupancy,0).toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-700">{filteredStaff.reduce((s,l)=>s+l.available,0).toLocaleString()}</td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <UtilBar value={pct(filteredStaff.reduce((s,l)=>s+l.occupancy,0), filteredStaff.reduce((s,l)=>s+(l.capacity||0),0))} />
                    </td>
                    <td className="hidden lg:table-cell" />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </>
      )}

      {tab === 'admin' && (
        <div className="space-y-6">
          {/* Admin locations summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {adminLocs.map(l => (
              <div key={l.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8CC63F]/15 flex items-center justify-center shrink-0">
                    <Home size={18} className="text-[#558B2F]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{l.name}</div>
                    <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5"><MapPin size={10}/>{l.location}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-gray-50 rounded-xl p-2">
                    <div className="text-lg font-bold text-gray-800">{l.totalUnits}</div>
                    <div className="text-xs text-gray-400">Total Units</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-2">
                    <div className="text-lg font-bold text-green-700">{famByLoc[l.name === 'Al Thumama Villas' ? 'Al Thumama' : l.name === 'Al Saad Accommodation' ? 'Al Saad' : 'Mansoura Tower']?.occupied || 0}</div>
                    <div className="text-xs text-gray-400">Occupied</div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500 text-center">{l.type}</div>
              </div>
            ))}
          </div>

          {/* Family units detail */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-800">Family Accommodation Units</h3>
              <p className="text-xs text-gray-400 mt-0.5">{familyUnits.length} units · Al Thumama, Al Saad, Mansoura Tower</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 text-xs text-gray-500 uppercase border-b border-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Unit</th>
                    <th className="px-4 py-3 text-left hidden sm:table-cell">Location</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left hidden md:table-cell">Occupant</th>
                    <th className="px-4 py-3 text-left hidden lg:table-cell">Job Title</th>
                    <th className="px-4 py-3 text-right hidden xl:table-cell">Rent (QAR)</th>
                    <th className="px-4 py-3 text-left hidden xl:table-cell">Allocated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {familyUnits.map(u => {
                    const isOcc = (u.status||'').toLowerCase().includes('occupied');
                    return (
                      <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-2.5 text-sm font-medium text-gray-800">{u.unit}</td>
                        <td className="px-4 py-2.5 text-sm text-gray-600 hidden sm:table-cell">{u.location}</td>
                        <td className="px-4 py-2.5">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${isOcc ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                            {u.status || '—'}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-sm text-gray-700 hidden md:table-cell">{u.occupant || '—'}</td>
                        <td className="px-4 py-2.5 text-sm text-gray-500 hidden lg:table-cell">{u.jobTitle || '—'}</td>
                        <td className="px-4 py-2.5 text-sm font-medium text-right hidden xl:table-cell">
                          {u.rent ? Number(u.rent).toLocaleString() : '—'}
                        </td>
                        <td className="px-4 py-2.5 text-sm text-gray-500 hidden xl:table-cell">{u.allocationDate || '—'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
