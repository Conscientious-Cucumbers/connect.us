const db = require('../');

const Follow = db.Model.extend({
  tableName: 'follows',
  follower: function() {
    return this.hasOne('Profile');
  },
  followed: function() {
    return this.hasOne('Profile');
  }
});


module.exports = db.model('Follow', Follow);
