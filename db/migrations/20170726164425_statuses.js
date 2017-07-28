exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('statuses', function(table) {
      table.increments('id').unsigned().primary();
      table.string('title', 300).notNullable();
      table.string('text', 500).notNullable();
      table.string('image', 500).notNullable();
      table.integer('id_user', 20).notNullable();
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('statuses')
  ]);
};
