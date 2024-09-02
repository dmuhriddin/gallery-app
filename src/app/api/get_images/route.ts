import Image from "@/libs/models/Image";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectMongoDB();

    const data = await Image.find({}).sort({ createdAt: -1 }).exec();

    return NextResponse.json({ msg: "Get All Image Successfully", data });
  } catch (error) {
    return NextResponse.json({ msg: "something went wrong", error });
  }
}
