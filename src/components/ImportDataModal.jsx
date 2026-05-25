import { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import Modal from './Modal';
import { Upload, FileSpreadsheet, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

const FILE_TYPES = [
  {
    key: 'masterList',
    label: 'MASTER LIST',
    desc: 'Staff accommodation occupancy (NEW_MASTER_LIST…)',
    sheetHints: ['MASTER LIST', 'TOTAL SUMMARY'],
    color: 'bg-blue-50 border-blue-200 text-blue-700',
  },
  {
    key: 'facilities',
    label: 'Facilities Inspection',
    desc: 'Maintenance & inspection actions (Facilities_Inspection…)',
    sheetHints: ['query', 'Location Summary'],
    color: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    key: 'gym',
    label: 'GYM Subscription',
    desc: 'Gym members data (GYM_SUBSCRIPTION_DATA…)',
    sheetHints: ['GYM MASTER LIST', 'COST CENTER'],
    color: 'bg-green-50 border-green-200 text-green-700',
  },
];

function excelDate(n) {
  if (!n || typeof n !== 'number') return '';
  return new Date((n - 25569) * 86400000).toISOString().slice(0, 10);
}

const facLocMap = {
  'Dukhan': 'DUKHAN', 'AL Ghuwariyah': 'ALGHUWARIYAH', 'Al Ghuwariyah': 'ALGHUWARIYAH',
  'Al Khor Depot': 'AKD', 'Al Khor Old Depot': 'AKD', 'Al Rayyan Depot': 'ARD',
  'Al Sadd Accommodations': 'AL-SAAD', 'Al Shamal': 'AL-SHAMAL', 'Al Thumama': 'AL-THUMAMA',
  'Al Wakra Depot ': 'AL-WAKRA', 'Al Wakra Depot': 'AL-WAKRA',
  'Industrial Area Depot ': 'IND', 'Industrial Area Depot': 'IND',
  'Karwa City': 'KARWA-CITY', 'Lusail Depot': 'LUD', 'Mesaimeer Depot': 'MSD',
  'Mowasalat HQ': 'MSD', 'QE Zekrit Al Mukthar Camp ': 'QE-ZEKREET',
  'QE Zekrit Al Mukthar Camp': 'QE-ZEKREET', 'Wadi Aba Saleel Depot ': 'WAD',
  'Wadi Aba Saleel Depot': 'WAD', 'Zekreet - Dukhan': 'DUKHAN',
};
const locIdMap = {
  'KARWA CITY': 'KARWA-CITY', 'MSD': 'MSD', 'WAD': 'WAD', 'ARD': 'ARD', 'LUD': 'LUD',
  'AKD': 'AKD', 'INDUSTRIAL AREA': 'IND', 'AL WAKRA': 'AL-WAKRA', 'AL SHAMAL': 'AL-SHAMAL',
  'NEW ALKHOR': 'NEW-ALKHOR', 'QE- ZEKREET': 'QE-ZEKREET', 'MEHE DUKHAN': 'DUKHAN', 'ALGHUWARIYAH': 'ALGHUWARIYAH',
};
const gymLocMap = { 'Karwa City': 'KARWA-CITY', 'MSD': 'MSD', 'AKD': 'AKD', 'ARD': 'ARD', 'IND': 'IND', 'LUD': 'LUD', 'WAD': 'WAD' };
const priorityMap = { 'High': 'Critical', 'Mid': 'High', 'Low': 'Medium' };
const statusMap = { 'Completed': 'Resolved', 'Pending': 'Open', 'Pending (Internal)': 'In Progress', 'Cancelled': 'Resolved' };

function detectFileType(wb) {
  const sheets = wb.SheetNames;
  for (const ft of FILE_TYPES) {
    if (ft.sheetHints.some(h => sheets.some(s => s.trim().toLowerCase().includes(h.toLowerCase())))) {
      return ft.key;
    }
  }
  return null;
}

function parseMasterList(wb) {
  const ws = wb.Sheets['MASTER LIST'];
  if (!ws) throw new Error('Sheet "MASTER LIST" not found');
  const XLSX = window._XLSX;
  const data = XLSX.utils.sheet_to_json(ws, { defval: '' });
  const occupied = data.filter(r => r['Empl#'] !== '' && r['                Name'] !== '');
  let id = 1;
  return occupied.map(r => ({
    id: 'T' + String(id++).padStart(4, '0'),
    name: (r['                Name'] || '').trim(),
    employeeId: String(r['Empl#']),
    department: (r['Department'] || '').trim(),
    nationality: r['Nationality'] || '',
    locationId: locIdMap[r['Location']] || r['Location'],
    room: r['Room no.'] || '',
    phone: r['Mobile no.'] ? String(r['Mobile no.']) : '',
    status: 'Active',
    checkIn: '2024-01-01',
    remarks: r['Remarks'] || '',
  }));
}

function parseFacilities(wb) {
  const ws = wb.Sheets['query'];
  if (!ws) throw new Error('Sheet "query" not found');
  const XLSX = window._XLSX;
  const data = XLSX.utils.sheet_to_json(ws, { defval: '' });
  return data.map((r, i) => {
    const title = (r['Action'] || '').replace(/\r\n/g, ' ').trim().slice(0, 120);
    if (title.length < 3) return null;
    return {
      id: 'FAC-' + String(i + 1).padStart(4, '0'),
      title, description: title,
      locationId: facLocMap[String(r['Location'] || '').trim()] || 'KARWA-CITY',
      locationName: String(r['Location'] || '').trim(),
      discipline: String(r['Discipline'] || ''),
      service: String(r['Service'] || ''),
      status: statusMap[r['Status']] || 'Open',
      priority: priorityMap[r['Priority']] || 'Medium',
      reportedDate: excelDate(r['Date']) || '2026-01-01',
      resolvedDate: excelDate(r['Closing Date ']),
      reportedBy: String(r['Created By'] || 'Facilities Team'),
      assignedTo: String(r['AssignedTo'] || ''),
    };
  }).filter(Boolean);
}

function parseGym(wb) {
  const ws = wb.Sheets['GYM MASTER LIST'];
  if (!ws) throw new Error('Sheet "GYM MASTER LIST" not found');
  const XLSX = window._XLSX;
  const raw = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
  return raw.slice(5).filter(r => r[0] !== '' && r[2] !== '').map(r => ({
    id: 'GYM-' + String(r[0]).padStart(4, '0'),
    srNo: r[0], depot: r[1] || '',
    locationId: gymLocMap[r[1]] || 'KARWA-CITY',
    empNo: String(r[2]).trim(),
    name: String(r[3]).trim(),
    nationality: r[4] || '',
    department: r[5] || '',
    contact: r[6] ? String(r[6]) : '',
    subscriptionDate: excelDate(r[7]),
    expiryDate: excelDate(r[8]),
    daysLeft: typeof r[9] === 'number' ? r[9] : 0,
    status: r[10] || 'Active',
  }));
}

export default function ImportDataModal({ onClose }) {
  const { importMaintenance, importTenants, importGymMembers } = useApp();
  const [files, setFiles] = useState({});       // key -> { name, status, count, error }
  const [xlsxReady, setXlsxReady] = useState(!!window._XLSX);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const loadXlsx = async () => {
    if (window._XLSX) { setXlsxReady(true); return; }
    setLoading(true);
    try {
      const mod = await import('xlsx');
      window._XLSX = mod;
      setXlsxReady(true);
    } catch {
      alert('Failed to load xlsx library');
    }
    setLoading(false);
  };

  const handleFile = async (file) => {
    if (!window._XLSX) await loadXlsx();
    const XLSX = window._XLSX;
    try {
      const buf = await file.arrayBuffer();
      const wb = XLSX.read(buf, { type: 'array' });
      const type = detectFileType(wb);
      if (!type) {
        setFiles(f => ({ ...f, unknown: { name: file.name, status: 'error', error: 'Unrecognized file format' } }));
        return;
      }
      setFiles(f => ({ ...f, [type]: { name: file.name, status: 'parsing' } }));
      let parsed, count;
      if (type === 'masterList') { parsed = parseMasterList(wb); count = parsed.length; importTenants(parsed); }
      else if (type === 'facilities') { parsed = parseFacilities(wb); count = parsed.length; importMaintenance(parsed); }
      else if (type === 'gym') { parsed = parseGym(wb); count = parsed.length; importGymMembers(parsed); }
      setFiles(f => ({ ...f, [type]: { name: file.name, status: 'done', count } }));
    } catch (e) {
      const type = 'error_' + Date.now();
      setFiles(f => ({ ...f, [type]: { name: file.name, status: 'error', error: e.message } }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    Array.from(e.dataTransfer.files).forEach(handleFile);
  };

  const doneCount = Object.values(files).filter(f => f.status === 'done').length;

  return (
    <Modal title="Import / Refresh Data" onClose={onClose} wide>
      <div className="space-y-5">
        <p className="text-sm text-gray-500">
          Upload any of the 3 Excel files to refresh the live data. The app auto-detects the file type.
        </p>

        {/* Supported file types */}
        <div className="grid grid-cols-1 gap-2">
          {FILE_TYPES.map(ft => (
            <div key={ft.key} className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${ft.color}`}>
              <FileSpreadsheet size={16} className="shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm">{ft.label}</div>
                <div className="text-xs opacity-80">{ft.desc}</div>
              </div>
              {files[ft.key] && (
                <div className="shrink-0 text-xs font-medium flex items-center gap-1">
                  {files[ft.key].status === 'parsing' && <RefreshCw size={12} className="animate-spin" />}
                  {files[ft.key].status === 'done' && <><CheckCircle2 size={13} /> {files[ft.key].count?.toLocaleString()} rows</>}
                  {files[ft.key].status === 'error' && <><AlertCircle size={13} className="text-red-500" /> Error</>}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Drop zone */}
        {!xlsxReady ? (
          <button onClick={loadXlsx} disabled={loading}
            className="w-full bg-[#8CC63F] hover:bg-[#7AB035] disabled:opacity-50 text-white py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2">
            {loading ? <><RefreshCw size={15} className="animate-spin" /> Loading…</> : <><Upload size={15} /> Load Excel Library First</>}
          </button>
        ) : (
          <div
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
            onClick={() => inputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 hover:border-[#8CC63F] rounded-xl p-8 text-center cursor-pointer transition-colors group"
          >
            <Upload size={28} className="mx-auto text-gray-300 group-hover:text-[#8CC63F] mb-3 transition-colors" />
            <p className="text-sm font-medium text-gray-600">Drop Excel files here or click to browse</p>
            <p className="text-xs text-gray-400 mt-1">Supports .xlsx and .xls · Multiple files at once</p>
            <input ref={inputRef} type="file" accept=".xlsx,.xls" multiple className="hidden"
              onChange={e => Array.from(e.target.files).forEach(handleFile)} />
          </div>
        )}

        {/* Error details */}
        {Object.values(files).filter(f => f.status === 'error').map((f, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
            <AlertCircle size={15} className="mt-0.5 shrink-0" />
            <span><strong>{f.name}:</strong> {f.error}</span>
          </div>
        ))}

        {doneCount > 0 && (
          <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl p-3">
            <CheckCircle2 size={15} className="shrink-0" />
            {doneCount} file{doneCount > 1 ? 's' : ''} imported successfully — data updated live.
          </div>
        )}

        <div className="flex gap-3 pt-1">
          <button onClick={onClose} className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50">Close</button>
          {doneCount > 0 && (
            <button onClick={() => { onClose(); window.location.reload(); }}
              className="flex-1 bg-[#8CC63F] hover:bg-[#7AB035] text-white py-2.5 rounded-lg text-sm font-medium">
              Reload App
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
