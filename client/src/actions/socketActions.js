
export const connectSocket = (id) => {
  return {
    type: 'socket/connect',
    payload: { id }
  }
};

export const socketNotify = (follower_id, followed_id) => {
  return {
    type: 'socket/notify',
    payload: { follower_id, followed_id }
  }
};