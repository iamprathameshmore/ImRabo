import { body } from 'express-validator';

export const logInValidator = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required'),
];

export const signUpValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email format'),
];

export const verificationValidator = [
  body('otp')
    .isInt()
    .isLength({ min: 4, max: 6 })
    .withMessage('OTP must be 4-6 digits'),
];
