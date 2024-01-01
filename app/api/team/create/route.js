import { NextResponse } from "next/server";
<<<<<<< HEAD
import connectDb from "@/app/helper/config";
=======
import connectDb from "@/server/src/helper/config";
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19
import Team from "@/app/models/team";
import User from "@/app/models/user";
import Event from "@/app/models/event";
connectDb();

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { teamname, teamId, teamLeader, eventName } = reqBody;

        const team = await Team.findOne({ teamId });
        const user = await User.findOne({ _id: teamLeader });
        const event = await Event.findOne({ name: eventName });
        
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
