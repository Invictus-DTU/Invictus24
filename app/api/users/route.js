import { NextResponse } from "next/server";
<<<<<<< HEAD
import connectDb from "@/app/helper/config";
=======
import connectDb from "@/server/src/helper/config";
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19
import User from "@/app/models/user";
import dotenv from "dotenv";

dotenv.config(); 
connectDb();

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
            const tokenData = {
                id: newUser._id,
                email: newUser.email
            }
            const token = await jwt.sign(tokenData,process.env.secret);
            const res =  NextResponse.json({
                message: "User Created successfully",
            });
            res.cookies.set("token",token,{
                httpOnly:true
            })
            return res;
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
    
}