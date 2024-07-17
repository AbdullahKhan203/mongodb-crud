import { json } from "stream/consumers";
import { productModel } from "../../../model/products";
import dbConnect from "../../../config/db";
import { NextResponse } from "next/server";


dbConnect();
export const POST=async(req)=>{
    try {
        const body=await req.json()
        console.log("body",body);
         // productModel.create({
        //  })
         if(body.title && body.description && body.price ){
            const product=new productModel(body)
            await product.save();
    
            return NextResponse.json({message:"successfully product created"});
        }
        
        return NextResponse.json({message:"All prices are required.tiele,description,price"});

      
    } catch (error) {
        return NextResponse.json({
            message:"something went wrong",
            error:JSON.stringify(error)
        })
    }
  }


export const PUT=async(req)=>{
    try {
        const body=await req.json()
        console.log("body",body);
         // productModel.create({
        //  })
         if(body.title && body.description && body.price ){
           await productModel.updateOne({_id:body.id},body)
            return NextResponse.json({message:"successfully product update"});
        }
        
        return NextResponse.json({message:"All prices are required.tiele,description,price"});

      
    } catch (error) {
        return NextResponse.json({
            message:"something went wrong",
            error:JSON.stringify(error)
        })
    }
  }





 export const DELETE=async(req)=>{
    try {
        const body=await req.json()
        console.log("body",body);
        if(body.id){
           await productModel.deleteOne({
                _id:body.id
            })
        }


        return NextResponse.json({message:"successfully product deleted"});
    } catch (error) {
        return NextResponse.json({
            message:"something went wrong",
            error:JSON.stringify(error)
        })
    }

 }