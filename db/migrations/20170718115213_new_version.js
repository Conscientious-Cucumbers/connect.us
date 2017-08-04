
exports.up = function (knex, Promise) {
  return Promise.all([

    knex.schema.createTableIfNotExists('follows', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('id_follower', 20).notNullable().references('profiles.id').onDelete('CASCADE');
      table.integer('id_followed', 20).notNullable().references('profiles.id').onDelete('CASCADE');
      table.timestamps(true, true);
    }),

    knex.schema.createTableIfNotExists('statuses', function(table) {
      table.increments('id').unsigned().primary();
      table.string('title', 300).notNullable();
      table.string('text', 500).notNullable();
      table.string('image', 500).notNullable();
      table.integer('id_user', 20).notNullable().references('profiles.id').onDelete('CASCADE');
      table.timestamps(true, true);
    }),

    knex.schema.createTableIfNotExists('status_likes', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('id_user', 20).notNullable().references('profiles.id').onDelete('CASCADE');
      table.integer('id_status', 20).notNullable().references('statuses.id').onDelete('CASCADE');
      table.timestamps(true, true);

    }),
    knex.schema.createTableIfNotExists('news_items', function(table) {
      table.increments('id').unsigned().primary();
      table.string('source', 100).notNullable();
      table.string('title', 300).nullable();
      table.string('thumbnail', 500).nullable();
      table.string('text', 2000).nullable();
      table.string('media', 500).nullable();
      table.string('url', 1000).nullable();
      table.string('date', 50).notNullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('news_likes', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('id_user', 20).notNullable().references('profiles.id').onDelete('CASCADE');
      table.integer('id_news', 20).notNullable().references('news_items.id');
      table.timestamps(true, true);

    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('follows'),
    knex.schema.dropTable('status_likes'),
    knex.schema.dropTable('news_likes'),
    knex.schema.dropTable('news_items'),
    knex.schema.dropTable('statuses')
  ]);
};
