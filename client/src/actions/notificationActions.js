import axios from 'axios';

const setNotifications = (notifications) => {
  return {
    type: 'SET_NOTIFICATIONS',
    payload: notifications
  };
};

export const getNotifications = () => (dispatch, getState) => {
  axios.get('/user/notifications')
  .then((result) => {
    dispatch(setNotifications(result.data));
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