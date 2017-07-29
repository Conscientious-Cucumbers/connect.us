const axios = require('axios');
const availableSources = require('config')['sources'];
const models = require('../db/models');


const fetchAll = function(sources) {
  sources.forEach(source => fetch(source));
};

const fetch = function(source) {
  // axios call
    // map the object to the properties we need
    // store in the database


  axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=f97f9989c5f94e93ba130be4b6c2f09a`)
  .then(function(result_google) {
    console.log('****** How many news fetched: ', result_google.data.articles.length);

    apiResult = result_google.data.articles;
    var googleNews = [];

    for (var i = 0; i < apiResult.length; i++) {

      var news = {};

      news.title = apiResult[i].title;
      news.text = apiResult[i].description;
      news.thumbnail = apiResult[i].urlToImage;
      news.media = apiResult[i].urlToImage;
      news.date = apiResult[i].publishedAt;
      news.url = apiResult[i].url;
      news.source = source.split('-');

      googleNews.push(news);

    }

    Promise.map(googleNews, (newsItem) => {
      return models.NewsItem.where({url: newsItem.url}).fetch()
      .then((result) => {
        if (result.attributes) {
          return models.NewsLike.where({id_news: result.attributes.id}).fetchAll();
        }
        throw newsItem;
      })
      .then((result) => {
        result = result.models.map((item) => item.attributes)
                .filter((item) => item.id_user === req.user.id);
        // console.log('filtered item: ', result);
        if (result.length) {
          newsItem.liked = true;
        }
        throw null;
      })
      .catch(() => {
        return newsItem;
      });
    })
    .then((googleNews) => {
      res.send(googleNews);
    })
    .catch(e => console.log('google error', e));
  });
};


module.exports.start = function(interval) {
  setInterval(function() {
    fetchAll(availableSources);
  }, interval);
};
