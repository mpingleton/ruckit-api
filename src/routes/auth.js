const express = require('express');

const authHandler = require('../handlers/auth');
const authValidation = require('../validation/auth');
const validate = require('../middleware/validator');

const router = express.Router();

router.post(
  '/login',
  validate(authValidation.login),
  authHandler.login,
);

router.post(
  '/logout',
  authHandler.logout,
);

module.exports = router;
