import Product from "@/models/productModel"
import connectToDb from "@/utils/db"
import { NextResponse } from "next/server"


// update a Product
export const PUT=async(request,{params})=>{
    try {
        await connectToDb()

         const {id}=params

        const reqBody=await request.json()
       

        const product=await Product.findByIdAndUpdate(id,{$set:reqBody},{new:true})
        

        return NextResponse.json(product,{status:200})
        
    } catch (error) {
        return NextResponse.json("Internal Server Error",{status:500})
        
    }
}

// delete a Product

export const DELETE=async(request,{params})=>{
    try {
        const {id}=params;

        const reqBody=request.json()

        const product=await Product.findByIdAndDelete(id)
        return NextResponse.json(product,{status:200})


        
    }
     catch (error) {
        return NextResponse.json("Internal Server Error",{status:500})
        
    }
}