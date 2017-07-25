
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTableIfNotExists('news_comments', function(table) {
        table.increments('id').unsigned().primary();
        table.integer('id_user', 20).notNullable();
        table.integer('id_news', 20).notNullable();
        table.string('text', 500).notNullable();
        table.timestamps(true, true);
      })
    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('news_comments')
    ]);
};
