import UserModel from "../../models/userModel.js";
import { verifyOTP } from "../../utils/otpServices.js";
import { genratToken } from "../../utils/tokenGenrator.js";


const emailVerificationController = async (req, res) => {
    const { email, otp } = req.body;


    if (!email || !otp) {
        return res.status(400).json({
            success: false,
            status: 400,
            msg: 'Email and OTP are required'
        });
    }

    try {

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                status: 404,
                msg: 'User not found'
            });
        }


        const isValid = await verifyOTP(otp, user.secret);

        if (!isValid) {
            return res.status(400).json({
                success: false,
                status: 400,
                msg: 'Invalid OTP'
            });
        }


        const token = genratToken({ id: user.id, name: user.name, email: user.email });


        return res.status(200).json({
            success: true,
            status: 200,
            msg: 'Email verified successfully',
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                token
            }
        });

    } catch (error) {
        console.error('Error in email verification:', error);

        return res.status(500).json({
            success: false,
            status: 500,
            msg: 'Internal Server Error'
        });
    }
};

export default emailVerificationController;
