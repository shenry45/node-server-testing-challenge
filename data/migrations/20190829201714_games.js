
exports.up = function(knex) {
  return knex.schema
    .createTable('games', (tbl) => {
      tbl.increments('id')
        .primary();
      tbl.string('name')
        .notNullable()
        .unique();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('games')
};
