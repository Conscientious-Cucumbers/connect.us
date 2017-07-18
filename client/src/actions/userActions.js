
export const user = {
  setActiveProfile: (userInfo) => {
    return {
      type: 'USER_PROFILE_LOADED',
      payload: userInfo
    };
  },

  setCurrentUser: (user) => {
    return {
      type: 'SET_CURRENT_USER',
      payload: user
    };
  }
};