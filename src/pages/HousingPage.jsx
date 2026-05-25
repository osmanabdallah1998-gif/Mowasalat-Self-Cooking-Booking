import { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { LOCATIONS, OCCUPANCY_SUMMARY } from '../data/initialData';
import { Building2, Home, Search, MapPin, BedDouble, Users } from 'lucide-react';

function pct(occ, cap) { return cap ? Math.round((occ / cap) * 100) : 0; }

function UtilBar({ value }) {
  const barColor = value >= 95 ? 'bg-red-500' : value >= 80 ? 'bg-amber-400' : 'bg-[#8CC63F]';
  const textColor = value >= 95 ? 'text-red-600 bg-red-50' : value >= 80 ? 'text-amber-600 bg-amber-50' : 'text-[#6BA32D] bg-[#F0F9E8]';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-[#F1F5F9] rounded-full h-2">
        <div className={`${barColor} h-2 rounded-full transition-all`} style={{ width: `${Math.min(value, 100)}%` }} />
      </div>
      <span className={`text-xs font-bold px-1.5 py-0.5 rounded-lg w-10 text-center ${textColor}`}>{value}%</span>
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
    <span className="ml-1 text-[#94A3B8]">
      {sortKey === k ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
    </span>
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
      const v = {
        name: (a.name > b.name ? 1 : -1),
        capacity: a.capacity - b.capacity,
        occupancy: a.occupancy - b.occupancy,
        util: a.util - b.util,
        available: a.available - b.available,
      };
      return sortDir === 'asc' ? (v[sortKey] || 0) : -(v[sortKey] || 0);
    });
    return rows;
  }, [staffLocs, tenants, search, sortKey, sortDir]);

  const totalCap   = staffLocs.reduce((s, l) => s + (l.capacity || 0), 0);
  const totalOcc   = staffLocs.reduce((s, l) => s + (l.occupancy || 0), 0);
  const totalAvail = totalCap - totalOcc;

  // Family accommodation grouped by location
  const famByLoc = useMemo(() => {
    const g = {};
    familyUnits.forEach(u => {
      if (!g[u.location]) g[u.location] = { occupied: 0, vacant: 0, total: 0, units: [] };
      g[u.location].total++;
      g[u.location].units.push(u);
      const isOcc = (u.status || '').toLowerCase().includes('occupied') ||
                    (u.status || '').toLowerCase().includes('bed space') ||
                    (u.status || '').toLowerCase().includes('shop') ||
                    (u.status || '').toLowerCase().includes('office');
      if (isOcc) g[u.location].occupied++; else g[u.location].vacant++;
    });
    return g;
  }, [familyUnits]);

  const thCls = 'px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] cursor-pointer hover:text-[#0F172A] select-none transition-colors';

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div>
        <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
          <Building2 size={22} className="text-[#8CC63F]" /> Housing Information
        </h2>
        <p className="text-sm text-[#64748B] mt-0.5">
          Full accommodation status across all Mowasalat locations
        </p>
      </div>

      {/* KPI summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Beds',  value: totalCap.toLocaleString(),          icon: BedDouble,  accent: 'bg-slate-800' },
          { label: 'Occupied',    value: totalOcc.toLocaleString(),           icon: Users,      accent: 'bg-[#8CC63F]' },
          { label: 'Available',   value: totalAvail.toLocaleString(),         icon: BedDouble,  accent: 'bg-indigo-500' },
          { label: 'Utilisation', value: `${pct(totalOcc, totalCap)}%`,       icon: Building2,  accent: 'bg-amber-500' },
        ].map(({ label, value, icon: Icon, accent }) => (
          <div key={label} className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${accent} flex items-center justify-center shrink-0`}>
              <Icon size={18} className="text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-[#0F172A]">{value}</div>
              <div className="text-xs text-[#64748B] mt-0.5">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tab switcher — pill style */}
      <div className="flex bg-[#F1F5F9] rounded-2xl p-1 w-fit gap-1">
        {[['staff', 'Staff Depots (13)'], ['admin', 'Admin / Family (3)']].map(([k, label]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              tab === k
                ? 'bg-[#8CC63F] text-white shadow-sm'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'staff' && (
        <>
          {/* Search */}
          <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07)] p-3">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search depot or location…"
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent text-[#0F172A] placeholder-[#94A3B8] transition-all duration-200"
              />
            </div>
          </div>

          {/* Staff depots table */}
          <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <tr>
                    <th className={thCls} onClick={() => toggleSort('name')}>
                      Depot <SortArrow k="name" />
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden sm:table-cell">
                      Location
                    </th>
                    <th className={thCls} onClick={() => toggleSort('capacity')}>
                      Capacity <SortArrow k="capacity" />
                    </th>
                    <th className={thCls} onClick={() => toggleSort('occupancy')}>
                      Occupied <SortArrow k="occupancy" />
                    </th>
                    <th className={thCls} onClick={() => toggleSort('available')}>
                      Available <SortArrow k="available" />
                    </th>
                    <th className={`${thCls} hidden md:table-cell`} onClick={() => toggleSort('util')}>
                      Utilisation <SortArrow k="util" />
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden lg:table-cell">
                      Blocks
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]">
                  {filteredStaff.map(l => (
                    <tr key={l.id} className="hover:bg-[#F8FAFC] transition-colors duration-150">
                      <td className="px-4 py-3">
                        <div className="font-semibold text-sm text-[#0F172A]">{l.name}</div>
                        <div className="text-xs text-[#94A3B8] sm:hidden flex items-center gap-1 mt-0.5">
                          <MapPin size={10} />{l.location}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#64748B] hidden sm:table-cell">
                        <span className="flex items-center gap-1"><MapPin size={12} className="text-[#94A3B8]" />{l.location}</span>
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-[#0F172A]">{(l.capacity || 0).toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-[#0F172A]">{l.occupancy.toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <span className={`text-sm font-bold ${l.available < 200 ? 'text-red-600' : 'text-[#6BA32D]'}`}>
                          {l.available.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell w-48">
                        <UtilBar value={l.util} />
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {(l.blocks || []).slice(0, 4).map(b => (
                            <span key={b} className="text-xs bg-[#F1F5F9] text-[#64748B] px-2 py-0.5 rounded-lg">{b}</span>
                          ))}
                          {(l.blocks || []).length > 4 && (
                            <span className="text-xs text-[#94A3B8]">+{l.blocks.length - 4}</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-[#F0F9E8] border-t border-[#E2E8F0]">
                  <tr>
                    <td className="px-4 py-3 text-sm font-bold text-[#0F172A]" colSpan={2}>
                      TOTAL ({filteredStaff.length} depots)
                    </td>
                    <td className="px-4 py-3 text-sm font-bold text-[#0F172A]">
                      {filteredStaff.reduce((s, l) => s + (l.capacity || 0), 0).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm font-bold text-[#0F172A]">
                      {filteredStaff.reduce((s, l) => s + l.occupancy, 0).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm font-bold text-[#6BA32D]">
                      {filteredStaff.reduce((s, l) => s + l.available, 0).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <UtilBar value={pct(
                        filteredStaff.reduce((s, l) => s + l.occupancy, 0),
                        filteredStaff.reduce((s, l) => s + (l.capacity || 0), 0)
                      )} />
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
          {/* Admin location cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {adminLocs.map(l => {
              const locKey = l.name === 'Al Thumama Villas' ? 'Al Thumama'
                : l.name === 'Al Saad Accommodation' ? 'Al Saad'
                : 'Mansoura Tower';
              const famData = famByLoc[locKey] || { occupied: 0, vacant: 0, total: 0 };
              return (
                <div key={l.id} className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F9E8] flex items-center justify-center shrink-0">
                      <Home size={18} className="text-[#6BA32D]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0F172A] text-sm">{l.name}</div>
                      <div className="text-xs text-[#94A3B8] flex items-center gap-1 mt-0.5">
                        <MapPin size={10} />{l.location}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-center mb-3">
                    <div className="bg-[#F8FAFC] rounded-xl p-3">
                      <div className="text-lg font-bold text-[#0F172A]">{l.totalUnits}</div>
                      <div className="text-xs text-[#94A3B8] mt-0.5">Total Units</div>
                    </div>
                    <div className="bg-[#F0F9E8] rounded-xl p-3">
                      <div className="text-lg font-bold text-[#6BA32D]">{famData.occupied}</div>
                      <div className="text-xs text-[#94A3B8] mt-0.5">Occupied</div>
                    </div>
                  </div>
                  <div className="text-xs text-[#94A3B8] text-center">{l.type}</div>
                </div>
              );
            })}
          </div>

          {/* Family units detail table */}
          <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E2E8F0]">
              <h3 className="font-bold text-[#0F172A]">Family Accommodation Units</h3>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                {familyUnits.length} units · Al Thumama, Al Saad, Mansoura Tower
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">Unit</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden sm:table-cell">Location</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden md:table-cell">Occupant</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden lg:table-cell">Job Title</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden xl:table-cell">Rent (QAR)</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#94A3B8] hidden xl:table-cell">Allocated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]">
                  {familyUnits.map(u => {
                    const isOcc = (u.status || '').toLowerCase().includes('occupied');
                    return (
                      <tr key={u.id} className="hover:bg-[#F8FAFC] transition-colors duration-150">
                        <td className="px-4 py-2.5 text-sm font-semibold text-[#0F172A]">{u.unit}</td>
                        <td className="px-4 py-2.5 text-sm text-[#64748B] hidden sm:table-cell">{u.location}</td>
                        <td className="px-4 py-2.5">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            isOcc ? 'bg-[#F0F9E8] text-[#6BA32D]' : 'bg-[#F8FAFC] text-[#64748B]'
                          }`}>
                            {u.status || '—'}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-sm text-[#0F172A] hidden md:table-cell">{u.occupant || '—'}</td>
                        <td className="px-4 py-2.5 text-sm text-[#64748B] hidden lg:table-cell">{u.jobTitle || '—'}</td>
                        <td className="px-4 py-2.5 text-sm font-semibold text-right text-[#0F172A] hidden xl:table-cell">
                          {u.rent ? Number(u.rent).toLocaleString() : '—'}
                        </td>
                        <td className="px-4 py-2.5 text-sm text-[#94A3B8] hidden xl:table-cell">{u.allocationDate || '—'}</td>
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
