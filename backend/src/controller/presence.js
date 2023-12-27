
const presenceService = require('../service/presence');
class PresenceController {

    async getPresence(req, res) {
        try {
            const id = await presenceService.getPresence(req.params.id);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }

    async getOnePresence(req,res)
    {
      try{
        const presence = await presenceService.getOnePresence(req.params.id);
        res.status(201).json(presence);
      }
  
      catch(err){
        console.error(err);
      }
  
    }

    async createPresence(req, res) {
        try {
            const id = await presenceService.createPresence(req.body)
            if(id)
            res.status(201).json({success:true});
        } catch (error) {
            console.error(error);

        }


    }

    async deletePresence(req, res) {

        try {
            const id = await presenceService.deletePresence(req.params.id);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }
    }

    async addAbsence(req, res){
        try {
            const id = await presenceService.addAbsence(req.body)
            if(id)
            res.status(201).json({success:true});
        } catch (error) {
            console.error(error);

        }

    }

    async updatePresence(req, res) {
        try {
            const id = await presenceService.updatePresence(req.params.id, req.body);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }
}


module.exports = new PresenceController();