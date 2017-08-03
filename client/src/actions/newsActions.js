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

const finishFetchingPages = () => {
  return {
    type: 'NO_MORE_RESULTS'
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
    if (getState().user.username === username) {
      result.data.forEach(item => {
        item.liked = true;
      });
    }
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
    if (getState().activeProfile) {
      dispatch(getNewsLikes(getState().activeProfile.username));
    }
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
  dispatch(startNextPageFetch());
  axios.get('/api/news', {
    params: {page: pageNum}
  })
  .then((result) => {
    if (result.data.length) {
      dispatch(setNextNewsPage(result.data));
      dispatch(finishNextPageFetch());
    } else {
      dispatch(finishFetchingPages());
    }
  });
  // dispatch(startNextPageFetch());
  // setTimeout(() => {
  //
  // }, 2000);
};
