import React from "react";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";
import { ReactComponent as CartIcon } from "../assets/cart_icon.svg";
import { ReactComponent as ProfileIcon } from "../assets/profile_icon.svg";

function NavBar() {
  return (
    <div className="flex items-center mx-24 my-10">
      <span className="font-logo text-2xl">BlissKart</span>
      <div className="h-full flex items-center shrink-0 w-36">
        <span className="cursor-pointer">
          <CartIcon />
        </span>
        <span className="cursor-pointer">
          <ProfileIcon />
        </span>
      </div>
    </div>
  );
}

export default NavBar;
