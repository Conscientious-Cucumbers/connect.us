const db = require('../');

const Follow = db.Model.extend({
  tableName: 'follows',
  follower: function() {
    return this.belongsTo('profiles');
  },
  followed: function() {
    return this.belongsTo('profiles');
  }
});


module.exports = db.model('Follow', Follow);
