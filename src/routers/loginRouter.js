const express = require('express');
const userController = require('../controllers/user.controller');
const { loginValidation } = require('../middlewares/userValidator');

const router = express.Router();

router.post('/', loginValidation, userController.login);

module.exports = router;