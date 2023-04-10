const { User } = require('../models');
const errorMessage = require('../utils/errorMessage');

const findAllUsers = () => User.findAll();

const findByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

const login = async (email, password) => {
    const user = await findByEmail(email);
    if (!user) {
        throw errorMessage(400, 'Invalid fields');
    }

    if (user.password !== password) {
        throw errorMessage(400, 'Invalid fields');
    }

    return user;
};

module.exports = {
    findAllUsers,
    login,
};