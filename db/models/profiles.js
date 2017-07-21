const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: function() {
    //console.log('this is',this)
    return this.hasMany('Auth');
  }
});


module.exports = db.model('Profile', Profile);
