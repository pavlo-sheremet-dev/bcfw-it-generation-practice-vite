import { formatDistanceToNow } from 'date-fns';

export const formatDateToNow = (date) =>
  formatDistanceToNow(new Date(date), { addSuffix: true });
