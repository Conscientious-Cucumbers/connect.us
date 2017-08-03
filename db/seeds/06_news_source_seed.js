const availableSources = require('config')['sources'];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.select().from('news_sources')
  .then((results) => {
    return availableSources.filter((item) => {
      return !results.reduce((wasFound, currentItem) => {
        return wasFound || item.name === currentItem.name;
      }, false);
    });
  })
  .then((newSources) => {
    return knex('news_sources').insert(newSources);
  });
};
