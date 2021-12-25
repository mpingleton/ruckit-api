const callService = require('../services/call');
const userService = require('../services/user');

const placeCall = async (req, res) => {
  const user = await userService.getUserById(req.user.userId);
  if (user === undefined || user === null) {
    res.send(500);
    return;
  }

  await callService.insertCall(
    user.baseId,
    0,
    user.id,
    undefined,
    req.body.pickupLocation,
    req.body.dropoffLocation,
    undefined,
    new Date(),
    undefined,
    undefined,
  );

  res.send(201);
};

module.exports = {
  placeCall,
};
