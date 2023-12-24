const mongoose= require('mongoose')

const  connectDb = async ()=>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        console.log("connected");
    }
    catch(err){
        console.log(err);
    }
}
export default connectDb;