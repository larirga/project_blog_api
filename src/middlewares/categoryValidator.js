const categorySchema = require('../schemas/categorySchema');

const categoryValidator = (req, res, next) => {
    const { name } = req.body;

    const { error } = categorySchema.validate({ name });

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    next();
};

module.exports = categoryValidator;