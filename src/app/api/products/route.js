import Product from "@/models/productModel"
import connectToDb from "@/utils/db"
import { NextResponse } from "next/server"




// add a Product
export const POST=async(request)=>{
    try {
        await connectToDb()

        const reqBody=await request.json()

        const product=await new Product(reqBody)

        const savedProduct=await product.save()
        
        return NextResponse.json(savedProduct,{status:200,response:true})
        
    } catch (error) {
        return NextResponse.json("Internal Server Error",{status:500,response:false})
        
    }
}

// get Products

export const GET=async(request)=>{
    try {
        await connectToDb()

        const products=await Product.find()

        return NextResponse.json(products,{status:200,response:true})
        
    } catch (error) {
        return NextResponse.json("Internal Server Error",{status:500,response:false})
        
    }
}