import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import {
  OCCUPANCY_SUMMARY, NATIONALITY_STATS, DEPT_STATS,
  FACILITIES_BY_LOC, DISCIPLINE_STATS, GYM_BY_DEPOT, LOCATIONS,
} from '../data/initialData';
import { useApp } from '../context/AppContext';
import { Building2, Users, BedDouble, TrendingUp, Dumbbell, Wrench, Home } from 'lucide-react';

const GREEN  = '#8CC63F';
const AMBER  = '#F59E0B';
const SLATE  = '#CBD5E1';

const PIE_COLORS = [
  '#8CC63F','#3B82F6','#F59E0B','#6366F1','#EF4444',
  '#10B981','#F97316','#EC4899','#14B8A6','#374151',
  '#A855F7','#84CC16','#06B6D4','#64748B',
];

function KpiCard({ icon: Icon, label, value, sub, accent }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${accent}`}>
        <Icon size={22} className="text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-2xl font-bold text-[#0F172A] leading-none">{value}</div>
        <div className="text-sm font-medium text-[#64748B] mt-1">{label}</div>
        {sub && <div className="text-xs text-[#94A3B8] mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-3 text-sm">
      <p className="font-semibold text-[#0F172A] mb-1">{label}</p>
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
    <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-3 text-sm">
      <p className="font-semibold text-[#0F172A]">{payload[0]?.name}</p>
      <p className="text-[#64748B]">{val.toLocaleString()} ({Math.round((val / total) * 100)}%)</p>
    </div>
  );
};

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  if (percent < 0.05) return null;
  const RADIAN = Math.PI / 180;
  const r = innerRadius + (outerRadius - innerRadius) * 0.55;
  return (
    <text
      x={cx + r * Math.cos(-midAngle * RADIAN)}
      y={cy + r * Math.sin(-midAngle * RADIAN)}
      fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="700"
    >
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
    name: l.name
      .replace(' Depot', '').replace(' (MSD)', '').replace(' (AKD)', '')
      .replace(' (ARD)', '').replace(' (LUD)', '').replace(' (WAD)', ''),
    Occupied: l.occupancy,
    Vacant: (l.capacity || 0) - (l.occupancy || 0),
  })).sort((a, b) => b.Occupied - a.Occupied);

  // Facilities top 8 locations
  const facTop8 = [...FACILITIES_BY_LOC].sort((a, b) => b.total - a.total).slice(0, 8);

  // Add total for pie tooltip
  const natTotal = NATIONALITY_STATS.reduce((s, n) => s + n.value, 0);
  const deptTotal = DEPT_STATS.reduce((s, d) => s + d.value, 0);
  const natWithTotal = NATIONALITY_STATS.map(n => ({ ...n, total: natTotal }));
  const deptWithTotal = DEPT_STATS.map(d => ({ ...d, total: deptTotal }));

  // Maintenance completion status
  const completedCount = FACILITIES_BY_LOC.reduce((s, l) => s + l.completed, 0);
  const pendingCount   = FACILITIES_BY_LOC.reduce((s, l) => s + l.pending, 0);
  const totalInspections = completedCount + pendingCount;
  const completionPct = totalInspections > 0 ? Math.round((completedCount / totalInspections) * 100) : 0;

  const today = new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page title */}
      <div>
        <h2 className="text-xl font-bold text-[#0F172A]">Analytics Dashboard</h2>
        <p className="text-sm text-[#64748B]">Mowasalat Accommodation — Live overview · {today}</p>
      </div>

      {/* KPI Row 1 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          icon={Building2}
          label="Total Beds"
          value={OCCUPANCY_SUMMARY.totalBeds.toLocaleString()}
          sub="Across 13 depots"
          accent="bg-slate-800"
        />
        <KpiCard
          icon={Users}
          label="Occupied"
          value={totalOccupied.toLocaleString()}
          sub={`${utilPct}% utilisation`}
          accent="bg-[#8CC63F]"
        />
        <KpiCard
          icon={BedDouble}
          label="Vacant Beds"
          value={OCCUPANCY_SUMMARY.vacant.toLocaleString()}
          sub="Available now"
          accent="bg-indigo-500"
        />
        <KpiCard
          icon={Wrench}
          label="Pending Issues"
          value={openMaint.toLocaleString()}
          sub="Open maintenance"
          accent="bg-red-500"
        />
      </div>

      {/* KPI Row 2 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          icon={Dumbbell}
          label="Gym Members"
          value={OCCUPANCY_SUMMARY.gymMembers.toLocaleString()}
          sub="Active subscriptions"
          accent="bg-amber-500"
        />
        <KpiCard
          icon={Home}
          label="Family Units"
          value={OCCUPANCY_SUMMARY.familyUnits.toLocaleString()}
          sub="Al Thumama / Al Saad / Mansoura"
          accent="bg-teal-500"
        />
        <KpiCard
          icon={TrendingUp}
          label="Utilisation %"
          value={`${utilPct}%`}
          sub="Across all depots"
          accent="bg-[#8CC63F]"
        />
        <KpiCard
          icon={Users}
          label="Contractor Beds"
          value={OCCUPANCY_SUMMARY.occupiedContractor.toLocaleString()}
          sub="External contractors"
          accent="bg-slate-500"
        />
      </div>

      {/* Depot Occupancy Overview — full width */}
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5">
        <h3 className="font-bold text-[#0F172A] mb-1">Depot Occupancy Overview</h3>
        <p className="text-xs text-[#94A3B8] mb-4">Occupied vs vacant beds across all 13 staff depots</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={staffLocs} margin={{ top: 4, right: 20, left: 0, bottom: 64 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748B' }} angle={-40} textAnchor="end" interval={0} />
            <YAxis tick={{ fontSize: 11, fill: '#64748B' }} tickFormatter={v => v >= 1000 ? `${v / 1000}k` : v} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
            <Bar dataKey="Occupied" fill={GREEN}   radius={[3, 3, 0, 0]} />
            <Bar dataKey="Vacant"   fill="#E2E8F0" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Nationality + Department pies — 50/50 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Nationality pie */}
        <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5">
          <h3 className="font-bold text-[#0F172A] mb-1">By Nationality</h3>
          <p className="text-xs text-[#94A3B8] mb-3">Total: {natTotal.toLocaleString()} residents</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="shrink-0">
              <ResponsiveContainer width={190} height={190}>
                <PieChart>
                  <Pie data={natWithTotal} dataKey="value" nameKey="name" cx="50%" cy="50%"
                    outerRadius={85} innerRadius={45} labelLine={false} label={<CustomPieLabel />}>
                    {natWithTotal.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-1.5 min-w-0">
              {NATIONALITY_STATS.map((n, i) => (
                <div key={n.name} className="flex items-center gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }} />
                  <span className="text-[#64748B] flex-1 truncate">{n.name}</span>
                  <span className="font-semibold text-[#0F172A]">{n.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department pie */}
        <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5">
          <h3 className="font-bold text-[#0F172A] mb-1">By Department</h3>
          <p className="text-xs text-[#94A3B8] mb-3">Total: {deptTotal.toLocaleString()} residents</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="shrink-0">
              <ResponsiveContainer width={190} height={190}>
                <PieChart>
                  <Pie data={deptWithTotal} dataKey="value" nameKey="name" cx="50%" cy="50%"
                    outerRadius={85} innerRadius={45} labelLine={false} label={<CustomPieLabel />}>
                    {deptWithTotal.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-1.5 min-w-0">
              {DEPT_STATS.map((d, i) => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }} />
                  <span className="text-[#64748B] flex-1 truncate">{d.name}</span>
                  <span className="font-semibold text-[#0F172A]">{d.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Inspection + Gym Members — 50/50 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Inspection by Location — horizontal stacked bar */}
        <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5">
          <h3 className="font-bold text-[#0F172A] mb-1">Inspection Status by Location</h3>
          <p className="text-xs text-[#94A3B8] mb-3">Top 8 locations by total inspections</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={facTop8} layout="vertical" margin={{ top: 0, right: 20, left: 100, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: '#64748B' }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: '#0F172A' }} width={100} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="completed" name="Completed" fill={GREEN} stackId="a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="pending"   name="Pending"   fill={AMBER} stackId="a" radius={[0, 3, 3, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gym Members by Depot — vertical bar */}
        <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5">
          <h3 className="font-bold text-[#0F172A] mb-1">Gym Members by Depot</h3>
          <p className="text-xs text-[#94A3B8] mb-3">Total: {GYM_BY_DEPOT.reduce((s, g) => s + g.count, 0).toLocaleString()} members</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={GYM_BY_DEPOT} margin={{ top: 4, right: 20, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748B' }} />
              <YAxis tick={{ fontSize: 11, fill: '#64748B' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" name="Members" radius={[4, 4, 0, 0]}>
                {GYM_BY_DEPOT.map((_, i) => (
                  <Cell key={i} fill={i === 0 ? GREEN : SLATE} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Completion ring + Discipline — 50/50 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Inspection Completion Rate */}
        <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5">
          <h3 className="font-bold text-[#0F172A] mb-4">Inspection Completion Rate</h3>
          <div className="flex items-center justify-center mb-5">
            <div className="relative w-36 h-36">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#F1F5F9" strokeWidth="3.5" />
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke={GREEN} strokeWidth="3.5"
                  strokeDasharray={`${completionPct} 100`}
                  strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-[#0F172A]">{completionPct}%</span>
                <span className="text-xs text-[#94A3B8]">Done</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-[#F0F9E8] rounded-xl p-3">
              <div className="text-xl font-bold text-green-700">{completedCount.toLocaleString()}</div>
              <div className="text-xs text-green-600 mt-0.5">Completed</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-3">
              <div className="text-xl font-bold text-amber-700">{pendingCount.toLocaleString()}</div>
              <div className="text-xs text-amber-600 mt-0.5">Pending</div>
            </div>
          </div>
        </div>

        {/* By Discipline — horizontal bar list */}
        <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),0_1px_2px_rgba(0,0,0,0.04)] p-5">
          <h3 className="font-bold text-[#0F172A] mb-4">By Discipline</h3>
          <div className="space-y-4">
            {DISCIPLINE_STATS.map((d, i) => {
              const total = DISCIPLINE_STATS.reduce((s, x) => s + x.value, 0);
              const widthPct = total > 0 ? Math.round((d.value / total) * 100) : 0;
              return (
                <div key={d.name}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-[#64748B] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                      {d.name}
                    </span>
                    <span className="font-bold text-[#0F172A]">{d.value.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ width: `${widthPct}%`, backgroundColor: PIE_COLORS[i] }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
