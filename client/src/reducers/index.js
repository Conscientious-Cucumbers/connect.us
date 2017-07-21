import {combineReducers} from 'redux';
import { user, activeProfile } from './userReducers';
import { statusFeed } from './statusReducers';
import { newsFeed, newsLikes } from './newsReducer';


const allReducers = combineReducers({
    user: user,
    statusFeed: statusFeed,
    newsFeed: newsFeed,
    activeProfile: activeProfile,
    newsLikes: newsLikes
});

export default allReducers;