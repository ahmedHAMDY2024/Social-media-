import React, { useState } from 'react';
import { Search } from 'lucide-react';

const ChatSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full p-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search conversations..."
          value={query}
          onChange={handleChange}
          className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
        />
        <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
      </div>
    </div>
  );
};

export default ChatSearch;
