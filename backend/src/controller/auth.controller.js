import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import UserModel from '../model/user.model.js';
import { generateOtp, verifyOtp } from '../services/otp.services.js';

// User Registration (With OTP)
export const signUpAuthController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email } = req.body;

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) return res.status(400).json({ msg: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  await UserModel.insertOne({
    name,
    email,
    password: hashedPassword,
    verified: false,
  });

  const otp = generateOtp(email);
  res.json({ msg: 'OTP sent to email', otp });
};

// OTP Verification
export const verificationAuthController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { email, otp } = req.body;
  const result = verifyOtp(email, otp);

  if (!result.success) return res.status(400).json(result);

  await UserModel.updateOne({ email }, { $set: { verified: true } });

  res.json({ msg: 'OTP verified, user can now log in' });
};

// User Login
export const logInAuthController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) return res.status(400).json({ msg: 'User not found' });
  if (!user.verified)
    return res
      .status(400)
      .json({ msg: 'User not verified. Verify OTP first.' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Incorrect password' });

  res.json({ msg: 'Login successful' });
};
