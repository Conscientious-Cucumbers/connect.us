const db = require('../');

const Status = db.Model.extend({
  tableName: 'statuses',
  user: function() {
    return this.hasOne('User');
  },
  likes: function() {
    return this.hasMany('statusLike');
  }
});


module.exports = db.model('Status', Status);
