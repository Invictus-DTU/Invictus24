const mongoose= require('mongoose')

const  connectDb = async ()=>{
    try{
        const {connection} = await mongoose.connect("mongodb://127.0.0.1:27017/invictus",{
            dbName:"work",
        });
        console.log("connected");
    }
    catch(err){
        console.log(err);
    }
}
export default connectDb;