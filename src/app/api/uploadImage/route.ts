import Image from "@/libs/models/Image";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectMongoDB();

    const { imgUrl, filekey } = await req.json();

    const data = await Image.create({ imgUrl, filekey });

    return NextResponse.json({ msg: "Image Upload Successfully", data });
  } catch (error) {
    return NextResponse.json({ msg: "something went wrong", error });
  }
}
