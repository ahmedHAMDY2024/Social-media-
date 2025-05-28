import React from 'react';
import Avatar from '../shared/Avatar';
import { format } from 'date-fns';

const MessageItem = ({ message, isOwnMessage, showAvatar = true }) => {
  const { content, timestamp, status } = message;
  
  const formattedTime = format(new Date(timestamp), 'h:mm a');
  
  if (isOwnMessage) {
    return (
      <div className="flex flex-col items-end mb-4 px-4">
        <div className="max-w-xs md:max-w-md">
          <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none px-4 py-2">
            <p className="text-sm">{content}</p>
          </div>
          <div className="flex items-center justify-end mt-1 text-xs text-gray-500">
            <span>{formattedTime}</span>
            {status === 'sent' && <span className="ml-1">✓</span>}
            {status === 'delivered' && <span className="ml-1">✓✓</span>}
            {status === 'read' && <span className="ml-1 text-blue-500">✓✓</span>}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex mb-4 px-4">
      {showAvatar ? (
        <div className="mr-2 flex-shrink-0">
          <Avatar src={message.avatar} size="sm" />
        </div>
      ) : (
        <div className="mr-2 w-8"></div> /* Spacer when avatar is hidden */
      )}
      <div className="max-w-xs md:max-w-md">
        <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2">
          <p className="text-sm">{content}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1 inline-block">{formattedTime}</span>
      </div>
    </div>
  );
};

export default MessageItem;