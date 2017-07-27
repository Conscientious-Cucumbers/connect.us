import axios from 'axios';

const setSeenNotifications = (notifications) => {
  return {
    type: 'SET_SEEN_NOTIFICATIONS',
    payload: notifications
  };
};

const setUnseenNotifications = (notifications) => {
  return {
    type: 'SET_UNSEEN_NOTIFICATIONS',
    payload: notifications
  };
};

export const getNotifications = () => (dispatch, getState) => {
  axios.get('/user/notifications')
  .then((result) => {
    dispatch(setSeenNotifications(result.data.filter(notification => notification.is_received)));
    dispatch(setUnseenNotifications(result.data.filter(notification => !notification.is_received)));
  })
  .catch((err) => {
    console.log('Error getting notifications:');
    console.error(err);
  });
};

export const clearNotifications = () => (dispatch, getState) => {
  console.log('clearing');
  axios.post('/user/notifications/clear')
  .then((result) => {
    dispatch(getNotifications());
  })
  .catch((err) => {
    console.log('Error clearing notifications');
    console.error(err);
  });
};