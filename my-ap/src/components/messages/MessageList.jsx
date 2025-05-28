import React, { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';
import LoadingSpinner from '../shared/LoadingSpinner';

const MessageList = ({ messages, currentUserId, isLoading }) => {
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const renderMessages = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      );
    }
    
    if (!messages || messages.length === 0) {
      return (
        <div className="flex justify-center items-center h-64 text-gray-500">
          No messages yet. Start the conversation!
        </div>
      );
    }
    
    let result = [];
    let prevSenderId = null;
    
    messages.forEach((message, index) => {
      const isOwnMessage = message.senderId === currentUserId;
      const showAvatar = message.senderId !== prevSenderId;
      
      result.push(
        <MessageItem 
          key={message.id} 
          message={message}
          isOwnMessage={isOwnMessage}
          showAvatar={showAvatar}
        />
      );
      
      prevSenderId = message.senderId;
    });
    
    return result;
  };
  
  return (
    <div className="flex-1 overflow-y-auto p-2">
      {renderMessages()}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;