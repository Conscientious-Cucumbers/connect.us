import axios from 'axios';

const setNewsFeed = (newsFeed) => {
  return {
    type: 'REFRESH_NEWS',
    payload: newsFeed
  };
};

export const getNewsFeed = () => (dispatch, getState) => {
  axios.get('/api/news')
  .then((result) => {
    return dispatch(setNewsFeed(result.data));
  })
  .catch((error) => {
    console.error('Failed to fetch news: ', error);
  });
};