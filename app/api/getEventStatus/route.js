import { cookies } from 'next/headers'
import { getUser } from '../../../../../app/services/auth'
import Event from '../../../model/event';
import Team from '../../../model/team';
 
export default async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const user = getUser(token);
  const event = await Event.find({});
  const currentDate = new Date();
  const promises = event.map(async (data, idx) => {
    if(event.Date > currentDate){
        data.status = "closed";
    }
    else{
        data.status = "open";
    }
    if (user?.event?.includes(data._id)) {
      try {
        data.participationStatus = "participated";
        const getTeam = await Team.findOne({ teamLeader: user?._id, event: data.eventname });
        if(getTeam){
            data.role = "team leader";
        }
        else{
            data.role = "participant";
        }
      } catch (error) {
        console.error(`Error fetching team for event ${data.eventname}: ${error.message}`);
      }
    } else {
        data.participationStatus = "not participated";
        console.log(`Event ${data.eventname} is not present in the array.`);
    }
  });
  
  await Promise.all(promises);

  return NextResponse.json({event: event});
}