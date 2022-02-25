const Joi = require('joi');

const schema = () => {
  return Joi.object({
    start: Joi.number().integer().min(0).optional().messages({
      'number.base': 'Start must be an integer',
      'number.min': 'Start must be greater than or equal to 0',
    }),
    // end must be greater than start
    end: Joi.number().integer().min(Joi.ref('start')).optional().messages({
      'number.base': 'End must be an integer',
      'number.min': 'End must be greater than start',
    }),
    filter: Joi.allow(),
  }).and('start', 'end').messages({
    'object.and': 'Start and end must be specified together',
  });
};

module.exports = schema;