const express = require('express');

const callHandler = require('../handlers/call');
const callValidation = require('../validation/call');
const validate = require('../middleware/validator');
const tokenMiddleware = require('../middleware/token');

const router = express.Router();

router.get(
  '/',
  tokenMiddleware.verifyAccessToken,
  callHandler.getCalls,
);

router.put(
  '/',
  tokenMiddleware.verifyAccessToken,
  validate(callValidation.placeCall),
  callHandler.placeCall,
);

module.exports = router;
