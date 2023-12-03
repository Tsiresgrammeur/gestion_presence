const db = require('../../db/db')

class ProfesseurDAO {
    async createProfesseur(nom, prenom){
        const [id] = await db('Professeur').insert({
            nom,
            prenom
        })
        .returning('id');

        return id;
    }
}


module.exports = new ProfesseurDAO();