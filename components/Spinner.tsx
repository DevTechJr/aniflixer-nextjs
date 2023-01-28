import React from "react";
import Image from "next/image";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center pb-10">
      <Image
        className="animate-spin"
        src={"/spinner.png"}
        alt="spinner"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Spinner;
