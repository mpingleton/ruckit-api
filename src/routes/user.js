const express = require('express');

const userHandler = require('../handlers/user');
const userValidation = require('../validation/user');
const validate = require('../middleware/validator');
const tokenMiddleware = require('../middleware/token');

const router = express.Router();

router.get(
  '/in/base/my',
  tokenMiddleware.verifyAccessToken,
  userHandler.getUsersInMyBase,
);

router.get(
  '/',
  tokenMiddleware.verifyAccessToken,
  userHandler.getAllUsers,
);

router.post(
  '/id/:userId/lock',
  tokenMiddleware.verifyAccessToken,
  validate(userValidation.lockUser),
  userHandler.lockUser,
);

router.post(
  '/id/:userId/unlock',
  tokenMiddleware.verifyAccessToken,
  validate(userValidation.unlockUser),
  userHandler.unlockUser,
);

router.get(
  '/id/:userId',
  tokenMiddleware.verifyAccessToken,
  validate(userValidation.getUserById),
  userHandler.getUserById,
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
