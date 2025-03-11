import UserModel from "../../models/userModel.js";
import sendOTPEmail from "../../utils/emailSender.js";
import { generateOTP, hashOTP } from "../../utils/otpServices.js";


const emailLogInController = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            success: false,
            status: 400,
            msg: "Email is required."
        });
    }

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                status: 404,
                msg: "User not found. Please sign up first."
            });
        }

        const otp = generateOTP();
        user.secret = await hashOTP(otp);

        await user.save();

        // Send OTP email
        const emailSent = await sendOTPEmail(user.name, email, otp);

        if (!emailSent) {
            return res.status(500).json({
                success: false,
                status: 500,
                msg: "Failed to send OTP email. Please try again."
            });
        }

        return res.status(200).json({
            success: true,
            status: 200,
            msg: "Login OTP sent successfully.",
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Error in emailLogInController:", error);

        return res.status(500).json({
            success: false,
            status: 500,
            msg: "Internal Server Error."
        });
    }
};

export default emailLogInController;
