import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Modal from '../components/Modal';
import {
  ArrowLeft, Building, Users, MapPin, Phone, Info,
  Wrench, UserSearch, Settings,
} from 'lucide-react';

const PRIORITY_OPTIONS = ['Low', 'Medium', 'High', 'Critical'];

export default function LocationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locations, tenants, maintenance, addMaintenanceRequest, updateLocationCapacity } = useApp();

  const data = locations.find(l => l.id === id);
  const [modal, setModal] = useState(null); // 'maintenance' | 'capacity'

  const [mForm, setMForm] = useState({ title: '', description: '', priority: 'Medium', reportedBy: '' });
  const [cForm, setCForm] = useState({ capacity: '', occupancy: '' });
  const [cError, setCError] = useState('');

  if (!data) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Location not found.</p>
        <button onClick={() => navigate('/locations')} className="mt-4 text-[#005F9E] hover:underline">
          Back to Locations
        </button>
      </div>
    );
  }

  const locationTenants = tenants.filter(t => t.locationId === id);
  const locationMaintenance = maintenance.filter(m => m.locationId === id);
  const openIssues = locationMaintenance.filter(m => m.status !== 'Resolved').length;
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
    const cap = Number(cForm.capacity);
    const occ = Number(cForm.occupancy);
    if (occ > cap) { setCError('Occupancy cannot exceed capacity.'); return; }
    updateLocationCapacity(id, cap, occ);
    setModal(null);
  };

  return (
    <div className="animate-fade-in space-y-6">
      <button onClick={() => navigate('/locations')} className="flex items-center text-[#005F9E] font-semibold hover:underline text-sm">
        <ArrowLeft size={16} className="mr-1" /> Back to Locations
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Hero */}
        <div className="relative h-56 md:h-72 bg-gray-200">
          <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl font-bold text-white">{data.name}</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-[#8CC63F] text-white px-3 py-1 rounded-full text-sm font-medium">{data.category}</span>
              <span className="text-white/80 text-sm flex items-center gap-1"><MapPin size={14} />{data.location}</span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left col */}
            <div className="md:col-span-2 space-y-6">
              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2 text-[#005F9E] mb-2">
                    <Users size={18} />
                    <span className="font-semibold text-sm">Occupancy</span>
                  </div>
                  {data.capacity ? (
                    <>
                      <div className="text-2xl font-bold text-gray-800">
                        {data.occupancy.toLocaleString()} <span className="text-base font-normal text-gray-400">/ {data.capacity.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                        <div className={`${barColor} h-2 rounded-full transition-all`} style={{ width: `${pct}%` }} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{pct}% utilised</div>
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-gray-800">{data.totalUnits} Units</div>
                  )}
                </div>

                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 text-green-700 mb-2">
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

              {/* Summary counters */}
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: 'Total Issues', value: locationMaintenance.length, color: 'text-gray-800' },
                  { label: 'Open / In Progress', value: openIssues, color: openIssues > 0 ? 'text-red-600' : 'text-green-600' },
                  { label: 'Resolved', value: locationMaintenance.filter(m => m.status === 'Resolved').length, color: 'text-green-600' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-3 border">
                    <div className={`text-xl font-bold ${color}`}>{value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-3 border-b pb-2">Facility Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {data.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700 gap-2">
                      <div className="w-2 h-2 bg-[#005F9E] rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right col - actions */}
            <div className="bg-gray-50 p-6 rounded-xl h-fit space-y-3">
              <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
                <Info size={16} className="text-[#005F9E]" /> Quick Actions
              </h3>
              <button
                onClick={() => navigate(`/tenants?location=${id}`)}
                className="w-full bg-[#005F9E] hover:bg-[#004a7c] text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <UserSearch size={16} /> View Tenant List
              </button>
              <button
                onClick={() => setModal('maintenance')}
                className="w-full bg-white border border-[#005F9E] text-[#005F9E] hover:bg-blue-50 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <Wrench size={16} /> Report Maintenance
              </button>
              {data.capacity !== undefined && (
                <button
                  onClick={openCapacityModal}
                  className="w-full bg-[#8CC63F] hover:bg-[#7ab035] text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm"
                >
                  <Settings size={16} /> Update Capacity
                </button>
              )}
              <button
                onClick={() => navigate(`/maintenance?location=${id}`)}
                className="w-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm"
              >
                View All Issues
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance modal */}
      {modal === 'maintenance' && (
        <Modal title="Report Maintenance Issue" onClose={() => setModal(null)}>
          <form onSubmit={handleMaintenanceSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Issue Title *</label>
              <input
                type="text"
                required
                value={mForm.title}
                onChange={e => setMForm(f => ({ ...f, title: e.target.value }))}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F9E]"
                placeholder="Brief description of the issue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea
                required
                rows={3}
                value={mForm.description}
                onChange={e => setMForm(f => ({ ...f, description: e.target.value }))}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F9E] resize-none"
                placeholder="Provide full details..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority *</label>
                <select
                  value={mForm.priority}
                  onChange={e => setMForm(f => ({ ...f, priority: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F9E]"
                >
                  {PRIORITY_OPTIONS.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reported By *</label>
                <input
                  type="text"
                  required
                  value={mForm.reportedBy}
                  onChange={e => setMForm(f => ({ ...f, reportedBy: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F9E]"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setModal(null)} className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button type="submit" className="flex-1 bg-[#005F9E] hover:bg-[#004a7c] text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
                Submit Request
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Capacity modal */}
      {modal === 'capacity' && (
        <Modal title="Update Capacity & Occupancy" onClose={() => setModal(null)}>
          <form onSubmit={handleCapacitySubmit} className="space-y-4">
            <p className="text-sm text-gray-500">Update the bed capacity and current occupancy count for <strong>{data.name}</strong>.</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Capacity *</label>
                <input
                  type="number"
                  min={1}
                  required
                  value={cForm.capacity}
                  onChange={e => { setCForm(f => ({ ...f, capacity: e.target.value })); setCError(''); }}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F9E]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Occupancy *</label>
                <input
                  type="number"
                  min={0}
                  required
                  value={cForm.occupancy}
                  onChange={e => { setCForm(f => ({ ...f, occupancy: e.target.value })); setCError(''); }}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F9E]"
                />
              </div>
            </div>
            {cError && <p className="text-sm text-red-600">{cError}</p>}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setModal(null)} className="flex-1 border border-gray-300 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button type="submit" className="flex-1 bg-[#8CC63F] hover:bg-[#7ab035] text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
                Save Changes
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
