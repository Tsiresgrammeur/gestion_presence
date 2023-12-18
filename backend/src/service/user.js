const userDAO = require('../dao/user');

class UserService 
{
  getUsers()
  {
    return userDAO.getUsers();
  }

  getOneUser(id)
  {
    return userDAO.getOneUser(id);
  }
  async createUser(user)
  {
    return await userDAO.createUser(user);
  }

  deleteUser(idUser)
  {
    return userDAO.deleteUser(idUser);
  }

  updateUser(id,user)
  {
    return userDAO.updateUser(id, user);
  }
}

module.exports = new UserService();
