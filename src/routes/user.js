const express = require('express');

const userHandler = require('../handlers/user');
const userValidation = require('../validation/user');
const validate = require('../middleware/validator');
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

router.put(
  '/',
  tokenMiddleware.verifyAccessToken,
  validate(userValidation.createUser),
  userHandler.createUser,
);

module.exports = router;
