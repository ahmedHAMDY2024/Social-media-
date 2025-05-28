export const getMockChats = () => {
  return [
    {
      id: '1',
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/40',
      lastMessage: 'Hey, how are you doing?',
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
      unreadCount: 2,
      status: 'online'
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/40',
      lastMessage: 'Let’s catch up soon!',
      timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
      unreadCount: 0,
      status: 'offline'
    }
  ];
};