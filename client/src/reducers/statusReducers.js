
export const statusFeed = (state = null, action) => {
  switch (action.type) {
    case 'SET_TIMELINE':
      return action.payload;
      break;
  }
  return state;
};

export const statusLikes = (state = null, action) => {
  switch (action.type) {
    case 'SET_STATUS_LIKES':
      return action.payload;
      break;
  }
  return state;
};