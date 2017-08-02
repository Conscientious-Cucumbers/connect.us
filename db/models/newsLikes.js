const db = require('../');

const newsLike = db.Model.extend({
  tableName: 'news_likes',
  user: function() {
    return this.belongsTo('Profile', 'id_user');
  },
  news: function() {
    return this.belongsTo('NewsItem', 'id_news');
  }
});


module.exports = db.model('newsLike', newsLike);
