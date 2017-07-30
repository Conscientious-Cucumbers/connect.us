const db = require('../');

const newsLike = db.Model.extend({
  tableName: 'news_likes',
  user: function() {
    return this.belongsTo('profiles', 'id_user');
  },
  status: function() {
    return this.belongsTo('news_items', 'id_news');
  }
});


module.exports = db.model('newsLike', newsLike);
