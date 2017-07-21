import { NewsFeedData } from '../sampleData';


export const newsFeed = (state = null, action) => {
  switch (action.type) {
    case 'REFRESH_NEWS':
      return action.payload;
      break;
  }
  // return NewsFeedData;
  return state;
};


export const newsLikes = (state = null, action) => {
  switch (action.type) {
    case 'RECEIVE_NEWS_LIKED':
      return action.payload;
      break;
  }

  return state;
}