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
    //console.log(token);
    const user = jwt.verify(token.value, process.env.NEXT_PUBLIC_SECRET);
    //console.log(user);
    if (!user || !user.id) {
      console.error('Invalid user data');
      return NextResponse.error('Unauthorized', { status: 400 });
    }

    const userId = user.id;
   // console.log(userId);

    const teams = await Team.find({ member: { $in: [userId] } }).populate('teamLeader').populate('eventName').populate('member');
    // //console.log(teams[0].member[0]);
    // console.log(x);

    // const promises = teams.map(async (data) => {
    //   if (data?.member?.find((val) => {
    //     console.log(val._id);
    //     return val?._id === userId;
    //   })) {
    //     console.log(data)
    //     try {
    //       return data;
    //     } catch (error) {
    //       console.error(`Error fetching team for event ${data.eventName}: ${error.message}`);
    //     }
    //   } else {
    //     data.participationStatus = 'not participated';
    //     console.log(`Event ${data.eventName} is not present in the array.`);
    //   }
    // });

    // // Wait for all promises to resolve
    // const teamDetails = await Promise.all(promises);
    return NextResponse.json({ team: teams });
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.error('Internal Server Error', { status: 500 });
  }
}
