import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    passwoed:{type:String,required:true}

});

export const UserModel = mongoose.model("users",UserSchema)