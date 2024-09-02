import axios from "axios";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

interface Props {
  imgUrl: string;
  filekey: string;
  id: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setUpdateGallery: Dispatch<SetStateAction<boolean>>;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setImgUrl: Dispatch<SetStateAction<string>>;
}

function Picture({
  imgUrl,
  setIsLoading,
  filekey,
  id,
  setUpdateGallery,
  setOpenPopup,
  setImgUrl,
}: Props) {
  const removePic = (e: FormEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsLoading(true);

    axios
      .delete("/api/uploadthing", { data: { filekey } })
      .then((res) => {
        console.log(res);

        axios
          .delete(`/api/remove_image/${id}`)
          .then((res) => setUpdateGallery((prevState) => !prevState))
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const openPic = () => {
    setImgUrl(imgUrl);
    setOpenPopup(true);
  };

  return (
    <div
      className="relative overflow-hidden group cursor-pointer"
      onClick={openPic}
    >
      <img
        src={imgUrl}
        alt="photo"
        className="w-full h-[250px] rounded-lg object-cover"
      />

      <div className="absolute w-full transition-transform duration-500 group-hover:translate-y-0 translate-y-8 bottom-0 left-0 py-1 grid place-items-center bg-[#00000060]">
        <div
          className="flex items-center gap-2 text-red-600"
          onClick={removePic}
        >
          <RiDeleteBinLine />
          Remove
        </div>
      </div>
    </div>
  );
}

export default Picture;
