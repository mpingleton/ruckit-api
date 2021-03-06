const express = require('express');

const messageHandler = require('../handlers/message');
const messageValidation = require('../validation/message');
const validate = require('../middleware/validator');
const tokenMiddleware = require('../middleware/token');

const router = express.Router();

router.post(
    '/',
    tokenMiddleware.verifyAccessToken,
    validate(messageValidation.sendMessage),
    messageHandler.sendMessage,
);

router.get(
    '/in/call/:callId',
    tokenMiddleware.verifyAccessToken,
    validate(messageValidation.getMessagesInCall),
    messageHandler.getMessagesInCall,
);

module.exports = router;