const { validateToken } = require('../utils/auth');

const tokenValidator = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }

    const token = validateToken(req.headers.authorization);

    if (!token.email) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }

    return next();
};

module.exports = tokenValidator;