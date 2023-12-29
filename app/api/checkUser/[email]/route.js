import User from '../../../../model/User';
import config from '../../../../../../app/helper/config';

import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  // Configuring something globally, if needed
  config();

  console.log(`Email parameter: ${params.email}`); // Using a more descriptive log message

  try {
    const response = await User.findOne({ email: params.email });

    if (response) {
      return NextResponse.json({ message: "Already exist" });
    } else {
      return NextResponse.json({ message: "Doesn't exist" },{status: 400});
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error({error: 'Internal Server Error' },{ status: 500});
  }
}
