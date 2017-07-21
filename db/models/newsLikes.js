const db = require('../');

const newsLike = db.Model.extend({
  tableName: 'news_likes',
  user: function() {
    return this.belongsTo('User');
  },
  status: function() {
    return this.belongsTo('newsItem');
  }
});


module.exports = db.model('newsLike', newsLike);

