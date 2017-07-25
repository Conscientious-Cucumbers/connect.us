
const axios = require('axios');
const io = require('socket.io');
const models = require('../../db/models');


module.exports = (server) => {

  const online_users = {};

    // const io = require('socket.io');
  var socket = io(server, { cookie: true });


  socket.on('connection', socket => {
    let id = socket.handshake.query.id;


  
    console.log("Socket connected: " + socket.id);

    socket.on('action', (action) => {

      if(action.type === 'socket/notify'){

        console.log('Got hello payload!', action.payload);  //user_id

        socket.emit('action', {type:'message', payload:'good day!'});
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