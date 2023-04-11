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

const createUser = async (req, res, next) => {
    try {
        const { displayName, email, password, image } = req.body;

        const user = await userService.createUser(displayName, email, password, image);

        const token = generateToken(user);

        return res.status(201).json({ token });
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const allUser = await userService.findAllUsers();
        res.status(200).json(allUser);
    } catch (error) {
        next(error);
    }
};

const getIdUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userId = await userService.getIdUser(id);
        res.status(200).json(userId);
    } catch (error) {
        next(error);
    }
};

module.exports = { 
    login,
    createUser,
    getAllUsers,
    getIdUser,
};