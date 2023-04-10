const userSchema = require('../schemas/userSchema');

const loginValidation = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const { error } = userSchema.validate({ email, password });
    if (error) {
        return res.status(400).json({ message: error.message });
    } 
    next();
};

module.exports = {
    loginValidation,
};