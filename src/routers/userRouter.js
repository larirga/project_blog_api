const router = require('express').Router();
const { userValidate } = require('../middlewares/userValidator');
const userController = require('../controllers/user.controller');
const tokenValidator = require('../middlewares/tokenValidator');

router.post('/', userValidate, userController.createUser);
router.get('/', tokenValidator, userController.getAllUsers);

module.exports = router;