const axios = require('axios');
const models = require('../db/models');
var Promise = require('bluebird');
var _ = require('lodash');

const updateNews = function() {
  console.log('Updating table...');
  fetchAll()
  .then((fetchedNews) => {
    return models.ApiNews.fetchAll()
    .then((dbNews) => {
      const news_JSON = dbNews.toJSON()
      .map(item => {
        delete item.id;
        return item;
      });
      return _.uniqBy(newsSort(fetchedNews), 'url')
      .filter((item) => {
        return !_.includes(news_JSON.map(dbItem => dbItem.url), item.url);
      })
      .concat(news_JSON);
    });
  })
  .tap((result) => {
    models.ApiNews.where('id', '!=', '0').destroy();
  })
  .then((result) => {
    Promise.map(result, (newsItem) => {
      // console.log('news item: ', newsItem);
      return models.ApiNews.forge(newsItem).save();
    });
  })
  .then(() => {
    console.log('Updated news successfully');
  })
  .error((err) => {
    console.log('Error: ', err);
  })
  .catch((err) => {
    console.log('Error inserting news: ', err);
  });
};

const newsSort = function(fetched) {
  return fetched.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const fetchAll = function() {

  return models.NewsSources.fetchAll()
  .then((result) => {
    if (result) {
      return Promise.map(result.toJSON(), function(source) {
        return fetch(source);
      })
      .then((news) => news.reduce((a, b) => a.concat(b), []));
    }
  });
};

const fetch = function(source) {
  // axios call
    // map the object to the properties we need
    // store in the database
  return axios.get(`https://newsapi.org/v1/articles?source=${source.source}&sortBy=top&apiKey=f97f9989c5f94e93ba130be4b6c2f09a`)
  .then(function(result) {
    const articles = result.data.articles;
    return articles.map(function(article) {
      return {
        title: article.title,
        thumbnail: article.urlToImage,
        text: article.description,
        media: article.urlToImage,
        url: article.url,
        date: article.publishedAt || new Date().toString(),
        id_source: source.id
      };
    });
  })
  .catch(function(e) {
    console.log('Error fetching ' + source, e);
  });
};


module.exports.start = function(interval) {
  updateNews();
  setInterval(function() {
    updateNews();
  }, interval);
};
