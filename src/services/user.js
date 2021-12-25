const { models } = require('../database');

const getAllUsers = async () => {
  const data = await models.User.findAll({});

  const users = data.map((user) => ({
    id: user.id,
    username: user.username,
    passphrase: user.passphrase,
    role: user.role,
    isLocked: user.is_locked,
    rank: user.rank,
    firstName: user.first_name,
    lastName: user.last_name,
    baseId: user.base_id,
  }));

  return users;
};

const getUsersInBase = async (baseId) => {
  const data = await models.User.findAll({
    where: {
      base_id: baseId,
    },
  });

  const users = data.map((user) => ({
    id: user.id,
    username: user.username,
    passphrase: user.passphrase,
    role: user.role,
    isLocked: user.is_locked,
    rank: user.rank,
    firstName: user.first_name,
    lastName: user.last_name,
    baseId: user.base_id,
  }));

  return users;
};

const getUserById = async (userId) => {
  const data = await models.User.findOne({
    where: {
      id: userId,
    },
  });

  const user = {
    id: data.id,
    username: data.username,
    passphrase: data.passphrase,
    role: data.role,
    isLocked: data.is_locked,
    rank: data.rank,
    firstName: data.first_name,
    lastName: data.last_name,
    baseId: data.base_id,
  };

  return user;
};

const getUserByUsername = async (username) => {
  const data = await models.User.findOne({
    where: {
      username: username,
    },
  });

  const user = {
    id: data.id,
    username: data.username,
    passphrase: data.passphrase,
    role: data.role,
    isLocked: data.is_locked,
    rank: data.rank,
    firstName: data.first_name,
    lastName: data.last_name,
    baseId: data.base_id,
  };

  return user;
};

const createUser = async (
  username,
  passphrase,
  role,
  isLocked,
  rank,
  firstName,
  lastName,
  baseId,
) => {
  await models.User.create({
    username: username,
    passphrase: passphrase,
    role: role,
    is_locked: isLocked,
    rank: rank,
    first_name: firstName,
    last_name: lastName,
    base_id: baseId,
  });
};

const setLock = async (userId, locked) => {
  await models.User.update({
    is_locked: locked,
  }, {
    where: {
      id: userId,
    }
  });
};

module.exports = {
  getAllUsers,
  getUsersInBase,
  getUserById,
  getUserByUsername,
  createUser,
  setLock,
};
