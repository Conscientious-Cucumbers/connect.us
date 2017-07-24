const models = require('../models');


exports.seed = function (knex, Promise) {
  //deletes data  (can remove if needs)
  return knex('profiles').del()
    .then(() => models.Profile.forge({
        first: 'System',
        last: 'Admin',
        display: 'Administrator',
        email: 'admin@domain.com'
      }).save())
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: 'admin123',
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })
    .catch(() => {
      console.log('WARNING: defualt user already exists.');
    })


    .then(() => models.Profile.forge({
        first: 'Alena',
        last: 'Ken',
        display: 'Alena Ken',
        email: 'alena@fake.com',
        phone: '6503338888', 
        username: 'alenaken',
        profile_picture: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/19905406_1581933851845494_6752763330189292945_n.jpg?oh=b4c5305b80061ad017cfd85afc2fc30f&oe=59FC9B40'
      }).save())
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: '123',
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })

    .then(() => models.Profile.forge({
        first: 'Max',
        last: 'Ho',
        display: 'Max Ho',
        email: 'max@fake.com',
        phone: '6503337777', 
        username: 'maxho',
        profile_picture: 'http://www.mytinyphone.com/uploads/users/twifranny/560841.jpg'
      }).save())
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: '123',
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })

    .then(() => models.Profile.forge({
        first: 'Tom',
        last: 'Hop',
        display: 'Tom Hop',
        email: 'tom@fake.com',
        phone: '6503334444', 
        username: 'tomhop',
        profile_picture: 'https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg'
      }).save())
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: '123',
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })

    .then(() => models.Profile.forge({
        first: 'Chris',
        last: 'Po',
        display: 'Chris Po',
        email: 'chris@fake.com',
        phone: '6503335555', 
        username: 'chrispo',
        profile_picture: 'http://www.kusc.org/wp-content/uploads/2017/02/300x200xGustavo-Dudamel-300x200.jpg.pagespeed.ic.ZvskaVbGN1.jpg'
      }).save())
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: '123',
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })

    .then(() => models.Profile.forge({
        first: 'Gena',
        last: 'Ha',
        display: 'Gena Ha',
        email: 'gena@fake.com',
        phone: '6503337777', 
        username: 'genaha',
        profile_picture: 'http://www.kusc.org/wp-content/uploads/2017/07/300x200xSergei-Nakariakov-300x200.jpg.pagespeed.ic.A-QAL_deUF.jpg'
      }).save())
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: '123',
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })

    .then(() => models.Profile.forge({
        first: 'Bob',
        last: 'Wo',
        display: 'Bob Wo',
        email: 'bob@fake.com',
        phone: '6503332222', 
        username: 'bobwo',
        profile_picture: 'http://cdn1.bigcommerce.com/server3900/ca30d/products/10827/images/135376/gb013ms%252520ghost%252520buster%252520glow%252520in%252520the%252520dark%252520%25281%2529_amz__33369.1480557199.200.200.jpg?c=2'
      }).save())
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: '123',
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })

};


