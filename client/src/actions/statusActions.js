import axios from 'axios';

const setTimeline = (feed) => {
  return {
    type: 'SET_TIMELINE',
    payload: feed
  };
};

const setStatusLikes = (feed) => {
  return {
    type: 'SET_STATUS_LIKES',
    payload: feed
  };
};

export const getTimeline = (username) => (dispatch, getState) => {
  axios.get(`/user/${username}/status`)

  .then((result) => {
    return dispatch(setTimeline(result.data));
  })
  .catch((err) => console.log('Error fetching timeline: ', err));
};

export const getStatusLikes = (username) => (dispatch, getState) => {
  axios.get(`/user/${username}/status/like`)

  .then((result) => {
    return dispatch(setStatusLikes(result.data));
  })
  .catch((err) => console.log('Error fetching status likes: ', err));
};


export const postStatus = (status) => (dispatch, getState) => {
  axios.post('/user/status', status)
  .then((result) => {
    dispatch(getTimeline(getState().user.username));
  })
  .catch((err) => {
    console.log('Error posting status: ', err);
  });
};

export const deleteStatus = (id) => (dispatch, getState) => {
  const state = getState();
  if (state.activeProfile && state.activeProfile.username === state.user.username) {
    axios.post('/user/status/delete', { id })
    .then((res) => {
      dispatch(getTimeline(state.user.username));
    })
    .catch((err) => {
      console.error(err);
    });
  }

};

export const postStatusLike = (id_status) => (dispatch, getState) => {
  axios.post('/user/status/togglelike', {id_status})

  .then(() => {
    dispatch(getTimeline(getState().activeProfile.username));
    dispatch(getStatusLikes(getState().activeProfile.username));
  })

  .catch(() => {

  });
};
