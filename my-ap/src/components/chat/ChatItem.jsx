import React from 'react';
import Avatar from '../shared/Avatar';
import Badge from '../shared/Badge';
import { formatDistanceToNow } from 'date-fns';

const ChatItem = ({ chat, isActive, onClick }) => {
  const { id, name, avatar, lastMessage, timestamp, unreadCount, status } = chat;

  return (
    <div 
      className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${isActive ? 'bg-blue-50' : ''}`}
      onClick={() => onClick(id)}
    >
      <Avatar src={avatar} status={status} />
      <div className="flex-1 min-w-0 ml-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold truncate">{name}</h4>
          <span className="text-xs text-gray-500">
            {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
          </span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-gray-600 truncate max-w-[180px]">
            {lastMessage}
          </p>
          {unreadCount > 0 && <Badge count={unreadCount} />}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;