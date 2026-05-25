import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MapPin } from 'lucide-react';

function OccupancyBadge({ pct }) {
  const cls = pct >= 95 ? 'bg-red-500' : pct >= 80 ? 'bg-amber-500' : 'bg-[#8CC63F]';
  return (
    <span className={`${cls} text-white text-xs font-bold px-2 py-0.5 rounded`}>{pct}% full</span>
  );
}

function LocationCard({ data, onClick }) {
  const isStaff = data.category.includes('Staff');
  const pct = data.capacity ? Math.round((data.occupancy / data.capacity) * 100) : null;

  return (
    <div
      onClick={() => onClick(data.id)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer border-l-4 border-[#8CC63F] group"
    >
      <div className="h-40 overflow-hidden relative">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-[#005F9E]">
          {isStaff ? 'DEPOT / STAFF' : 'ADMIN HOUSING'}
        </div>
        {pct !== null && (
          <div className="absolute top-2 left-2">
            <OccupancyBadge pct={pct} />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{data.name}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin size={14} className="mr-1 shrink-0" />
          {data.location}
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase">Capacity</p>
            <p className="font-bold text-[#005F9E]">
              {data.capacity ? data.capacity.toLocaleString() : `${data.totalUnits} Units`}
            </p>
          </div>
          <div className="h-8 w-px bg-gray-200" />
          <div className="text-center">
            <p className="text-xs text-gray-400 uppercase">Type</p>
            <p className="font-bold text-gray-700">{isStaff ? 'Dormitory' : data.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LocationsPage() {
  const { locations } = useApp();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filtered = locations.filter(l => {
    if (filter === 'Staff') return l.category.includes('Staff');
    if (filter === 'Admin') return l.category.includes('Admin');
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Locations</h2>
          <p className="text-sm text-gray-500">{filtered.length} accommodation{filtered.length !== 1 ? 's' : ''} shown</p>
        </div>
        <div className="flex bg-white rounded-lg shadow-sm p-1">
          {['All', 'Staff', 'Admin'].map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === t ? 'bg-[#005F9E] text-white shadow' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(loc => (
          <LocationCard key={loc.id} data={loc} onClick={id => navigate(`/locations/${id}`)} />
        ))}
      </div>
    </div>
  );
}
