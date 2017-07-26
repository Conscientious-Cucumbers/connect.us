

export const getNotification = (state = null, action) => {
  switch (action.type) {
    case 'FOLLOW_NOTIFICATION':
      alert(action.payload);
      return action.payload;
      break;
    default:
      return state;
      break;
  }
};