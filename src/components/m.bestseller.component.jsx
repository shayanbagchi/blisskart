import React from "react";
import product_img_1 from "../assets/product_1.png";
import product_img_2 from "../assets/product_2.png";
import product_img_3 from "../assets/product_3.jpg";

function MBestSeller() {
  return (
    <div className="md:hidden flex flex-col mx-4 xs:mx-6">
      <div className="ml-1 my-2">
        <p className="font-semibold xs:text-lg">Best Selling Gifts</p>
        <p className="font-light text-xs text-neutral-600">Gifts That Sparkle, Shine, and Surprise!</p>
      </div>
      <div className="flex flex-wrap justify-between mb-2">
        <div className="shrink-0 w-[49%] xs:w-[32.5%] sm:w-[32%] my-1 border border-black rounded-xl cursor-pointer">
          <img
            src={product_img_1}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2">
            <p className="text-sm font-medium">Ceramic Mug</p>
            <p className="text-xs">₹ 699</p>
            <p className="text-xs">4.5 ⭐</p>
          </div>
        </div>
        <div className="shrink-0 w-[49%] xs:w-[32.5%] sm:w-[32%] my-1 border border-black rounded-xl cursor-pointer">
          <img
            src={product_img_2}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2">
            <p className="text-sm font-medium">Ceramic Mug</p>
            <p className="text-xs">₹ 699</p>
            <p className="text-xs">4.5 ⭐</p>
          </div>
        </div>
        <div className="shrink-0 w-[49%] xs:w-[32.5%] sm:w-[32%] my-1 border border-black rounded-xl cursor-pointer">
          <img
            src={product_img_3}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2">
            <p className="text-sm font-medium">Ceramic Mug</p>
            <p className="text-xs">₹ 699</p>
            <p className="text-xs">4.5 ⭐</p>
          </div>
        </div>
        <div className="shrink-0 w-[49%] xs:w-[32.5%] sm:w-[32%] my-1 border border-black rounded-xl cursor-pointer">
          <img
            src={product_img_2}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2">
            <p className="text-sm font-medium">Ceramic Mug</p>
            <p className="text-xs">₹ 699</p>
            <p className="text-xs">4.5 ⭐</p>
          </div>
        </div>
        <div className="shrink-0 w-[49%] xs:w-[32.5%] sm:w-[32%] my-1 border border-black rounded-xl cursor-pointer">
          <img
            src={product_img_1}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2">
            <p className="text-sm font-medium">Ceramic Mug</p>
            <p className="text-xs">₹ 699</p>
            <p className="text-xs">4.5 ⭐</p>
          </div>
        </div>
        <div className="shrink-0 w-[49%] xs:w-[32.5%] sm:w-[32%] my-1 border border-black rounded-xl cursor-pointer">
          <img
            src={product_img_2}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2">
            <p className="text-sm font-medium">Ceramic Mug</p>
            <p className="text-xs">₹ 699</p>
            <p className="text-xs">4.5 ⭐</p>
          </div>
        </div>
        <div className="shrink-0 w-[49%] xs:w-[32.5%] sm:w-[32%] my-1 border border-black rounded-xl cursor-pointer">
          <img
            src={product_img_3}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2">
            <p className="text-sm font-medium">Ceramic Mug</p>
            <p className="text-xs">₹ 699</p>
            <p className="text-xs">4.5 ⭐</p>
          </div>
        </div>
        <div className="shrink-0 w-[49%] xs:w-[32.5%] sm:w-[32%] my-1 border border-black rounded-xl cursor-pointer">
          <img
            src={product_img_1}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2">
            <p className="text-sm font-medium">Ceramic Mug</p>
            <p className="text-xs">₹ 699</p>
            <p className="text-xs">4.5 ⭐</p>
          </div>
        </div>
        <div className="hidden xs:block shrink-0 w-[49%] xs:w-[32.5%] sm:w-[32%] my-1 border border-black rounded-xl cursor-pointer">
          <img
            src={product_img_3}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2">
            <p className="text-sm font-medium">Ceramic Mug</p>
            <p className="text-xs">₹ 699</p>
            <p className="text-xs">4.5 ⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MBestSeller;
