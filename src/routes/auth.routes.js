const express = require('express');
const { createUserRule } = require('../shared/validations/user.validation');
const { validateRequest } = require('../middlewares/validator.middleware');
const { userRegister } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/register', createUserRule, validateRequest, userRegister);

module.exports = router;
