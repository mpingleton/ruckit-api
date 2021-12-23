if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { models, initDatabase, closeDatabase } = require('./index.js');

const baseData = [
  {
    name: 'Whiteman AFB',
  },
  {
    name: 'Barksdale AFB',
  },
];

const userData = [
  {
    username: 'john.doe',
    passphrase: '12345',
    role: 'RIDER',
    is_locked: false,
    rank: 'SrA',
    first_name: 'John',
    last_name: 'Doe',
    base_id: 1,
  },
  {
    username: 'alice.doe',
    passphrase: '12345',
    role: 'DISPATCHER',
    is_locked: false,
    rank: 'SrA',
    first_name: 'Alice',
    last_name: 'Doe',
    base_id: 1,
  },
  {
    username: 'jane.doe',
    passphrase: '12345',
    role: 'DRIVER',
    is_locked: true,
    rank: 'A1C',
    first_name: 'Jane',
    last_name: 'Doe',
    base_id: 1,
  },
  {
    username: 'josh.snuffy',
    passphrase: '12345',
    role: 'ADMIN',
    is_locked: false,
    rank: 'TSgt',
    first_name: 'Josh',
    last_name: 'Snuffy',
    base_id: 1,
  },
];

const main = async () => {
  // Connect to the database.
  await initDatabase();

  // Base data.
  for (const base of baseData) {
    await models.Base.create(base);
  }

  // User data.
  for (const user of userData) {
    await models.User.create(user);
  }

  // Close the database connection so the application can close.
  await closeDatabase();
};

main();
