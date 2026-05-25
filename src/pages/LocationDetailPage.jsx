import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Modal from '../components/Modal';
import { ArrowLeft, Building, Users, Phone, Info, Wrench, UserSearch, Settings } from 'lucide-react';

const PRIORITY_OPTIONS = ['Low', 'Medium', 'High', 'Critical'];

export default function LocationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locations, tenants, maintenance, addMaintenanceRequest, updateLocationCapacity } = useApp();

  const data = locations.find(l => l.id === id);
  const [modal, setModal] = useState(null);
  const [mForm, setMForm] = useState({ title: '', description: '', priority: 'Medium', reportedBy: '' });
  const [cForm, setCForm] = useState({ capacity: '', occupancy: '' });
  const [cError, setCError] = useState('');

  if (!data) return (
    <div className="text-center py-20">
      <p className="text-gray-500">Location not found.</p>
      <button onClick={() => navigate('/locations')} className="mt-4 text-[#558B2F] hover:underline">Back</button>
    </div>
  );

  const locationTenants = tenants.filter(t => t.locationId === id);
  const locationMaint   = maintenance.filter(m => m.locationId === id);
  const openIssues      = locationMaint.filter(m => m.status !== 'Resolved').length;
  const pct = data.capacity ? Math.round((data.occupancy / data.capacity) * 100) : null;
  const barColor = pct >= 95 ? 'bg-red-500' : pct >= 80 ? 'bg-amber-400' : 'bg-[#8CC63F]';

  const handleMaintenanceSubmit = (e) => {
    e.preventDefault();
    addMaintenanceRequest({ ...mForm, locationId: id, status: 'Open' });
    setMForm({ title: '', description: '', priority: 'Medium', reportedBy: '' });
    setModal(null);
  };

  const openCapacityModal = () => {
    setCForm({ capacity: data.capacity || '', occupancy: data.occupancy || '' });
    setCError('');
    setModal('capacity');
  };

  const handleCapacitySubmit = (e) => {
    e.preventDefault();
    if (Number(cForm.occupancy) > Number(cForm.capacity)) { setCError('Occupancy cannot exceed capacity.'); return; }
    updateLocationCapacity(id, cForm.capacity, cForm.occupancy);
    setModal(null);
  };

  const input = 'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8CC63F]';
  const btnPrimary = 'flex-1 bg-[#8CC63F] hover:bg-[#7AB035] text-white py-2.5 rounded-lg text-sm font-medium transition-colors';
  const btnSecondary = 'flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors';

  return (
    <div className="animate-fade-in space-y-6">
      <button onClick={() => navigate('/locations')} className="flex items-center text-[#558B2F] font-semibold hover:underline text-sm">
        <ArrowLeft size={16} className="mr-1" /> Back to Locations
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Hero */}
        <div className="relative h-56 md:h-64 bg-gray-200">
          <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl font-bold text-white">{data.name}</h2>
            <span className="inline-block mt-2 bg-[#8CC63F] text-white px-3 py-1 rounded-full text-sm font-medium">
              {data.category}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 text-[#558B2F] mb-2">
                    <Users size={18} />
                    <span className="font-semibold text-sm">Occupancy</span>
                  </div>
                  {data.capacity ? (
                    <>
                      <div className="text-2xl font-bold text-gray-800">
                        {data.occupancy.toLocaleString()} <span className="text-base font-normal text-gray-400">/ {data.capacity.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                        <div className={`${barColor} h-2 rounded-full`} style={{ width: `${pct}%` }} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{pct}% utilised</div>
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-gray-800">{data.totalUnits} Units</div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Building size={18} />
                    <span className="font-semibold text-sm">Manager</span>
                  </div>
                  <div className="font-bold text-gray-800">{data.manager}</div>
                  <div className="text-sm text-gray-500 flex items-center mt-1 gap-1">
                    <Phone size={13} /> {data.contact}
                  </div>
                  <div className="mt-2 text-xs text-gray-400 flex items-center gap-1">
                    <Users size={12} /> {locationTenants.length} registered tenants
                  </div>
                </div>
              </div>

              {/* Counters */}
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: 'Total Issues',       value: locationMaint.length,                                    color: 'text-gray-800' },
                  { label: 'Open / In Progress', value: openIssues,                                              color: openIssues > 0 ? 'text-red-600' : 'text-green-600' },
                  { label: 'Resolved',           value: locationMaint.filter(m => m.status === 'Resolved').length, color: 'text-green-600' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className={`text-xl font-bold ${color}`}>{value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">Facility Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {data.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700 gap-2">
                      <div className="w-2 h-2 bg-[#8CC63F] rounded-full shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-gray-50 p-6 rounded-xl h-fit space-y-3 border border-gray-100">
              <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
                <Info size={16} className="text-[#8CC63F]" /> Quick Actions
              </h3>
              <button onClick={() => navigate(`/tenants?location=${id}`)}
                className="w-full bg-[#8CC63F] hover:bg-[#7AB035] text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm">
                <UserSearch size={16} /> View Tenant List
              </button>
              <button onClick={() => setModal('maintenance')}
                className="w-full bg-white border border-[#8CC63F] text-[#558B2F] hover:bg-green-50 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm">
                <Wrench size={16} /> Report Maintenance
              </button>
              {data.capacity !== undefined && (
                <button onClick={openCapacityModal}
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm">
                  <Settings size={16} /> Update Capacity
                </button>
              )}
              <button onClick={() => navigate(`/maintenance?location=${id}`)}
                className="w-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm">
                View All Issues
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Modal */}
      {modal === 'maintenance' && (
        <Modal title="Report Maintenance Issue" onClose={() => setModal(null)}>
          <form onSubmit={handleMaintenanceSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Issue Title *</label>
              <input required type="text" value={mForm.title} onChange={e => setMForm(f => ({ ...f, title: e.target.value }))} className={input} placeholder="Brief description" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea required rows={3} value={mForm.description} onChange={e => setMForm(f => ({ ...f, description: e.target.value }))} className={`${input} resize-none`} placeholder="Full details…" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority *</label>
                <select value={mForm.priority} onChange={e => setMForm(f => ({ ...f, priority: e.target.value }))} className={input}>
                  {PRIORITY_OPTIONS.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reported By *</label>
                <input required type="text" value={mForm.reportedBy} onChange={e => setMForm(f => ({ ...f, reportedBy: e.target.value }))} className={input} placeholder="Your name" />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setModal(null)} className={btnSecondary}>Cancel</button>
              <button type="submit" className={btnPrimary}>Submit</button>
            </div>
          </form>
        </Modal>
      )}

      {/* Capacity Modal */}
      {modal === 'capacity' && (
        <Modal title="Update Capacity & Occupancy" onClose={() => setModal(null)}>
          <form onSubmit={handleCapacitySubmit} className="space-y-4">
            <p className="text-sm text-gray-500">Update figures for <strong>{data.name}</strong>.</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Capacity *</label>
                <input type="number" min={1} required value={cForm.capacity} onChange={e => { setCForm(f => ({ ...f, capacity: e.target.value })); setCError(''); }} className={input} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Occupancy *</label>
                <input type="number" min={0} required value={cForm.occupancy} onChange={e => { setCForm(f => ({ ...f, occupancy: e.target.value })); setCError(''); }} className={input} />
              </div>
            </div>
            {cError && <p className="text-sm text-red-600">{cError}</p>}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setModal(null)} className={btnSecondary}>Cancel</button>
              <button type="submit" className="flex-1 bg-gray-700 hover:bg-gray-800 text-white py-2.5 rounded-lg text-sm font-medium transition-colors">Save</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
