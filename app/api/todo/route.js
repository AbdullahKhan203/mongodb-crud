import { NextResponse } from "next/server";

export const GET=()=>{
    return NextResponse.json({message:"GET method call api/todo path"});
 }
//  learned how make 4 methds and call them
//  learn concept dynamic routing

export const POST=(req)=>{
    const title=new URL(req.url).searchParams.get("title")
    const description=new URL(req.url).searchParams.get("description")
    return NextResponse.json({message:"POST method call api/todo path",data:title,description:description});
 }