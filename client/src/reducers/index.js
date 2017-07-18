import {combineReducers} from 'redux';
import { user } from './userReducers';
import { statusFeed } from './statusReducers';
import { newsFeed } from './newsReducer';


const allReducers = combineReducers({
    user: user,
    statusFeed: statusFeed,
    newsFeed: newsFeed
    // activeProfile: activeProfile
});

export default allReducers;