const express = require('express');

const professeurController = require('../controller/professeur')

const router = express.Router()

router.get('/professeur', professeurController.getProfesseur);
router.get('/professeur/:id', professeurController.getOneProfesseur);
router.post('/professeur', professeurController.createProfesseur);

module.exports = router;
