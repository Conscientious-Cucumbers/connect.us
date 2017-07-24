import { getActiveProfile,
         getCurrentUser,
         finishSignup } from './userActions';
import { getNewsFeed, getNewsLikes, postNewsLike } from './newsActions';
import { status } from './statusActions';
import { getFollowing, getFollowers } from './followActions'; //DID add name and add it in allReducers

const actions = {
  getActiveProfile,
  getCurrentUser,
  getNewsFeed,
  getNewsLikes,
  postNewsLike,
  finishSignup,
  getFollowing,
  getFollowers
};

export default actions;