const db = require('../../db/db')

class ClasseDAO {

    async getClasse() {
        return await db.select().table('Classe');
    }

    async getOneClasse(id) {
        return await db('Classe').where('id', id).first();
    }

}
module.exports = new ClasseDAO();