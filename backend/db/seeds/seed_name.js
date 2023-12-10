/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Classe').del()
  await knex('Classe').insert([
    {id: 1, libelle: 'L1'},
    {id: 2, libelle: 'L2'},
    {id: 3, libelle: 'L3'},
    {id: 4, libelle: 'M1'},
    {id: 5, libelle: 'M2'}
  ]);
};
