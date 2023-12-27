const db = require('../../db/db')

class PresenceDAO {

    async getPresence() {
        return await db('Présence')
        .select(
            'Présence.id',
            'Matière.libelle',
            'Matière.Classe_id',
            'Classe.libelle AS classe_libelle',
            'Elève.nom',
            'Elève.prenom',
            'Présence.status',
            'Présence.created_at',
        )
        .innerJoin('Matière', 'Matière.id', 'Présence.id_matiere')
        .innerJoin('Elève', 'Elève.id', 'Présence.id_eleve')
        .innerJoin('Classe', 'Classe.id', 'Matière.Classe_id');
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

    async addAbsence(eleveList, matiere) {
        const presencePromises = eleveList.map(async (eleve) => {
          const presence = {
            id_matiere: matiere, // Assuming classe_id is the id_matiere
            id_eleve: eleve.id,
            status: 'absent' // You can set the status according to your requirements
          };
      
          const id = await this.createPresence(presence);
          console.log(`Presence record created with ID: ${id}`);
        });
      
        await Promise.all(presencePromises);
        return 1;
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
