const Joi = require('joi');

const getCalls = Joi.object({
  params: Joi.object({}),
  query: Joi.object({
    status: Joi.number().integer(),
  }),
  body: Joi.object({}),
});

const placeCall = Joi.object({
  params: Joi.object({}),
  query: Joi.object({}),
  body: Joi.object({
    pickupLocation: Joi.string().required(),
    dropoffLocation: Joi.string().required(),
  }),
});

module.exports = {
  getCalls,
  placeCall,
};
