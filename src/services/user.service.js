const { User } = require('../models');
const errorMessage = require('../utils/errorMessage');

const findAllUsers = () => User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });

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

const createUser = async (displayName, email, password, image) => {
    const user = await findByEmail(email);
    if (user) {
        throw errorMessage(409, 'User already registered');
    }

    const createUsers = await User.create({ displayName, email, password, image });

    return createUsers;
};

const findByPk = (id) => User.findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });

const getIdUser = async (id) => {
    const findId = await findByPk(id);

    if (!findId) {
        throw errorMessage(404, 'User does not exist');
    }
    return findId;
};

module.exports = {
    findAllUsers,
    login,
    createUser,
    getIdUser,
};