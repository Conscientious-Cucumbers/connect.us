
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('news_sources', function(table) {
      table.increments('id').unsigned().primary();
      table.string('name', 300).notNullable();
      table.string('source', 300).notNullable().unique();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('news_sources')
  ]);
};
