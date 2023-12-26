import { NextResponse } from "next/server";
import Event from "@/app/models/event";
import connectDb from "@/server/src/helper/config";


connectDb();

export async function GET(req) {
    try{
        const events = await Event.find();
        return NextResponse.json(events);
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}
