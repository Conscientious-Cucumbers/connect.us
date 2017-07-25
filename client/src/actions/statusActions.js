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
    console.log('statuses: ', result.data);
    return dispatch(setTimeline(result.data));
  })
  .catch((err) => console.log('Error fetching timeline: ', err));
};

export const getStatusLikes = (username) => (dispatch, getState) => {
  axios.get(`/user/${username}/status/like`)

  .then((result) => {
    console.log('status likes: ', result.data);
    return dispatch(setStatusLikes(result.data));
  })
  .catch((err) => console.log('Error fetching status likes: ', err));
};

export const postStatus = (text) => (dispatch, getState) => {
  axios.post(`/user/status`, { text })

  .then((result) => {
    console.log('Success posting status --> ', result.data);
    dispatch(getTimeline(getState().user.username));
  })
  .catch((err) => {
    console.log('Error posting status: ', err);
  })
};

export const postStatusLike = (id_status) => (dispatch, getState) => {
  axios.post('/user/status/togglelike', {id_status})

  .then(() => {
    console.log('status like posted successfully');
    dispatch(getTimeline(getState().activeProfile.username));
    dispatch(getStatusLikes(getState().activeProfile.username));
  })

  .catch(() => {

  });
};