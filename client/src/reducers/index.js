import {combineReducers} from 'redux';
import { user, activeProfile, signupOpen } from './userReducers';
import { statusFeed, statusLikes } from './statusReducers';
import { newsFeed, newsLikes } from './newsReducers';
import { following, followers, activeFollowed } from './followReducers';  // DID add name and add it in allReducers
import { SeenNotifications, UnseenNotifications } from './notificationReducers';

const allReducers = combineReducers({
    user: user,
    statusFeed: statusFeed,
    statusLikes: statusLikes,
    newsFeed: newsFeed,
    activeProfile: activeProfile,
    activeFollowed: activeFollowed,
    newsLikes: newsLikes,
    signupOpen: signupOpen,
    following: following,
    followers: followers,
    SeenNotifications, UnseenNotifications
});

export default allReducers;