import { NextResponse } from "next/server";
import User from '../../models/user'
import config from '../../helper/config'
config();

export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {name,email,college,phone} = reqBody.formData;
        
        const user = await User.findOne({email: email});
        if(user){
            return NextResponse.json({error: "Already exist"},{status: 400});
        }
        else{
            console.log(name)
            const newUser = new User({
                username: name,
                email: email,
                college: college,
                phone: phone
            });
            await newUser.save();
            return NextResponse.json({
                message: "user created successafully"
            });
        }
    }
    catch(err){
        console.log(err)
        return NextResponse.json({error: err.message},{status:500});
    }
    const user= await req.json();
    
    return NextResponse.json(user)
}