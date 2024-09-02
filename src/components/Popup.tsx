import React, { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  imgUrl: string;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
}

function Popup({ imgUrl, setOpenPopup }: Props) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen grid place-items-center bg-[#00000060] z-40 p-8 overflow-auto">
      <IoMdClose
        className="text-white text-3xl cursor-pointer absolute top-0 right-0 m-4"
        onClick={() => setOpenPopup(false)}
      />

      <img src={imgUrl} alt="image" />
    </div>
  );
}

export default Popup;
