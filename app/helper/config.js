import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config(); 

const connectDb = async ()=>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME,
        });
        console.log("connected");
    }
    catch(err){
        console.log(err);
    }
}
export default connectDb;