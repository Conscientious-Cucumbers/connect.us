const db = require('../');

const statusLike = db.Model.extend({
  tableName: 'status_likes',
  user: function() {
    return this.belongsTo('profiles', 'id_user');
  },
  status: function() {
    return this.belongsTo('statuses', 'id_status');
  }
});


module.exports = db.model('statusLike', statusLike);
