import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar.component";
import Footer from "./footer.component";
import { ReactComponent as SortIcon } from "../assets/sort_icon.svg";
import product_img_1 from "../assets/product_1.png";
import product_img_2 from "../assets/product_2.png";
import product_img_3 from "../assets/product_3.jpg";
import Dropdown from "./dropdown.component";

function ProductList() {
  // const handleOptionSelect = (option) => {
  //   // Logic to handle selected option in parent component
  //   console.log('Selected Option:', option);
  //   if (option === 'Jan - Feb 2021') setData(data_1)
  //   if (option === 'Mar - April 2021') setData(data_2)
  //   if (option === 'May - June 2021') setData(data_3)

  // };

  return (
    <div className="flex flex-col font-poppins">
      <NavBar />
      <div className="flex justify-between items-center mb-2 md:mb-0 sm:mt-3 md:mt-4 lg:mt-6 mx-4 pl-1 xs:mx-6 md:mx-16 lg:mx-24">
        <div>
          <p className="font-semibold md:font-bold text-sm xs:text-lg md:text-2xl xl:text-3xl">
            Home & Living Decor
          </p>
          <p className="md:mt-1 font-light text-xs md:text-base xl:text-lg text-neutral-600">
            999 Gifts
          </p>
        </div>
        <div>
          <div className="flex items-center w-auto h-8 md:h-10 ml-2 px-2 md:px-3 border border-black rounded-xl cursor-pointer">
            <SortIcon className="w-3 md:w-5 h-3 md:h-5 mr-1 md:mr-2" />
            <Dropdown
              defaultText="Sort by"
              options={["Featured", "Low to High", "Popularity"]}
              className=""
              // onOptionSelect={handleOptionSelect}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mx-4 xs:mx-6 md:mx-16 lg:mx-24 sm:my-2 md:my-4 mb-2">
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_1}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_2}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_3}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_1}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_2}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_3}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_1}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_2}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_3}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_1}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_2}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
        <Link
          to="/product"
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[101%]"
        >
          <img
            src={product_img_3}
            alt="Something Cool"
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base">Ceramic Mug</p>
            <p className="text-xs sm:text-sm">₹ 699</p>
            <p className="text-xs sm:text-sm">4.5 ⭐</p>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;