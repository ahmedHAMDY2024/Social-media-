import React, { useState, useEffect } from 'react';
import ChatSearch from './ChatSearch';
import ChatList from './ChatList';

const ChatSidebar = ({ onChatSelect, activeChat }) => {
  const [chats, setChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulating API call to fetch chats
  useEffect(() => {
    // This would typically be an API call
    setTimeout(() => {
      const mockChats = [
        {
          id: '1',
          name: 'John Doe',
          avatar: '/api/placeholder/40/40',
          lastMessage: 'Hey, how are you doing?',
          timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
          unreadCount: 2,
          status: 'online'
        },
        {
          id: '2',
          name: 'Jane Smith',
          avatar: '/api/placeholder/40/40',
          lastMessage: 'The project is going well!',
          timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
          unreadCount: 0,
          status: 'offline'
        },
        {
          id: '3',
          name: 'Team Awesome',
          avatar: '/api/placeholder/40/40',
          lastMessage: 'Mike: We need to discuss the design',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
          unreadCount: 5,
          status: null
        },
        {
          id: '4',
          name: 'Sarah Johnson',
          avatar: '/api/placeholder/40/40',
          lastMessage: 'Thanks for your help!',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
          unreadCount: 0,
          status: 'busy'
        },
      ];
      setChats(mockChats);
      setFilteredChats(mockChats);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setFilteredChats(chats);
      return;
    }
    
    const filtered = chats.filter(chat => 
      chat.name.toLowerCase().includes(query.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredChats(filtered);
  };

  return (
    <div className="flex flex-col h-full border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold">Messages</h2>
      </div>
      <ChatSearch onSearch={handleSearch} />
      <div className="flex-1 overflow-hidden">
        <ChatList 
          chats={filteredChats} 
          activeChat={activeChat} 
          onChatSelect={onChatSelect}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ChatSidebar;