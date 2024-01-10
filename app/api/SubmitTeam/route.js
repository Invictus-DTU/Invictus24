import { NextResponse } from "next/server";
import config from '../../../helper/config';
import Team from "../../../model/team";
config();




export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {teamId, minMembers, maxMembers, event} = reqBody;
   
        const team = await Team.findOne({teamId: teamId});
        if(Team){
            return NextResponse.json({error: "Team not present"},{status: 400});
        }
        else{
            if(team.member.length < minMembers){
                return NextResponse.json({error: "Members are less than minimum"},{status: 400});
            }
            else if(team.member.length > maxMembers){
                return NextResponse.json({error: "Members are more than maximum"},{status: 400});
            }
            else{
                const team = await Team.findOneAndUpdate({teamId: teamId},{status: "submitted"});
                return NextResponse.json({message: "Team submitted successfully"});
            }
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}