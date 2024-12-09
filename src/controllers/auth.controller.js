const UserService = require('../services/user.service');
const {
  errorResponse,
  successResponse,
} = require('../shared/generatedResponse');
const logger = require('../shared/logger');
const messages = require('../utils/constants/messages');

const userRegister = async (req, res) => {
  try {
    const user = await UserService.userRegistration(req.body);
    logger.info(`User created with ID: ${user.id}`);
    return successResponse(res, 201, messages.USER.CREATED_SUCCESS, user);
  } catch (error) {
    logger.error(`Error creating user: ${error.message}`);
    return errorResponse(
      res,
      error.statusCode || 500,
      error.message || messages.GENERIC.INTERNAL_ERROR,
    );
  }
};

module.exports = { userRegister };
