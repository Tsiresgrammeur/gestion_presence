/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
 return knex.schema.table('Elève', table => {
    table.string('photo').defaultTo('default.png');
 }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.table('Elève', table =>{
      table.string('photo')
   })
};
