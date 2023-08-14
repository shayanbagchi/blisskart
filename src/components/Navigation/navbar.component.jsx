import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/blisskart.png";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";
import { ReactComponent as HeartIcon } from "../../assets/heart_icon.svg";
import { ReactComponent as CartIcon } from "../../assets/cart_icon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile_icon.svg";

const NavBar = () => {
  return (
    <>
      <div className="md:sticky top-0 flex justify-between items-center px-4 xs:px-6 md:px-10 lg:px-16 pt-4 pb-2 bg-white border-b border-neutral-300 shadow-sm z-20">
        <Link to="/">
          <span className="font-logo text-3xl">
            <img src={Logo} alt="BlissKart" className="h-8 lg:h-10" />
          </span>
        </Link>

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
        <div className="h-full flex justify-between items-center w-24 lg:w-32">
          <span className="cursor-pointer">
            <HeartIcon className="w-6 h-6" title="Wishlist"/>
          </span>
          <span className="cursor-pointer" title="Cart">
            <CartIcon />
          </span>
          <Link to="/user" className="cursor-pointer" title="Account">
            <ProfileIcon />
          </Link>
        </div>
      </div>

      <div className="flex sm:hidden justify-between items-center mx-4 xs:mx-6 my-4 border border-neutral-500 rounded-3xl focus-within:border-black focus-within:scale-[101%] transform transition-transform">
        <input
          className="appearance-none w-3/4 sm:w-[320px] lg:w-[384px] ml-4 focus:outline-none placeholder:text-sm md:placeholder:text-base"
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
