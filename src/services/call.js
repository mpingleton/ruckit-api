const { models } = require('../database');

const getCalls = async (baseId, status) => {
  const where = {};
  if (baseId !== undefined) {
    where.base_id = baseId;
  }
  if (status !== undefined) {
    where.status = status;
  }

  const data = await models.Call.findAll({ where: where });

  const calls = data.map((call) => ({
    id: call.id,
    baseId: call.base_id,
    status: call.status,
    riderId: call.rider_id,
    driverId: call.driver_id,
    pickupLocation: call.pickup_location,
    dropoffLocation: call.dropoff_location,
    mileage: call.mileage,
    timestampCallPlaced: call.call_placed_timestamp,
    timestampCallAssigned: call.call_assigned_timestamp,
    timestampCallCompleted: call.call_completed_timestamp,
  }));

  return calls;
};

const getCallById = async (callId) => {
  const data = await models.Call.findOne({
    where: {
      id: callId,
    },
  });

  const call = {
    id: data.id,
    baseId: data.base_id,
    status: data.status,
    riderId: data.rider_id,
    driverId: data.driver_id,
    pickupLocation: data.pickup_location,
    dropoffLocation: data.dropoff_location,
    mileage: data.mileage,
    timestampCallPlaced: data.call_placed_timestamp,
    timestampCallAssigned: data.call_assigned_timestamp,
    timestampCallCompleted: data.call_completed_timestamp,
  };

  return call;
};

const insertCall = async (
  baseId,
  status,
  riderId,
  driverId,
  pickupLocation,
  dropoffLocation,
  mileage,
  timestampCallPlaced,
  timestampCallAssigned,
  timestampCallCompleted,
) => {
  await models.Call.create({
    base_id: baseId,
    status: status,
    rider_id: riderId,
    driver_id: driverId,
    pickup_location: pickupLocation,
    dropoff_location: dropoffLocation,
    mileage: mileage,
    call_placed_timestamp: timestampCallPlaced === undefined ? undefined : timestampCallPlaced.toISOString(),
    call_assigned_timestamp: timestampCallAssigned === undefined ? undefined : timestampCallAssigned.toISOString(),
    call_completed_timestamp: timestampCallCompleted === undefined ? undefined : timestampCallCompleted.toISOString(),
  });
};

module.exports = {
  getCalls,
  getCallById,
  insertCall,
};
