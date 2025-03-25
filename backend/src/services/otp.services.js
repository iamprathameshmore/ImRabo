const otpStorage = new Map(); // Temporary OTP storage (use Redis or DB in production)

export const generateOtp = (email) => {
  const otp = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
  otpStorage.set(email, { otp, expires: Date.now() + 5 * 60 * 1000 }); // Expiry: 5 min
  return otp;
};

export const verifyOtp = (email, otp) => {
  const storedOtp = otpStorage.get(email);
  if (!storedOtp)
    return { success: false, message: 'OTP expired or not found' };

  if (storedOtp.otp.toString() !== otp.toString()) {
    return { success: false, message: 'Invalid OTP' };
  }

  otpStorage.delete(email); // Remove OTP after successful verification
  return { success: true, message: 'OTP verified successfully' };
};
