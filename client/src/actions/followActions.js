import axios from 'axios';
import { socketNotify } from './socketActions';



const setFollowing = (following) => {
  return {
    type: 'FOLLOWING',
    payload: following
  };
};

export const getFollowing = (username) => (dispatch, getState) => {
  axios.get(`/user/${username}/follows`)
  .then((result) => {
    // console.log('********** get following: ', result.data);
    dispatch(setFollowing(result.data));
  })
  .catch((err) => {
    console.error('Error fetching following list');
    console.log(err);
  });
};

const isFollowing = (followers, state) => {
  const isFollowed = followers.reduce((wasFound, follower) => {
    return wasFound || follower.username === state.user.username
  }, false);

  return {
    type: 'IS_FOLLOWED',
    payload: isFollowed
  };
};


const setFollowers = (followers) => {
  return {
    type: 'FOLLOWERS',
    payload: followers
  };
};

export const getFollowers = (username) => (dispatch, getState) => {
  axios.get(`/user/${username}/followers`)
  .then((result) => {
    dispatch(isFollowing(result.data, getState()));
    // console.log('********** get followers: ', result.data);
    dispatch(setFollowers(result.data));
  })
  .catch((err) => {
    console.error('Error fetching followers list');
    console.log(err);
  });
};


export const toggleFollow = (id) => (dispatch, getState) => {
  // dispatch a send notification action
  axios.post('/user/togglefollow', { id })
  .catch((err) => {
    console.log('Error toggling follow: ', err);
  })
  .then(() => {
    if (!getState().activeFollowed) {
      dispatch(socketNotify(getState().user.id, id));
    }
    return dispatch(getFollowers(getState().activeProfile.username));
  });
};


