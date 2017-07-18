import { user } from './userActions';
import { news } from './newsActions';
import { status } from './statusActions';

const actions = {
  setActiveProfile: user.setActiveProfile,
  refreshNews: news.refreshNews,
  setStatusFeed: status.setStatusFeed,
  setCurrentUser: user.setCurrentUser
};

export default actions;