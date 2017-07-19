
exports.up = function (knex, Promise) {
  return Promise.all([
    // knex.schema.createTableIfNotExists('profiles', function (table) {
    //   table.increments('id').unsigned().primary();
    //   table.string('first', 100).nullable();
    //   table.string('last', 100).nullable();
    //   table.string('display', 100).nullable();
    //   //table.string('email', 100).nullable();
    //   table.string('phone', 100).nullable();
    //   table.string('profile_picture', 100).nullable();
    //   table.string('username', 100).nullable();
    //   table.timestamps(true, true);
    // }),
    knex.schema.createTableIfNotExists('auths', function(table) {
      table.increments('id').unsigned().primary();
      table.string('type', 8).notNullable();
      table.string('oauth_id', 30).nullable();
      table.string('password', 100).nullable();
      table.string('salt', 100).nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('statuses', function(table) {
      table.increments('id').unsigned().primary();
      table.string('text', 500).notNullable();
      table.string('id_user', 500).notNullable();
    }),
    knex.schema.createTableIfNotExists('follows', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('id_follower', 20).notNullable();
      table.integer('id_followed', 20).notNullable();
    }),
    knex.schema.createTableIfNotExists('status_likes', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('id_user', 8).notNullable();
      table.integer('id_status', 8).notNullable();

    }),
    knex.schema.createTableIfNotExists('news_likes', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('id_user', 8).notNullable();
      table.integer('id_news', 8).notNullable();

    }),
    knex.schema.createTableIfNotExists('news_items', function(table) {
      table.increments('id').unsigned().primary();
      table.string('source', 100).notNullable();
      table.string('title', 100).nullable();
      table.string('thumbnail', 100).nullable();
      table.string('type', 10).nullable();
      table.string('media', 100).nullable();
      table.integer('id_news', 8).notNullable();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('profiles')
  ]);
};

