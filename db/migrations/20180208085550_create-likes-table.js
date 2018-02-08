exports.up = function(knex, Promise) {
    return knex.schema.createTable('likes', function (table) {
        table.integer('userid').references('userid').inTable('public.users');
        table.integer('cardID').references('cardID').inTable('public.cards');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('likes');
};