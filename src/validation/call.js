const Joi = require('joi');

const placeCall = Joi.object({
  params: Joi.object({}),
  query: Joi.object({}),
  body: Joi.object({
    pickupLocation: Joi.string().required(),
    dropoffLocation: Joi.string().required(),
  }),
});

module.exports = {
  placeCall,
};
