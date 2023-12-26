/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Notification', table =>{
        table.increments('id');
        table.string('texte').notNullable();
        table.integer('user_id').unsigned();
        table.boolean('status').defaultTo(false);
        table.foreign('user_id').references('User.id').onDelete('CASCADE').onUpdate('CASCADE');

    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Notification')
  
};
