const models = require('../../db/models');
const Promise = require('bluebird');




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
    return models.NewsItem.forge(newsItem).save();
  })
  .then(() => {
    return models.NewsItem.where({url: newsItem.url}).fetch();
  })
  .then((result) => {
    throw result;
  })
  .catch((newsLike) => {
    newsId = newsLike.get('id');
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
  .then(() => res.status(201).send('Toggled News Liked'));
};

module.exports.toggleStatusLiked = (req, res) => {
  console.log("******** ToggledStatusLiked request body: ", req.body);
  return models.StatusLike.where({id_status: req.body.id_status, id_user: req.user.id}).fetch()
    .then((result) => {
      if(result){
        return result.destroy()
          .then(() => res.status(201).send('Unliked Status'));
      } else {
        models.StatusLike.forge({ 
            id_status: req.body.id_status, 
            id_user: req.user.id
          })
          .save()
          .then(() => res.status(201).send('Liked Status'))
          .catch(err => {
            res.status(500).send(err);
          });
      }
    })
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

// Do I need to use FindorCreate method instead ???
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


module.exports.getFollows = (req, res) => {
  var allfollowing = [];

  models.Profile.where({username: req.params.username}).fetch()
    .then(profile => {
      return models.Follow.where({id_follower: profile.attributes.id}).fetchAll()
        .then(follows => {

          Promise.map(follows.models, (eachPerson) => {
            return models.Profile.where({id: eachPerson.attributes.id_followed}).fetch()
              .then((result) => {allfollowing.push(result.attributes)})
          })
          .then(() => res.status(200).send(allfollowing));

        });
    });
};

module.exports.getFollowers = (req, res) => {
  var allfollowers = [];
  models.Profile.where({username: req.params.username}).fetch()
    .then(profile => {
      return models.Follow.where({id_followed: profile.attributes.id}).fetchAll()
        .then(follows => {

          Promise.map(follows.models, (eachPerson) => {
            return models.Profile.where({id: eachPerson.attributes.id_follower}).fetch()
              .then((result) => {allfollowers.push(result.attributes)})
          })
          .then(() => res.status(200).send(allfollowers));

        })
    })
};

