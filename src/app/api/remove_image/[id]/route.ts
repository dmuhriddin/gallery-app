import Image from "@/libs/models/Image";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, URLParams: any) {
  try {
    await connectMongoDB();
    const id = URLParams.params.id;

    await Image.findByIdAndDelete(id);
    return NextResponse.json({ msg: "Image Deleted SuccessFully" });
  } catch (error) {
    return NextResponse.json({ msg: "something went wrong", error });
  }
}
