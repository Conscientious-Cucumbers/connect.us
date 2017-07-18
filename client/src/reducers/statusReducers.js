import { StatusFeedData } from '../sampleData';

export const statusFeed = (state = null, action) => {
  switch (action.type) {
    case 'SET_STATUS_FEED':
      return action.payload;
      break;
  }
  return StatusFeedData;
};