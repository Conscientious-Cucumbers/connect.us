const db = require('../');

const Status = db.Model.extend({
  tableName: 'statuses',
  user: function() {
    return this.belongsTo('profiles', 'id_user');
  },
  likes: function() {
    return this.hasMany('statusLike', 'id_status');
  }
});


module.exports = db.model('Status', Status);
