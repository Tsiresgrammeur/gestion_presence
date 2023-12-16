const classeService = require('../service/classe');
class ClasseController {

    async getClasse(req, res) {
        try {
            const id = await classeService.getClasse();
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }

    async getOneClasse(req,res)
    {
      try{
        const classe = await classeService.getOneClasse(req.params.id);
        res.status(201).json(classe);
      }
  
      catch(err){
        console.error(err);
      }
  
    }
}

module.exports = new ClasseController();