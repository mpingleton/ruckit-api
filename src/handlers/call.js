const callService = require('../services/call');
const userService = require('../services/user');

const getCalls = async (req, res) => {
  const user = await userService.getUserById(req.user.userId);
  if (user === undefined || user === null) {
    res.send(500);
    return;
  }

  const calls = await callService.getCalls(user.baseId, req.query.status);
  res.send(200, calls);
};

const getCallById = async (req, res) => {
  const call = await callService.getCallById(req.params.callId);
  res.send(200, call);
};

const placeCall = async (req, res) => {
  const user = await userService.getUserById(req.user.userId);
  if (user === undefined || user === null) {
    res.send(500);
    return;
  }

  await callService.insertCall(
    user.baseId,
    0,
    req.body.riderId,
    req.body.driverId,
    req.body.pickupLocation,
    req.body.dropoffLocation,
    req.body.mileage,
    new Date(),
    undefined,
    undefined,
  );

  res.send(201);
};

module.exports = {
  getCalls,
  getCallById,
  placeCall,
};
