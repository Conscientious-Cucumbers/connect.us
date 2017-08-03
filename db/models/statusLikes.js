const db = require('../');

const statusLike = db.Model.extend({
  tableName: 'status_likes',
  user: function() {
    return this.belongsTo('Profile', 'id_user');
  },
  status: function() {
    return this.belongsTo('Status', 'id_status');
  }
});


module.exports = db.model('statusLike', statusLike);
