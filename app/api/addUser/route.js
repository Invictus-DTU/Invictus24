import { NextResponse } from "next/server";
import User from '../../../model/User';
import config from '../../../helper/config';
config();

export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {username,email,college,phone} = reqBody;
   
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error: "Already exist"},{status: 400});
        }
        else{
            const newUser = new User({username,email,college,phone});
            await newUser.save();
            return NextResponse.json({
                message: "user created successafully"
            });
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
    const user= await req.json();
    
    return NextResponse.json(user)
}