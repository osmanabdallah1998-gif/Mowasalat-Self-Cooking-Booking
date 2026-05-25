import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  LayoutDashboard, Building2, Users, Wrench,
  BarChart3, LogOut, Menu, Settings, Wifi, WifiOff,
} from 'lucide-react';

const NAV = [
  { to: '/',            label: 'Dashboard',   icon: LayoutDashboard, end: true },
  { to: '/locations',   label: 'Locations',   icon: Building2 },
  { to: '/tenants',     label: 'Tenants',     icon: Users },
  { to: '/maintenance', label: 'Maintenance', icon: Wrench },
  { to: '/reports',     label: 'Reports',     icon: BarChart3 },
  { to: '/settings',    label: 'Settings',    icon: Settings },
];

const STATUS_STYLES = {
  online:     'bg-green-500',
  connecting: 'bg-yellow-400 animate-pulse',
  error:      'bg-red-500',
  offline:    'bg-gray-400',
};

export default function Layout() {
  const { user, logout, maintenance, syncStatus } = useApp();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const openCount = maintenance.filter(m => m.status === 'Open').length;

  const handleLogout = () => { logout(); navigate('/login'); };

  const SidebarContent = () => (
    <aside className="w-64 bg-gray-800 text-white flex flex-col h-full">
      {/* Logo */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#8CC63F] rounded-xl flex items-center justify-center shrink-0">
            <span className="text-white font-black text-lg">K</span>
          </div>
          <div>
            <div className="font-bold text-sm leading-tight text-white">MOWASALAT</div>
            <div className="text-[#8CC63F] text-xs font-medium">Accommodation Portal</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {NAV.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#8CC63F] text-white'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            <Icon size={18} />
            <span className="flex-1">{label}</span>
            {label === 'Maintenance' && openCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {openCount > 9 ? '9+' : openCount}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Sync status + user */}
      <div className="p-4 border-t border-white/10 space-y-3">
        <div className="flex items-center gap-2 px-1">
          <div className={`w-2 h-2 rounded-full shrink-0 ${STATUS_STYLES[syncStatus]}`} />
          <span className="text-xs text-gray-400 capitalize">
            {syncStatus === 'online' ? 'Live — Firebase' : syncStatus === 'connecting' ? 'Connecting…' : 'Offline mode'}
          </span>
        </div>

        <div className="flex items-center gap-3 px-1">
          <div className="w-8 h-8 bg-[#8CC63F] rounded-full flex items-center justify-center text-sm font-bold shrink-0">
            {user?.name?.[0]}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium text-white truncate">{user?.name}</div>
            <div className="text-xs text-gray-400 truncate">{user?.role}</div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <LogOut size={15} /> Sign Out
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Desktop */}
      <div className="hidden md:flex shrink-0"><SidebarContent /></div>

      {/* Mobile overlay */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 md:hidden"><SidebarContent /></div>
        </>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex items-center gap-4 shrink-0">
          <button className="md:hidden text-gray-500 hover:text-gray-800" onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-gray-800 hidden md:block">Karwa Accommodation</span>
            {syncStatus === 'online'
              ? <Wifi size={16} className="text-[#8CC63F]" title="Live data" />
              : <WifiOff size={16} className="text-gray-400" title="Offline" />
            }
          </div>
          <span className="ml-auto text-sm text-gray-400">
            {new Date().toLocaleDateString('en-GB', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
          </span>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
