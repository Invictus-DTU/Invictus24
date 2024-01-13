import { NextResponse } from "next/server";
import connectDb from "../../../helper/config";
import Team from "../../../models/team";
import User from "../../../models/user";
import Event from "../../../models/event";
import { cookies } from 'next/headers'
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
connectDb();

export async function POST(req) {
    try{
        const cookieStore = cookies();
        const token = cookieStore.get('token');
        const tokenData = token? jwt.verify(token.value, process.env.SECRET) : "";
        const user = tokenData? await User.findById(tokenData.id) : "";
        const reqBody= await req.json();
        const teamId = reqBody.teamId;
        const type = reqBody.type;
        const eventName = reqBody.event;
        
        const team = await Team.findOne({teamId , eventName});

        if(!team){
            return NextResponse.json({error: "Team not exist"},{status: 400});
        }
        
        else if(!user){
            return NextResponse.json({error: "User not exist"},{status: 400});
        }
        else{
            const event = await Event.findOne({ _id: team.eventName, type: type });
            if (!event) {
                return NextResponse.json({ error: `${type} not found` }, { status: 400 });
            }
            else if (user.eventList.includes(event._id)) {
                return NextResponse.json({ error: "User already registered in this event" }, { status: 400 });
            }
            else if(event.teamSizeMax<=team.member.length){
                return NextResponse.json({ error: "Team limit exceed" }, { status: 400 });
            }
            else if(team.status === "submitted"){
                return NextResponse.json({ error: "Team already submitted" }, { status: 400 });
            }
            else{
                team.member.push(user._id);
                await team.save();
                user.eventList.push(event._id);
                await user.save();
                return NextResponse.json({
                    message: "Team updated successafully"
                });
            }
            
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}