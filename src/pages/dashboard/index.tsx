// Components
import Chat from '@/components/Dashboard/Chat';
import Explore from '@/components/Dashboard/Explore';
import { Icon } from '@iconify/react';
import { useState, useRef, useEffect } from 'react';
import { WhereFilter, WhenFilter, TravelersFilter, BudgetFilter } from '@/components/Dashboard/Filters';

const Page = () => {
  // Filter popup states
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  
  // Filter refs for click outside detection
  const whereRef = useRef<HTMLDivElement>(null);
  const whenRef = useRef<HTMLDivElement>(null);
  const travelersRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);
  
  // Close filter when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openFilter === 'where' && 
        whereRef.current && 
        !whereRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(null);
      }
      if (
        openFilter === 'when' && 
        whenRef.current && 
        !whenRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(null);
      }
      if (
        openFilter === 'travelers' && 
        travelersRef.current && 
        !travelersRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(null);
      }
      if (
        openFilter === 'budget' && 
        budgetRef.current && 
        !budgetRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(null);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openFilter]);
  
  // Toggle filter popup
  const toggleFilter = (filter: string) => {
    if (openFilter === filter) {
      setOpenFilter(null);
    } else {
      setOpenFilter(filter);
    }
  };
  
  return (
    <>
      <div className="mb-6 flex w-full items-center justify-between px-6">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-[#ff5e00] px-4 py-2 text-white transition-colors hover:bg-[#0066cc]"
        >
          <Icon icon="material-symbols:add" className="text-[20px]" />
          <span className="font-medium">New Chat</span>
        </button>
        <div className="flex justify-center gap-2">
          <div ref={whereRef} className="relative">
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full ${
                openFilter === 'where' 
                  ? 'bg-[#0066cc] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-4 py-2 text-sm font-medium transition-colors`}
              onClick={() => toggleFilter('where')}
            >
              <Icon 
                icon="mdi:map-marker" 
                className={openFilter === 'where' ? 'text-white' : 'text-gray-600'} 
              />
              Where
            </button>
            <WhereFilter 
              isOpen={openFilter === 'where'} 
              onClose={() => setOpenFilter(null)} 
            />
          </div>
          
          <div ref={whenRef} className="relative">
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full ${
                openFilter === 'when' 
                  ? 'bg-[#0066cc] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-4 py-2 text-sm font-medium transition-colors`}
              onClick={() => toggleFilter('when')}
            >
              <Icon 
                icon="mdi:calendar" 
                className={openFilter === 'when' ? 'text-white' : 'text-gray-600'} 
              />
              When
            </button>
            <WhenFilter 
              isOpen={openFilter === 'when'} 
              onClose={() => setOpenFilter(null)} 
            />
          </div>
          
          <div ref={travelersRef} className="relative">
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full ${
                openFilter === 'travelers' 
                  ? 'bg-[#0066cc] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-4 py-2 text-sm font-medium transition-colors`}
              onClick={() => toggleFilter('travelers')}
            >
              <Icon 
                icon="mdi:account-group" 
                className={openFilter === 'travelers' ? 'text-white' : 'text-gray-600'} 
              />
              2 Travelers
            </button>
            <TravelersFilter 
              isOpen={openFilter === 'travelers'} 
              onClose={() => setOpenFilter(null)} 
            />
          </div>
          
          <div ref={budgetRef} className="relative">
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full ${
                openFilter === 'budget' 
                  ? 'bg-[#0066cc] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-4 py-2 text-sm font-medium transition-colors`}
              onClick={() => toggleFilter('budget')}
            >
              <Icon 
                icon="mdi:currency-usd" 
                className={openFilter === 'budget' ? 'text-white' : 'text-gray-600'} 
              />
              Budget
            </button>
            <BudgetFilter 
              isOpen={openFilter === 'budget'} 
              onClose={() => setOpenFilter(null)} 
            />
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
          >
            <Icon icon="mdi:account-plus" className="text-gray-600" />
            Invite
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#ff5e00] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0066cc]"
          >
            <Icon icon="mdi:airplane" className="text-white" />
            Create Trip
          </button>
        </div>
      </div>

      <div className="container mx-auto flex flex-grow gap-6 px-4">
        <div className="h-full w-1/2 rounded-xl border border-gray-100 bg-white shadow-sm">
          <Chat />
        </div>
        <div className="h-full w-1/2 rounded-xl border border-gray-100 bg-white shadow-sm">
          <Explore />
        </div>
      </div>
    </>
  );
};

export default Page;