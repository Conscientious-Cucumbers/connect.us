const db = require('../');


//fix all files!
const NewsSources = db.Model.extend({
  tableName: 'news_sources',
  source: function() {
    return this.hasOne('source');
  }
});


module.exports = db.model('NewsSources', NewsSources);
