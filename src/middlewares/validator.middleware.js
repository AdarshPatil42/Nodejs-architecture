const { validationResult } = require('express-validator');
const {
  errorResponse,
  internalServer,
} = require('../shared/generatedResponse');
const logger = require('../shared/logger');

const validateRequest = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error(`Request validation error: ${errors.array()[0].msg}`);
      return errorResponse(res, 400, errors.array()[0].msg);
    }
    next();
  } catch (err) {
    logger.error(`Request validation error: ${err.message}`);
    internalServer(res, 'PSA02');
  }
};

module.exports = { validateRequest };
