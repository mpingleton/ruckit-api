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

const getMessagesByCall = async (callId) => {
    const data = await models.Message.findAll({
        where: {
            call_id: callId,
        },
    });

    const messages = data.map((message) => ({
        id: message.id,
        callId: message.call_id,
        recipientId: message.recipient_id,
        senderId: message.sender_id,
        text: message.text,
    }));

    return messages;
};

module.exports = {
    insertMessage,
    getMessagesByCall,
};