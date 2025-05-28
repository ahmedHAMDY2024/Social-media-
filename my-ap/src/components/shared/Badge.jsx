
import React from 'react';

const Badge = ({ count, variant = 'primary' }) => {
  const variantClasses = {
    primary: 'bg-blue-500 text-white',
    danger: 'bg-red-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    secondary: 'bg-gray-300 text-gray-700'
  };

  if (!count || count === 0) return null;

  return (
    <span className={`inline-flex items-center justify-center ${variantClasses[variant]} text-xs font-bold rounded-full w-5 h-5 min-w-[1.25rem]`}>
      {count > 99 ? '99+' : count}
    </span>
  );
};

export default Badge;