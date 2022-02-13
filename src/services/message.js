const { models } = require('../database');

const insertMessage = async (
    callId,
    recipientId,
    senderId,
    text,
) => {
    await models.Message.create({
        call_id: callId,
        recipient_id: recipientId,
        sender_id: senderId,
        text: text,
    });
};

module.exports = {
    insertMessage,
};