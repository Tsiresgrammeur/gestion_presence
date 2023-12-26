const notificationDAO = require('../dao/notification');

class NotificationService {
    async getNotification() {
        return await notificationDAO.getNotification();
    }

    async getOneNotification(id)
    {
      return await notificationDAO.getOneNotification(id);
    }

    createNotification(notificationDto) {
       return notificationDAO.createNotification(notificationDto);

    }

    deleteNotification(id) {
        return notificationDAO.deleteNotification(id);
    }

    updateNotification(id, notification) {
        return notificationDAO.updateNotification(id, notification);
    }
}

module.exports = new NotificationService();