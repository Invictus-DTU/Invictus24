import User from '../../models/user';
import config from '../../helper/config';

import { NextResponse } from 'next/server';

export async function POST(req) {
  config();
  const reqBody= await req.json();
  const {email} = reqBody;
  
  try {
    const response = await User.findOne({ email: email });
    if (response) {
      return NextResponse.json({ message: "Already exist", isAdmin: response.status === 'admin' });
    } else {
      return NextResponse.json({ message: "Doesn't exist" },{status: 400});
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error({error: 'Internal Server Error' },{ status: 500});
  }
}
