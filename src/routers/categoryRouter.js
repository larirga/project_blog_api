const router = require('express').Router();
const tokenValidator = require('../middlewares/tokenValidator');
const categoryController = require('../controllers/category.controller');
const categoryValidator = require('../middlewares/categoryValidator');

router.post('/', tokenValidator, categoryValidator, categoryController.createCategory);
router.get('/', tokenValidator, categoryController.getAllCategories);

module.exports = router;