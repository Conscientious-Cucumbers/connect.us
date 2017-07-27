

export const SeenNotifications = (state = null, action) => {
  switch (action.type) {
    case 'SET_SEEN_NOTIFICATIONS':
      console.log('**** seen notifications: ', action.payload);
      return action.payload;
      break;
    default:
      return state;
  }
};

export const UnseenNotifications = (state, action) => {
  switch (action.type) {
    case 'SET_UNSEEN_NOTIFICATIONS':
      console.log('**** unseen notifications: ', action.payload);
      return action.payload;
      break;
    case 'NEEDS_REFRESH_NOTIFICATION':
      console.log('unseen notifications on emit: ', state);
      return state;
      break;
    default:
      return null;
  }
};