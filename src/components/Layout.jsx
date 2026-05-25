import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { LayoutDashboard, Dumbbell, Wrench, Building2, LogOut, Menu, Upload } from 'lucide-react';
import ImportDataModal from './ImportDataModal';

const NAV = [
  { to: '/',            label: 'Dashboard',    icon: LayoutDashboard, end: true },
  { to: '/housing',     label: 'Housing Info', icon: Building2 },
  { to: '/maintenance', label: 'Maintenance',  icon: Wrench },
  { to: '/gym',         label: 'Gym Members',  icon: Dumbbell },
];

export default function Layout() {
  const { user, logout, maintenance } = useApp();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showImport, setShowImport] = useState(false);

  const openCount = maintenance.filter(m =>
    m.status === 'Open' || m.status === 'Pending' || m.status === 'In Progress' || m.status === 'Pending (Internal)'
  ).length;

  const handleLogout = () => { logout(); navigate('/login'); };

  const SidebarContent = () => (
    <aside className="w-64 bg-[#0F172A] text-white flex flex-col h-full">
      {/* Logo area */}
      <div className="px-5 py-5 border-b border-white/[0.07]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#8CC63F] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-black text-lg">M</span>
          </div>
          <div>
            <div className="font-bold text-sm leading-tight text-white tracking-wide">MOWASALAT</div>
            <div className="text-[#8CC63F] text-xs font-medium mt-0.5">Accommodation</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-[#8CC63F] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <Icon size={18} />
            <span className="flex-1">{label}</span>
            {label === 'Maintenance' && openCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shrink-0">
                {openCount > 99 ? '99+' : openCount}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User area */}
      <div className="px-3 py-4 border-t border-white/[0.07] space-y-2">
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="w-8 h-8 bg-[#8CC63F] rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0">
            {user?.name?.[0]}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-white truncate">{user?.name}</div>
            <div className="text-xs text-slate-500">{user?.role}</div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
        >
          <LogOut size={15} /> Sign Out
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-[#F1F5F9] overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden md:flex shrink-0">
        <SidebarContent />
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 md:hidden">
            <SidebarContent />
          </div>
        </>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-[#E2E8F0] px-4 md:px-6 py-3 flex items-center gap-3 shrink-0">
          <button
            className="md:hidden text-slate-500 hover:text-slate-800 transition-colors"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>

          <span className="font-bold text-[#0F172A] text-sm">Karwa Accommodation</span>

          <button
            onClick={() => setShowImport(true)}
            className="ml-auto flex items-center gap-1.5 border border-[#E2E8F0] text-slate-600 hover:border-[#8CC63F] hover:text-[#6BA32D] px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200"
          >
            <Upload size={13} /> Import Data
          </button>

          <span className="text-sm text-slate-400 hidden sm:block">
            {new Date().toLocaleDateString('en-GB', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
          </span>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>

      {showImport && <ImportDataModal onClose={() => setShowImport(false)} />}
    </div>
  );
}
