/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('Notification', table => {
        table.integer('eleve_id').unsigned();
        table.foreign('eleve_id').references('Elève.id').onDelete('CASCADE').onUpdate('CASCADE');
     }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('Notification', table => {
        table.dropColumn('eleve_id');
     }) 
  
};
