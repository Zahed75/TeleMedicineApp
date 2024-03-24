const Joi = require('joi');

const signupSchema = Joi.object({
  userName: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  dob: Joi.string().max(10).optional(),
  phoneNumber: Joi.string().max(12).optional(),
  nidNo: Joi.string().max(15).optional(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required().valid('AM', 'DC', 'PT', 'SA'),
});

module.exports = signupSchema;
