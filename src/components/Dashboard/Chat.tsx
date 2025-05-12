// Next, React, Tw
import { useState, useRef, useEffect } from 'react';

// Icon
import { Icon } from '@iconify/react/dist/iconify.js';

// Others
import axios from '@/utils/axios';

// Define message type for better type safety
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const Chat = () => {
  // Standard and Vars
  const [chatsList, setChatsList] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hey there, where would you like to go? I\'m here to assist you in planning your experience. Ask me any travel related topic.',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to handle API call
  const handleSendQuery = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message to chat
    const userMessage: ChatMessage = {
      role: 'user',
      content: inputValue,
    };
    
    setChatsList(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Prepare messages array for API
      const messages = [
        ...chatsList.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        { role: 'user', content: inputValue }
      ];
      
      // Call the API
      const response = await axios.post(
        'https://llm.nnoc.cloud:8842/ai_tourism/conversation/',
        { messages },
        {
          headers: {
            'accept': 'application/json',
            'x-api-key': 'sdvW398493llweih4jnIsfNVEIOsdfdsN349058JLKNdewfdWsdBEFJKBSDDF',
            'Content-Type': 'application/json'
          }
        }
      );
      
      // Add AI response to chat
      if (response.data && response.data.response) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: response.data.response,
        };
        setChatsList(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error('Error communicating with AI:', error);
      // Add error message to chat
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.',
      };
      setChatsList(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatsList]);
  
  return (
    <div className="flex h-full flex-col justify-end px-6 py-16">
      <div className="flex flex-grow flex-col justify-between py-2">
        <div className="flex flex-col gap-4 overflow-y-auto">
          <p className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-3xl font-bold text-transparent">
            Where to today?
          </p>
          
          {/* Chat Messages */}
          <div className="flex flex-col gap-4 pb-4">
            {chatsList.map((message, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-3 rounded-lg p-4 ${
                  message.role === 'assistant' 
                    ? 'border-l-4 border-[#ff5e00] bg-gray-50' 
                    : 'border-l-4 border-blue-600 bg-blue-50 ml-auto max-w-[90%]'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff8c00] p-2">
                    <Icon icon="ri:gemini-fill" className="text-[22px] text-white" />
                  </div>
                )}

                <p className="leading-relaxed text-gray-700">{message.content}</p>
                
                {message.role === 'user' && (
                  <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 p-2 ml-2">
                    <Icon icon="mdi:account" className="text-[22px] text-white" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-end">
          <button className="flex cursor-pointer items-center gap-1 text-[#ff5e00] transition-colors hover:text-[#e55500]">
            <Icon icon="mdi:help-circle-outline" className="text-[18px]" />
            <span>What can I ask Nomad.AI?</span>
          </button>
        </div>
      </div>
      
      <form 
        onSubmit={handleSendQuery}
        className="mt-4 flex flex-col gap-2 rounded-2xl border-2 p-3 shadow-sm transition-colors focus-within:border-[#ff5e00]"
      >
        <input
          className="w-full px-2 py-1 text-gray-700 focus:outline-none"
          placeholder="Ask me anything..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
        />
        <div className="flex justify-between">
          <button type="button" className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <Icon icon="ic:baseline-plus" className="text-[20px] text-gray-500" />
          </button>
          <button 
            type="submit" 
            className="rounded-full p-2 transition-colors hover:bg-gray-100"
            disabled={isLoading}
          >
            {isLoading ? (
              <Icon icon="eos-icons:loading" className="text-[20px] text-[#ff5e00] animate-spin" />
            ) : (
              <Icon icon="pajamas:paper-airplane" className="text-[20px] text-[#ff5e00]" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;