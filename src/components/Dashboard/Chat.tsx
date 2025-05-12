// Next, React, Tw
import { useState } from 'react';

// Icon
import { Icon } from '@iconify/react/dist/iconify.js';

// Others
import axios from '@/utils/axios';

const Chat = () => {
  // Standard and Vars
  const [chatsList, setChatsList] = useState<string[]>([]);

  const handleSendQuery = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Buat kat sini Sis, then append masuk dalam state
  };
  return (
    <div className="flex h-full flex-col justify-end px-6 py-16">
      <div className="flex flex-grow flex-col justify-between py-2">
        <div className="flex flex-col gap-4">
          <p className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-3xl font-bold text-transparent">
            Where to today?
          </p>
          <div className="flex items-start gap-3 rounded-lg border-l-4 border-[#ff5e00] bg-gray-50 p-4">
            <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff8c00] p-2">
              <Icon icon="ri:gemini-fill" className="text-[22px] text-white" />
            </div>

            <p className="leading-relaxed text-gray-700">
              Hey there, where would you like to go? I&apos;m here to assist you in planning your
              experience. Ask me any travel related topic.
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end">
          <button className="flex cursor-pointer items-center gap-1 text-[#ff5e00] transition-colors hover:text-[#e55500]">
            <Icon icon="mdi:help-circle-outline" className="text-[18px]" />
            <span>What can I ask Midtrip?</span>
          </button>
        </div>
      </div>
      <form className="mt-4 flex flex-col gap-2 rounded-2xl border-2 p-3 shadow-sm transition-colors focus-within:border-[#ff5e00]">
        <input
          className="w-full px-2 py-1 text-gray-700 focus:ring-0 focus:outline-none"
          placeholder="Ask me anything..."
        />
        <div className="flex justify-between">
          <button type="button" className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <Icon icon="ic:baseline-plus" className="text-[20px] text-gray-500" />
          </button>
          <button type="submit" className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <Icon icon="pajamas:paper-airplane" className="text-[20px] text-[#ff5e00]" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
