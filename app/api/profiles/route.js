import dbConnect from "@/config/db";
import { userModel } from "@/model/user";
import { NextResponse } from "next/server";


dbConnect();
export const GET=async(req,route)=>{
    // console.log("route",route.params);
    try {
       const data=await userModel.find();
    //    sending data to client
       return NextResponse.json({message:"success",user:data});
    } catch (error) {
        
        return NextResponse.json({message:"error",error});
    }
    
 }