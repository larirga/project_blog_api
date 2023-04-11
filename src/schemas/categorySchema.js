const Joi = require('joi');

const categorySchema = Joi.object({
    name: Joi.string().min(2).required().label('name'),
}).messages({
    'string.required': '{{#label}} is required',
});

module.exports = categorySchema;