const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const configJWT = {
    expiresIn: '100d',
    algorithm: 'HS256',
};

const generateToken = (user) => {
    const data = {
        user,
    };
    const token = jwt.sign(data, secretKey, configJWT);
    return token;
};

const validateToken = (token) => {
    try {
        const isValid = jwt.verify(token, secretKey);
        return isValid;
    } catch (e) {
        return e;
    }
};

const decodeToken = (token) => {
    const decoded = jwt.decode(token, secretKey);
    return decoded;
};

module.exports = {
    generateToken,
    validateToken,
    decodeToken,
};