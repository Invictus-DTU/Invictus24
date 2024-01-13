import User from '../../models/user';
import config from '../../helper/config';
import { NextResponse } from 'next/server';
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';

dotenv.config(); 
config();


export async function POST(req) {
  
  const reqBody= await req.json();
  const {email} = reqBody;
  const cookieStore = cookies();
  const browserToken = cookieStore.get('token');
  
  try {
    const response = await User.findOne({ email: email });
    if (response) {
      const res =  NextResponse.json({ message: "Already exist", isAdmin: response.status === 'admin' });
      if(!browserToken){
        const tokenData = {
          id: response._id,
          email: response.email
        }

        const token = await jwt.sign(tokenData,process.env.NEXT_PUBLIC_SECRET);

        res.cookies.set("token",token,{
          httpOnly:true
        })
      }

      return res;
    } else {
      return NextResponse.json({ message: "Doesn't exist" },{status: 400});
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error({error: 'Internal Server Error' },{ status: 500});
  }
}