const Joi = require('joi');

const login = Joi.object({
  params: Joi.object({}),
  query: Joi.object({}),
  body: Joi.object({
    username: Joi.string().required(),
    passphrase: Joi.string().required(),
  }),
});

module.exports = {
  login,
};
