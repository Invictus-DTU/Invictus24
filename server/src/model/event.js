import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
    eventname:{
        type : String,
        required:[true,"please enter the name"],
        unique: true,
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
});

const Event = mongoose.model("Event",eventSchema);
export default Event;