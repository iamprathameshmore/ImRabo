import mongoose from "mongoose";

const connectionDatabase =async (url)=>{
    try {
       return await mongoose.connect(url).then(console.log('Database is connected'))
    } catch (error) {
        console.log(error)
    }
}


export default connectionDatabase;