import { NextResponse } from "next/server";
import connectDb from "../../helper/config";
import User from "../../models/user";
import dotenv from "dotenv";
// @ts-ignore
import jwt from "jsonwebtoken";

dotenv.config();
connectDb();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { name, email, college, phone } = reqBody.formData;
    const user = await User.findOne({ email: email });
    if (user) {
      return NextResponse.json({ error: "Already exist" }, { status: 400 });
    } else {
      const newUser = new User({
        username: name,
        email: email,
        college: college,
        phone: phone,
      });
      await newUser.save();
      const tokenData = {
        id: newUser._id,
        email: newUser.email,
      };
      const token = jwt.sign(tokenData, process.env.SECRET);
      // res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);
      //     return NextResponse.json({
      //     message: "User Created successfully",
      // });
      const res = NextResponse.json({
        message: "User Created successfully",
      });
      res.cookies.set("token", token, {
        httpOnly: true,
      });
      return res;
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

