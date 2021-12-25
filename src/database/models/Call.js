const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Call = sequelize.define('Call', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    base_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rider_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    pickup_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dropoff_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    call_placed_timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    call_assigned_timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    call_completed_timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'calls',
  });

  return Call;
};
