const db = require('../');


//fix all files!
const NewsComments = db.Model.extend({
  tableName: 'news_comments',
  user: function() {
    return this.belongsTo('Profile');
  },
  news: function() {
    return this.belongsTo('newsItem');
  }
});


module.exports = db.model('NewsComments', NewsComments);