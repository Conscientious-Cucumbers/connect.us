import { getActiveProfile,
         getCurrentUser } from './userActions';
import { getNewsFeed } from './newsActions';
import { status } from './statusActions';

const actions = {
  getActiveProfile,
  getCurrentUser,
  getNewsFeed
};

export default actions;