/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('User', table => {
        table.increments('id');
        table.string('email').notNullable().unique();
        table.string('password');
        table.string('username');
        table.string('role');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
            .dropTable('User')
};
