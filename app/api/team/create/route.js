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
    try {
      
        const reqBody = await req.json();
        const { teamname, teamId, eventName } = reqBody.formData;
        const cookieStore = cookies();
        const token = cookieStore.get('token');
        const tokenData = token? jwt.verify(token.value, process.env.SECRET) : "";
        const user = tokenData? await User.findById(tokenData.id) : "";
        const teamLeader = tokenData.id;
        const team = await Team.findOne({ teamId });
        const event = await Event.findOne({ _id: eventName });
        console.log(teamname);
        if (team) {
            return NextResponse.json({ error: "Team already exists" }, { status: 400 });
        } else if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        } else if(!event){
            return NextResponse.json({ error: "Event does not exist" }, { status: 400 });
        }else if (user.eventList.includes(event._id)) {
            return NextResponse.json({ error: "User already registered in this event" }, { status: 400 });
        } else {
            const newTeam = new Team({ teamname, teamId, teamLeader, eventName: event._id });
            newTeam.member.push(teamLeader);
            if(event.teamSizeMax===1){
                newTeam.status=true;
            }
            await newTeam.save();
            user.eventList.push(event._id);
            await user.save();
            return NextResponse.json({ message: "Team created successfully" });
        }
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
