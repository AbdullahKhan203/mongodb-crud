// import config from "@/postcss.config.mjs";
import mongoose from "mongoose";
const { Schema } =require('mongoose');

const UserSchema=new Schema({
    firstName:{type:String,required:true},
    lastName:String,
    email:{type:String,required:true},
    phone:String,
})


export const userModel=mongoose.models?.profiles || mongoose.model('profiles',UserSchema)

// 