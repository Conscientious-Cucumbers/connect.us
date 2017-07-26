import axios from 'axios';
import { connectSocket } from './socketActions';
import { getNotifications } from './notificationActions';

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

const isSignUpRequired = (user) => (dispatch, getState) => {
  if (!user.username) {
    dispatch(requireSignup());
  }
};

const updateUserInfo = (info) => (dispatch, getState) => {
  axios.post('/user/info', info)
  .then(() => {
    dispatch(confirmFinishSignup());
    dispatch(getCurrentUser());
  })
  .catch(() => {
    console.log('error updating user info');
  });
};

const checkIfUserExists = (username) => (dispatch, getState) => {
  return axios.get(`/user/${username}/info`)
  .then((result) => {
    if (!Object.keys(result.data).length) {
      const newInfo = Object.assign(getState().user, {username: username});
      dispatch(setCurrentUser(newInfo));
      dispatch(updateUserInfo(newInfo));
    } else {
      alert('Username exists!');
    }
  })
};

export const updateSettings = (info) => (dispatch, getState) => {
  dispatch(updateUserInfo(Object.assign(getState().user, info)));
};

export const finishSignup = (formData) => (dispatch, getState) => {
  return dispatch(checkIfUserExists(formData.username));
};

export const getActiveProfile = (username) => (dispatch, getState) => {
  return axios.get(`/user/${username}/info`)
  .then((result) => {
    dispatch(setActiveProfile(result.data));
  })
  .catch((error) => {
    console.error('Error fetching active profile: ', error);
  });
};

export const getCurrentUser = () => (dispatch, getState) => {
  return axios.get(`/user/info`)
  .then((result) => {
    dispatch(connectSocket(result.data.id));
    dispatch(getNotifications());
    dispatch(isSignUpRequired(result.data));
    return dispatch(setCurrentUser(result.data));
  })
  .catch((error) => {
    console.error('Error fetching current user: ', error);
  });
};