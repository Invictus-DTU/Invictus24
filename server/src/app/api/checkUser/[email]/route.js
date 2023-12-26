import User from '../../../../model/User';
import config from '../../../../helper/config';

import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  // Configuring something globally, if needed
  config();

  console.log(`Email parameter: ${params.email}`); // Using a more descriptive log message

  try {
    const response = await User.findOne({ email: params.email });

    if (response) {
      return NextResponse.json({ valid: true });
    } else {
      return NextResponse.json({ valid: false });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error({ statusCode: 500, statusText: 'Internal Server Error' });
  }
}
