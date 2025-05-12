import React, { useState } from 'react';
import { Icon } from '@iconify/react';

// Filter components for dashboard
interface FilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// Where filter - Malaysia locations
const WhereFilter: React.FC<FilterPopupProps> = ({ isOpen, onClose }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  
  const locations = [
    'Kuala Lumpur',
    'Penang',
    'Langkawi',
    'Melaka',
    'Johor Bahru',
    'Ipoh',
    'Kota Kinabalu',
    'Kuching',
    'Cameron Highlands',
    'Perhentian Islands'
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute top-12 left-0 z-50 w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
      <div className="mb-2 flex justify-between">
        <h3 className="font-semibold text-gray-700">Destination</h3>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <Icon icon="mdi:close" className="text-lg" />
        </button>
      </div>
      
      <div className="mb-3">
        <div className="relative">
          <Icon icon="mdi:magnify" className="absolute left-3 top-2.5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search in Malaysia" 
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 focus:border-[#0066cc] focus:outline-none"
          />
        </div>
      </div>
      
      <div className="max-h-60 overflow-y-auto">
        {locations.map((location, index) => (
          <div 
            key={index}
            className={`mb-2 cursor-pointer rounded-lg p-2 hover:bg-blue-50 ${
              selectedLocation === location ? 'bg-blue-50 border-l-2 border-[#0066cc]' : ''
            }`}
            onClick={() => setSelectedLocation(location)}
          >
            <div className="flex items-center">
              <Icon icon="mdi:map-marker" className="mr-2 text-[#ff5e00]" />
              <span>{location}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 flex justify-end border-t border-gray-100 pt-3">
        <button 
          type="button" 
          onClick={onClose}
          className="rounded-full bg-[#ff5e00] px-4 py-1.5 text-sm text-white hover:bg-[#0066cc]"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

// When filter - Calendar
const WhenFilter: React.FC<FilterPopupProps> = ({ isOpen, onClose }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  
  if (!isOpen) return null;

  return (
    <div className="absolute top-12 right-0 z-50 w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
      <div className="mb-3 flex justify-between">
        <h3 className="font-semibold text-gray-700">Trip Dates</h3>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <Icon icon="mdi:close" className="text-lg" />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-gray-500">Check in</label>
          <div className="relative mt-1">
            <Icon icon="mdi:calendar" className="absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="date" 
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 focus:border-[#0066cc] focus:outline-none"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs text-gray-500">Check out</label>
          <div className="relative mt-1">
            <Icon icon="mdi:calendar" className="absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="date" 
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 focus:border-[#0066cc] focus:outline-none"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <button className="rounded-full border border-gray-200 px-3 py-1 text-xs hover:bg-gray-50">Today</button>
        <button className="rounded-full border border-gray-200 px-3 py-1 text-xs hover:bg-gray-50">Tomorrow</button>
        <button className="rounded-full border border-gray-200 px-3 py-1 text-xs hover:bg-gray-50">This weekend</button>
        <button className="rounded-full border border-gray-200 px-3 py-1 text-xs hover:bg-gray-50">Next week</button>
      </div>
      
      <div className="mt-4 flex justify-end border-t border-gray-100 pt-3">
        <button 
          type="button" 
          onClick={onClose}
          className="rounded-full bg-[#ff5e00] px-4 py-1.5 text-sm text-white hover:bg-[#0066cc]"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

// Travelers filter
const TravelersFilter: React.FC<FilterPopupProps> = ({ isOpen, onClose }) => {
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  
  const adjustCount = (type: 'adult' | 'child', adjustment: number) => {
    if (type === 'adult') {
      const newCount = adultCount + adjustment;
      if (newCount >= 1 && newCount <= 10) {
        setAdultCount(newCount);
      }
    } else {
      const newCount = childCount + adjustment;
      if (newCount >= 0 && newCount <= 10) {
        setChildCount(newCount);
      }
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="absolute top-12 right-0 z-50 w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
      <div className="mb-3 flex justify-between">
        <h3 className="font-semibold text-gray-700">Travelers</h3>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <Icon icon="mdi:close" className="text-lg" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Adults</p>
            <p className="text-xs text-gray-500">Age 18+</p>
          </div>
          <div className="flex items-center">
            <button 
              type="button"
              onClick={() => adjustCount('adult', -1)}
              disabled={adultCount <= 1}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                adultCount <= 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon icon="mdi:minus" />
            </button>
            <span className="mx-3 w-5 text-center">{adultCount}</span>
            <button 
              type="button"
              onClick={() => adjustCount('adult', 1)}
              disabled={adultCount >= 10}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                adultCount >= 10 ? 'bg-gray-100 text-gray-400' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon icon="mdi:plus" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Children</p>
            <p className="text-xs text-gray-500">Age 0-17</p>
          </div>
          <div className="flex items-center">
            <button 
              type="button"
              onClick={() => adjustCount('child', -1)}
              disabled={childCount <= 0}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                childCount <= 0 ? 'bg-gray-100 text-gray-400' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon icon="mdi:minus" />
            </button>
            <span className="mx-3 w-5 text-center">{childCount}</span>
            <button 
              type="button"
              onClick={() => adjustCount('child', 1)}
              disabled={childCount >= 10}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                childCount >= 10 ? 'bg-gray-100 text-gray-400' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon icon="mdi:plus" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end border-t border-gray-100 pt-3">
        <button 
          type="button" 
          onClick={onClose}
          className="rounded-full bg-[#ff5e00] px-4 py-1.5 text-sm text-white hover:bg-[#0066cc]"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

// Budget filter
const BudgetFilter: React.FC<FilterPopupProps> = ({ isOpen, onClose }) => {
  const [minBudget, setMinBudget] = useState(500);
  const [maxBudget, setMaxBudget] = useState(2000);
  
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-12 right-0 z-50 w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
      <div className="mb-3 flex justify-between">
        <h3 className="font-semibold text-gray-700">Budget (MYR)</h3>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <Icon icon="mdi:close" className="text-lg" />
        </button>
      </div>
      
      <div className="mb-6">
        <div className="mb-2 flex justify-between">
          <span className="text-sm text-gray-600">RM {minBudget}</span>
          <span className="text-sm text-gray-600">RM {maxBudget}</span>
        </div>
        
        <div className="relative h-2 w-full rounded-full bg-gray-200">
          <div 
            className="absolute top-0 h-2 rounded-full bg-[#0066cc]"
            style={{ 
              left: `${(minBudget / 5000) * 100}%`, 
              width: `${((maxBudget - minBudget) / 5000) * 100}%` 
            }}
          ></div>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={minBudget}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value < maxBudget) setMinBudget(value);
            }}
            className="absolute top-0 h-2 w-full cursor-pointer appearance-none bg-transparent"
          />
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={maxBudget}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value > minBudget) setMaxBudget(value);
            }}
            className="absolute top-0 h-2 w-full cursor-pointer appearance-none bg-transparent"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-gray-500">Min Budget</label>
          <div className="relative mt-1">
            <Icon icon="mdi:currency-usd" className="absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="number" 
              min="500"
              max="4900"
              step="100"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 focus:border-[#0066cc] focus:outline-none"
              value={minBudget}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value >= 500 && value < maxBudget) setMinBudget(value);
              }}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs text-gray-500">Max Budget</label>
          <div className="relative mt-1">
            <Icon icon="mdi:currency-usd" className="absolute left-3 top-2.5 text-gray-400" />
            <input 
              type="number"
              min="600"
              max="5000"
              step="100" 
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 focus:border-[#0066cc] focus:outline-none"
              value={maxBudget}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value <= 5000 && value > minBudget) setMaxBudget(value);
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end border-t border-gray-100 pt-3">
        <button 
          type="button" 
          onClick={onClose}
          className="rounded-full bg-[#ff5e00] px-4 py-1.5 text-sm text-white hover:bg-[#0066cc]"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export { WhereFilter, WhenFilter, TravelersFilter, BudgetFilter };