'use strict';
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Promise = require('bluebird');
const models = require('../../db/models');


router.route('/news')
  .get((req, res) => {
    models.ApiNews.forge()
    .fetchPage({
      pageSize: 10,
      withRelated: ['source'],
      page: req.query.page || 1// Page number in params ???
    })
    .then(function (pageResults) {
      //console.log("****** pageResults.toJSON(): ", pageResults.toJSON());
      return Promise.map(pageResults.toJSON(), (pageresult) => {
        pageresult.source = pageresult.source.name;
        delete pageresult.id_source;
        delete pageresult.id;

        //console.log("*********pageresult: ", pageresult);
        return models.NewsItem.where({url: pageresult.url}).fetch()
        .then((result) => {
          if (result.attributes) {
            return models.NewsLike.where({id_news: result.attributes.id}).fetchAll();
          }
          throw pageresult;
        })
        .then((result) => {
          result = result.models.map((item) => item.attributes)
                  .filter((item) => item.id_user === req.user.id);
          if (result.length) {
            console.log("******* pageresult.liked: ", pageresult.title)
            pageresult.liked = true;
          }
          throw null;
        })
        .catch(() => {
          return pageresult;
        });
      })
      .then((pageResults) => {
        console.log("********** pageResults: ", pageResults);
        res.status(201).send(pageResults);
      })
      .catch(e => console.log('Error fetching news: ', e));

    });

  });

module.exports = router;
