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

const getMessagesByCall = Joi.object({
    params: Joi.object({
        callId: Joi.number().integer().required(),
    }),
    query: Joi.object({}),
    body: Joi.object({}),
});

module.exports = {
    sendMessage,
    getMessagesByCall,
};