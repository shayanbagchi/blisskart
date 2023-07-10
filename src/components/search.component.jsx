import React from "react";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";

function SearchHero() {
  return (
    <div className="flex mx-4 xs:mx-6 md:mx-16 lg:mx-24 sm:my-2 md:my-4 mb-2 bg-[url('/src/assets/sm_hero_img.webp')] bg-cover rounded-2xl"> {/*lg:bg-gradient-to-r from-magic to-transparent*/}
      <div className="flex flex-col justify-center w-full mx-6 md:mx-0 md:ml-12 my-6 md:my-20">
        <p className="text-2xl md:text-4xl xl:text-6xl text-slate-700 font-extrabold">
          Buy the <br/> best suprise
        </p>
        <div className="flex justify-between items-center w-full md:w-[448px] md:h-16 my-4 md:my-8 xl:my-12 bg-white rounded-lg md:rounded-xl focus-within:scale-[101%] transform transition-transform">
          <input
            className="appearance-none w-4/5 md:w-[366px] md:h-10 ml-2 sm:ml-4 focus:outline-none placeholder:text-sm md:placeholder:text-base"
            type="text"
            placeholder="What are you looking for?"
          />
          <span className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 m-[6px] md:m-2 bg-magic rounded-lg md:rounded-xl cursor-pointer">
            <SearchIcon className="w-5 md:w-6 h-5 md:h-6"/>
          </span>
        </div>
      </div>
      {/* <div className="hidden lg:block w-full bg-[url('/src/assets/hero_img.png')] bg-cover rounded-r-2xl" /> */}
    </div>
  );
}

export default SearchHero;
