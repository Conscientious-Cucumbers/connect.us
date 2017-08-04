const express = require('express');
const router = express.Router();
const Queries = require('../controllers').Queries;
const ProfileController = require('../controllers').Profiles;


//GET

router.route('/info')
  .get((req, res) => {
    res.send(req.user);
  });

///////////// GET //////////////

router.route('/:username/info')
  .get(ProfileController.getInfo);

router.route('/:username/news/like')
  .get(Queries.getNewsLike);

router.route('/:username/status/like')
  .get(Queries.getStatusesLike);

router.route('/:username/status')
  .get(Queries.getStatuses);

router.route('/:username/follows')
  .get(Queries.getFollows);

router.route('/:username/followers')
  .get(Queries.getFollowers);

router.route('/notifications')
  .get(Queries.getNotifications);

///////////  POST  ////////////

router.route('/status/togglelike')
  .post(Queries.toggleStatusLiked);


router.route('/news/togglelike')
  .post(Queries.toggleNewsLiked);


router.route('/status')
  .post(Queries.createStatus);


router.route('/info')
  .post(ProfileController.updateInfo);

//fix!
router.route('/info/delete')
  .get(ProfileController.deleteOne);


router.route('/togglefollow')
  .post(Queries.toggleFollow);

router.route('/notifications/clear')
  .post(Queries.clearNotifications);


module.exports = router;




