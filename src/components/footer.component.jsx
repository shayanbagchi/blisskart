import React from "react";
import Logo from "../assets/blisskart.png";
import { ReactComponent as Facebook } from "../assets/gg_facebook.svg";
import { ReactComponent as Instagram } from "../assets/ri_instagram.svg";

function Footer() {
  return (
    <>
      <div className="flex px-9 md:px-24 mt-12 bg-magic">
        <div className="flex flex-col w-[30%] pt-12">
          <div>
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <p className="mt-6 text-lg text-zinc-600">
              We help you find the best <br /> surprise for your loved ones.
            </p>
          </div>
          <div className="flex justify-between w-1/4 my-6">
            <div className="flex items-center justify-center w-10 h-10 border border-zinc-600 rounded-full cursor-pointer hover:scale-[105%] transform transition-transform">
              <Facebook />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border border-zinc-600 rounded-full cursor-pointer hover:scale-[105%] transform transition-transform">
              <Instagram />
            </div>
          </div>
        </div>
        <div className="flex justify-around w-[30%] pt-12">
          <div className="flex flex-col">
            <p className="font-bold">Information</p>
            <p className="mt-5 text-zinc-600 cursor-pointer hover:text-zinc-800">About</p>
            <p className="mt-5 text-zinc-600 cursor-pointer hover:text-zinc-800">Return/refund policy</p>
            <p className="mt-5 text-zinc-600 cursor-pointer hover:text-zinc-800">FAQs</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Company</p>
            <p className="mt-5 text-zinc-600 cursor-pointer hover:text-zinc-800">Contact</p>
            <p className="mt-5 text-zinc-600 cursor-pointer hover:text-zinc-800">Our Story</p>
            <p className="mt-5 text-zinc-600 cursor-pointer hover:text-zinc-800">Careers</p>
          </div>
        </div>
        <div className="flex flex-col pl-12 pt-12">
          <div className="flex flex-col">
            <p className="font-bold">Newsletter</p>
            <p className="pt-5 text-lg text-zinc-600">
              Gifts that Wow, Delivered to Your Inbox: <br /> Sign up for Our
              Newsletter Today!
            </p>
          </div>
          <div className="flex items-center mt-10 border border-black rounded-full focus-within:scale-[101%] transform transition-transform">
            <input
              className="appearance-none w-[366px] h-12 ml-4 bg-transparent placeholder:text-zinc-500 focus:outline-none placeholder:text-base"
              type="text"
              placeholder="Enter email"
            />
            <button className="flex justify-center items-center h-12 m-1 p-4 bg-neutral-100 border border-slate-500 rounded-full cursor-pointer hover:scale-[102%] transform transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="px-9 md:px-24 pt-24 pb-10 bg-magic">
          Copyright © 2023 BlissKart. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
