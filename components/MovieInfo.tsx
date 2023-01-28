import React from "react";
import Image from "next/image";
// Helpers
import { calcTime, convertMoney } from "@/helpers";
// Components
import Thumbnail from "./Thumbnail";
import { Crew } from "@/moviedb-api/types";
import Pill from "./Pill";

type Props = {
  thumbUrl: string;
  backgroundImgUrl: string;
  title: string;
  year: string;
  summary: string;
  rating: number;
  directors: Crew[];
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfo = ({
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  directors,
  time,
  budget,
  revenue,
}: Props) => {
  return (
    <div className="relative w-full h-auto p-4 ">
      <div className="relative h-full h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90">
        <div className="relative w-full h-96 md:h-auto md:w-1/3">
          <Thumbnail imgUrl={thumbUrl} />
          <div className="absolute top-4 left-4 rounded-full bg-yellow-500 w-14 h-14 flex justify-center items-center text-black text-sm font-bold">
            {rating}
          </div>
        </div>
        <div className="text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3">
          <h2 className="text-2xl md:text-4xl  font-bold pb-4">
            {title} ({year})
          </h2>
          <h3 className="text-lg font-bold mt-4">Summary: </h3>
          <p className="mb-8 text-sm md:text-md leading-relaxed">{summary}</p>
          <div>
            <h3 className="text-lg font-semibold ">
              Director{directors.length > 1 ? "s: " : ": "}
            </h3>
            <div className="">
              {directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          {/* // Movie Data */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Movie Information: </h3>
            <Pill className={"ml-0"} text={`Runtime : ${calcTime(time)}`} />
            <Pill text={`Budget : ${convertMoney(budget)}`} />
            <Pill text={`Revenue : ${convertMoney(revenue)}`} />
          </div>
        </div>
      </div>
      <Image
        priority
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        src={backgroundImgUrl}
        alt="Background Image"
      />
    </div>
  );
};

export default MovieInfo;
