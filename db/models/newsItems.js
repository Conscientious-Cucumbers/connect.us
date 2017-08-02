const db = require('../');

const newsItem = db.Model.extend({
  tableName: 'news_items',
  like: function() {
    return this.hasMany('newsLike', 'id_news');
  }

});

module.exports = db.model('NewsItem', newsItem);
