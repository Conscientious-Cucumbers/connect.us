
export const following = (state = null, action) => {
  switch (action.type) {
    
  case 'FOLLOWING':
    return action.payload;
  default:
    return state;
    
  }
};

const activeFollowed = (state = false, action) => {
  switch (action.type) {

  case 'IS_FOLLOWED':
    return action.payload;
  case 'USER_PROFILE_LOADED':
    return false;
  default:
    return state;

  }
};


export const followers = (state = null, action) => {
  switch (action.type) {

  case 'FOLLOWERS':
    return action.payload;
  default:
    return state;

  }
};
