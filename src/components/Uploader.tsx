"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setUpdateGallery: Dispatch<SetStateAction<boolean>>;
}

function Uploader({ setUpdateGallery }: Props) {
  const uploadImage = async (imgUrl: string, filekey: string) => {
    await axios
      .post("/api/uploadImage", { imgUrl, filekey })
      .then((res) => {
        setUpdateGallery((prevState) => !prevState);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
          console.log("Files: ", res[0].key);
          uploadImage(res[0]?.url, res[0]?.key);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}

export default Uploader;
