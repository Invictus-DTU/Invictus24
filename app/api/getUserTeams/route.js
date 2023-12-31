import Team from '../../../model/team';
import { cookies } from 'next/headers';
import { getUser } from '../../services/auth';

export default async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    const user = getUser(token);

    if (!user || !user._id) {
      console.error('Invalid user data');
      return NextResponse.error('Unauthorized', { status: 401 });
    }

    const userId = user._id;

    const teams = await Team.find({}).populate('User');

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

    return NextResponse.json({ event: teamDetails });
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.error('Internal Server Error', { status: 500 });
  }
}
