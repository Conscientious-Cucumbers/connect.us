import axios from 'axios';

const setNewsFeed = (newsFeed) => {
  return {
    type: 'REFRESH_NEWS',
    payload: newsFeed
  };
};

const setNextNewsPage = (nextNews) => {
  return {
    type: 'SET_NEXT_NEWS_PAGE',
    payload: nextNews
  };
};

const finishNextPageFetch = () => {
  return {
    type: 'FINISH_PAGE_FETCH'
  };
};

const startNextPageFetch = () => {
  return {
    type: 'START_PAGE_FETCH'
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

export const getNextNewsPage = (pageNum) => (dispatch, getState) => {
  if (getState().isFetching) {
    return;
  }
  axios.get('/api/news', {page: pageNum})
  .then((result) => {
    dispatch(setNextNewsPage(result.data));
    dispatch(finishNextPageFetch());
  });
  // dispatch(startNextPageFetch());
  // setTimeout(() => {
  //
  // }, 2000);
};
