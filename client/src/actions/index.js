import { getActiveProfile,
         getCurrentUser } from './userActions';
import { getNewsFeed, getNewsLikes, postNewsLike } from './newsActions';
import { status } from './statusActions';

const actions = {
  getActiveProfile,
  getCurrentUser,
  getNewsFeed,
  getNewsLikes,
  postNewsLike
};

export default actions;