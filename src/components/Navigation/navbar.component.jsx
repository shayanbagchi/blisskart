import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/blisskart.png";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";
import { ReactComponent as HeartIcon } from "../../assets/heart_icon.svg";
import { ReactComponent as CartIcon } from "../../assets/cart_icon.svg";
import { ReactComponent as UserIcon } from "../../assets/profile_icon.svg";
import { ReactComponent as Bulge } from "../../assets/top-buldge.svg";
import { ReactComponent as Logout } from "../../assets/Icon-Logout.svg";
import { auth } from "../../utils/firebase.util";
import { signOut } from "firebase/auth";

const NavBar = ({ userData, setUserData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initials, setInitials] = useState("");

  useEffect(() => {
    if (userData) {
      setInitials(userData.displayName.charAt(0).toUpperCase());
      console.log('Nav: ' + userData.displayName);
    }
  }, [userData]);

  useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      // Make sure to restore scrolling when the component is unmounted
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const signOutUser = () => {
    signOut(auth);
    setUserData(null);
    console.log("Sign Out: " + auth.currentUser.displayName);
    setIsModalOpen(false);
  };

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
          <Link to="/wishlist" className="cursor-pointer">
            <HeartIcon className="w-6 h-6" title="Wishlist" />
          </Link>
          <span className="cursor-pointer" title="Cart">
            <CartIcon />
          </span>
          <span
            className="cursor-pointer"
            title="Account"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            {userData ? (
              <span className="flex items-center justify-center w-7 h-7 border-2 border-black rounded-full bg-neutral-100 text-black">
                {initials}
              </span>
            ) : (
              <UserIcon />
            )}
          </span>
        </div>
      </div>

      {isModalOpen && !userData && (
        <div className="fixed top-16 right-8 flex items-center justify-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.24)] z-50">
          <div className="relative bg-white p-8 rounded-md">
            <Bulge className="absolute top-[-10px] right-6" />
            <p className="font-semibold mb-1">Welcome!</p>
            <p className="text-xs mb-3">
              To access account and manage
              <br /> orders.
            </p>
            <Link to="/user">
              <button className="h-10 text-magic-600 font-medium py-2 px-4 border hover:border-magic-600 focus:outline-none focus:shadow-outline">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}

      {isModalOpen && userData && (
        <div className="fixed top-16 right-8 flex items-center justify-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.24)] z-50">
          <div className="relative bg-white p-4 rounded-md">
            <Bulge className="absolute top-[-10px] right-7" />
            <div className="flex items-center">
              <span className="flex items-center justify-center w-14 h-14 text-black text-xl border border-neutral-100 rounded-full bg-neutral-100">
                {initials}
              </span>
              <div className="ml-2">
                <p className="font-medium tracking-tight">
                  {userData.displayName}
                </p>
                <p className="text-gray-500 text-xs">{userData.email}</p>
              </div>
            </div>
            <div className="mt-3 border border-neutral-100" />
            <div className="my-4 mx-2">
              <span
                className="flex items-center mt-2 cursor-pointer"
                onClick={signOutUser}
              >
                <Logout />
                <p className="ml-3 text-neutral-500 hover:text-neutral-800 hover:font-medium">
                  Log Out
                </p>
              </span>
            </div>
          </div>
        </div>
      )}

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
};

export default NavBar;
