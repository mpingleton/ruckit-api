const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Message = sequelize.define('Message', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    call_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'calls',
        key: 'id',
      },
    },
    recipient_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'messages',
  });
};
