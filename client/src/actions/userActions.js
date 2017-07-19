import axios from 'axios';

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

export const getActiveProfile = (username) => (dispatch, getState) => {
  return axios.get(`/user/${username}/info`)
  .then((result) => {
    return dispatch(setActiveProfile(result.data));
  })
  .catch((error) => {
    console.error('Error fetching active profile: ', error);
  });
};

export const getCurrentUser = () => (dispatch, getState) => {
  return axios.get(`/user/info`)
  .then((result) => {
    return dispatch(setCurrentUser(result.data));
  })
  .catch((error) => {
    console.error('Error fetching current user: ', error);
  });
};