const db = require('../../db/db')

class MatiereDAO {

    async getMatiere() {
        return await db.select().table('Matière');
    }

    async getOneMatiere(id) {
        return await db('Matière').where('id', id).first();
    }

    async createMatiere(matiere) {
        const [id] = await db('Matière').insert({
            libelle:matiere.libelle,
            classe_id:matiere.classe_id,
            professeur_id:matiere.professeur_id
        })
            .returning('id');

        return id;
    }


    async deleteMatiere(id) {
        return await db('Matière').where('id', id).del();
    }

    async updateMatiere(id, matiere) {
        return db('Matière').where({ id: id }).update({
            libelle:matiere.libelle,
            classe_id:matiere.classe_id,
            professeur_id:matiere.professeur_id
        });
    }

}


module.exports = new MatiereDAO();