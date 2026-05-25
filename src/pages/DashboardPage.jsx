import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area,
} from 'recharts';
import {
  OCCUPANCY_SUMMARY, NATIONALITY_STATS, DEPT_STATS,
  FACILITIES_BY_LOC, DISCIPLINE_STATS, GYM_BY_DEPOT, LOCATIONS,
} from '../data/initialData';
import { useApp } from '../context/AppContext';
import { Building2, Users, BedDouble, Activity, Dumbbell, Wrench, Home } from 'lucide-react';

const GREEN  = '#8CC63F';
const GRAY   = '#374151';
const AMBER  = '#F59E0B';
const RED    = '#EF4444';
const INDIGO = '#6366F1';

const PIE_COLORS = [
  '#8CC63F','#374151','#F59E0B','#6366F1','#EF4444',
  '#10B981','#F97316','#3B82F6','#EC4899','#14B8A6',
  '#A855F7','#84CC16','#06B6D4','#64748B',
];

function KpiCard({ icon: Icon, label, value, sub, accent, pct }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-start justify-between">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${accent}`}>
          <Icon size={20} className="text-white" />
        </div>
        {pct !== undefined && (
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${pct >= 80 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {pct}%
          </span>
        )}
      </div>
      <div className="mt-3">
        <div className="text-2xl font-bold text-gray-800">{value}</div>
        <div className="text-sm font-medium text-gray-600 mt-0.5">{label}</div>
        {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-3 text-sm">
      <p className="font-semibold text-gray-700 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }} className="font-medium">
          {p.name}: {Number(p.value).toLocaleString()}
        </p>
      ))}
    </div>
  );
};

const PieTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const total = payload[0]?.payload?.total || 1;
  const val = payload[0]?.value || 0;
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-3 text-sm">
      <p className="font-semibold text-gray-700">{payload[0]?.name}</p>
      <p className="text-gray-600">{val.toLocaleString()} ({Math.round((val / total) * 100)}%)</p>
    </div>
  );
};

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  if (percent < 0.04) return null;
  const RADIAN = Math.PI / 180;
  const r = innerRadius + (outerRadius - innerRadius) * 0.55;
  return (
    <text x={cx + r * Math.cos(-midAngle * RADIAN)} y={cy + r * Math.sin(-midAngle * RADIAN)}
      fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function DashboardPage() {
  const { maintenance } = useApp();

  const totalOccupied = OCCUPANCY_SUMMARY.occupiedMowasalat + OCCUPANCY_SUMMARY.occupiedContractor;
  const utilPct = Math.round((totalOccupied / OCCUPANCY_SUMMARY.totalBeds) * 100);
  const openMaint = maintenance.filter(m =>
    m.status === 'Open' || m.status === 'Pending' || m.status === 'In Progress' || m.status === 'Pending (Internal)'
  ).length;

  // Depot occupancy for bar chart
  const staffLocs = LOCATIONS.filter(l => l.category.includes('Staff')).map(l => ({
    name: l.name.replace(' Depot','').replace(' (MSD)','').replace(' (AKD)','').replace(' (ARD)','').replace(' (LUD)','').replace(' (WAD)',''),
    Occupied: l.occupancy,
    Vacant: (l.capacity || 0) - (l.occupancy || 0),
    cap: l.capacity,
  })).sort((a, b) => b.Occupied - a.Occupied);

  // Facilities top 8 locations
  const facTop8 = [...FACILITIES_BY_LOC].sort((a, b) => b.total - a.total).slice(0, 8);

  // Add total for pie tooltip
  const natTotal = NATIONALITY_STATS.reduce((s, n) => s + n.value, 0);
  const deptTotal = DEPT_STATS.reduce((s, d) => s + d.value, 0);
  const natWithTotal = NATIONALITY_STATS.map(n => ({ ...n, total: natTotal }));
  const deptWithTotal = DEPT_STATS.map(d => ({ ...d, total: deptTotal }));

  // Maintenance status
  const maintStatus = [
    { name: 'Completed', value: FACILITIES_BY_LOC.reduce((s, l) => s + l.completed, 0) },
    { name: 'Pending',   value: FACILITIES_BY_LOC.reduce((s, l) => s + l.pending, 0) },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">Analytics Dashboard</h2>
        <p className="text-sm text-gray-500">Mowasalat Accommodation — Live overview · Data as of June 2026</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard icon={BedDouble}   label="Total Beds"       value={OCCUPANCY_SUMMARY.totalBeds.toLocaleString()}   sub="13 Staff depots"             accent="bg-gray-700" pct={utilPct} />
        <KpiCard icon={Users}       label="Occupied"         value={totalOccupied.toLocaleString()}                 sub={`${OCCUPANCY_SUMMARY.occupiedContractor.toLocaleString()} contractor`} accent="bg-[#8CC63F]" />
        <KpiCard icon={Building2}   label="Vacant Beds"      value={OCCUPANCY_SUMMARY.vacant.toLocaleString()}      sub="Available now"               accent="bg-indigo-500" />
        <KpiCard icon={Wrench}      label="Pending Issues"   value={openMaint.toLocaleString()}                     sub="Facilities inspection"       accent="bg-red-500" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard icon={Dumbbell}    label="Gym Members"      value={OCCUPANCY_SUMMARY.gymMembers.toLocaleString()}  sub="Annual subscriptions"        accent="bg-amber-500" />
        <KpiCard icon={Home}        label="Family Units"     value={OCCUPANCY_SUMMARY.familyUnits.toLocaleString()} sub="Al Thumama / Al Saad / Mansoura" accent="bg-teal-500" />
        <KpiCard icon={Activity}    label="Utilisation"      value={`${utilPct}%`}                                  sub="Across all depots"           accent="bg-[#8CC63F]" />
        <KpiCard icon={Users}       label="Total Residents"  value={totalOccupied.toLocaleString()}                 sub={`of ${OCCUPANCY_SUMMARY.totalBeds.toLocaleString()} capacity`} accent="bg-gray-700" />
      </div>

      {/* Occupancy per Depot */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-bold text-gray-800 mb-4">Occupancy by Depot</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={staffLocs} margin={{ top: 4, right: 20, left: 0, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6B7280' }} angle={-40} textAnchor="end" interval={0} />
            <YAxis tick={{ fontSize: 11, fill: '#6B7280' }} tickFormatter={v => v >= 1000 ? `${v/1000}k` : v} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 4 }} />
            <Bar dataKey="Occupied" fill={GREEN}  radius={[3,3,0,0]} />
            <Bar dataKey="Vacant"   fill="#E5E7EB" radius={[3,3,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Nationality + Department pies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-800 mb-1">Residents by Nationality</h3>
          <p className="text-xs text-gray-400 mb-3">Total: {natTotal.toLocaleString()} residents</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie data={natWithTotal} dataKey="value" nameKey="name" cx="50%" cy="50%"
                  outerRadius={90} labelLine={false} label={<CustomPieLabel />}>
                  {natWithTotal.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip content={<PieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 grid grid-cols-1 gap-1 min-w-0">
              {NATIONALITY_STATS.map((n, i) => (
                <div key={n.name} className="flex items-center gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }} />
                  <span className="text-gray-600 flex-1 truncate">{n.name}</span>
                  <span className="font-semibold text-gray-800">{n.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-800 mb-1">Residents by Department</h3>
          <p className="text-xs text-gray-400 mb-3">Total: {deptTotal.toLocaleString()} residents</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie data={deptWithTotal} dataKey="value" nameKey="name" cx="50%" cy="50%"
                  outerRadius={90} labelLine={false} label={<CustomPieLabel />}>
                  {deptWithTotal.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip content={<PieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 grid grid-cols-1 gap-1 min-w-0">
              {DEPT_STATS.map((d, i) => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }} />
                  <span className="text-gray-600 flex-1 truncate">{d.name}</span>
                  <span className="font-semibold text-gray-800">{d.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Inspection + Gym */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-800 mb-1">Facilities Inspection by Location</h3>
          <p className="text-xs text-gray-400 mb-3">Top 8 locations — {FACILITIES_BY_LOC.reduce((s,l)=>s+l.total,0).toLocaleString()} total actions</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={facTop8} layout="vertical" margin={{ top: 0, right: 20, left: 100, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: '#6B7280' }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: '#374151' }} width={100} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="completed" name="Completed" fill={GREEN}  radius={[0,3,3,0]} stackId="a" />
              <Bar dataKey="pending"   name="Pending"   fill={AMBER}  radius={[0,3,3,0]} stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-800 mb-1">Gym Members by Depot</h3>
          <p className="text-xs text-gray-400 mb-3">Total: {GYM_BY_DEPOT.reduce((s,g)=>s+g.count,0).toLocaleString()} active members</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={GYM_BY_DEPOT} margin={{ top: 4, right: 20, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6B7280' }} />
              <YAxis tick={{ fontSize: 11, fill: '#6B7280' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" name="Members" fill={GRAY} radius={[4,4,0,0]}>
                {GYM_BY_DEPOT.map((_, i) => <Cell key={i} fill={i === 0 ? GREEN : GRAY} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Discipline + Maintenance status summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-800 mb-4">Inspection by Discipline</h3>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie data={DISCIPLINE_STATS} dataKey="value" nameKey="name" cx="50%" cy="50%"
                  outerRadius={80} labelLine={false} label={<CustomPieLabel />}>
                  {DISCIPLINE_STATS.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {DISCIPLINE_STATS.map((d, i) => {
                const total = DISCIPLINE_STATS.reduce((s, x) => s + x.value, 0);
                return (
                  <div key={d.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                        {d.name}
                      </span>
                      <span className="font-bold text-gray-800">{d.value.toLocaleString()}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div className="h-1.5 rounded-full" style={{ width: `${Math.round(d.value/total*100)}%`, backgroundColor: PIE_COLORS[i] }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-800 mb-4">Inspection Completion Rate</h3>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-36 h-36">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#F3F4F6" strokeWidth="3.5" />
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke={GREEN} strokeWidth="3.5"
                  strokeDasharray={`${Math.round((maintStatus[0].value / (maintStatus[0].value + maintStatus[1].value)) * 100)} 100`}
                  strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
                <span className="text-2xl font-black text-gray-800">
                  {Math.round((maintStatus[0].value / (maintStatus[0].value + maintStatus[1].value)) * 100)}%
                </span>
                <span className="text-xs text-gray-400">Done</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-green-50 rounded-xl p-3">
              <div className="text-xl font-bold text-green-700">{maintStatus[0].value.toLocaleString()}</div>
              <div className="text-xs text-green-600">Completed</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-3">
              <div className="text-xl font-bold text-amber-700">{maintStatus[1].value.toLocaleString()}</div>
              <div className="text-xs text-amber-600">Pending</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
