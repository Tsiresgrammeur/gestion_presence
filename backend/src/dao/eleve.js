const db = require('../../db/db')

class EleveDAO {

    async getEleve() {
        return await db('Elève')
            .select(
                'Elève.id',
                'Elève.nom',
                'Elève.prenom',
                'Elève.classe_id',
                'Classe.libelle'
            )
            .leftJoin('Classe', 'Classe.id', 'Elève.classe_id')
            .orderBy(['Classe.libelle', 'Elève.prenom'])
            ;
    }

    async getOneEleve(id) {
        return await db('Elève')
            .select(
                'Elève.id',
                'Elève.nom',
                'Elève.prenom',
                'Elève.classe_id',
                'Classe.libelle'
            )
            .leftJoin('Classe', 'Classe.id', 'Elève.classe_id').
        where('Elève.id', id).first();
    }

    async createEleve(eleve) {
        const [id] = await db('Elève').insert({
            nom: eleve.nom,
            prenom: eleve.prenom,
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