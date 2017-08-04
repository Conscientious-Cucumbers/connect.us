const db = require('../');

const Status = db.Model.extend({
  tableName: 'statuses',
  user: function() {
    return this.belongsTo('Profile', 'id_user');
  },
  likes: function() {
    return this.hasMany('statusLike', 'id_status');
  }
}, {
  dependents: ['likes']
});


module.exports = db.model('Status', Status);
