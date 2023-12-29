import { NextResponse } from "next/server";
import connectDb from "@/app/helper/config";
import Event from "@/app/models/event";


connectDb();

export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {name,societyName,description,date,teamSizeMIN,teamSizeMax,prize,venue,registrationEndDate} = reqBody;
        
        const event = await Event.findOne({name});

        if(event){
            return NextResponse.json({error: "Event already exist"},{status: 400});
        }
        else{
            const newEvent = new Event({name,societyName,description,date,teamSizeMIN,teamSizeMax,prize,venue,registrationEndDate});
            await newEvent.save();
            return NextResponse.json({
                message: "Event created successafully"
            });
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}
