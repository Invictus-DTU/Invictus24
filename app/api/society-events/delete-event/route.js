import { NextResponse } from "next/server";
import Event from "../../../models/event";
import User from "../../../models/user";
import Team from "../../../models/team";
import connectDb from "../../../helper/config";
connectDb();

export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {eventId} = reqBody;
        const deletedEvent = await Event.findById(eventId);
        if (!deletedEvent) {
          return NextResponse.json({error: "Event not exist"},{status: 400});
        }
        else{
            await Promise.all([
                User.updateMany({ 'eventList': eventId }, { $pull: { 'eventList': eventId } }),
                Team.deleteMany({ 'eventName': eventId }),
                Event.findByIdAndDelete(eventId),
              ]);
            return NextResponse.json({messsage: 'Event deleted successfully'},{status: 200});
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}