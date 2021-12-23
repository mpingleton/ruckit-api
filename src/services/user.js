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
    firstName: user.firstName,
    lastName: user.lastName,
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
    firstName: data.firstName,
    lastName: data.lastName,
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
    firstName: data.firstName,
    lastName: data.lastName,
    baseId: data.base_id,
  };

  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByUsername,
};
