const eleveDAO = require('../dao/eleve');

class EleveService {
    async getEleve() {
        return await eleveDAO.getEleve();
    }

    async getOneEleve(id)
    {
      return await eleveDAO.getOneEleve(id);
    }

    createEleve(eleveDto) {
       return eleveDAO.createEleve(eleveDto);

    }

    deleteEleve(id) {
        return eleveDAO.deleteEleve(id);
    }

    updateEleve(id, eleve) {
        return eleveDAO.updateEleve(id, eleve);
    }
}

module.exports = new EleveService();