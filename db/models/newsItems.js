const db = require('../');

const newsItem = db.Model.extend({
  tableName: 'news_items',
  user: function() {
    return this.hasOne('User');
  },
  likes: function() {
    return this.hasMany('statusLike');
  }
});

module.exports = db.model('newsItem', newsItem);