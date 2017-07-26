import { getActiveProfile,
         getCurrentUser,
         finishSignup,
         updateSettings } from './userActions';
import { getNewsFeed, getNewsLikes, postNewsLike } from './newsActions';
import { getFollowing, getFollowers, toggleFollow } from './followActions';
import { getTimeline, getStatusLikes, postStatus, postStatusLike } from './statusActions';

const actions = {
  getActiveProfile,
  getCurrentUser,
  getNewsFeed,
  getNewsLikes,
  postNewsLike,
  finishSignup,
  getFollowing,
  getFollowers,
  getTimeline,
  getStatusLikes,
  postStatus,
  postStatusLike,
  toggleFollow,
  updateSettings
};

export default actions;