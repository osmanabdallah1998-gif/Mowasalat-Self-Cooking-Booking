import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Eye, EyeOff, LogIn, BedDouble, Dumbbell, ClipboardList } from 'lucide-react';

const STATS = [
  { icon: BedDouble,     label: 'Total Beds',        value: '15,619', sub: 'Across 13 depots' },
  { icon: Dumbbell,      label: 'Gym Members',        value: '1,755',  sub: 'Active subscriptions' },
  { icon: ClipboardList, label: 'Inspection Records', value: '2,179',  sub: 'Facilities tracked' },
];

export default function LoginPage() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 400));
    if (login(form.username, form.password)) {
      navigate('/');
    } else {
      setError('Invalid username or password.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel — hidden on mobile */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex-col justify-between p-10 relative overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #8CC63F 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />

        {/* Logo / Brand */}
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#8CC63F] flex items-center justify-center shadow-lg mb-6">
            <span className="text-white font-black text-2xl">M</span>
          </div>
          <h1 className="text-white font-bold text-2xl leading-snug">MOWASALAT</h1>
          <p className="text-[#8CC63F] font-semibold text-sm tracking-wide mt-1">Accommodation Management Portal</p>
          <p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-xs">
            Centralised housing and facilities management for Karwa Transport operations across Qatar.
          </p>
        </div>

        {/* Stats */}
        <div className="relative z-10 space-y-3">
          {STATS.map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
              <div className="w-10 h-10 rounded-xl bg-[#8CC63F]/20 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#8CC63F]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-lg leading-none">{value}</div>
                <div className="text-slate-400 text-xs mt-0.5">{label}</div>
              </div>
              <div className="text-slate-500 text-xs text-right hidden sm:block">{sub}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="relative z-10 text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Mowasalat (Karwa). All rights reserved.
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 bg-white flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-sm animate-fade-in">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-8 md:hidden">
            <div className="w-10 h-10 rounded-xl bg-[#8CC63F] flex items-center justify-center shadow">
              <span className="text-white font-black text-lg">M</span>
            </div>
            <div>
              <div className="font-bold text-[#0F172A] text-sm leading-tight">MOWASALAT</div>
              <div className="text-[#8CC63F] text-xs font-medium">Accommodation Portal</div>
            </div>
          </div>

          {/* Desktop K logo */}
          <div className="hidden md:flex w-12 h-12 rounded-2xl bg-[#8CC63F] items-center justify-center shadow mb-6">
            <span className="text-white font-black text-xl">K</span>
          </div>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-1">Welcome back</h2>
          <p className="text-slate-500 text-sm mb-7">Sign in to your account to continue</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Username</label>
              <input
                type="text"
                value={form.username}
                onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
                className="w-full border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition-all duration-200"
                placeholder="Enter your username"
                required
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  className="w-full border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm text-[#0F172A] placeholder-slate-400 pr-11 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8CC63F] hover:bg-[#6BA32D] disabled:opacity-60 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 mt-2 shadow-sm"
            >
              {loading
                ? <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                : <><LogIn size={16} /> Sign In</>
              }
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-6">
            Default credentials:{' '}
            <code className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">admin</code>
            {' / '}
            <code className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">karwa2024</code>
          </p>
        </div>
      </div>
    </div>
  );
}
