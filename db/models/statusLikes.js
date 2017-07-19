const db = require('../');

const statusLike = db.Model.extend({
  tableName: 'status_likes',
  user: function() {
    return this.belongsTo('User');
  },
  status: function() {
    return this.belongsTo('Status');
  }
});


module.exports = db.model('statusLike', statusLike);