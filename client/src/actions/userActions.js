import axios from 'axios';
import { connectSocket } from './socketActions';
import { getNotifications } from './notificationActions';
import { getNewsLikes } from './newsActions';
import { getFollowing, getFollowers } from './followActions';
import { getTimeline, getStatusLikes } from './statusActions';

const setActiveProfile = (userInfo) => {
  return {
    type: 'USER_PROFILE_LOADED',
    payload: userInfo
  };
};

const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  };
};

const confirmFinishSignup = () => {
  return {
    type: 'FINISH_SIGNUP'
  };
};

const requireSignup = () => {
  return {
    type: 'REQUIRE_SIGNUP'
  };
};

const setErrorSignUp = (error) => {
  return {
    type: 'ERROR_SIGNUP',
    payload: error
  };
};

const isSignUpRequired = (user) => (dispatch, getState) => {
  if (!user.username) {
    dispatch(requireSignup());
  }
};

const updateUserInfo = (info) => (dispatch, getState) => {
  axios.post('/user/info', info)
  .then(() => {
    dispatch(getCurrentUser());
    dispatch(confirmFinishSignup());
  })
  .catch(() => {
    console.log('error updating user info');
  });
};

const checkIfUserExists = (username) => (dispatch, getState) => {
  return axios.get(`/user/${username}/info`)
  .then((result) => {
    if (!Object.keys(result.data).length) {
      const newInfo = Object.assign({}, getState().user, {username: username});
      dispatch(setCurrentUser(newInfo));
      dispatch(updateUserInfo(newInfo));
    } else {
      dispatch(setErrorSignUp({errorType: 'Username already exists'}));
    }
  });
};

export const updateSettings = (info) => (dispatch, getState) => {
  if (info.username) {
    dispatch(checkIfUserExists(info.username));
  } else {
    dispatch(updateUserInfo(Object.assign({}, getState().user, info)));
  }
};

export const finishSignup = (formData) => (dispatch, getState) => {
  return dispatch(checkIfUserExists(formData.username));
};

export const getActiveProfile = (username) => (dispatch, getState) => {
  return axios.get(`/user/${username}/info`)
  .then((result) => {
    if (Object.keys(result.data).length) {
      dispatch(getNewsLikes(username));
      dispatch(getFollowing(username));
      dispatch(getFollowers(username));
      dispatch(getStatusLikes(username));
      dispatch(getTimeline(username));
    }
    dispatch(setActiveProfile(result.data));
  })
  .catch((error) => {
    console.error('Error fetching active profile: ', error);
  });
};

export const getCurrentUser = () => (dispatch, getState) => {
  return axios.get('/user/info')
  .then((result) => {
    dispatch(connectSocket(result.data.id));
    dispatch(isSignUpRequired(result.data));
    return dispatch(setCurrentUser(result.data));
  })
  .catch((error) => {
    console.error('Error fetching current user: ', error);
  });
};

export const deleteCurrentUser = () => (dispatch, getState) => {
  return axios.post('/user/delete')
  .then((res) => {
    window.location.pathname = '/logout';
  })
  .catch((err) => {
    console.error(err);
  });
};
