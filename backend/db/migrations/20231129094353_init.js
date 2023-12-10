/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {

    return knex.schema.createTable('Classe', table => {
        table.increments('id');
        table.string('libelle').notNullable().unique();
    })
        .createTable('Professeur', table => {
            table.increments('id');
            table.string('nom');
            table.string('prenom');
        })
        .createTable('Matière', table => {
            table.increments('id');
            table.string('libelle').notNullable();
            table.integer('classe_id').unsigned();
            table.integer('professeur_id').unsigned();
            table.foreign('classe_id').references('Classe.id').onDelete('CASCADE').onUpdate('CASCADE');
            table.foreign('professeur_id').references('Professeur.id').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('Elève', table => {
            table.increments('id');
            table.string('nom');
            table.string('prenom');
            table.integer('classe_id').unsigned();
            table.foreign('classe_id').references('Classe.id').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('Présence', table => {
            table.increments('id');
            table.integer('id_matiere').unsigned();
            table.integer('id_eleve').unsigned();
            table.string('status');
            table.timestamps(true, true);
            table.foreign('id_matiere').references('Matière.id').onDelete('CASCADE').onUpdate('CASCADE');
            table.foreign('id_eleve').references('Elève.id').onDelete('CASCADE').onUpdate('CASCADE');
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable('Présence')
        .dropTable('Matière')
        .dropTable('Elève')
        .dropTable('Professeur')
        .dropTable('Classe');
};
