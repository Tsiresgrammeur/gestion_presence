const professeurDAO = require('../dao/professeur');

class ProfesseurService {
    async getProfesseur() {
        return await professeurDAO.getProfesseur();
    }

    async getOneProfesseur(id)
    {
      return await professeurDAO.getOneProfesseur(id);
    }

    createProfesseur(professeurDto) {
        return professeurDAO.createProfesseur(professeurDto);

    }

    deleteProfesseur(id) {
        return professeurDAO.deleteProfesseur(id);
    }

    updateProfesseur(id, professeur) {
        return professeurDAO.updateProfesseur(id, professeur);
    }
}

module.exports = new ProfesseurService();