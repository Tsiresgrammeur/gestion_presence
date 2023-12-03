const professeurService= require('../service/professeur');
class ProfesseurController{
   async createProfesseur(req, res){
    try {
        const id = await professeurService.createProfesseur(req.body)
        res.status(201).json(id);
    } catch (error) {
        console.error(error);
        
    }


    }

}

module.exports = new ProfesseurController();