const axios = require('axios');
const availableSources = require('config')['sources'];
const models = require('../db/models');
var Promise = require('bluebird');

const fetchAll = function(sources) {
  const fetched_news = [];
  Promise.map(sources, function(source) {
    return fetch(source)
    .then(function(source_news) {
      fetched_news.push(...source_news);
    });
  })
  .then(function() {
    console.log(fetched_news);
    console.log('Length of news: ', fetched_news.length);
    return fetched_news;
  });
};

const fetch = function(source) {
  // axios call
    // map the object to the properties we need
    // store in the database


  return axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=f97f9989c5f94e93ba130be4b6c2f09a`)
  .then(function(result) {
    return result.data.articles;
  })
  .catch(function(e) {
    console.log('Error fetching ' + source, e);
  });
};


module.exports.start = function(interval) {
  fetchAll(availableSources);
  // setInterval(function() {
  //   fetchAll(availableSources);
  // }, interval);
};
