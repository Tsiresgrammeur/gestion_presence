const professeurService = require('../service/professeur');
class ProfesseurController {

    async getProfesseur(req, res) {
        try {
            const id = await professeurService.getProfesseur(req.params.id);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }

    async getOneProfesseur(req,res)
    {
      try{
        const professeur = await professeurService.getOneProfesseur(req.params.id);
        res.status(201).json(professeur);
      }
  
      catch(err){
        console.error(err);
      }
  
    }

    async createProfesseur(req, res) {
        try {
            const id = await professeurService.createProfesseur(req.body)
            res.status(201).json(id);
        } catch (error) {
            console.error(error);

        }


    }

    async deleteProfesseur(req, res) {

        try {
            const id = await professeurService.deleteProfesseur(req.params.id);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }
    }

    async updateProfesseur(req, res) {
        try {
            const id = await professeurService.updateProfesseur(req.params.id, req.body);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }
}


module.exports = new ProfesseurController();