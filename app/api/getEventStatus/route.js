import { cookies } from 'next/headers'
import Event from '../../models/event';
import Team from '../../models/team';
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from '../../models/user';
import config from '../../helper/config';
dotenv.config();
config();

 
export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const tokenData = token? jwt.verify(token.value, process.env.SECRET) : "";
  const user = tokenData? await User.findById(tokenData.id) : "";
  console.log(user);
  let event = await Event.find({});
  const currentDate = new Date();
  const promises = event.map(async (data, idx) => {
    let plainObject = data.toObject();
    if(plainObject.date > currentDate){
      plainObject=  {...plainObject, status: "closed"};
    }
    else{
      plainObject=  {...plainObject, status: "open"};
    }
    if (user?.eventList?.includes(plainObject._id)) {
      console.log(plainObject);
      try {
        plainObject=  {...plainObject, participationStatus: "participated"};
        const getTeam = await Team.findOne({ teamLeader: user?._id, eventName: plainObject._id });
        if(getTeam){
          plainObject=  {...plainObject, role: "team leader"};
          if(getTeam.status === "not-submitted"){
            plainObject=  {...plainObject, teamStatus: "not-submitted"};
          }
          else{
            plainObject=  {...plainObject, teamStatus: "submitted"};
          }
        }
        else{
          plainObject=  {...plainObject, role: "member"};
        }
      } catch (error) {
        console.error(`Error fetching team for event ${data.eventname}: ${error.message}`);
      }
    } else {
        plainObject=  {...plainObject, participationStatus: "not participated"};
       // console.log(`Event ${plainObject.name} is not present in the array.`);
    }
    return plainObject;
  });
  
 try {
    const updatedEvents = await Promise.all(promises);
    event = updatedEvents;
    return NextResponse.json({ event: event });
  } catch (error) {
    console.error(`Error processing events: ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}