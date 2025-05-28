import React from 'react';
import Avatar from '../shared/Avatar';
import { Phone, Video, MoreVertical } from 'lucide-react';

const MessageHeader = ({ chat }) => {
  if (!chat) return null;

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center">
        <Avatar src={chat.avatar} status={chat.status} size="md" />
        <div className="ml-3">
          <h3 className="font-semibold">{chat.name}</h3>
          {chat.status && (
            <p className="text-xs text-gray-500">
              {chat.status === 'online' ? 'Online' : 
               chat.status === 'offline' ? 'Offline' : 
               chat.status === 'busy' ? 'Busy' : 'Away'}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
          <Phone size={20} />
        </button>
        <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
          <Video size={20} />
        </button>
        <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageHeader;
