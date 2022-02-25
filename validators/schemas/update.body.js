const Joi = require('joi');

const schema = () => {
  return Joi.object({
    id: Joi.number().integer().min(0).required().messages({
      'number.base': 'Id is required',
      'number.min': 'Id must be greater than or equal to 0',
    }),
    name: Joi.string().required().messages({
      'string.base': 'Name is required',
    }),
    city: Joi.string().required().messages({
      'string.base': 'City is required',
    }),
    text: Joi.string().required().messages({
      'string.base': 'Text is required',
    }),
  })
};

module.exports = schema;