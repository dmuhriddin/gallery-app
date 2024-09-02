"use client";

import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Picture from "@/components/Picture";
import Popup from "@/components/Popup";
import Uploader from "@/components/Uploader";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [updateGallery, setUpdateGallery] = useState<boolean>(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/get_images")
      .then((res) => {
        setPictures(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [updateGallery]);

  return (
    <main className="container">
      <div className="sticky top-0 bg-white pb-4 z-10">
        <Navbar />
        <Header />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-12">
        <Uploader setUpdateGallery={setUpdateGallery} />

        {pictures
          ? pictures.map((pic: any) => (
              <Picture
                key={pic._id}
                imgUrl={pic.imgUrl}
                setIsLoading={setIsLoading}
                filekey={pic?.filekey}
                id={pic?._id}
                setUpdateGallery={setUpdateGallery}
                setOpenPopup={setOpenPopup}
                setImgUrl={setImgUrl}
              />
            ))
          : null}
      </div>

      {isLoading && <Loader />}
      {openPopup && <Popup imgUrl={imgUrl} setOpenPopup={setOpenPopup} />}
    </main>
  );
}

export default Home;
