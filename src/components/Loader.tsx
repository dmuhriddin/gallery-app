import React from "react";

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen grid place-items-center bg-[#00000060] z-40">
      <span className="loader"></span>
    </div>
  );
}

export default Loader;
