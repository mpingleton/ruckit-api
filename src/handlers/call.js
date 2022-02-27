const callService = require('../services/call');
const userService = require('../services/user');

const getCalls = async (req, res) => {
  const user = await userService.getUserById(req.user.userId);
  if (user === undefined || user === null) {
    res.send(500);
    return;
  }

  const calls = await callService.getCalls(user.baseId, req.query.status);

  let promises = [];
  calls.map((call) => {
    promises.push(userService.getUserById(call.riderId).then((data) => {
      call.riderObject = data;
    }));
    promises.push(userService.getUserById(call.driverId).then((data) => {
      call.driverObject = data;
    }));
  });
  await Promise.all(promises);

  res.send(200, calls);
};

const getCallById = async (req, res) => {
  const call = await callService.getCallById(req.params.callId);

  let promises = [];
  promises.push(userService.getUserById(call.riderId).then((data) => {
    call.riderObject = data;
  }));
  promises.push(userService.getUserById(call.driverId).then((data) => {
    call.driverObject = data;
  }));
  await Promise.all(promises);

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
