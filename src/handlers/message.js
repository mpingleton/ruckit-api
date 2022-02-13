const messageService = require('../services/message');

const sendMessage = async (req, res) => {
    await messageService.insertMessage(
        req.body.callId,
        req.body.recipientId,
        req.user.userId,
        req.body.text
    );
    res.send(201);
};

module.exports = {
    sendMessage,
};