import {combineReducers} from 'redux';
import { user, activeProfile, signupOpen } from './userReducers';
import { statusFeed } from './statusReducers';
import { newsFeed, newsLikes } from './newsReducer';
import {} from './followReducers';  //add name and add it in allReducers


const allReducers = combineReducers({
    user: user,
    statusFeed: statusFeed,
    newsFeed: newsFeed,
    activeProfile: activeProfile,
    newsLikes: newsLikes,
    signupOpen: signupOpen
});

export default allReducers;