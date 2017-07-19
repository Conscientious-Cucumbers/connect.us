const express = require('express');
const router = express.Router();
const Queries = require('../controllers').Queries;


//GET

router.route('/info')
  .get((req, res) => {
    req.user.username = req.user.email.split('@')[0];
    res.send(req.user);
  });

router.route('/:username/info')
  .get((req, res) => {
    console.log(":username/info: ", req.params);
    req.user.username = req.user.email.split('@')[0];

    res.send(req.params.username === req.user.username ? req.user : {});
  });

router.route('/:username/newslike')
  .get((req, res) => {
    console.log(":username/info: ", req.params);
    res.send(req.params);
  });

router.route('/:username/statuslike')
  .get((req, res) => {
    console.log(":username/info: ", req.params);
    res.send(req.params);
  });

router.route('/:username/status')
  .get((req, res) => {
    console.log(":username/info: ", req.params);
    res.send(req.params);
  });




//POST   Finish Queries !!! 
router.route('/status/like')
  .post((req, res) => {
    console.log("********* status/like", req.body);
    res.status(201).send({ data: 'Posted!' });
  });

// router.route('/news/like')
//   .post((req, res) => {
//     console.log("********* news/like", req.body);
//     res.status(201).send({ data: 'Posted!' });
//   });
router.route('/news/like')
  .post(Queries.addNewsLiked);




router.route('/status')
  .post((req, res) => {
    console.log("********* status", req.body);
    res.status(201).send({ data: 'Posted!' });
  });

router.route('/info')
  .post((req, res) => {
    console.log("********* info", req.body);
    res.status(201).send({ data: 'Posted!' });
  });

router.route('/follow')
  .post((req, res) => {
    console.log("********* follow", req.body);
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;