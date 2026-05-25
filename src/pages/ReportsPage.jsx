import { useApp } from '../context/AppContext';
import { Printer, TrendingUp, TrendingDown, Minus } from 'lucide-react';

function pct(occ, cap) {
  return cap ? Math.round((occ / cap) * 100) : null;
}

function OccBar({ value }) {
  if (value === null) return <span className="text-gray-400 text-xs">N/A</span>;
  const color = value >= 95 ? 'bg-red-500' : value >= 80 ? 'bg-amber-400' : 'bg-[#8CC63F]';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-200 h-2 rounded-full w-20">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs font-semibold text-gray-700 w-8 text-right">{value}%</span>
    </div>
  );
}

function TrendIcon({ value }) {
  if (value >= 95) return <TrendingUp size={14} className="text-red-500" />;
  if (value >= 80) return <TrendingUp size={14} className="text-amber-500" />;
  return <Minus size={14} className="text-green-500" />;
}

export default function ReportsPage() {
  const { locations, tenants, maintenance } = useApp();

  const staffLocs   = locations.filter(l => l.category.includes('Staff'));
  const adminLocs   = locations.filter(l => l.category.includes('Admin'));
  const totalCap    = staffLocs.reduce((s, l) => s + (l.capacity || 0), 0);
  const totalOcc    = staffLocs.reduce((s, l) => s + (l.occupancy || 0), 0);
  const totalAvail  = totalCap - totalOcc;
  const avgUtil     = totalCap ? Math.round((totalOcc / totalCap) * 100) : 0;
  const adminUnits  = adminLocs.reduce((s, l) => s + (l.totalUnits || 0), 0);

  const maintenanceSummary = (locId) => ({
    total:      maintenance.filter(m => m.locationId === locId).length,
    open:       maintenance.filter(m => m.locationId === locId && m.status === 'Open').length,
    inProgress: maintenance.filter(m => m.locationId === locId && m.status === 'In Progress').length,
    resolved:   maintenance.filter(m => m.locationId === locId && m.status === 'Resolved').length,
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Reports</h2>
          <p className="text-sm text-gray-500">Accommodation summary as of {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 border border-gray-300 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Printer size={16} /> Print Report
        </button>
      </div>

      {/* Executive summary */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: 'Staff Locations',   value: staffLocs.length,            sub: '' },
          { label: 'Total Capacity',    value: totalCap.toLocaleString(),   sub: 'beds' },
          { label: 'Occupied',          value: totalOcc.toLocaleString(),   sub: `${avgUtil}% avg` },
          { label: 'Available',         value: totalAvail.toLocaleString(), sub: 'beds free' },
          { label: 'Admin Units',       value: adminUnits,                  sub: 'units total' },
        ].map(({ label, value, sub }) => (
          <div key={label} className="bg-white rounded-xl shadow-sm p-4 text-center">
            <div className="text-2xl font-bold text-[#8CC63F]">{value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{label}</div>
            {sub && <div className="text-xs text-gray-400">{sub}</div>}
          </div>
        ))}
      </div>

      {/* Staff occupancy table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden print:shadow-none">
        <div className="px-4 py-4 border-b">
          <h3 className="font-bold text-gray-800">Staff Accommodation Occupancy</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">Address</th>
                <th className="px-4 py-3 text-right">Capacity</th>
                <th className="px-4 py-3 text-right">Occupied</th>
                <th className="px-4 py-3 text-right">Available</th>
                <th className="px-4 py-3">Utilisation</th>
                <th className="px-4 py-3 text-right hidden md:table-cell">Tenants</th>
                <th className="px-4 py-3 text-right hidden md:table-cell">Open Issues</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {staffLocs.map(loc => {
                const p = pct(loc.occupancy, loc.capacity);
                const avail = loc.capacity - loc.occupancy;
                const maint = maintenanceSummary(loc.id);
                const tenantCount = tenants.filter(t => t.locationId === loc.id).length;
                return (
                  <tr key={loc.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-sm text-gray-800">{loc.name}</div>
                      <div className="text-xs text-gray-400">{loc.manager}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">{loc.location}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 text-right font-medium">{loc.capacity.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 text-right">{loc.occupancy.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-right">
                      <span className={avail < 100 ? 'text-red-600 font-semibold' : 'text-green-700'}>
                        {avail.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <OccBar value={p} />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 text-right hidden md:table-cell">{tenantCount}</td>
                    <td className="px-4 py-3 text-right hidden md:table-cell">
                      <span className={`text-sm font-semibold ${maint.open > 0 ? 'text-red-600' : 'text-gray-400'}`}>
                        {maint.open}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-[#8CC63F]/10 font-semibold">
              <tr>
                <td className="px-4 py-3 text-sm text-gray-800">TOTAL</td>
                <td className="hidden sm:table-cell" />
                <td className="px-4 py-3 text-sm text-gray-800 text-right">{totalCap.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-gray-800 text-right">{totalOcc.toLocaleString()}</td>
                <td className="px-4 py-3 text-sm text-right">
                  <span className={totalAvail < 500 ? 'text-red-600' : 'text-green-700'}>{totalAvail.toLocaleString()}</span>
                </td>
                <td className="px-4 py-3">
                  <OccBar value={avgUtil} />
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 text-right hidden md:table-cell">
                  {tenants.length}
                </td>
                <td className="px-4 py-3 text-right hidden md:table-cell">
                  <span className="text-sm font-semibold text-red-600">
                    {maintenance.filter(m => m.status === 'Open').length}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Admin accommodation */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-4 py-4 border-b">
          <h3 className="font-bold text-gray-800">Admin Accommodation</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">Address</th>
                <th className="px-4 py-3 text-right">Units</th>
                <th className="px-4 py-3 text-right hidden md:table-cell">Open Issues</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {adminLocs.map(loc => {
                const maint = maintenanceSummary(loc.id);
                return (
                  <tr key={loc.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{loc.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{loc.type}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">{loc.location}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 text-right font-medium">{loc.totalUnits}</td>
                    <td className="px-4 py-3 text-right hidden md:table-cell">
                      <span className={`text-sm font-semibold ${maint.open > 0 ? 'text-red-600' : 'text-gray-400'}`}>
                        {maint.open}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Maintenance breakdown */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-4 py-4 border-b">
          <h3 className="font-bold text-gray-800">Maintenance Request Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-right">Total</th>
                <th className="px-4 py-3 text-right">Open</th>
                <th className="px-4 py-3 text-right">In Progress</th>
                <th className="px-4 py-3 text-right">Resolved</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {locations.map(loc => {
                const m = maintenanceSummary(loc.id);
                if (m.total === 0) return null;
                return (
                  <tr key={loc.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{loc.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 text-right font-semibold">{m.total}</td>
                    <td className="px-4 py-3 text-right">
                      <span className={`text-sm font-semibold ${m.open > 0 ? 'text-red-600' : 'text-gray-400'}`}>{m.open}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={`text-sm font-semibold ${m.inProgress > 0 ? 'text-amber-600' : 'text-gray-400'}`}>{m.inProgress}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="text-sm font-semibold text-green-600">{m.resolved}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
