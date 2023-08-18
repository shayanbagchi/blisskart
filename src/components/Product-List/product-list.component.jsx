import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navigation/navbar.component";
import Footer from "../Footer/footer.component";
import { ReactComponent as SortIcon } from "../../assets/sort_icon.svg";
import Dropdown from "./dropdown.component";

function ProductList({ products, category, userData, setUserData }) {
  // const handleOptionSelect = (option) => {
  //   // Logic to handle selected option in parent component
  //   console.log('Selected Option:', option);
  //   if (option === 'Jan - Feb 2021') setData(data_1)
  //   if (option === 'Mar - April 2021') setData(data_2)
  //   if (option === 'May - June 2021') setData(data_3)

  // };

  return (
    <div className="flex flex-col font-poppins">
      <NavBar userData={userData} setUserData={setUserData} />
      <div className="flex justify-between items-center mb-2 md:mb-0 sm:mt-3 md:mt-4 lg:mt-6 mx-4 pl-1 xs:mx-6 md:mx-10 lg:mx-16">
        <div>
          <p className="font-semibold md:font-bold text-sm xs:text-lg md:text-2xl xl:text-3xl">
            {category}
          </p>
          <p className="md:mt-1 font-light text-xs md:text-base xl:text-lg text-neutral-600">
            {products.length} items
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
      <div className="flex flex-wrap justify-between mx-4 xs:mx-6 md:mx-10 lg:mx-16 sm:my-2 md:my-4 mb-2">
        {products.map((product, index) => (
          <Link
            to={`/${product.id}/${encodeURIComponent(product.title)}`}
            key={index}
            className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[100.5%]"
          >
            <img
              src={product.imageURIs[0]}
              alt={product.title}
              className="w-full rounded-t-xl"
            />
            <div className="m-2 lg:m-3">
              <p
                className="text-sm sm:text-base overflow-hidden line-clamp-1"
                title={product.title}
              >
                {product.title}
              </p>
              {product.discountedPrice ? (
                <div className="flex items-center my-[2px]">
                  <p className="text-[10px] sm:text-sm ">
                    ₹ {product.discountedPrice}{" "}
                    <del className="pl-[2px] text-neutral-400">
                      ₹ {product.price}
                    </del>
                  </p>
                  <p className="ml-1 xs:ml-2 px-1 text-[10px] sm:text-sm text-green-500 font-medium border border-green-500 rounded">
                    {parseInt(
                      100 - (product.discountedPrice / product.price) * 100
                    )}
                    % OFF
                  </p>
                </div>
              ) : (
                <p className="my-[2px] text-[10px] sm:text-sm">₹ {product.price}</p>
              )}
              <p className="text-xs sm:text-sm">No Ratings⭐</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
