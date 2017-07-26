exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTableIfNotExists('notifications', function(table) {
        table.increments('id').unsigned().primary();
        table.integer('id_notifier', 20).notNullable();
        table.integer('id_notified', 20).notNullable();
        table.string('type', 100).notNullable();
        table.boolean( 'is_received' ).defaultTo( false );
        table.timestamps(true, true);
      })
    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('notifications')
    ]);
};