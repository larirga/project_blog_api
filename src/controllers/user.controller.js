const userService = require('../services/user.service');
const errorMessage = require('../utils/errorMessage');
const { generateToken } = require('../utils/auth');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await userService.login(email, password);

        if (!user) {
            throw errorMessage(400, 'Invalid fields');
        }

        const token = generateToken(user);

        return res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};

module.exports = { login };