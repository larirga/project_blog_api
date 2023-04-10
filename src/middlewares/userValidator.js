const loginSchema = require('../schemas/loginSchema');
const userSchema = require('../schemas/userSchema');
const errorMessage = require('../utils/errorMessage');

const loginValidation = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const { error } = loginSchema.validate({ email, password });
    if (error) {
        return res.status(400).json({ message: error.message });
    } 
    next();
};

const userValidate = (req, res, next) => {
    const { displayName, email, password } = req.body;

    const { error } = userSchema.validate({ displayName, email, password });
    if (error) { 
        throw errorMessage(400, error.details[0].message);
    }
    next();
};

module.exports = {
    loginValidation,
    userValidate,
};