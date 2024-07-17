import React from 'react'
import mongoose from 'mongoose'
import dbConnect from '@/config/db'
import { userModel } from '@/model/user';

dbConnect();   
   const fetchDocs=async()=>{
        const user =await userModel.find();
        console.log("user",user);
        return user;
   }
export default function page() {
 const user=fetchDocs();
   return (
    <div>
        <h1>Contact page</h1>
    </div>
  )
}
