const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().required().email().label('email'),
    password: Joi.string().min(6).required().label('password'),
}).messages({
    'string.min': '{{#label}} length must be at least {{#limit}} characters long',
    email: '{{#label}} must be a valid email',
});

module.exports = userSchema;