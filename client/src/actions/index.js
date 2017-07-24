import { getActiveProfile,
         getCurrentUser,
         finishSignup } from './userActions';
import { getNewsFeed, getNewsLikes, postNewsLike } from './newsActions';
<<<<<<< HEAD
import { status } from './statusActions';
import { getFollowing, getFollowers } from './followActions'; //DID add name and add it in allReducers
=======
import { getTimeline, getStatusLikes, postStatus, postStatusLike } from './statusActions';
import {  } from './followActions';
>>>>>>> (feat) adds status rendering, post status, status like and post status like

const actions = {
  getActiveProfile,
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
  postStatusLike
};

export default actions;