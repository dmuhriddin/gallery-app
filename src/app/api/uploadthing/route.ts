import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";
import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

export async function DELETE(req: Request) {
  const { filekey } = await req.json();

  const utApi = new UTApi();
  await utApi.deleteFiles(filekey);

  return NextResponse.json({ msg: "Image Deleted" });
}
