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

const getMessagesInCall = async (req, res) => {
    const messages = await messageService.getMessagesInCall(req.params.callId);
    res.send(200, messages);
};

module.exports = {
    sendMessage,
    getMessagesInCall,
};