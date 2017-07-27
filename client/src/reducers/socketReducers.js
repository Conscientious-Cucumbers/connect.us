

export const needsRefreshNotification = (state = null, action) => {
  switch (action.type) {
    case 'NEEDS_REFRESH_NOTIFICATION':
      console.log('needs refresh!');
      return action.payload;
      break;
    case 'RESET_NOTIFICATION_REFRESH':
      console.log('reset activated');
      return null;
      break;
    default:
      return state;
      break;
  }
};