const availableSources = require('config')['sources'];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('news_sources').del()
    .then(function () {
      // Inserts seed entries
      return knex('news_sources').insert(availableSources.map(source => {
        return {
          source: source.split('-').join(' ')
        };
      }));
    });
};
