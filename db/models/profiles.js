const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    //console.log('this is',this)
    return this.hasMany('Auth');
  },
  newsLike: function () {
    return this.hasMany('news_likes', 'id_news');
  },
  status: function () {
    return this.hasMany('statuses', 'id_user');
  },

  statusLike: function () {
    return this.hasMany('status_likes', 'id_user');
  }

});


module.exports = db.model('Profile', Profile);
