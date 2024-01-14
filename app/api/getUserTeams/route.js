import Team from "../../models/team";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    if(!token){
      return NextResponse.json({error: "User not exist"},{status: 400});
    }
    const user = jwt.verify(token.value, process.env.SECRET);
    
    if (!user || !user.id) {
      console.error('Invalid user data');
      return NextResponse.json({error: 'Unauthorized'}, { status: 400 });
    }

    const userId = user.id;

    const teams = await Team.find({ member: { $in: [userId] } }).populate('teamLeader').populate('eventName').populate('member');
    return NextResponse.json({ team: teams });
  } catch (err) {
    return NextResponse.json({error: 'Internal Server Error'}, { status: 500 });
  }
}
