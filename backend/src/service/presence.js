const presenceDAO = require('../dao/presence');

class PresenceService {
    async getPresence() {
        return await presenceDAO.getPresence();
    }

    async getOnePresence(id)
    {
      return await presenceDAO.getOnePresence(id);
    }

    createPresence(presenceDto) {
        return presenceDAO.createPresence(presenceDto);

    }

    addAbsence(absenceDto){
        return presenceDAO.addAbsence(absenceDto.eleves, absenceDto.matiere_id);
    }

    deletePresence(id) {
        return presenceDAO.deletePresence(id);
    }

    updatePresence(id, presence) {
         return presenceDAO.updatePresence(id, presence);
    }
}

module.exports = new PresenceService();