
export const following = (state = null, action) => {
  switch (action.type) {
    case 'FOLLOWING':
      return action.payload;
      break;
  }

  return state;
};


export const followers = (state = null, action) => {
  switch (action.type) {
    case 'FOLLOWERS':
      return action.payload;
      break;
  }

  return state;
}