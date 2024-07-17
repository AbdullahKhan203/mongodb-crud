 import { NextResponse } from "next/server";
 import page from '../../page'
 export const GET=()=>{
    console.log("hello services");
    const services={
        title:"ali",
        description:"khan",
        img:'url',
    }
     return NextResponse.json(services)
 }



 export const POST=async(req)=>{
    const body=await req.json()
    console.log("body",body);
    return NextResponse.json({message:"post method call"});
 }


 export const DELETE=()=>{
    return NextResponse.json({message:"DELETE method call"});
 }


 export const PUT=()=>{
    return NextResponse.json({message:"PUT method call"});
 }