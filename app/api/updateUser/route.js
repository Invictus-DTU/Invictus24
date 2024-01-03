import { NextResponse } from "next/server";
import User from "../../models/user";
import connectDb from "../../helper/config";
connectDb();

export async function POST(req) {
    try{
        const reqBody= await req.json();
        const {username,email,college,phone} = reqBody;
        const updatedUser = await User.findByIdAndUpdate(reqBody._id, {username,email,college,phone}, { new: true });
        if (!updatedUser) {
          return NextResponse.json({error: "User not exist"},{status: 400});
        }
        else{
            return NextResponse.json({messsage: 'User updated successfully'},{status: 200});
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}