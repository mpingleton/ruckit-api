const { Sequelize, DataTypes } = require('sequelize');

const User = require('./models/User');
const Token = require('./models/Token');
const Base = require('./models/Base');
const Call = require('./models/Call');
const Message = require('./models/Message');

const sequelize = new Sequelize(process.env.DATABASE_URL);
const models = {};

const initDatabase = async () => {
  await sequelize.authenticate();

  models.User = User(sequelize);
  models.Token = Token(sequelize);
  models.Base = Base(sequelize);
  models.Call = Call(sequelize);
  models.Message = Message(sequelize);
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
