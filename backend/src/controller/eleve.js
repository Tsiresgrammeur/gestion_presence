const eleveService = require('../service/eleve');
class EleveController {

    async getEleve(req, res) {
        try {
            const id = await eleveService.getEleve(req.params.id);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }

    async getOneEleve(req,res)
    {
      try{
        const eleve = await eleveService.getOneEleve(req.params.id);
        res.status(201).json(eleve);
      }
  
      catch(err){
        console.error(err);
      }
  
    }

    async createEleve(req, res) {
        try {
            const id = await eleveService.createEleve(req.body)
            if(id)
            res.status(201).json({success: true}); 
        } catch (error) {
            console.error(error);

        }


    }

    async deleteEleve(req, res) {

        try {
            const id = await eleveService.deleteEleve(req.params.id);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }
    }

    async updateEleve(req, res) {
        try {
            const id = await eleveService.updateEleve(req.params.id, req.body);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }
}


module.exports = new EleveController();