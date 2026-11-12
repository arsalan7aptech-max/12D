import mongoose from "mongoose";


const UserSchema= new mongoose.Schema({

    fullname: String,
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    
})


export default mongoose.model("Users",UserSchema)

//export const User =mongoose.model("Users, userShema")