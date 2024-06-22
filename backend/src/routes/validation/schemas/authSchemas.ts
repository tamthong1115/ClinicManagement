import Joi from 'joi';
import schemaValidator from '../middlewares/schemaValidator';

const PASSWORD_REGEX = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$');

const authRegister = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(PASSWORD_REGEX).required(),
  confirmPassword: Joi.any()
    .equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .messages({ 'any.only': '{{#label}} does not match' }),
});

const authLogin = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(PASSWORD_REGEX).required(),
});

export const registerValidator = schemaValidator(authRegister);
export const loginValidator = schemaValidator(authLogin);
