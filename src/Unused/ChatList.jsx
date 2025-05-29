import ChatItem from './ChatItem';
import LoadingSpinner from './LoadingSpinner';

const ChatList = ({ chats, activeChat, onChatSelect, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!chats.length) {
    return (
      <div className="text-center p-6 text-gray-500">
        No conversations found.
      </div>
    );
  }

  return (
    <div className="overflow-y-auto h-full">
      {chats.map(chat => (
        <ChatItem 
          key={chat.id} 
          chat={chat} 
          isActive={activeChat === chat.id}
          onClick={onChatSelect}
        />
      ))}
    </div>
  );
};

export default ChatList;
