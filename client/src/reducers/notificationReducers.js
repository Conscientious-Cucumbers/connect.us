

export const Notifications = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATIONS':
      console.log('**** notifications: ', action.payload);
      return action.payload;
      break;
    default:
      return state;
  }
};