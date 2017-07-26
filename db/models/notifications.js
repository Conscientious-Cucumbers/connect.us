const db = require('../');


//fix all files!
const Notifications = db.Model.extend({
  tableName: 'notifications',
  user: function() {
    return this.belongsTo('Profile');
  }
});


module.exports = db.model('Notifications', Notifications);