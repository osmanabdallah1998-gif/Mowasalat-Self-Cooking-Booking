import { useState } from 'react';
import { useApp } from '../context/AppContext';
import ImportExcelModal from '../components/ImportExcelModal';
import {
  Wifi, WifiOff, CheckCircle2, AlertCircle, Upload,
  Trash2, RefreshCw, ExternalLink, Copy,
} from 'lucide-react';

const STATUS_STYLES = {
  online:     { bg: 'bg-green-50 border-green-200',  icon: <Wifi size={18} className="text-green-600" />,    text: 'text-green-700',  label: 'Connected — Live Data Active' },
  connecting: { bg: 'bg-amber-50 border-amber-200',  icon: <RefreshCw size={18} className="text-amber-500 animate-spin" />, text: 'text-amber-700', label: 'Connecting to Firebase…' },
  error:      { bg: 'bg-red-50 border-red-200',      icon: <AlertCircle size={18} className="text-red-500" />, text: 'text-red-700',    label: 'Connection error — check your config' },
  offline:    { bg: 'bg-gray-50 border-gray-200',    icon: <WifiOff size={18} className="text-gray-400" />,   text: 'text-gray-600',   label: 'Offline — using local storage' },
};

const SAMPLE_CONFIG = `{
  "apiKey": "AIza...",
  "authDomain": "your-project.firebaseapp.com",
  "projectId": "your-project-id",
  "storageBucket": "your-project.appspot.com",
  "messagingSenderId": "123456789",
  "appId": "1:123456789:web:abc123"
}`;

const STEPS = [
  { n: 1, text: 'Go to', link: 'https://console.firebase.google.com', linkText: 'console.firebase.google.com' },
  { n: 2, text: 'Create a new project (or use existing)' },
  { n: 3, text: 'Click ⚙️ Project Settings → "Your apps" → Add Web App ( </> )' },
  { n: 4, text: 'Copy the firebaseConfig object and paste it below' },
  { n: 5, text: 'In Firebase Console → Build → Firestore Database → Create database (Start in test mode)' },
];

export default function SettingsPage() {
  const { syncStatus, connectToFirebase, disconnectFirebase, pushLocalDataToFirebase } = useApp();
  const [configText, setConfigText]     = useState(localStorage.getItem('karwa_firebase_config') || '');
  const [error, setError]               = useState('');
  const [success, setSuccess]           = useState('');
  const [showImport, setShowImport]     = useState(false);
  const [pushing, setPushing]           = useState(false);

  const st = STATUS_STYLES[syncStatus] || STATUS_STYLES.offline;

  const handleConnect = async () => {
    setError(''); setSuccess('');
    try {
      const config = JSON.parse(configText);
      const ok = await connectToFirebase(config);
      if (ok) setSuccess('Connected! All data is now live and shared across devices.');
      else setError('Connection failed. Check your config and Firestore rules.');
    } catch (e) {
      setError(`Invalid JSON: ${e.message}`);
    }
  };

  const handlePush = async () => {
    setPushing(true);
    setError(''); setSuccess('');
    try {
      const { getDb } = await import('../lib/firebase');
      await pushLocalDataToFirebase(getDb());
      setSuccess('Local data pushed to Firebase successfully.');
    } catch (e) {
      setError(`Push failed: ${e.message}`);
    }
    setPushing(false);
  };

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(SAMPLE_CONFIG).catch(() => {});
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Settings</h2>
        <p className="text-sm text-gray-500">Configure live data sync and import options</p>
      </div>

      {/* Status banner */}
      <div className={`flex items-center gap-3 p-4 rounded-xl border ${st.bg}`}>
        {st.icon}
        <span className={`text-sm font-medium ${st.text}`}>{st.label}</span>
        {syncStatus === 'online' && (
          <button onClick={disconnectFirebase}
            className="ml-auto text-xs text-red-500 hover:text-red-700 border border-red-200 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors">
            Disconnect
          </button>
        )}
      </div>

      {/* Firebase Setup */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
        <div>
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <Wifi size={18} className="text-[#8CC63F]" /> Firebase Live Sync
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Connect to Firebase Firestore for real-time shared data. Free tier handles thousands of users.
          </p>
        </div>

        {/* Steps */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">Setup Steps</p>
          {STEPS.map(s => (
            <div key={s.n} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-5 h-5 rounded-full bg-[#8CC63F] text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{s.n}</span>
              <span>
                {s.text}{' '}
                {s.link && (
                  <a href={s.link} target="_blank" rel="noreferrer"
                    className="text-[#558B2F] hover:underline inline-flex items-center gap-1">
                    {s.linkText} <ExternalLink size={11} />
                  </a>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Config input */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-700">Firebase Config (JSON)</label>
            <button onClick={handleCopyConfig} className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1">
              <Copy size={12} /> Copy sample
            </button>
          </div>
          <textarea
            rows={8}
            value={configText}
            onChange={e => setConfigText(e.target.value)}
            placeholder={SAMPLE_CONFIG}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#8CC63F] resize-none bg-gray-900 text-green-400"
          />
        </div>

        {error   && <div className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3"><AlertCircle size={15} className="mt-0.5 shrink-0" />{error}</div>}
        {success && <div className="flex items-start gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3"><CheckCircle2 size={15} className="mt-0.5 shrink-0" />{success}</div>}

        <div className="flex gap-3">
          <button
            onClick={handleConnect}
            disabled={!configText.trim() || syncStatus === 'connecting'}
            className="flex-1 bg-[#8CC63F] hover:bg-[#7AB035] disabled:opacity-50 text-white py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            {syncStatus === 'connecting'
              ? <><RefreshCw size={15} className="animate-spin" /> Connecting…</>
              : <><Wifi size={15} /> Connect to Firebase</>
            }
          </button>
          {syncStatus === 'online' && (
            <button onClick={handlePush} disabled={pushing}
              className="flex items-center gap-2 border border-gray-300 text-gray-600 hover:bg-gray-50 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50">
              <RefreshCw size={15} className={pushing ? 'animate-spin' : ''} />
              {pushing ? 'Syncing…' : 'Push local → Firebase'}
            </button>
          )}
        </div>
      </div>

      {/* Excel Import */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div>
          <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <Upload size={18} className="text-[#8CC63F]" /> Import from Excel
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Upload your Excel sheet to populate locations and tenants. Supports .xlsx and .xls files.
          </p>
        </div>
        <button
          onClick={() => setShowImport(true)}
          className="bg-[#8CC63F] hover:bg-[#7AB035] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          <Upload size={15} /> Upload Excel File
        </button>
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-xl border border-red-200 p-6 space-y-4">
        <h3 className="font-bold text-red-700 flex items-center gap-2">
          <Trash2 size={18} /> Danger Zone
        </h3>
        <p className="text-sm text-gray-500">Reset all app data back to the sample dataset. This cannot be undone.</p>
        <button
          onClick={() => {
            if (!confirm('Reset all data to defaults?')) return;
            ['karwa_locations','karwa_tenants','karwa_maintenance'].forEach(k => localStorage.removeItem(k));
            window.location.reload();
          }}
          className="border border-red-300 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Reset to Sample Data
        </button>
      </div>

      {showImport && <ImportExcelModal onClose={() => setShowImport(false)} />}
    </div>
  );
}
