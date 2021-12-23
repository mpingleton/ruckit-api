const userService = require('../services/user');

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.send(200, users);
};

const getMe = async (req, res) => {
  const user = await userService.getUserById(req.user.userId);
  res.send(200, user);
};

module.exports = {
  getAllUsers,
  getMe,
};
