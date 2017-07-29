const db = require('../');

const Follow = db.Model.extend({
  tableName: 'follows',
  follower: function() {
    return this.hasOne('profiles', 'id_follower');
  },
  followed: function() {
    return this.hasOne('profiles', 'id_followed');
  }
});


module.exports = db.model('Follow', Follow);
