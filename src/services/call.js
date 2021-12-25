const { models } = require('../database');

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
  insertCall,
};
