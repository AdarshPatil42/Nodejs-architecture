const TRUser = require('../models/TRUser');
const { AppError } = require('../shared/appError');
const logger = require('../shared/logger');

class UserService {
  static async userRegistration(userData) {
    try {
      const existingUser = await TRUser.findOne({
        where: { mobile_number: userData.mobile_number, is_deleted: false },
      });
      if (existingUser)
        throw new AppError(409, 'User with this Mobile Number already exists.');

      const user = await TRUser.create(userData);
      return user;
    } catch (error) {
      logger.error('Error in create User', error);
      throw error;
    }
  }
}
module.exports = UserService;
