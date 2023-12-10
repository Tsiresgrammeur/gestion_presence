const matiereService = require('../service/matiere');
class MatiereController {

    async getMatiere(req, res) {
        try {
            const id = await matiereService.getMatiere(req.params.id);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }

    async getOneMatiere(req,res)
    {
      try{
        const matiere = await matiereService.getOneMatiere(req.params.id);
        res.status(201).json(matiere);
      }
  
      catch(err){
        console.error(err);
      }
  
    }

    async createMatiere(req, res) {
        try {
            const id = await matiereService.createMatiere(req.body)
            if(id)
            res.status(201).json({success: true}); 
        } catch (error) {
            console.error(error);

        }


    }

    async deleteMatiere(req, res) {

        try {
            const id = await matiereService.deleteMatiere(req.params.id);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }
    }

    async updateMatiere(req, res) {
        try {
            const id = await matiereService.updateMatiere(req.params.id, req.body);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }
}


module.exports = new MatiereController();