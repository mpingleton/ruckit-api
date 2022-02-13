const Joi = require('joi');

const sendMessage = Joi.object({
    params: Joi.object({}),
    query: Joi.object({}),
    body: Joi.object({
        callId: Joi.number().integer(),
        recipientId: Joi.number().integer().required(),
        text: Joi.string().required(),
    }),
});

module.exports = {
    sendMessage,
};