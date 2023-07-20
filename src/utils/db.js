import mongoose from "mongoose"

const connectToDb=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/hunain")
        console.log("DataBase Connected")
        
    } catch (error) {
        console.log("Internal Server Error")
        return   
    }
}

export default connectToDb;