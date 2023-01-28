import React, { useRef } from "react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ setQuery }: Props) => {
  const [text, setText] = useState("");
  const timer = useRef<NodeJS.Timeout>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    clearTimeout(timer.current);
    setText(value);

    timer.current = setTimeout(()=>{setQuery(value)},350)
  };

  return (
    <input
      className="h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700 text-yellow-300 focus:outline-none focus:border focus:border-solid focus:border-cyan-200"
      type="text"
      placeholder="Search a movie..."
      value={text}
      onChange={handleInput}
    />
  );
};

export default Search;
