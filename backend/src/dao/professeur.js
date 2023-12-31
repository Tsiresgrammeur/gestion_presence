const db = require('../../db/db')

class ProfesseurDAO {

    async getProfesseur() {
        return await db.select().table('Professeur')
        .orderBy('nom')
        ;
    }

    async getOneProfesseur(id) {
        return await db('Professeur').where('id', id).first();
    }

    async createProfesseur(professeur) {
        const [id] = await db('Professeur').insert({
            nom:professeur.nom,
            prenom:professeur.prenom
        }).returning('id');

        return id;
    }


    async deleteProfesseur(id) {
        return await db('Professeur').where('id', id).del();
    }

    async updateProfesseur(id, professeur) {
        return db('Professeur').where({ id: id }).update({
            nom: professeur.nom,
            prenom: professeur.prenom
        });
    }

}


module.exports = new ProfesseurDAO();