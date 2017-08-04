import { getActiveProfile,
         getCurrentUser,
         finishSignup,
         updateSettings,
         deleteCurrentUser } from './userActions';
import { getNewsFeed, getNewsLikes, postNewsLike } from './newsActions';
import { getFollowing, getFollowers, toggleFollow } from './followActions';
import { getTimeline, getStatusLikes, postStatus, postStatusLike, deleteStatus } from './statusActions';
import { getNotifications, clearNotifications } from './notificationActions';

const actions = {
  getActiveProfile,
  deleteCurrentUser,
  deleteStatus,
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
  updateSettings,
  getNotifications,
  clearNotifications
};

export default actions;
