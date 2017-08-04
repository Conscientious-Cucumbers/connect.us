const models = require('../../db/models');
const Promise = require('bluebird');




//////////// POST ///////////////

module.exports.toggleNewsLiked = (req, res) => {
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
  return models.StatusLike.where({id_status: req.body.id_status, id_user: req.user.id}).fetch()
  .then((result) => {
    if (result) {
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
  });
};


module.exports.createStatus = (req, res) => {


  models.Status.forge({
    title: req.body.title,
    text: req.body.text,
    image: req.body.image,
    id_user: req.user.id
  })
  .save()
  .then(() => {
    res.status(201).send('Status Created!');
  })
  .catch(err => {
    res.status(500).send(err);
  });
};

module.exports.toggleFollow = (req, res) => {
  // console.log('******** ToggledFollowPOST request body: ', req.body);
  return models.Follow.where({id_follower: req.user.id, id_followed: req.body.id}).fetch()
  .then((result) => {
    if (result) {
      return result.destroy()
        .then(() => res.status(201).send('Unfollowing User'));
    } else {

      models.Follow.forge({
        id_follower: req.user.id,
        id_followed: req.body.id
      })
      .save()
      .then(() => { res.status(201).send('Following User'); })
      .catch(err => {
        res.status(500).send(err);
      });

    }
  });
};

module.exports.clearNotifications = (req, res) => {
  models.Notifications.where({id_notified: req.user.id}).fetchAll()
    .then(results => {
      if (!results) {
        throw results;
      } else {
        return Promise.map(results.models, (eachResult) => {
          return eachResult.save({is_received: true}, {method: 'update'});
        });
      }
    })
    .then(() => res.status(201).send('Notifications Cleared!'))
    .error(err => {
      res.sendstatus(500);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};


////////////////  GET  /////////////////

module.exports.getNewsLike = (req, res) => {
  models.Profile.where({ username: req.params.username }).fetch()
    .then(profile => {
      // console.log('****** getNewsLike profile: ', profile.attributes.id);
      return models.NewsLike.where({id_user: profile.attributes.id}).fetchAll({
        withRelated: ['news']
      });
    })
    .then(news => {

      // console.log(news.toJSON());
      return Promise.map(news.toJSON(), (newsItem) => {
        return models.NewsLike.where({id_news: newsItem.news.id, id_user: req.user.id}).fetch()
        .then((result) => {
          if (result) {
            newsItem.news.liked = true;
          }
          return newsItem.news;
        });
      });

    })
    .then((result) => res.send(result))
    .error(err => {
      res.status(500).send('Error: ', err);
    })
    .catch(() => {
      res.send([]);
    });
};


module.exports.getStatusesLike = (req, res) => {
  models.Profile.where({ username: req.params.username }).fetch()
    .then(profile => {
      return models.StatusLike.where({id_user: profile.attributes.id}).fetchAll({
        withRelated: ['status']
      });
    })
    .then(statuses => {
      return Promise.map(statuses.toJSON(), (status) => {
        return models.StatusLike.where({id_status: status.status.id, id_user: req.user.id}).fetch({withRelated: ['user']})
        .then((result) => {
          if (result) {
            status.status.liked = true;
          }
          return status.status;
        })
        .then((status) => {
          return models.Profile.where({id: status.id_user}).fetch()
            .then((result) => {
              status.user_obj = result.toJSON();
              return status;
            });
        });
      });
    })
    .then((statuses) => {
      res.status(200).send(statuses);
    })
    .error(err => {
      res.status(500).send('Error: ', err);
    })
    .catch(() => {
      res.send([]);
    });
};



module.exports.getStatuses = (req, res) => {
  models.Profile.where({ username: req.params.username }).fetch()
  .then(profile => {
    //console.log('****** getStatusLike profile: ', profile.attributes.id);
    return models.Status.where({id_user: profile.get('id')}).fetchAll();
  })
  .then(statuses => {
    return Promise.map(statuses.toJSON(), (eachstatus) => {
      return models.StatusLike.where({id_status: eachstatus.id, id_user: req.user.id}).fetch()
        .then((result) => {
          if (result) {
            eachstatus.liked = true;
          }
          return eachstatus;
        });
    });
  })
  .then((statuses) => {
    res.status(200).send(statuses);
  });
};



module.exports.getFollows = (req, res) => {
  var allfollowing = [];

  models.Profile.where({username: req.params.username}).fetch()
    .then(profile => {
      return models.Follow.where({id_follower: profile.attributes.id}).fetchAll()
        .then(follows => {

          Promise.map(follows.models, (eachPerson) => {
            return models.Profile.where({id: eachPerson.attributes.id_followed}).fetch()
            .then((result) => { allfollowing.push(result.attributes); });
          })
          .then(() => res.status(200).send(allfollowing));

        });
    });
};


module.exports.deleteStatus = (req, res) => {
  models.Status.forge({id: req.body.id}).destroy()
  .then(confirmation => {
    res.send('Status deleted');
  })
  .catch(error => {
    console.log('could not delete profile based on the following error: ', error);
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
            .then((result) => {
              allfollowers.push(result.attributes);
            });
          })
          .then(() => res.status(200).send(allfollowers));

        });
    });
};



module.exports.getUsersPartialQuery = (req, res) => {
  var userMatches = [];
  models.Profile.fetchAll()
  .then(profiles => {
    return profiles.toJSON().filter((user) => user.username.includes(req.params.partialQuery));
  })
  .then(patialMatches => {
    res.status(200).send(patialMatches);
  });
};


//module.exports.getUsersPartialQuery({params:{partialQuery:'max'}})


module.exports.getNotifications = (req, res) => {
  var allNotifiers = [];
  return models.Notifications.where({id_notified: req.user.id}).fetchAll()
  .then(notifications => {
    if (!notifications) {
      throw notifications;
    } else {
      Promise.map(notifications.models, (eachPerson) => {
        return models.Profile.where({id: eachPerson.get('id_notifier')}).fetch()
          .then((result) => {
            result.set('notification_type', 'FOLLOW_NOTIFICATION');
            result.set('is_received', eachPerson.get('is_received'));
            allNotifiers.push(result.attributes);
          });
      })
      .then(() => {
        res.status(200).send(allNotifiers);
      });
    }
  })
  .error(err => {
    res.status(500).send('Error: ', err);
  })
  .catch(() => {
    res.send([]);
  });
};
