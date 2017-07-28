import {combineReducers} from 'redux';
import { user, activeProfile, signupOpen } from './userReducers';
import { statusFeed, statusLikes } from './statusReducers';
import { newsFeed, newsLikes, isFetching } from './newsReducers';
import { following, followers, activeFollowed } from './followReducers';
import { SeenNotifications, UnseenNotifications } from './notificationReducers';

const allReducers = combineReducers({
  user,
  statusFeed,
  statusLikes,
  newsFeed,
  activeProfile,
  activeFollowed,
  newsLikes,
  signupOpen,
  following,
  followers,
  isFetching,
  SeenNotifications, UnseenNotifications
});

export default allReducers;
