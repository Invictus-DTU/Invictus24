import { NextResponse } from "next/server";
import User from "../../models/user";
import connectDb from "../../helper/config";
import { cookies } from 'next/headers';
import jwt from "jsonwebtoken";
require("dotenv").config();

connectDb();
export async function GET() {
    try{
        const cookieStore = cookies();
        const token = cookieStore.get('token');
        
        if(!token){
            return NextResponse.json({error: "User not exist"},{status: 400});
        }

        const user = jwt.verify(token.value, process.env.NEXT_PUBLIC_SECRET);

        if (!user || !user.id) {
          console.error('Invalid user data');
          return NextResponse.json({error: 'Unauthorized'}, { status: 400 });
        }

        
        const person = await User.findOne({_id:user.id});

        if(!person){
            return NextResponse.json({error: "User not exist"},{status: 400});
        }
        else{
            return NextResponse.json(person,{status: 200});
        }
    }
    catch(err){
        return NextResponse.json({error: err.message},{status:500});
    }
}
