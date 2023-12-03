const professeurDAO = require('../dao/professeur');

class ProfesseurService {
    createProfesseur(professeurDto){
        const { nom, prenom} = professeurDto;
        professeurDAO.createProfesseur(nom, prenom);

    }
}

module.exports = new ProfesseurService();