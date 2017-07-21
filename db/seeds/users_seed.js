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
        username: 'alenaken'
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
        username: 'maxho'
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
        username: 'tomhop'
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
        username: 'chrispo'
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
        username: 'genaha'
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
        username: 'bobwo'
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


