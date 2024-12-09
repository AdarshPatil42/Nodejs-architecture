const { body, check } = require('express-validator');

const userValidations = {
  createUserRule: [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('mobile_number')
      .notEmpty()
      .withMessage('Mobile number is required')
      .matches(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/)
      .withMessage('Please provide valid Mobile number'),
    body('role_id').notEmpty().withMessage('Role is required'),
    body('department_id').notEmpty().withMessage('Department is required'),
  ],

  updateUserRule: [
    check('id').isUUID().withMessage('Invalid user ID'), // From req.params
    body('first_name')
      .optional()
      .notEmpty()
      .withMessage('First name cannot be empty'), // From req.body
    body('last_name')
      .optional()
      .notEmpty()
      .withMessage('Last name cannot be empty'), // From req.body
  ],
};

module.exports = userValidations;
