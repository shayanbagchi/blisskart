import React from "react";
import Logo from "../../assets/blisskart.png";
import { ReactComponent as Facebook } from "../../assets/gg_facebook.svg";
import { ReactComponent as Instagram } from "../../assets/ri_instagram.svg";

function Footer() {
  return (
    <div className="px-6 xs:px-8 md:px-16 xl:px-24 md:mt-4 bg-magic-500">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col shrink-0 w-full md:w-[30%] pt-12">
          <div>
            <img src={Logo} alt="Logo" className="h-8 md:h-10 w-auto" />
            <p className="mt-6 text-sm xl:text-base text-zinc-600">
              We help you find the best <br /> surprise for your loved ones.
            </p>
          </div>
          <div className="flex mt-6 mb-2">
            <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 mr-4 md:mr-6 border border-zinc-600 rounded-full cursor-pointer hover:scale-[105%] transform transition-transform">
              <Facebook />
            </div>
            <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 border border-zinc-600 rounded-full cursor-pointer hover:scale-[105%] transform transition-transform">
              <Instagram />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-evenly shrink-0 w-full md:w-[30%] md:px-6 lg:px-10 xl:px-0 ">
          <div className="flex flex-col mt-6 md:mt-12">
            <p className="font-bold text-sm xl:text-base">Information</p>
            <p className="mt-2 text-sm xl:text-base text-zinc-600 cursor-pointer hover:text-zinc-800">About</p>
            <p className="mt-2 text-sm xl:text-base text-zinc-600 cursor-pointer hover:text-zinc-800">Return/refund policy</p>
            <p className="mt-2 text-sm xl:text-base text-zinc-600 cursor-pointer hover:text-zinc-800">FAQs</p>
          </div>
          <div className="flex flex-col mt-6 md:mt-12">
            <p className="font-bold text-sm xl:text-base">Company</p>
            <p className="mt-2 text-sm xl:text-base text-zinc-600 cursor-pointer hover:text-zinc-800">Contact</p>
            <p className="mt-2 text-sm xl:text-base text-zinc-600 cursor-pointer hover:text-zinc-800">Our Story</p>
            <p className="mt-2 text-sm xl:text-base text-zinc-600 cursor-pointer hover:text-zinc-800">Careers</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[40%] mt-6 md:mt-12 xl:pl-6">
          <div className="flex flex-col">
            <p className="font-bold text-sm xl:text-base">Newsletter</p>
            <p className="mt-6 text-sm xl:text-base text-zinc-600">
              Gifts that is Wow, Delivered to Your Inbox: <br /> Sign up for Our
              Newsletter Today!
            </p>
          </div>
          <div className="flex justify-between items-center sm:w-1/2 md:w-full mt-6 border border-black rounded-full focus-within:scale-[101%] transform transition-transform">
            <input
              className="appearance-none w-[60%] h-8 xl:h-10 ml-4 bg-transparent placeholder:text-zinc-500 focus:outline-none placeholder:text-sm xl:placeholder:text-base"
              type="text"
              placeholder="Enter email"
            />
            <button className="flex justify-center items-center h-8 xl:h-10 m-[2px] xl:m-1 p-2 xl:p-4 text-xs xl:text-sm bg-neutral-100 border border-slate-500 rounded-full cursor-pointer hover:scale-[102%] transform transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 md:px-16 xl:px-24 pt-8 md:pt-20 pb-10 bg-magic">
        <p className="text-center text-zinc-600">
          &copy; 2023 BlissKart. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
