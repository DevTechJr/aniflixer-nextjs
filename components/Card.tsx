import React from "react";
import Thumbnail from "./Thumbnail";

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};

const Card = ({ imgUrl, title, subtitle }: Props) => {
  return (
    <div className="h-80 ">
      <div className="relative h-full">
        <Thumbnail imgUrl={imgUrl} />
        <div className="absolute w-full bottom-0 px-4 py-2 rounded-b-lg bg-yellow-600">
          <h2 className="text-black text-center text-sm truncate">{title}</h2>
          {subtitle ? (
            <p className="text-xs truncate text-zinc-800 text-center">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
