import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async () => {
    try {
       const connectionIN = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n mongodb connected ! DB HOST ${connectionIN}`);
    
    } catch (error) {
        console.log("mongodb error",error)
        process.exit(1)
    }
}

export default connectDB