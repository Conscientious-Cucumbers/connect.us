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
    console.error('Failed to fetch news');
    console.log(error);
  });
};

const setNewsLikes = (likes) => {
  return {
    type: 'RECEIVE_NEWS_LIKED',
    payload: likes
  };
};

export const getNewsLikes = (username) => (dispatch, getState) => {
  axios.get(`/user/${username}/news/like`)
  .then((result) => {
    result.data.forEach(item => {
      item.liked = true;
    });
    dispatch(setNewsLikes(result.data));
  })
  .catch((err) => {
    console.error('Error fetching news likes');
    console.log(err);
  });
};


export const postNewsLike = (newsLike) => (dispatch, getState) => {
  axios.post('/user/news/togglelike', { newsLike })
  .then((success) => {
    dispatch(getNewsLikes(getState().user.username));
  })
  .catch((err) => {
    console.error('Error posting news likes');
    console.log(err);
  });
};