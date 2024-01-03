import { NextResponse } from "next/server";
import Event from "../../../models/event";
import connectDb from "../../../helper/config";
connectDb();

export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {eventId} = reqBody;
        const deletedEvent = await Event.findByIdAndDelete(eventId);
        if (!deletedEvent) {
          return NextResponse.json({error: "Event not exist"},{status: 400});
        }
        else{
            return NextResponse.json({messsage: 'Event deleted successfully'},{status: 200});
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}