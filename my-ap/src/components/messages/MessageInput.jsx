import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

const MessageInput = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    onSendMessage(message);
    setMessage('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
      <div className="flex items-center">
        <button
          type="button"
          className="text-gray-500 hover:text-blue-500 mr-2 focus:outline-none"
        >
          <Paperclip size={20} />
        </button>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white pr-12"
            disabled={isLoading}
          />
          <button
            type="button"
            className="absolute right-12 top-2 text-gray-500 hover:text-blue-500 focus:outline-none"
          >
            <Smile size={20} />
          </button>
        </div>
        <button
          type="submit"
          className={`ml-2 bg-blue-500 text-white rounded-full p-2 focus:outline-none hover:bg-blue-600 ${
            !message.trim() || isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!message.trim() || isLoading}
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;