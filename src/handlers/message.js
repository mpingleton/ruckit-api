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

const getMessagesByCall = async (req, res) => {
    const messages = await messageService.getMessagesByCall(req.params.callId);
    res.send(200, messages);
};

module.exports = {
    sendMessage,
    getMessagesByCall,
};