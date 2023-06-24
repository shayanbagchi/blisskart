import React from "react";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";
import heroimg from "../assets/hero_img.png";

function SearchHero() {
  return (
    <div className="flex mx-9 md:mx-24 my-6 bg-gradient-to-r from-magic to-transparent rounded-2xl">
      <div className="flex flex-col justify-center mx-12 my-10">
        <p className="text-6xl text-slate-700 font-extrabold">
          Buy the <br /> best suprise
        </p>
        <div className="flex justify-between items-center w-[448px] h-16 my-14 bg-white rounded-xl focus-within:scale-[101%] transform transition-transform">
          <input
            className="appearance-none w-[366px] h-10 ml-4 focus:outline-none placeholder:text-base"
            type="text"
            placeholder="What are you looking for?"
          />
          <span className="flex justify-center items-center w-12 h-12 m-2 bg-magic rounded-xl cursor-pointer">
            <SearchIcon/>
          </span>
        </div>
      </div>
      <div className="w-full bg-cover">
        <img src={heroimg} alt="Gift" className="w-full bg-cover rounded-r-2xl"/>
      </div>
    </div>
  );
}

export default SearchHero;