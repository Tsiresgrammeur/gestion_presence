const db = require('../../db/db')

class PresenceDAO {

    async getPresence() {
        return await db('Présence')
        .select(
            'Présence.id',
            'Matière.id',
            'Matière.libelle',
            'Matière.Classe_id',
            'Classe.libelle AS classe_libelle',
            'Elève.id',
            'Elève.nom',
            'Elève.prenom',
            'Présence.status',
            'Présence.created_at',
        )
        .leftJoin('Matière', 'Matière.id', 'Présence.id_matiere')
        .leftJoin('Elève', 'Elève.id', 'Présence.id_eleve')
        .leftJoin('Classe', 'Classe.id', 'Matière.Classe_id');
    }

    async getOnePresence(id) {
        return await db('Présence').where('id', id).first();
    }

    async createPresence(presence) {
        const [id] = await db('Présence').insert({
            id_matiere: presence.id_matiere,
            id_eleve: presence.id_eleve,
            status: presence.status

        }).returning('id');

        return id;
    }


    async deletePresence(id) {
        return await db('Présence').where('id', id).del();
    }

    async updatePresence(id, presence) {
        return db('Présence').where({ id: id }).update({
            id_matiere: presence.id_matiere,
            id_eleve: presence.id_eleve,
            status: presence.status
        });
    }

}


module.exports = new PresenceDAO();