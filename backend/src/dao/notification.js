const db = require('../../db/db')

class NotificationDAO {

    async getNotification() {
        return await db.select().table('Notification');
    }

    async getOneNotification(id) {
        return await db('Notification').where('id', id).first();
    }

    async createNotification(notification) {
        const [id] = await db('Notification').insert({
            texte:notification.texte,
            user_id:notification.user_id
        }).returning('id');

        return id;
    }


    async deleteNotification(id) {
        return await db('Notification').where('id', id).del();
    }

    async updateNotification(id) {
        return db('Notification').where({ id: id }).update({
            status: true,
        });
    }

}


module.exports = new NotificationDAO();