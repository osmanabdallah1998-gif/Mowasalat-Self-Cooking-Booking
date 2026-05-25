import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Users, Building2, Wrench, TrendingUp, AlertTriangle, ChevronRight } from 'lucide-react';

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

function StatCard({ label, value, sub, icon: Icon, accent }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 border border-gray-100">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${accent}`}>
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-800">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
        {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}

function OccupancyRow({ loc, onClick }) {
  if (!loc.capacity) return null;
  const pct = Math.round((loc.occupancy / loc.capacity) * 100);
  const barColor = pct >= 95 ? 'bg-red-500' : pct >= 80 ? 'bg-amber-400' : 'bg-[#8CC63F]';
  const pctColor = pct >= 95 ? 'bg-red-100 text-red-700' : pct >= 80 ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700';

  return (
    <tr className="hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => onClick(loc.id)}>
      <td className="px-4 py-3 text-sm font-medium text-gray-800">{loc.name}</td>
      <td className="px-4 py-3 text-sm text-gray-500 hidden sm:table-cell">{loc.location}</td>
      <td className="px-4 py-3 text-sm text-right text-gray-700">
        {loc.occupancy.toLocaleString()} / {loc.capacity.toLocaleString()}
      </td>
      <td className="px-4 py-3 w-36 hidden md:table-cell">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div className={`${barColor} h-2 rounded-full`} style={{ width: `${pct}%` }} />
        </div>
      </td>
      <td className="px-4 py-3 text-right">
        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${pctColor}`}>{pct}%</span>
      </td>
    </tr>
  );
}

export default function DashboardPage() {
  const { locations, tenants, maintenance } = useApp();
  const navigate = useNavigate();

  const staffLocs = locations.filter(l => l.category.includes('Staff'));
  const totalCap  = staffLocs.reduce((s, l) => s + (l.capacity || 0), 0);
  const totalOcc  = staffLocs.reduce((s, l) => s + (l.occupancy || 0), 0);
  const available = totalCap - totalOcc;
  const openCount = maintenance.filter(m => m.status === 'Open').length;
  const recent    = [...maintenance].sort((a, b) => b.reportedDate.localeCompare(a.reportedDate)).slice(0, 5);
  const critical  = staffLocs.filter(l => l.capacity && (l.occupancy / l.capacity) >= 0.95);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
        <p className="text-sm text-gray-500">Accommodation overview at a glance</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Capacity"    value={totalCap.toLocaleString()}  sub="Staff beds"          icon={Building2}  accent="bg-gray-700" />
        <StatCard label="Occupied"          value={totalOcc.toLocaleString()}  sub={`${Math.round((totalOcc/totalCap)*100)}% utilisation`} icon={Users} accent="bg-[#8CC63F]" />
        <StatCard label="Available Beds"    value={available.toLocaleString()} sub="Across all depots"   icon={TrendingUp}  accent="bg-gray-500" />
        <StatCard label="Open Maintenance"  value={openCount}                  sub="Requests pending"    icon={Wrench}      accent="bg-red-500" />
      </div>

      {critical.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-start gap-3">
          <AlertTriangle size={18} className="text-red-500 mt-0.5 shrink-0" />
          <p className="text-sm text-red-700">
            <span className="font-semibold">High-occupancy alert: </span>
            {critical.map(l => l.name).join(', ')} {critical.length === 1 ? 'is' : 'are'} at ≥ 95% capacity.
          </p>
        </div>
      )}

      {/* Occupancy table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-800">Occupancy by Location</h3>
          <button onClick={() => navigate('/locations')} className="text-sm text-[#558B2F] hover:underline flex items-center gap-1 font-medium">
            View all <ChevronRight size={14} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">Location</th>
                <th className="px-4 py-3 text-right">Occupancy</th>
                <th className="px-4 py-3 hidden md:table-cell">Bar</th>
                <th className="px-4 py-3 text-right">%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {staffLocs.map(loc => (
                <OccupancyRow key={loc.id} loc={loc} onClick={id => navigate(`/locations/${id}`)} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent maintenance */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-800">Recent Maintenance Requests</h3>
          <button onClick={() => navigate('/maintenance')} className="text-sm text-[#558B2F] hover:underline flex items-center gap-1 font-medium">
            View all <ChevronRight size={14} />
          </button>
        </div>
        <div className="divide-y divide-gray-100">
          {recent.map(req => {
            const loc = locations.find(l => l.id === req.locationId);
            return (
              <div key={req.id} className="px-4 py-3 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800 truncate">{req.title}</div>
                  <div className="text-xs text-gray-500">{loc?.name} · {req.reportedDate}</div>
                </div>
                <span className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold ${PRIORITY_COLOR[req.priority]}`}>{req.priority}</span>
                <span className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold ${STATUS_COLOR[req.status]}`}>{req.status}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
