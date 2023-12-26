const notificationService = require('../service/notification');
class NotificationController {

    async getNotification(req, res) {
        try {
            const id = await notificationService.getNotification(req.params.id);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }

    async getOneNotification(req,res)
    {
      try{
        const notification = await notificationService.getOneNotification(req.params.id);
        res.status(201).json(notification);
      }
  
      catch(err){
        console.error(err);
      }
  
    }

    async createNotification(req, res) {
        try {
            const id = await notificationService.createNotification(req.body)
            if(id)
            res.status(201).json({success: true}); 
        } catch (error) {
            console.error(error);

        }


    }

    async deleteNotification(req, res) {

        try {
            const id = await notificationService.deleteNotification(req.params.id);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }
    }

    async updateNotification(req, res) {
        try {
            const id = await notificationService.updateNotification(req.params.id, req.body);
            res.status(200).json(id);
        }

        catch (err) {
            console.error(err);
        }

    }
}


module.exports = new NotificationController();