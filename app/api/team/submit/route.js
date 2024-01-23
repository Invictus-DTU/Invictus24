import { NextResponse } from "next/server";
import config from "../../../helper/config";
import Team from "../../../models/team";
config();

export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {teamId, teamSizeMIN, teamSizeMAX} = reqBody.formData;
        const team = await Team.findOne({teamId: teamId});
      
        if(!team){
            return NextResponse.json({error: "Team not present"},{status: 400});
        }
        else if(team.status === "Submitted"){
            return NextResponse.json({error: "Team already Submitted"},{status: 400});
        }
        else{
            if(team.member.length < teamSizeMIN){
                return NextResponse.json({error: "Members are less than minimum"},{status: 400});
            }
            else if(team.member.length > teamSizeMAX){
                return NextResponse.json({error: "Members are more than maximum"},{status: 400});
            }
            else{
                const team = await Team.findOneAndUpdate({teamId: teamId},{status: "Submitted"});
                return NextResponse.json({message: "Team Submitted successfully"});
            }
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}