const Joi = require('joi');

const lockUser = Joi.object({
  params: Joi.object({
    userId: Joi.number().integer().required(),
  }),
  query: Joi.object({}),
  body: Joi.object({}),
});

const unlockUser = Joi.object({
  params: Joi.object({
    userId: Joi.number().integer().required(),
  }),
  query: Joi.object({}),
  body: Joi.object({}),
});

const getUserById = Joi.object({
  params: Joi.object({
    userId: Joi.number().integer().required(),
  }),
  query: Joi.object({}),
  body: Joi.object({}),
});

const createUser = Joi.object({
  params: Joi.object({}),
  query: Joi.object({}),
  body: Joi.object({
    username: Joi.string().required(),
    passphrase: Joi.string().required(),
    role: Joi.string().required(),
    isLocked: Joi.boolean().required(),
    rank: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    baseId: Joi.number().integer().required(),
  }),
});

module.exports = {
  lockUser,
  unlockUser,
  getUserById,
  createUser,
};
