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
     page: req.query.page || 1// Page number in params ???
    })
    .then(function (pageResults) {

      Promise.map(pageResults, (pageresult) => {
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
            pageresult.liked = true;
          }
          throw null;
        })
        .catch(() => {
          return pageresult;
        });
      })
      //check if it is still referencing to the 'pageResults' from pagination:
      .then((pageResults) => {
        res.status(201).send(pageResults);
      })
      .catch(e => console.log('error', e));

    });

  })

module.exports = router;
