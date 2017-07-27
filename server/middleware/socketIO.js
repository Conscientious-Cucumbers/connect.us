const axios = require('axios');
const io = require('socket.io');
const models = require('../../db/models');


module.exports = (server) => {

  const online_users = {};

    // const io = require('socket.io');
  var socket = io(server, { cookie: true });


  socket.on('connection', socket => {
    // let id = socket.handshake.query.id;
    var id = null;

    socket.on('action', (action) => {
      const payload = action.payload;

      console.log('***** online users: ', online_users);

      if (action.type === 'socket/connect') {
        var is_received = false;
        id = payload.id;
        !online_users[id] ? online_users[id] = [socket] : online_users[id].push(socket);
      };

      if(action.type === 'socket/notify') {
        if (online_users[payload.followed_id]) {
          models.Profile.where({id: payload.follower_id}).fetch()
          .then((result) => {
            online_users[payload.followed_id].forEach(socket => {
              socket.emit('action', {
                notification_type: 'FOLLOW_NOTIFICATION',
                is_received: false,           
                payload: result.attributes
              });
            });
          });
        }

        //Query:
        models.Notifications.forge({
            id_notifier: payload.follower_id,
            id_notified: payload.followed_id,
            type: 'FOLLOW_NOTIFICATION',
            is_received: is_received
          })
          .save()
          .catch(err => {console.log("Error: ", err)});
      }

    });


    socket.on('disconnect', socket => {
      if (online_users[id]) {
        online_users[id].length <= 1 ? delete online_users[id] : online_users[id].splice(online_users[id].indexOf(socket), 1);
      }
    });

  });
};