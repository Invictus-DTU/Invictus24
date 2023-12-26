import { NextResponse } from "next/server";
import connectDb from "@/server/src/helper/config";
import Team from "@/app/models/team";
import User from "@/app/models/user";
import Event from "@/app/models/event";
connectDb();

export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {teamId,team_member} = reqBody;
        
        const team = await Team.findOne({teamId});
        const user = await User.findOne({_id: team_member});

        if(!team){
            return NextResponse.json({error: "Team not exist"},{status: 400});
        }
        
        else if(!user){
            return NextResponse.json({error: "User not exist"},{status: 400});
        }
        else{
            const event = await Event.findOne({ _id: team.eventName });
            if (!event) {
                return NextResponse.json({ error: "Event not found" }, { status: 400 });
            }
            else if (user.eventList.includes(event._id)) {
                return NextResponse.json({ error: "User already registered in this event" }, { status: 400 });
            }
            else if(event.teamSizeMax<=team.member.length){
                return NextResponse.json({ error: "Team limit exceed" }, { status: 400 });
            }
            else{
                team.member.push(team_member);
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
