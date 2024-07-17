// import config from "../postcss.config.mjs";
import mongoose from "mongoose";
const { Schema } =require('mongoose');

const ProductsSchema=new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:Number,
})

// this llien shows that a new table 'products' created in mongoDb, this code ```mongoose.models?.products``` check that if the table  already created new this code is running otherwise a new tabale should be create by this code```mongoose.model('products',ProductsSchema)```
export const productModel=mongoose.models?.products || mongoose.model('products',ProductsSchema)