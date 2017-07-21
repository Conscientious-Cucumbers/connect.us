const knex = require('knex')(require('../knexfile'));
const db = require('bookshelf')(knex);
// const Promise = require('bluebird');
// var dbmodels = require('./models/index.js')
// //console.log(';daskfj;dsaklfj kl;adsj f;lsadj kl')
// //debugger;
// console.log('these are my impts', dbmodels)
db.plugin('registry');
db.plugin(require('bookshelf-modelbase').pluggable);

// getUserInfo = function(user) {
//   //console.log(db.Model)
//   db.Model.fetchAll().then((content)=> console.log(content)).catch(err=>{});
// }

// getUserInfo()

module.exports = db;
// //module.exports = getUserInfo;

