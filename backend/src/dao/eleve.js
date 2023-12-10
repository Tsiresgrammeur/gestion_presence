const db = require('../../db/db')

class EleveDAO {

    async getEleve() {
        return await db.select().table('Elève');
    }

    async getOneEleve(id) {
        return await db('Elève').where('id', id).first();
    }

    async createEleve(eleve) {
        const [id] = await db('Elève').insert({
            nom:eleve.nom,
            prenom:eleve.prenom,
            classe_id: eleve.classe_id
        })
            .returning('id');

        return id;
    }


    async deleteEleve(id) {
        return await db('Elève').where('id', id).del();
    }

    async updateEleve(id, eleve) {
        return db('Elève').where({ id: id }).update({
            nom: eleve.nom,
            prenom: eleve.prenom,
            classe_id: eleve.classe_id
        });
    }

}


module.exports = new EleveDAO();