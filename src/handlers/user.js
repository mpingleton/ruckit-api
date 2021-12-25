const userService = require('../services/user');

const getUsersInMyBase = async (req, res) => {
  const user = await userService.getUserById(req.user.userId);

  const users = await userService.getUsersInBase(user.baseId);
  res.send(200, users);
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.send(200, users);
};

const lockUser = async (req, res) => {
  await userService.setLock(req.params.userId, true);
  res.send(200);
};

const unlockUser = async (req, res) => {
  await userService.setLock(req.params.userId, false);
  res.send(200);
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
  getUsersInMyBase,
  getAllUsers,
  lockUser,
  unlockUser,
  getUserById,
  getMe,
  createUser,
};
