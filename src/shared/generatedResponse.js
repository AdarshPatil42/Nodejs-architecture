const messages = require('../utils/constants/messages');

const successResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    status: statusCode < 400 ? true : false,
    message,
    data,
  });
};

const errorResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    status: false,
    message,
    data,
  });
};

const internalServer = (res, error_code, data = null) => {
  return res.status(500).json({
    status: false,
    code: `${error_code}, id: ${res.get('X-Correlation-Id')}`,
    message: messages.GENERIC.INTERNAL_ERROR,
    data,
  });
};

module.exports = { successResponse, errorResponse, internalServer };
