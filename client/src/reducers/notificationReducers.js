

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

export const UnseenNotifications = (state = null, action) => {
  switch (action.type) {
    case 'SET_UNSEEN_NOTIFICATIONS':
      console.log('**** unseen notifications: ', action.payload);
      return action.payload;
      break;
    case 'FOLLOW_NOTIFICATION':
      console.log('**** unseen notifications on emit: ', [...state, action.payload]);
      return [...state, action.payload];
      break;
    default:
      return state;
  }
};