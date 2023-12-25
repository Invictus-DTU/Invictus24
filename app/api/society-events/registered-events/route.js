import { NextResponse } from "next/server";
import { connectDb } from "@/app/helpers/db";
import Event from "@/app/models/event";


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
