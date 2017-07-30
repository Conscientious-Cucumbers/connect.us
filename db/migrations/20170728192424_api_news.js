exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('api_news', function(table) {
      table.increments('id').unsigned().primary();
      table.string('title', 300).nullable();
      table.string('thumbnail', 300).nullable();
      table.string('text', 500).nullable();
      table.string('media', 300).nullable();
      table.string('url', 500).nullable();
      table.string('date', 100).notNullable();
      table.integer('id_source', 20).notNullable().references('news_sources.id');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('api_news')
  ]);
};
