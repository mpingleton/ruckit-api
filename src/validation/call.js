const Joi = require('joi');

const getCalls = Joi.object({
  params: Joi.object({}),
  query: Joi.object({
    status: Joi.number().integer(),
  }),
  body: Joi.object({}),
});

const getCallById = Joi.object({
  params: Joi.object({
    callId: Joi.number().integer().required(),
  }),
  query: Joi.object({}),
  body: Joi.object({}),
});

const placeCall = Joi.object({
  params: Joi.object({}),
  query: Joi.object({}),
  body: Joi.object({
    pickupLocation: Joi.string().required(),
    dropoffLocation: Joi.string().required(),
    mileage: Joi.number().integer(),
    riderId: Joi.number().integer(),
    driverId: Joi.number().integer(),
  }),
});

module.exports = {
  getCalls,
  getCallById,
  placeCall,
};
