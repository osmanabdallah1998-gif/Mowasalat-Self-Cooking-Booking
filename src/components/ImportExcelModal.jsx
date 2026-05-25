import { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import Modal from './Modal';
import { Upload, FileSpreadsheet, CheckCircle2, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LOCATIONS } from '../data/initialData';

// Column aliases for auto-detection
const LOCATION_MAP = {
  name:      ['name', 'accommodation', 'location name', 'الاسم'],
  location:  ['location', 'address', 'العنوان'],
  capacity:  ['capacity', 'total capacity', 'beds', 'الطاقة'],
  occupancy: ['occupancy', 'current', 'occupied', 'الإشغال'],
  manager:   ['manager', 'contact person', 'المدير'],
  contact:   ['contact', 'phone', 'email', 'الاتصال'],
  category:  ['category', 'type', 'النوع'],
};

const TENANT_MAP = {
  name:        ['name', 'full name', 'employee name', 'الاسم'],
  employeeId:  ['employee id', 'emp id', 'id', 'staff id', 'رقم الموظف'],
  department:  ['department', 'dept', 'القسم'],
  locationId:  ['location', 'accommodation', 'السكن'],
  room:        ['room', 'room no', 'الغرفة'],
  checkIn:     ['check in', 'check-in', 'checkin', 'date', 'تاريخ'],
  phone:       ['phone', 'mobile', 'الهاتف'],
  nationality: ['nationality', 'الجنسية'],
  status:      ['status', 'الحالة'],
};

function findCol(headers, aliases) {
  const h = headers.map(x => String(x ?? '').toLowerCase().trim());
  for (const alias of aliases) {
    const idx = h.findIndex(x => x.includes(alias));
    if (idx !== -1) return idx;
  }
  return -1;
}

function detectType(headers) {
  const h = headers.map(x => String(x ?? '').toLowerCase());
  const hasCapacity = h.some(x => x.includes('capacity') || x.includes('beds'));
  const hasEmpId    = h.some(x => x.includes('emp') || x.includes('employee'));
  if (hasCapacity) return 'locations';
  if (hasEmpId)    return 'tenants';
  return 'unknown';
}

export default function ImportExcelModal({ onClose }) {
  const { locations, importLocations, importTenants } = useApp();
  const [step, setStep]     = useState('upload'); // upload | preview | done
  const [parsed, setParsed] = useState(null);
  const [error, setError]   = useState('');
  const [importing, setImporting] = useState(false);
  const inputRef = useRef();

  const handleFile = (file) => {
    setError('');
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const wb = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
        const results = [];

        wb.SheetNames.forEach(sheetName => {
          const ws = wb.Sheets[sheetName];
          const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
          if (rows.length < 2) return;

          const headers = rows[0];
          const type = detectType(headers);

          if (type === 'locations') {
            const cols = {};
            Object.entries(LOCATION_MAP).forEach(([key, aliases]) => {
              cols[key] = findCol(headers, aliases);
            });

            const items = rows.slice(1)
              .filter(r => r[cols.name])
              .map((r, i) => ({
                id: `st-imp-${Date.now()}-${i}`,
                name:      String(r[cols.name]     ?? '').trim(),
                location:  String(r[cols.location] ?? '').trim(),
                capacity:  Number(r[cols.capacity] ?? 0),
                occupancy: Number(r[cols.occupancy] ?? 0),
                manager:   String(r[cols.manager]  ?? '').trim(),
                contact:   String(r[cols.contact]  ?? '').trim(),
                category:  String(r[cols.category] ?? 'Staff Accommodation').trim() || 'Staff Accommodation',
                image:     `https://placehold.co/800x400/8CC63F/FFFFFF?text=${encodeURIComponent(String(r[cols.name] ?? '').trim())}`,
                features:  [],
              }));

            results.push({ sheetName, type: 'locations', items });
          }

          if (type === 'tenants') {
            const cols = {};
            Object.entries(TENANT_MAP).forEach(([key, aliases]) => {
              cols[key] = findCol(headers, aliases);
            });

            const items = rows.slice(1)
              .filter(r => r[cols.name])
              .map((r, i) => {
                // Try to match locationId by name
                const locName = String(r[cols.locationId] ?? '').trim().toLowerCase();
                const matched = locations.find(l => l.name.toLowerCase().includes(locName) || locName.includes(l.name.toLowerCase()));
                return {
                  id:          `T-imp-${Date.now()}-${i}`,
                  name:        String(r[cols.name]        ?? '').trim(),
                  employeeId:  String(r[cols.employeeId]  ?? `EMP-${1000 + i}`).trim(),
                  department:  String(r[cols.department]  ?? 'Operations').trim(),
                  locationId:  matched?.id ?? (locations[0]?.id ?? 'st-001'),
                  room:        String(r[cols.room]        ?? '').trim(),
                  checkIn:     String(r[cols.checkIn]     ?? new Date().toISOString().slice(0, 10)).trim(),
                  phone:       String(r[cols.phone]       ?? '').trim(),
                  nationality: String(r[cols.nationality] ?? '').trim(),
                  status:      String(r[cols.status]      ?? 'Active').trim() || 'Active',
                };
              });

            results.push({ sheetName, type: 'tenants', items });
          }
        });

        if (results.length === 0) {
          setError('No recognisable data found. Make sure your columns include headers like "Name", "Capacity", "Employee ID" etc.');
          return;
        }

        setParsed(results);
        setStep('preview');
      } catch (err) {
        setError(`Failed to read file: ${err.message}`);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleImport = async () => {
    setImporting(true);
    for (const result of parsed) {
      if (result.type === 'locations') await importLocations(result.items);
      if (result.type === 'tenants')   await importTenants(result.items);
    }
    setImporting(false);
    setStep('done');
  };

  return (
    <Modal title="Import from Excel" onClose={onClose} wide>
      {step === 'upload' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Upload an <code>.xlsx</code> or <code>.xls</code> file. The app auto-detects whether each sheet contains <strong>Locations</strong> or <strong>Tenants</strong> based on column headers.
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs text-gray-500">
            <div className="bg-green-50 rounded-lg p-3 border border-green-100">
              <p className="font-semibold text-green-800 mb-1">Locations sheet — expected columns:</p>
              <p>Name, Location/Address, Capacity, Occupancy, Manager, Contact, Category</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="font-semibold text-gray-700 mb-1">Tenants sheet — expected columns:</p>
              <p>Name, Employee ID, Department, Location, Room, Check-in, Phone, Nationality, Status</p>
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              {error}
            </div>
          )}

          <div
            className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer hover:border-[#8CC63F] hover:bg-green-50 transition-colors"
            onClick={() => inputRef.current.click()}
            onDragOver={e => e.preventDefault()}
            onDrop={e => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }}
          >
            <FileSpreadsheet size={40} className="mx-auto text-gray-400 mb-3" />
            <p className="text-sm font-medium text-gray-700">Click to browse or drag & drop</p>
            <p className="text-xs text-gray-400 mt-1">.xlsx / .xls files only</p>
            <input ref={inputRef} type="file" accept=".xlsx,.xls" className="hidden" onChange={e => handleFile(e.target.files[0])} />
          </div>
        </div>
      )}

      {step === 'preview' && parsed && (
        <div className="space-y-4">
          {parsed.map((result, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">
                  Sheet: <em>{result.sheetName}</em> — {result.type === 'locations' ? 'Locations' : 'Tenants'}
                </span>
                <span className="text-xs bg-[#8CC63F] text-white px-2 py-0.5 rounded-full">{result.items.length} rows</span>
              </div>
              <div className="overflow-x-auto max-h-48">
                <table className="w-full text-xs">
                  <thead className="bg-gray-100 text-gray-500 uppercase sticky top-0">
                    <tr>
                      {Object.keys(result.items[0] ?? {}).filter(k => !['id','image','features'].includes(k)).map(k => (
                        <th key={k} className="px-3 py-2 text-left whitespace-nowrap">{k}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {result.items.slice(0, 5).map((row, j) => (
                      <tr key={j}>
                        {Object.entries(row).filter(([k]) => !['id','image','features'].includes(k)).map(([k, v]) => (
                          <td key={k} className="px-3 py-1.5 text-gray-700 whitespace-nowrap max-w-[120px] truncate">{String(v)}</td>
                        ))}
                      </tr>
                    ))}
                    {result.items.length > 5 && (
                      <tr><td colSpan={99} className="px-3 py-1.5 text-gray-400 text-center">…and {result.items.length - 5} more rows</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg p-3">
            ⚠️ Importing will <strong>replace</strong> existing {parsed.map(r => r.type).join(' and ')} data.
          </p>

          <div className="flex gap-3">
            <button onClick={() => { setStep('upload'); setParsed(null); setError(''); }}
              className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50">
              Back
            </button>
            <button onClick={handleImport} disabled={importing}
              className="flex-1 bg-[#8CC63F] hover:bg-[#7AB035] text-white py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
              {importing
                ? <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Importing…</>
                : <><Upload size={15} /> Import Data</>
              }
            </button>
          </div>
        </div>
      )}

      {step === 'done' && (
        <div className="text-center py-8 space-y-4">
          <CheckCircle2 size={48} className="mx-auto text-[#8CC63F]" />
          <h3 className="text-lg font-bold text-gray-800">Import Successful!</h3>
          <p className="text-sm text-gray-500">Your data has been imported and {window._karwaOnline ? 'synced to Firebase.' : 'saved locally.'}</p>
          <button onClick={onClose} className="bg-[#8CC63F] hover:bg-[#7AB035] text-white px-8 py-2.5 rounded-lg text-sm font-medium transition-colors">
            Done
          </button>
        </div>
      )}
    </Modal>
  );
}
