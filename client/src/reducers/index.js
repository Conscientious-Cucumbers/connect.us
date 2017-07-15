import {combineReducers} from 'redux';
import { user } from './userReducers';
import { statusFeed } from './statusReducers';


const allReducers = combineReducers({
    user: user,
    statusFeed: statusFeed
});

export default allReducers;