import React, { useState } from 'react';
import { Building, Users, MapPin, ArrowLeft, Phone, Info } from 'lucide-react';

/**
 * CONFIGURATION & BRANDING
 * ------------------------
 * Karwa Blue: #005F9E (Primary Brand Color)
 * Karwa Green: #8CC63F (Secondary/Eco Color)
 */

// --- DATA SOURCE (Replaces your Excel Sheet) ---
// Instructions: Replace the data below with the actual rows from your Excel file.
const KARWA_DATA = [
  // STAFF ACCOMMODATIONS
  {
    id: 'st-001',
    name: 'Karwa City',
    category: 'Staff Accommodation',
    capacity: 5000,
    occupancy: 4200,
    location: 'Abu Hamour, Doha',
    manager: 'Ahmed Al-Sayed',
    contact: '+974 4458 8888',
    image: 'https://placehold.co/800x400/005F9E/FFFFFF?text=Karwa+City',
    features: ['Central Mess Hall', 'Mosque', 'Recreation Center', 'Clinic'],
  },
  {
    id: 'st-002',
    name: 'Wadi Abu Sleel',
    category: 'Staff Accommodation',
    capacity: 3500,
    occupancy: 3100,
    location: 'Wadi Abu Sleel',
    manager: 'John Doe',
    contact: '+974 5555 1234',
    image: 'https://placehold.co/800x400/005F9E/FFFFFF?text=Wadi+Abu+Sleel',
    features: ['Gym', 'Laundry Services', 'Bus Depot Access'],
  },
  {
    id: 'st-003',
    name: 'Al Wakra',
    category: 'Staff Accommodation',
    capacity: 2000,
    occupancy: 1850,
    location: 'Al Wakra Main Rd',
    manager: 'Sarah Smith',
    contact: '+974 6666 7890',
    image: 'https://placehold.co/800x400/005F9E/FFFFFF?text=Al+Wakra',
    features: ['Sea View', 'Nearby Souq', 'Parking'],
  },
  {
    id: 'st-004',
    name: 'Lusail',
    category: 'Staff Accommodation',
    capacity: 1500,
    occupancy: 1200,
    location: 'Fox Hills, Lusail',
    manager: 'Mohamed Ali',
    contact: '+974 3333 4444',
    image: 'https://placehold.co/800x400/005F9E/FFFFFF?text=Lusail',
    features: ['Modern Facilities', 'Metro Access', 'Smart Building'],
  },
  {
    id: 'st-005',
    name: 'Mesaimeer',
    category: 'Staff Accommodation',
    capacity: 2800,
    occupancy: 2750,
    location: 'Mesaimeer Services Area',
    manager: 'Khaled Omar',
    contact: '+974 7777 8888',
    image: 'https://placehold.co/800x400/005F9E/FFFFFF?text=Mesaimeer',
    features: ['Large Cafeteria', 'Sports Pitch'],
  },
  {
    id: 'st-006',
    name: 'Industrial Area',
    category: 'Staff Accommodation',
    capacity: 6000,
    occupancy: 5900,
    location: 'Street 1, Industrial Area',
    manager: 'Ravi Kumar',
    contact: '+974 4444 2222',
    image: 'https://placehold.co/800x400/005F9E/FFFFFF?text=Industrial+Area',
    features: ['Workshop Proximity', 'Heavy Vehicle Parking'],
  },
  {
    id: 'st-007',
    name: 'Al Khor',
    category: 'Staff Accommodation',
    capacity: 1200,
    occupancy: 900,
    location: 'Al Khor Community',
    manager: 'Fahad Al-Kaabi',
    contact: '+974 5511 2233',
    image: 'https://placehold.co/800x400/005F9E/FFFFFF?text=Al+Khor',
    features: ['Quiet Area', 'Family Visits Allowed'],
  },
  // ADMIN ACCOMMODATIONS
  {
    id: 'ad-001',
    name: 'Al Sadd Housing',
    category: 'Admin Accommodation',
    type: 'Apartments',
    totalUnits: 20,
    location: 'Al Sadd, Doha',
    manager: 'HR Facilities',
    contact: 'HR-Admin@karwa.qa',
    image: 'https://placehold.co/800x400/8CC63F/FFFFFF?text=Al+Sadd+Housing',
    features: ['20 Luxury Apartments', 'Underground Parking', 'Security 24/7'],
  },
  {
    id: 'ad-002',
    name: 'Al Thumama Villas',
    category: 'Admin Accommodation',
    type: 'Villas',
    totalUnits: 13,
    location: 'Al Thumama',
    manager: 'HR Facilities',
    contact: 'HR-Admin@karwa.qa',
    image: 'https://placehold.co/800x400/8CC63F/FFFFFF?text=Al+Thumama+Villas',
    features: ['13 Standalone Villas', 'Private Gardens', 'Family Housing'],
  },
];

// --- COMPONENTS ---

const Header = () => (
  <header className="bg-[#005F9E] text-white shadow-lg">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img src="https://placehold.co/100x100/005F9E/FFFFFF?text=K" alt="Karwa Logo" className="object-contain p-1" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-wide">MOWASALAT (KARWA)</h1>
          <p className="text-xs text-[#8CC63F] font-semibold tracking-wider">ACCOMMODATION MANAGEMENT</p>
        </div>
      </div>
      <div className="text-sm opacity-80">Internal Admin Portal</div>
    </div>
  </header>
);

const OccupancyBar = ({ occupancy, capacity }) => {
  const pct = Math.round((occupancy / capacity) * 100);
  const color = pct >= 95 ? 'bg-red-500' : pct >= 80 ? 'bg-amber-400' : 'bg-[#8CC63F]';
  return (
    <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
      <div className={`${color} h-2 rounded-full transition-all`} style={{ width: `${pct}%` }} />
    </div>
  );
};

const LocationCard = ({ data, onClick }) => {
  const isStaff = data.category.includes('Staff');
  const pct = data.occupancy ? Math.round((data.occupancy / data.capacity) * 100) : null;

  return (
    <div
      onClick={() => onClick(data)}
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
          <div
            className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-bold text-white ${
              pct >= 95 ? 'bg-red-500' : pct >= 80 ? 'bg-amber-500' : 'bg-[#8CC63F]'
            }`}
          >
            {pct}% full
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
};

const DetailPage = ({ data, onBack }) => (
  <div className="animate-fade-in">
    <button onClick={onBack} className="mb-4 flex items-center text-[#005F9E] font-semibold hover:underline">
      <ArrowLeft size={18} className="mr-2" /> Back to Dashboard
    </button>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative h-64 md:h-80 bg-gray-200">
        <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
          <h2 className="text-3xl font-bold text-white">{data.name}</h2>
          <span className="inline-block mt-2 bg-[#8CC63F] text-white px-3 py-1 rounded-full text-sm font-medium">
            {data.category}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2 text-[#005F9E] mb-2">
                  <Users size={20} />
                  <span className="font-semibold">Occupancy Status</span>
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {data.occupancy
                    ? `${data.occupancy.toLocaleString()} / ${data.capacity.toLocaleString()}`
                    : `${data.totalUnits} Units`}
                </div>
                {data.occupancy && <OccupancyBar occupancy={data.occupancy} capacity={data.capacity} />}
              </div>

              <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                <div className="flex items-center gap-2 text-[#2d5c18] mb-2">
                  <Building size={20} />
                  <span className="font-semibold">Facility Manager</span>
                </div>
                <div className="text-lg font-bold text-gray-800">{data.manager}</div>
                <div className="text-sm text-gray-600 flex items-center mt-1">
                  <Phone size={14} className="mr-1 shrink-0" /> {data.contact}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">Facility Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#005F9E] rounded-full mr-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl h-fit">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center">
              <Info size={18} className="mr-2 text-[#005F9E]" /> Quick Actions
            </h3>
            <button className="w-full bg-[#005F9E] hover:bg-[#004a7c] text-white py-3 rounded-lg mb-3 font-medium transition-colors">
              View Tenant List
            </button>
            <button className="w-full bg-white border border-[#005F9E] text-[#005F9E] hover:bg-blue-50 py-3 rounded-lg mb-3 font-medium transition-colors">
              Report Maintenance
            </button>
            <button className="w-full bg-[#8CC63F] hover:bg-[#7ab035] text-white py-3 rounded-lg font-medium transition-colors">
              Update Capacity
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SummaryBar = ({ data }) => {
  const staffItems = data.filter(d => d.category.includes('Staff'));
  const totalCapacity = staffItems.reduce((s, d) => s + (d.capacity || 0), 0);
  const totalOccupancy = staffItems.reduce((s, d) => s + (d.occupancy || 0), 0);
  const adminCount = data.filter(d => d.category.includes('Admin')).reduce((s, d) => s + (d.totalUnits || 0), 0);

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {[
        { label: 'Staff Locations', value: staffItems.length, color: 'text-[#005F9E]' },
        {
          label: 'Total Occupancy',
          value: `${totalOccupancy.toLocaleString()} / ${totalCapacity.toLocaleString()}`,
          color: 'text-gray-800',
        },
        { label: 'Admin Units', value: adminCount, color: 'text-[#8CC63F]' },
      ].map(({ label, value, color }) => (
        <div key={label} className="bg-white rounded-xl shadow-sm p-4 text-center">
          <div className={`text-2xl font-bold ${color}`}>{value}</div>
          <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default function KarwaAccommodationApp() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredData = KARWA_DATA.filter(item => {
    if (filter === 'Staff') return item.category.includes('Staff');
    if (filter === 'Admin') return item.category.includes('Admin');
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-slate-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {selectedLocation ? (
          <DetailPage data={selectedLocation} onBack={() => setSelectedLocation(null)} />
        ) : (
          <>
            <SummaryBar data={KARWA_DATA} />

            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#005F9E]">Accommodation Overview</h2>
                <p className="text-gray-500">Manage Staff Depots and Admin Housing Units</p>
              </div>

              <div className="flex bg-white rounded-lg shadow-sm p-1 mt-4 md:mt-0">
                {['All', 'Staff', 'Admin'].map(type => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      filter === type ? 'bg-[#005F9E] text-white shadow' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map(location => (
                <LocationCard key={location.id} data={location} onClick={setSelectedLocation} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
