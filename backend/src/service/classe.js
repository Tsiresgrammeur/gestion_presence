const classeDAO = require('../dao/classe');

class ClasseService {
    async getClasse() {
        return await classeDAO.getClasse();
    }

    async getOneClasse(id)
    {
      return await classeDAO.getOneClasse(id);
    }
}

module.exports = new ClasseService();