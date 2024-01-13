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
    const user = jwt.verify(token.value, process.env.NEXT_PUBLIC_SECRET);
    
    if (!user || !user.id) {
      console.error('Invalid user data');
      return NextResponse.error('Unauthorized', { status: 400 });
    }

    const userId = user.id;

    const teams = await Team.find({ member: { $in: [userId] } }).populate('teamLeader').populate('eventName').populate('member');
    return NextResponse.json({ team: teams });
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.error('Internal Server Error', { status: 500 });
  }
}
