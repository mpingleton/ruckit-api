const userService = require('../services/user');

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.send(200, users);
};

const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  res.send(200, user);
};

const getMe = async (req, res) => {
  const user = await userService.getUserById(req.user.userId);
  res.send(200, user);
};

const createUser = async (req, res) => {
  await userService.createUser(
    req.body.username,
    req.body.passphrase,
    req.body.role,
    req.body.isLocked,
    req.body.rank,
    req.body.firstName,
    req.body.lastName,
    req.body.baseId,
  );

  res.send(201);
};

module.exports = {
  getAllUsers,
  getUserById,
  getMe,
  createUser,
};
