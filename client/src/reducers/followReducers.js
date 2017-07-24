
export const following = (state = null, action) => {
  switch (action.type) {
    case 'FOLLOWING':
      return action.payload;
      break;
  }
  console.log("CALLED! FOLLOWING, state: ", state);

  return state;
};


export const followers = (state = null, action) => {
  switch (action.type) {
    case 'FOLLOWERS':
      return action.payload;
      break;
  }
  console.log("CALLED! FOLLOWERS, state: ", state);

  return state;
}