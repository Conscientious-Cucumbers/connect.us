const db = require('../');

const newsItem = db.Model.extend({
  tableName: 'news_items',
  like: function() {
    return this.hasMany('news_likes', 'id_news');
  }

});

module.exports = db.model('newsItem', newsItem);
