
export const connectSocket = (id) => {
  return {
    type: 'server/connect',
    payload: id
  }
};