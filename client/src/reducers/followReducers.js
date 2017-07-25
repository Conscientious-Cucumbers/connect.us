
export const following = (state = null, action) => {
  switch (action.type) {
    case 'FOLLOWING':
      return action.payload;
      break;
  }

  return state;
};

export const activeFollowed = (state = false, action) => {
  switch(action.type) {
    case 'IS_FOLLOWED':
      console.log('calling is followed');
      return action.payload;
      break;
    case 'USER_PROFILE_LOADED':
      console.log('calling profile loaded');
      return false;
      break;
    default:
      return state;
  }
};


export const followers = (state = null, action) => {
  switch (action.type) {
    case 'FOLLOWERS':
      return action.payload;
      break;
  }

  return state;
}