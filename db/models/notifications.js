const db = require('../');


//fix all files!
const Notifications = db.Model.extend({
  tableName: 'notifications',

  notifier: function() {
    return this.belongsTo('Profile', 'id_notifier');
  },

  notified: function() {
    return this.belongsTo('Profile', 'id_notified');
  }

});


module.exports = db.model('Notifications', Notifications);
