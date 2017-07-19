
const axios = require('axios');
const io = require('socket.io');
const models = require('../../db/models');


var news = {
  title: null,
  text: null,
  thumbnail: null,
  media: null,
  date: null,
  source: null
};
var apiResult;
var socketResponse;

module.exports = (server) => {
  // const io = require('socket.io');
  var socket = io(server, { cookie: true });

  socket.on('connection', socket => {

    //************** GET REQUESTS *******************

    socket.on('get news', () => {

      //check if it does exist in the database (by tittle) !!!

      axios.get("https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=f97f9989c5f94e93ba130be4b6c2f09a")
        .then(function(result_google) {    
          console.log("****** How many news fetched: ", result_google.data.articles.length);

          apiResult = result_google.data.articles;
          socketResponse = [];

          for (var i = 0; i < apiResult.length; i++){

            news.title = apiResult[i].title;
            news.text = apiResult[i].description;
            news.thumbnail = apiResult[i].urlToImage;
            news.media = apiResult[i].urlToImage;
            news.date = apiResult[i].publishedAt;
            news.source = 'Google News';

            socketResponse.push(news);
          }
          // console.log(socketResponse[0]);
          socket.emit('news',
            {
              google_news : socketResponse
            }
          );

          // axios.get("https://www.reddit.com/r/news.json")
          //   .then(function(result_reddit) {    
          //     console.log("****** How many funny fetched: ", result_reddit.data.data.children.length);
          //   })
          //   .catch(e => console.log('reddit error', e));


        })
        .catch(e => console.log('google error', e));

    });

    socket.on('get user info', () => {
      // var info = {name: 'Saikal'};
      // models.StatusLikes.where({ id_status: req.params.id_status, id_user: req.params.id_user}).fetch()
      models.Profile.where({ id: 2}).fetch()
      .then(likes => {
        if (!likes) {
          throw likes;
        }
        socket.emit('res user info', likes);

        // res.status(200).send(likes);
      });
      // socket.emit('res user info', info);
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

    //***************POST REQUESTS**********************

    socket.on('status like', () => {

    });
    socket.on('news like', data => {
      console.log("********* data from news like: ", data);
    });
    socket.on('create status', () => {

    });
    socket.on('edit profile', () => {

    });
    socket.on('follow', () => {

    });
  });
};