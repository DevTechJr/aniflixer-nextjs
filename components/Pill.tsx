import React from "react";

type Props = {
  text: string;
  className?: string;
};

const Pill = ({ text, className }: Props) => {
  return (
    <div
      className={`bg-yellow-500 text-black font-semibold px-2 py-1 m-2 rounded-full inline-block ${className}`}
    >
      {text}
    </div>
  );
};

export default Pill;
