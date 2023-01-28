// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Search from "./Search";

// type Props = {
//   setQuery?: React.Dispatch<React.SetStateAction<string>>;
// };

// const Header = ({ setQuery: Props }) => {
//   return (
//     <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-900">
//       <div className="flex items-center justify-between w-full h-full max-w-7xl m-auto px-4">
//         <Link href="/">
//           <button className="btn btn-rounded rounded-xl text-black bg-yellow-400 px-3 py-1 text-lg font-semibold">
//             AniFlixer
//           </button>
//         </Link>
//         {setQuery ? (
//           <div className="flex items-center"><Search setQuery={setQuery} /></div>
//         ) : (
//           null
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
import Link from "next/link";
import Image from "next/image";
// Components
import Search from "./Search";

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => (
  <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-900">
    <div className="flex items-center justify-between w-full h-full max-w-7xl m-auto px-4">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <button className="bg-yellow-500 px-4 py-2 text-xl rounded">
            AniFlixer
          </button>
        </div>
      </Link>
      {setQuery ? (
        <div className="relative flex items-center">
          <Search setQuery={setQuery} />
        </div>
      ) : null}
    </div>
  </div>
);

export default Header;
