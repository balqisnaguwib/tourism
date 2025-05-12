// Components
import Chat from '@/components/Dashboard/Chat';
import Explore from '@/components/Dashboard/Explore';
import { Icon } from '@iconify/react';

const Page = () => {
  return (
    <>
      <div className="mb-6 flex w-full items-center justify-between px-6">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
        >
          <Icon icon="material-symbols:add" className="text-[20px]" />
          <span className="font-medium">New Chat</span>
        </button>
        <div className="flex justify-center gap-2">
          {['Where', 'When', '2 Travelers', 'Budget']?.map((o: string, i: number) => (
            <button
              key={i}
              type="button"
              className="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200"
            >
              {i === 0 && <Icon icon="mdi:map-marker" className="text-gray-600" />}
              {i === 1 && <Icon icon="mdi:calendar" className="text-gray-600" />}
              {i === 2 && <Icon icon="mdi:account-group" className="text-gray-600" />}
              {i === 3 && <Icon icon="mdi:currency-usd" className="text-gray-600" />}
              {o}
            </button>
          ))}
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
            className="flex items-center gap-2 rounded-full bg-[#ff5e00] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#e55500]"
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
