
const axios = require('axios');
const io = require('socket.io');
const models = require('../../db/models');


module.exports = (server) => {

  const online_users = {};

    // const io = require('socket.io');
  var socket = io(server, { cookie: true });


  socket.on('connection', socket => {
    // let id = socket.handshake.query.id;

    console.log('what happens on connect: ', socket.handshake);

    socket.on('action', (action) => {
      const payload = action.payload;

      if (action.type === 'socket/connect') {
        let id = payload.id;
        !online_users[id] ? online_users[id] = [socket] : online_users[id].push(socket);
      };

      if(action.type === 'socket/notify'){
        if (online_users[payload.followed_id]) {
          online_users[payload.followed_id].forEach(socket => {
            socket.emit('action', {
              type: 'FOLLOW_NOTIFICATION',
              payload: payload.follower_id
            });
          });
        } else {
          console.log('not online');
          // send back a notification to the same client
          // and this sends the notification up to the notification db
        }
      }


    });





    socket.on('action', (action) => {

      if(action.type === 'server/hello'){

        console.log('Got hello payload!', action.payload);

        socket.emit('action', {type:'message', payload:'good day!'});
      }


    });



    // socket.on('get statuses', () => {
    //   socket.emit('res statuses', statuses);
    // });


    socket.on('disconnect', socket => {});

  });
};