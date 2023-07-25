import React from "react";

const MBestSeller = ({ products }) => {
  const bestsellers = products.filter((product) =>
    product.categories.includes("Bestseller")
  );

  return (
    <div className="md:hidden flex flex-col mx-4 xs:mx-6">
      <div className="ml-1 my-2">
        <p className="font-semibold xs:text-lg">Best Selling Gifts</p>
        <p className="font-light text-xs text-neutral-600">
          Gifts That Sparkle, Shine, and Surprise!
        </p>
      </div>
      <div className="flex flex-wrap justify-between mb-2">
        {bestsellers.map((product) => (
          <div
            className="shrink-0 w-[49%] xs:w-[32.5%] sm:w-[32%] my-1 border border-black rounded-xl cursor-pointer"
            key={product.id}
          >
            <img
              src={product.imageURIs[0]}
              alt={product.title}
              className="w-full rounded-t-xl"
            />
            <div className="m-2">
              <p className="text-sm overflow-hidden line-clamp-2">
                {product.title}
              </p>
              {product.discountedPrice ? (
                <div className="flex items-center my-[2px]">
                  <p className="text-[10px] sm:text-xs">
                    ₹ {product.discountedPrice}{" "}
                    <del className="pl-[2px] text-neutral-400">
                      ₹ {product.price}
                    </del>
                  </p>
                  <p className="ml-2 px-[2px] xs:px-1 text-[10px] sm:text-xs text-green-500 font-medium border border-green-500 rounded">
                    {parseInt(
                      100 - (product.discountedPrice / product.price) * 100
                    )}
                    % OFF
                  </p>
                </div>
              ) : (
                <p className="my-[2px] text-[10px] sm:text-xs">
                  ₹ {product.price}
                </p>
              )}
              <p className="text-xs">No Ratings ⭐</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MBestSeller;
