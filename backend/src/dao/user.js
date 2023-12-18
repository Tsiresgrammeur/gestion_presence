const db = require('../../db/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class userDAO {

  async getUsers() {
    return await db.select().table('User');
  }

  async getOneUser(id) {
    if (typeof (id) == "number")
      return await db('User').where('id', id).first();

    return await db('User').where('email', id).first();

  }

  async createUser(user) {
    const hashed = await bcrypt.hash(user.password, saltRounds);
    const [id] = await db('User').insert({
      email: user.email,
      password: hashed,
      role: user.role,
      username: user.username
    }).returning('id');

    return id;
  }

  async deleteUser(id) {
    return db('User').where('id', id).del();
  }

  async updateUser(id, user) {
    if (password) {
      const hashed = await bcrypt.hash(password, saltRounds);
      return db('User').where({ id: id }).update({
        email: user.email,
        password: hashed,
        role: user.role,
        username: user.username
      });
    }
    else {
      return db('User').where({ id: id }).update({
        email: user.email,
        role: user.role,
        username: user.username
      });
    }
  }

}

module.exports = new userDAO();
