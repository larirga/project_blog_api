const router = require('express').Router();
const tokenValidator = require('../middlewares/tokenValidator');
const postController = require('../controllers/post.controller');

router.get('/', tokenValidator, postController.getAllPost);

module.exports = router;