import { NextResponse } from "next/server";
import Event from "../../../models/event";
import connectDb from "../../../helper/config";
connectDb();

export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {name,societyName,description,date,teamSizeMIN,teamSizeMax,prize,venue,registrationEndDate} = reqBody;
        const updatedEvent = await Event.findByIdAndUpdate(reqBody._id, {name,societyName,description,date,teamSizeMIN,teamSizeMax,prize,venue,registrationEndDate}, { new: true });
        if (!updatedEvent) {
          return NextResponse.json({error: "Event not exist"},{status: 400});
        }
        else{
            return NextResponse.json({messsage: 'Event updated successfully'},{status: 200});
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}