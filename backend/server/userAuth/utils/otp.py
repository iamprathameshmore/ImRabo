import pyotp

def generate_otp():
    """Generates a time-based OTP and returns it along with the secret key."""
    secret_key = pyotp.random_base32() 
    totp = pyotp.TOTP(secret_key)
    otp = totp.now() 
    return otp, secret_key

def verify_otp(secret_key, user_otp):
    """Verifies the OTP using the provided secret key."""
    totp = pyotp.TOTP(secret_key)
    return totp.verify(user_otp)  
