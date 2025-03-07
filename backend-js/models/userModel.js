import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        require:true
    },
    otp:String

}) 

const UserModel = mongoose.model('User', UserSchema)

export default UserModel;