import { connectToDB } from "@/Config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connectToDB();

export async function POST(request: NextRequest) {
  const userId = await getDataFromToken(request);
  const user = await User.findOne({ _id: userId }).select("-password");

  return NextResponse.json(
    { message: "User data retrieved successfully", data: user, success: true },
    { status: 200 }
  );
}
