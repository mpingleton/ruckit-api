const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Base = sequelize.define('Base', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'bases',
  });

  return Base;
};
