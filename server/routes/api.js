'use strict';
const express = require('express');
const router = express.Router();
const axios = require('axios');


var apiResult;
var googleNews;

router.route('/news')
  .get((req, res) => {
    axios.get("https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=f97f9989c5f94e93ba130be4b6c2f09a")
        .then(function(result_google) {    
          console.log("****** How many news fetched: ", result_google.data.articles.length);

          apiResult = result_google.data.articles;
          googleNews = [];

          for (var i = 0; i < apiResult.length; i++) {

            var news = {};

            news.title = apiResult[i].title;
            news.text = apiResult[i].description;
            news.thumbnail = apiResult[i].urlToImage;
            news.media = apiResult[i].urlToImage;
            news.date = apiResult[i].publishedAt;
            news.source = 'Google News';

            googleNews.push(news);

          };
          res.status(200).send(googleNews);

          // console.log(googleNews[0]);

          // axios.get("https://www.reddit.com/r/news.json")
          //   .then(function(result_reddit) {    
          //     console.log("****** How many funny fetched: ", result_reddit.data.data.children.length);
          //   })
          //   .catch(e => console.log('reddit error', e));


        })
        .catch(e => console.log('google error', e));
  })
  .post((req, res) => {
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;
