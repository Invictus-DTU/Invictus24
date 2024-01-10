import Event from '../../models/event';
import { cookies } from 'next/headers';
import { getUser } from '../../services/auth';

export default async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    const userEvents = getUser(token);

    const eventDetailsPromises = userEvents.map(async (data) => {
      const e = await Event.findById(data);
      return e;
    });

    console.log(eventDetailsPromises);

    const eventDetails = await Promise.all(eventDetailsPromises);
    console.log(eventDetails);

    return NextResponse.json({ event: eventDetails });
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.error('Internal Server Error', { status: 500 });
  }
}
