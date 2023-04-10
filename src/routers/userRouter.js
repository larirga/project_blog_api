const router = require('express').Router();
const { userValidate } = require('../middlewares/userValidator');
const userController = require('../controllers/user.controller');

router.post('/', userValidate, userController.createUser);

module.exports = router;