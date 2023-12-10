const express = require('express');

const professeurController = require('../controller/professeur')
const eleveController = require('../controller/eleve')
const matiereController = require('../controller/matiere')
const presenceController = require('../controller/presence')

const router = express.Router()

router.get('/professeur', professeurController.getProfesseur);
router.get('/professeur/:id', professeurController.getOneProfesseur);
router.post('/professeur', professeurController.createProfesseur);
router.put('/professeur/:id', professeurController.updateProfesseur);
router.delete('/professeur/:id', professeurController.deleteProfesseur);


router.get('/eleve', eleveController.getEleve);
router.get('/eleve/:id', eleveController.getOneEleve);
router.post('/eleve', eleveController.createEleve);
router.put('/eleve/:id', eleveController.updateEleve);
router.delete('/eleve/:id', eleveController.deleteEleve);

router.get('/matiere', matiereController.getMatiere);
router.get('/matiere/:id', matiereController.getOneMatiere);
router.post('/matiere', matiereController.createMatiere);
router.put('/matiere/:id', matiereController.updateMatiere);
router.delete('/matiere/:id', matiereController.deleteMatiere);


router.get('/presence', presenceController.getPresence);
router.get('/presence/:id', presenceController.getOnePresence);
router.post('/presence', presenceController.createPresence);
router.put('/presence/:id', presenceController.updatePresence);
router.delete('/presence/:id', presenceController.deletePresence);

module.exports = router;
