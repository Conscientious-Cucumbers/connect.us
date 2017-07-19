const models = require('../../db/models');

module.exports.addNewsLiked = (req, res) => {
  console.log("******** addNewsLiked request body: ", req.body);
  console.log('Logged in user: ', req.user);
  models.NewsItem.forge({ 
      source: req.body.newsLike.source, 
      title: req.body.newsLike.title,
      thumbnail: req.body.newsLike.thumbnail,
      text: req.body.newsLike.text,
      media: req.body.newsLike.media,
      date: req.body.newsLike.date
    })
    .save()
    .then(result => {

      models.NewsLike.forge({
        id_user: req.body.user_id,
        id_news: result.attributes.id
      })
      .save()
      .then(() => res.status(201).send('Saved News Liked'))
      .catch(err => {
        res.status(500).send(err);
      });

    })
    .catch(err => {
      res.status(500).send(err);
    });
};

// Finish !!!
module.exports.addStatusLiked = (req, res) => {
  console.log("******** createNewsLiked request body: ", req.body);

  models.NewsItem.forge({ 
      source: req.body.newsLike.source, 
      title: req.body.newsLike.title,
      thumbnail: req.body.newsLike.thumbnail,
      text: req.body.newsLike.text,
      media: req.body.newsLike.media,
      date: req.body.newsLike.date
    })
    .save()
    .then(result => {

      models.NewsLike.forge({
        id_user: req.body.user_id,
        id_news: result.attributes.id
      })
      .save()
      .then(() => res.status(201).send('Saved News Liked'))
      .catch(err => {
        res.status(500).send(err);
      });

    })
    .catch(err => {
      res.status(500).send(err);
    });
};


// module.exports.createStatus = (req, res) => {
//   models.Status.forge({ 
//       text: req.body.status, 
//       id_user: req.body.user_id
//     })
//     .save()
//     .then(() => {res.status(201).send('Status Created!')}
//     .catch(err => {res.status(500).send(err);})
// }








