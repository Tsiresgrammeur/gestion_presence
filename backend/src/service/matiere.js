const matiereDAO = require('../dao/matiere');

class MatiereService {
    async getMatiere() {
        return await matiereDAO.getMatiere();
    }

    async getOneMatiere(id)
    {
      return await matiereDAO.getOneMatiere(id);
    }

    createMatiere(matiereDto) {
        return matiereDAO.createMatiere(matiereDto);
    }

    deleteMatiere(id) {
        return matiereDAO.deleteMatiere(id);
    }

    updateMatiere(id, matiere) {
        return matiereDAO.updateMatiere(id, matiere);
    }
}

module.exports = new MatiereService();