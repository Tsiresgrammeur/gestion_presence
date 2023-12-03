const express = require('express');

const professeurController = require('../controller/professeur')

const router = express.Router()

router.post('/professeur', professeurController.createProfesseur);

module.exports = router;
