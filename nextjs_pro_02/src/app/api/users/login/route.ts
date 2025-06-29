import { connectToDB } from "@/Config/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log("Received request body:", reqBody);

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    console.log("User found:", user);
    const validPassword = bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 401 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login successfully",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
