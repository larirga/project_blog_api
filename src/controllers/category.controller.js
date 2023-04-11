const categoryService = require('../services/category.service');

const createCategory = async (req, res, next) => {
    try {
        const { name } = req.body;
        const categoryName = await categoryService.createCategory(name);
        res.status(201).json(categoryName);
    } catch (error) {
        next(error);
    }
};

const getAllCategories = async (req, res, next) => {
    try {
        const allCategories = await categoryService.getAllCategories();
        res.status(200).json(allCategories);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createCategory,
    getAllCategories,
};