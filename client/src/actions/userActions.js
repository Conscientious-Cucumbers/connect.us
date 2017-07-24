import axios from 'axios';

const setActiveProfile = (userInfo) => {
    return {
      type: 'USER_PROFILE_LOADED',
      payload: userInfo
    };
};

const setCurrentUser = (user) => {
  console.log('user: ', user);
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

const updateUserInfo = (username) => (dispatch, getState) => {
  axios.post('/user/info', Object.assign(getState().user, {username: username}))
  .then(() => {
    console.log('successfully updated');
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
      dispatch(setCurrentUser(Object.assign(getState().user, {username: username})));
      dispatch(updateUserInfo(username));
    } else {
      alert('Username exists!');
    }
  })
};

export const finishSignup = (formData) => (dispatch, getState) => {
  return dispatch(checkIfUserExists(formData.username));
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
    dispatch(isSignUpRequired(result.data));
    return dispatch(setCurrentUser(result.data));
  })
  .catch((error) => {
    console.error('Error fetching current user: ', error);
  });
};