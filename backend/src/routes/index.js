const express = require('express');

const professeurController = require('../controller/professeur')
const eleveController = require('../controller/eleve')
const matiereController = require('../controller/matiere')
const presenceController = require('../controller/presence')
const classeController = require('../controller/classe')
const userController = require('../controller/user')
const notificationController = require('../controller/notification')

const router = express.Router()
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/professeur', professeurController.getProfesseur);
router.get('/professeur/:id', professeurController.getOneProfesseur);
router.post('/professeur', professeurController.createProfesseur);
router.put('/professeur/:id', professeurController.updateProfesseur);
router.delete('/professeur/:id', professeurController.deleteProfesseur);


router.get('/eleve', eleveController.getEleve);
router.get('/eleve/:id', eleveController.getOneEleve);
router.get('/eleve/classe/:classe_id', eleveController.getEleveByClasse);
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
router.post('/absence', presenceController.addAbsence);
router.post('/presence', presenceController.createPresence);
router.put('/presence/:id', presenceController.updatePresence);
router.delete('/presence/:id', presenceController.deletePresence);

router.get('/classe', classeController.getClasse);
router.get('/classe/:id', classeController.getOneClasse);

router.get('/user/',userController.getUsers);
router.get('/user/:id',userController.getOneUser);
router.post('/user/',userController.createUser);
router.post('/user/login',userController.authenticate);
router.post('/user/forget_password',userController.sendPassword);
router.post('/user/password',userController.changePassword);
router.delete('/user/:id',userController.deleteUser);
router.put('/user/:id',userController.updateUser)


router.get('/notification', notificationController.getNotification);
router.get('/notification/:id', notificationController.getOneNotification);
router.post('/notification', notificationController.createNotification);
router.put('/notification/:id', notificationController.updateNotification);
router.delete('/notification/:id', notificationController.deleteNotification);

router.post('/upload', upload.single('file'), (req, res) => {
  // Save the file and return the filename
  res.json({ filename: req.file.filename });
});
module.exports = router;
