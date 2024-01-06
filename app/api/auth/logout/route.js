import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = NextResponse.json({ message: 'Logout successful' });
    res.cookies.set('token', '', {
      httpOnly: true,
      expires: new Date(0),
    });

    return res;
  } catch (error) {
    console.error('Error during logout:', error);

    // Handle the error appropriately, such as sending a 500 Internal Server Error response
    return NextResponse.json({ error: 'Unable to logout' }, { status: 500 });
  }
}
