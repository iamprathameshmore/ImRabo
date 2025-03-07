import UserModel from "../../models/userModel.js";

const emailLogInController =async (req, res) => {
    const {email} = req.body;

    if(!email) return res.status(400).json({msg:'email not be empty'});

    try {

        const user = await UserModel.findOne({email});

        if(!user) return res.status(300).json({msg:'Please Sign Up first'});

        return res.json({user, msg:'log In Succesfully'})


    } catch (error) {
        console.log(error);
    }

    return res.json({ msg: 'hello from login' });
}

export default emailLogInController;