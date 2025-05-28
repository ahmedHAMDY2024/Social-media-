import React, { useState, useEffect } from 'react';
import ChatSidebar from '../components/chat/ChatSidebar';
import MessageHeader from '../components/messages/MessageHeader';
import MessageList from '../components/messages/MessageList';
import MessageInput from '../components/messages/MessageInput';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import '../styles/chat.css';

const ChatPage = () => {
  const [activeChatId, setActiveChatId] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  
  // Current user id (would come from auth context in a real application)
  const currentUserId = '123';
  
  useEffect(() => {
    if (activeChatId) {
      fetchChatDetails();
      fetchMessages();
    }
  }, [activeChatId]);
  
  const fetchChatDetails = () => {
    // Simulate API call to get chat details
    setTimeout(() => {
      const chat = {
        id: activeChatId,
        name: activeChatId === '1' ? 'John Doe' : 
              activeChatId === '2' ? 'Jane Smith' : 
              activeChatId === '3' ? 'Team Awesome' : 'Sarah Johnson',
        avatar: '/api/placeholder/40/40',
        status: activeChatId === '1' ? 'online' : 
                activeChatId === '2' ? 'offline' : 
                activeChatId === '3' ? null : 'busy'
      };
      setActiveChat(chat);
    }, 300);
  };
  
  const fetchMessages = () => {
    setIsLoadingMessages(true);
    
    // Simulate API call to get messages
    setTimeout(() => {
      const mockMessages = [
        {
          id: '1',
          content: 'Hey there!',
          senderId: activeChatId,
          timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
          avatar: '/api/placeholder/40/40',
          status: 'read'
        },
        {
          id: '2',
          content: 'Hi! How are you doing?',
          senderId: currentUserId,
          timestamp: new Date(Date.now() - 1000 * 60 * 59).toISOString(),
          status: 'read'
        },
        {
          id: '3',
          content: 'I\'m good, thanks! Working on that project we discussed.',
          senderId: activeChatId,
          timestamp: new Date(Date.now() - 1000 * 60 * 55).toISOString(),
          avatar: '/api/placeholder/40/40',
          status: 'read'
        },
        {
          id: '4',
          content: 'Great! How\'s it going?',
          senderId: currentUserId,
          timestamp: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
          status: 'read'
        },
        {
          id: '5',
          content: 'Making good progress. Should be done by tomorrow.',
          senderId: activeChatId,
          timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
          avatar: '/api/placeholder/40/40',
          status: 'read'
        },
        {
          id: '6',
          content: 'Perfect! Looking forward to seeing it.',
          senderId: currentUserId,
          timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
          status: 'read'
        }
      ];
      
      setMessages(mockMessages);
      setIsLoadingMessages(false);
    }, 800);
  };
  
  const handleChatSelect = (chatId) => {
    setActiveChatId(chatId);
  };
  
  const handleSendMessage = (content) => {
    setSendingMessage(true);
    
    // Simulate sending a message
    setTimeout(() => {
      const newMessage = {
        id: `msg-${Date.now()}`,
        content,
        senderId: currentUserId,
        timestamp: new Date().toISOString(),
        status: 'sent'
      };
      
      setMessages(prev => [...prev, newMessage]);
      setSendingMessage(false);
      
      // Simulate receiving a reply
      setTimeout(() => {
        const reply = {
          id: `msg-${Date.now() + 1}`,
          content: 'Thanks for the update!',
          senderId: activeChatId,
          timestamp: new Date().toISOString(),
          avatar: '/api/placeholder/40/40',
          status: 'read'
        };
        
        setMessages(prev => [...prev, reply]);
      }, 1500);
      
    }, 500);
  };
  
  return (
    <div className="flex h-screen bg-white chat-container">
      <div className="hidden md:block md:w-1/3 lg:w-1/4 h-full">
        <ChatSidebar onChatSelect={handleChatSelect} activeChat={activeChatId} />
      </div>
      
      <div className="flex-1 flex flex-col h-full">
        {!activeChatId ? (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <p className="text-lg">Select a conversation to start chatting</p>
            </div>
          </div>
        ) : (
          <>
            <MessageHeader chat={activeChat} />
            <MessageList 
              messages={messages} 
              currentUserId={currentUserId}
              isLoading={isLoadingMessages}
            />
            <MessageInput 
              onSendMessage={handleSendMessage}
              isLoading={sendingMessage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
