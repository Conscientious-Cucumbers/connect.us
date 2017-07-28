import { NewsFeedData } from '../sampleData';


export const newsFeed = (state = null, action) => {
  switch (action.type) {

  case 'REFRESH_NEWS':
    return action.payload;
  case 'SET_NEXT_NEWS_PAGE':
    return [...state, ...state.slice(0, 10)];
  }

  // return NewsFeedData;
  return state;
};


export const newsLikes = (state = null, action) => {
  switch (action.type) {

  case 'RECEIVE_NEWS_LIKED':
    return action.payload;
  default:
    return state;

  }
};

export const isFetching = (state = false, action) => {
  switch (action.type) {

  case 'START_PAGE_FETCH':
    return true;
  case 'FINISH_PAGE_FETCH':
    return false;
  default:
    return state;

  }
};
