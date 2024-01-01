import { NextResponse } from "next/server";
<<<<<<< HEAD
import Event from "../../../models/event";
import User from "../../../models/user";
import Team from "../../../models/team";
import connectDb from "../../../helper/config";

connectDb();

=======
import  connectDb   from "../../../helper/config";
import Event from "../../../models/event";
import Team from "../../../models/team";
import User from "../../../models/user";

connectDb();
// event schema -->
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19
export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {eventName} = reqBody;
        
        const event = await Event.findOne({name: eventName});
<<<<<<< HEAD
        console.log(event._id)
=======
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19

        if(!event){
            return NextResponse.json({error: "Event not exist"},{status: 400});
        }
        else{
            const teams = await Team.find({eventName: event._id,status: false}).populate('teamLeader').populate('eventName').populate('member');

            return NextResponse.json(teams);
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
<<<<<<< HEAD
    }
=======
    }
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19
}
