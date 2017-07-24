import axios from 'axios';



const setFollowing = (following) => {
  return {
    type: 'FOLLOWING',
    payload: following
  };
};

export const getFollowing = (username) => (dispatch, getState) => {
  axios.get(`/user/${username}/follows`)
  .then((result) => {
    console.log('********** get following: ', result.data);
    dispatch(setFollowing(result.data));
  })
  .catch((err) => {
    console.error('Error fetching following list');
    console.log(err);
  });
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
    console.log('********** get followers: ', result.data);
    dispatch(setFollowers(result.data));
  })
  .catch((err) => {
    console.error('Error fetching followers list');
    console.log(err);
  });
};





