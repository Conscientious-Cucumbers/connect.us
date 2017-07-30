const db = require('../');

//fix
const ApiNews = db.Model.extend({
  tableName: 'api_news',
  source: function() {
    return this.belongsTo('news_sources', 'id_source');
  }
});

module.exports = db.model('ApiNews', ApiNews);
