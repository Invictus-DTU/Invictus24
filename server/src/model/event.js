import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventname:{
        type : String,
        required:[true,"please enter the name"],
        unique: true,
    },
    Description:{
        type : String,
        required:[true,"please enter the description"],
        unique: true,
    },
    college:{
        type : String,
        required:[true,"please enter the college"],
    },
    Date: {
        type : Number,
        required:[true,"please enter the last registeration date"],
        unique: true,
    },
});

const Event = mongoose.models.Event || mongoose.model("Event",eventSchema);
export default Event;