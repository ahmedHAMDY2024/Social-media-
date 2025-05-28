import { format, formatDistanceToNow, isToday, isYesterday } from 'date-fns';

/**
 * Format a date for display in chat UI
 * @param {Date|string} date - The date to format
 * @returns {string} - Formatted date string
 */
export const formatChatDate = (date) => {
  const dateObj = new Date(date);
  
  if (isToday(dateObj)) {
    return format(dateObj, 'h:mm a');
  }
  
  if (isYesterday(dateObj)) {
    return 'Yesterday';
  }
  
  // If within the last 7 days
  if (Date.now() - dateObj.getTime() < 7 * 24 * 60 * 60 * 1000) {
    return format(dateObj, 'EEEE'); // Day name
  }
  
  return format(dateObj, 'MMM d');
};

/**
 * Format a relative time for chat list
 * @param {Date|string} date - The date to format
 * @returns {string} - Formatted relative time
 */
export const formatRelativeTime = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};