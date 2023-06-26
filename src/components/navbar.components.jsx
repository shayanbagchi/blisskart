import React from "react";
import Logo from "../assets/blisskart.png";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";
import { ReactComponent as CartIcon } from "../assets/cart_icon.svg";
import { ReactComponent as ProfileIcon } from "../assets/profile_icon.svg";

function NavBar() {
  return (
    <>
      <div className="flex justify-between items-center mx-8 md:mx-16 lg:mx-24 mt-6 mb-4">
        <span className="font-logo text-3xl">
          <img src={Logo} alt="BlissKart" className="h-8 lg:h-10" />
        </span>
        <div className="hidden sm:flex items-center border border-neutral-500 rounded-3xl focus-within:border-black focus-within:scale-[101%] transform transition-transform">
          <input
            className="appearance-none sm:w-[320px] lg:w-[384px] ml-4 focus:outline-none placeholder:text-sm md:placeholder:text-base"
            type="text"
            placeholder="What are you looking for?"
          />
          <span className="flex justify-center items-center w-8 h-8 my-1 mr-2 cursor-pointer">
            <SearchIcon />
          </span>
        </div>
        <div className="h-full flex justify-between items-center w-16 md:w-20">
          <span className="cursor-pointer">
            <CartIcon />
          </span>
          <span className="cursor-pointer">
            <ProfileIcon />
          </span>
        </div>
      </div>
      <div className="mx-8 md:mx-16 lg:mx-24 border-b border-black"></div>
      <div className="flex sm:hidden justify-between items-center mx-9 my-4 border border-neutral-500 rounded-3xl focus-within:border-black focus-within:scale-[101%] transform transition-transform">
        <input
          className="appearance-none sm:w-[320px] lg:w-[384px] ml-4 focus:outline-none placeholder:text-sm md:placeholder:text-base"
          type="text"
          placeholder="What are you looking for?"
        />
        <span className="flex justify-center items-center w-6 h-6 my-2 mr-3 cursor-pointer">
          <SearchIcon />
        </span>
      </div>
    </>
  );
}

export default NavBar;
