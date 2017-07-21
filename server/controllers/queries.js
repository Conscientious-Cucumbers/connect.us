const models = require('../../db/models');



//////////// POST ///////////////

module.exports.toggleNewsLiked = (req, res) => {
  // check if news exists
  const newsItem = req.body.newsLike;
  var newsId;
  models.NewsItem.where({url: newsItem.url}).fetch()
  .then((result) => {
    if (result) {
      throw result;
    } else {
      return newsItem;
    }
  })
  .then((newsItem) => {
    throw models.NewsItem.forge(newsItem).save();
  })
  .catch((newsLike) => {
    newsId = newsLike.attributes.id;
    return models.NewsLike.where({
      id_user: req.user.id,
      id_news: newsId
    }).fetch();
  })
  .then((result) => {
    if (result) {
      return result.destroy();
    } else {
      return models.NewsLike.forge({
        id_user: req.user.id,
        id_news: newsId
      }).save();
    }
  })
  .then(() => res.status(201).send('Toggled News Liked'))
};

const addNewsLiked = (newsItem, user) => {
  // console.log("******** addNewsLiked request body: ", req.body);
  // console.log('Logged in user: ', req.user);
  return models.NewsItem.where(newsItem)
  .then(result => {
    models.NewsLike.findOrCreate({
      id_user: user.id,
      id_news: result.id
    });
  });
};

const removeNewsLiked = (newsItem, user) => {
  return models.NewsLike.where({ 
    id_news: newsItem.id,
    id_user: user.id
  }).fetch()
  .then((newsLike) => {
    if (newsLike) {
      newsLike.destroy();
      // add destroy to newsItem if length is 1
    } else {
      throw newsLike;
    }
  })
  .catch(() => {
    addNewsLiked(newsItem, user)
  });
};

module.exports.addStatusLiked = (req, res) => {
  console.log("******** addStatusLiked request body: ", req.body);

  models.StatusLike.forge({ 
      id_status: req.body.id_status, 
      id_user: req.user.id
    })
    .save()
    .then(() => res.status(201).send('Saved Status Liked'))
    .catch(err => {
      res.status(500).send(err);
    });
};


module.exports.createStatus = (req, res) => {
  models.Status.forge({ 
      text: req.body.text, 
      id_user: req.user.id
    })
    .save()
    .then(() => {res.status(201).send('Status Created!')})
    .catch(err => {res.status(500).send(err)
    });
};


module.exports.follow = (req, res) => {
  models.Follow.forge({
      id_follower: req.user.id,
      id_followed: req.body.id
    })
    .save()
    .then(() => {res.status(201).send('Added Follow')})
    .catch(err => {res.status(500).send(err)
    });
};



////////////////  GET  /////////////////

module.exports.getNewsLike = (req, res) => {
  models.Profile.where({ username: req.params.username }).fetch()
    .then(profile => {
      console.log("****** getNewsLike profile: ", profile.attributes.id);
      return models.NewsLike.where({id_user: profile.attributes.id}).fetchAll();
    })
    .then(news => {
      const sendNews = [];
      return news.reduce((acc, eachnews) => {
        return acc
        .then(() => {
          return models.NewsItem.where({id: eachnews.attributes.id_news}).fetch();
        })
        .then((news) => {
          return sendNews.push(news.attributes);
        });
      }, Promise.resolve())
      .then(() => {
        res.status(200).send(sendNews)
      });
    })
    .error(err => {
      res.status(500).send('Error: ', err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

//fix !!!
module.exports.getStatusesLike = (req, res) => {
  models.Profile.where({ username: req.params.username }).fetch()
    .then(profile => {
      console.log("****** getStatusesLike profile: ", profile.attributes.id);
      return models.StatusLike.where({id_user: profile.attributes.id}).fetchAll();
    })
    .then(news => {
      const sendStatuses = [];
      return news.reduce((acc, eachstatus) => {
        return acc
        .then(() => {
          return models.Status.where({id: eachstatus.attributes.id_status}).fetch();
        })
        .then((status) => {
          return sendStatuses.push(status.attributes);
        });
      }, Promise.resolve())
      .then(() => {
        res.status(200).send(sendStatuses)
      });
    })
    .error(err => {
      res.status(500).send('Error: ', err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};


module.exports.getStatuses = (req, res) => {
models.Profile.where({ username: req.params.username }).fetch()
    .then(profile => {
      console.log("****** getStatusLike profile: ", profile.attributes.id);
      return models.Status.where({id_user: profile.attributes.id}).fetchAll();
    })
    .then(statuses => {
      res.status(200).send(statuses);
    })
};


