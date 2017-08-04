const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    //console.log('this is',this)
    return this.hasMany('Auth');
  },
  newsLike: function () {
    return this.hasMany('newsLike', 'id_news');
  },
  status: function () {
    return this.hasMany('Status', 'id_user');
  },

  statusLike: function () {
    return this.hasMany('statusLike', 'id_user');
  },

  followers: function () {
    return this.hasMany('Follow', 'id_follower');
  },

  following: function () {
    return this.hasMany('Follow', 'id_followed');
  },

  notified: function () {
    return this.hasMany('Notifications', 'id_notified');
  },

  notifier: function () {
    return this.hasMany('Notifications', 'id_notifier');
  }

}, {
  dependents: ['auths', 'newsLike', 'status', 'statusLike', 'notifier', 'notified']
});


module.exports = db.model('Profile', Profile);
