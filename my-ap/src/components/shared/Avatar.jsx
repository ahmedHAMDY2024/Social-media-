import React from 'react';

const Avatar = ({ src, alt, size = 'md', status }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className="relative">
      <img 
        src={src || '/api/placeholder/40/40'} 
        alt={alt || 'User avatar'} 
        className={`${sizeClasses[size]} rounded-full object-cover border-2 border-gray-200`} 
      />
      {status && (
        <span className={`absolute bottom-0 right-0 block w-3 h-3 rounded-full border-2 border-white ${
          status === 'online' ? 'bg-green-500' : 
          status === 'offline' ? 'bg-gray-400' : 
          status === 'busy' ? 'bg-red-500' : 'bg-yellow-500'
        }`} />
      )}
    </div>
  );
};

export default Avatar;
