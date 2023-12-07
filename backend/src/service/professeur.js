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
        const { nom, prenom } = professeurDto;
        professeurDAO.createProfesseur(nom, prenom);

    }

    deleteProfesseur(id) {
        return professeurDAO.deleteProfesseur(id);
    }

    updateProfesseur(id, professeur_name) {
        return professeurDAO.updateProfesseur(id, professeur_name.professeur_name);
    }
}

module.exports = new ProfesseurService();