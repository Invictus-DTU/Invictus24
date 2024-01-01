import Team from '../../../model/team';
import { cookies } from 'next/headers';
<<<<<<< HEAD
import { getUser } from '../../../../../app/services/auth';
=======
import { getUser } from '../../services/auth';
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19

export default async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    const user = getUser(token);

    if (!user || !user._id) {
      console.error('Invalid user data');
<<<<<<< HEAD
      return NextResponse.error('Unauthorized', { status: 400 });
=======
      return NextResponse.error('Unauthorized', { status: 401 });
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19
    }

    const userId = user._id;

<<<<<<< HEAD
    const teams = await Team.find({}).populate('teamLeader').populate('eventName').populate('members');
=======
    const teams = await Team.find({}).populate('User');
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19

    const promises = teams.map(async (data) => {
      if (data.member.includes(userId)) {
        try {
          return data;
        } catch (error) {
          console.error(`Error fetching team for event ${data.eventname}: ${error.message}`);
        }
      } else {
        data.participationStatus = 'not participated';
        console.log(`Event ${data.eventname} is not present in the array.`);
      }
    });

    // Wait for all promises to resolve
    const teamDetails = await Promise.all(promises);

<<<<<<< HEAD
    return NextResponse.json({ team: teamDetails });
=======
    return NextResponse.json({ event: teamDetails });
>>>>>>> 5c8358acd17d94ff9a670ecb1bf5339dbd386f19
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.error('Internal Server Error', { status: 500 });
  }
}
