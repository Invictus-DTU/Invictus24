import { NextResponse } from "next/server";
import Event from "../../../models/event";
import connectDb from "../../../helper/config";

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
