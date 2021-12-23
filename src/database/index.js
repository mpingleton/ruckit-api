const { Sequelize, DataTypes } = require('sequelize');

const User = require('./models/User');
const Token = require('./models/Token');

const sequelize = new Sequelize(process.env.DATABASE_URL);
const models = {};

const initDatabase = async () => {
  await sequelize.authenticate();

  models.User = User(sequelize);
  models.Token = Token(sequelize);
};

const closeDatabase = async () => {
  await sequelize.close();
};

const syncModels = async () => {
  await sequelize.sync({ force: true });
};

module.exports = {
  sequelize,
  models,
  initDatabase,
  closeDatabase,
  syncModels,
};
