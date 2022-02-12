const express = require('express');

const authRoute = require('./auth');
const userRoute = require('./user');
const callRoute = require('./call');
const messageRoute = require('./message');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/call', callRoute);
router.use('/message', messageRoute);

module.exports = router;
