const express = require('express');

const professeurController = require('../controller/professeur')
const eleveController = require('../controller/eleve')

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

module.exports = router;
