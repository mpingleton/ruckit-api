const express = require('express');

const userHandler = require('../handlers/user');
const tokenMiddleware = require('../middleware/token');

const router = express.Router();

router.get(
  '/',
  tokenMiddleware.verifyAccessToken,
  userHandler.getAllUsers,
);

router.get(
  '/me',
  tokenMiddleware.verifyAccessToken,
  userHandler.getMe,
);

module.exports = router;
