

module.exports = (server) => {
  const io = require('socket.io');
  var socket = io(server, { cookie: true });

  socket.on('connection', socket => {

    //get
    socket.on('get news', () => {
      //check if it does exist in the database (by reddit id)
      // socket.emit('news', );
    });

    socket.on('get user info', () => {
      
      socket.emit('res user info', info);
    });

    socket.on('get news likes', () => {

      socket.emit('res news likes', newslikes);
    });

    socket.on('get status likes', () => {
      socket.emit('res status likes', statuslikes);
    });

    socket.on('get statuses', () => {
      socket.emit('res statuses', statuses);
    });

    //post
    socket.on('status like', () => {

    });
    socket.on('news like', () => {

    });
    socket.on('create status', () => {

    });
    socket.on('edit profile', () => {

    });
    socket.on('follow', () => {

    });
  });
};