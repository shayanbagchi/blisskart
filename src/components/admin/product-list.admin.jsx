import React, { useState, useEffect, useRef } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  const scrollableElementRef = useRef(null);

  useEffect(() => {
    if (isDialogOpen && scrollableElementRef.current) {
      const scrollHeight = scrollableElementRef.current.scrollHeight;
      const containerHeight = scrollableElementRef.current.clientHeight;
      setIsContentOverflowing(scrollHeight > containerHeight);
    }
  }, [isDialogOpen]);

  const handleProductCardClick = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-wrap items-center sm:my-3 md:my-4 lg:my-8 pl-1 xs:mx-6 md:mx-16 lg:mx-24">
      {products.map((product) => (
        <div
          key={product.id}
          className="shrink-0 w-[49%] xs:w-[32.5%] lg:w-[24.3%] mb-[6px] sm:mb-2 xl:mb-3 mr-2 border border-black rounded-xl cursor-pointer"
          onClick={() => handleProductCardClick(product)}
        >
          <img
            src={product.imageURIs[0]}
            alt={product.title}
            className="w-full rounded-t-xl"
          />
          <div className="m-2 lg:m-3">
            <p className="text-sm sm:text-base w-11/12 h-6 overflow-hidden">
              {product.title}
            </p>
            {product.discountedPrice ? (
              <div className="flex my-[2px]">
                <p className="text-xs sm:text-sm">
                  ₹ {product.discountedPrice}{" "}
                  <del className="pl-[2px] text-neutral-400">
                    ₹ {product.price}
                  </del>
                </p>
                <p className="ml-2 px-1 text-xs sm:text-sm text-green-500 font-semibold border border-green-500 rounded">
                  {parseInt(
                    100 - (product.discountedPrice / product.price) * 100
                  )}
                  % OFF
                </p>
              </div>
            ) : (
              <p className="my-[2px] text-xs sm:text-sm">₹ {product.price}</p>
            )}
          </div>
        </div>
      ))}

      {/* Product details dialog */}
      {selectedProduct && isDialogOpen && (
        <div className="flex fixed inset-0 bg-neutral-100">
          <div className="flex justify-center items-center mx-24">
            <div className="flex justify-center items-center h-[90%] py-12 relative bg-white rounded-xl">
              <div className="w-2/5 ml-6">
                <div className="w-5/6 relative float-right">
                  <CarouselProvider
                    visibleSlides={1}
                    totalSlides={selectedProduct.imageURIs.length}
                    naturalSlideWidth={5}
                    naturalSlideHeight={3}
                    isIntrinsicHeight={true}
                  >
                    <Slider>
                      {selectedProduct.imageURIs.map((imageURI, index) => (
                        <Slide key={index} index={index}>
                          <img
                            src={imageURI}
                            alt={selectedProduct.title}
                            className="mb-1 border border-black"
                          />
                        </Slide>
                      ))}
                    </Slider>

                    <div className="flex flex-col w-1/6 h-full absolute top-1/2 transform -translate-y-1/2 left-[-20%] overflow-y-scroll no-scrollbar">
                      {selectedProduct.imageURIs.map((imageURI, index) => (
                        <Dot
                          key={index}
                          className="w-full mb-1 xl:mb-2 border border-neutral-400 hover:border-2 rounded"
                          slide={index}
                        >
                          <Image src={imageURI} />
                        </Dot>
                      ))}
                    </div>
                  </CarouselProvider>
                </div>
              </div>
              <div className="w-3/5 h-full flex">
                <div className="flex flex-col justify-center h-full px-8 mx-4 md:mx-auto">
                  <div
                    className="h-4/5 overflow-y-auto no-scrollbar"
                    ref={scrollableElementRef}
                  >
                    <h2 className="text-2xl font-bold mb-4">
                      {selectedProduct.title}
                    </h2>
                    {selectedProduct.discountedPrice ? (
                      <div className="flex mb-4">
                        <p className="text-lg">
                        <span className="font-semibold">Price: </span>₹ {selectedProduct.discountedPrice}{" "}
                          <del className="pl-[2px] text-neutral-400">
                            ₹ {selectedProduct.price}
                          </del>
                        </p>
                        <p className="ml-2 px-1 text-lg text-green-500 font-semibold border border-green-500 rounded">
                          {parseInt(
                            100 -
                              (selectedProduct.discountedPrice /
                                selectedProduct.price) *
                                100
                          )}
                          % OFF
                        </p>
                      </div>
                    ) : (
                      <p className="my-[2px] text-lg">
                        ₹ {selectedProduct.price}
                      </p>
                    )}
                    <p className="text-lg mb-4">
                      <span className="font-semibold">ID: </span>
                      <span className="font-semibold text-blue-500">
                        {selectedProduct.id}
                      </span>
                    </p>
                    {selectedProduct.categories &&
                    selectedProduct.categories.length > 0 ? (
                      <p className="text-lg mb-4">
                        <span className="font-semibold">Categories: </span>{selectedProduct.categories.join(", ")}
                      </p>
                    ) : (
                      <p className="text-lg mb-4">
                        <span className="font-semibold">Categories: </span>{selectedProduct.categories}
                      </p>
                    )}
                    <p className="text-lg"><span className="font-semibold">Description: </span>{selectedProduct.desc}</p>
                    {selectedProduct.outOfStock && (
                      <p className="text-red-600 font-bold mt-4">
                        Out of Stock
                      </p>
                    )}
                    {selectedProduct.prodInfo &&
                      selectedProduct.prodInfo.length > 0 && (
                        <ul className="list-disc list-inside mt-4">
                          <p className="mb-2 text-lg font-semibold">
                            Product Info:
                          </p>
                          {selectedProduct.prodInfo.map((info, index) => {
                            const [label, value] = info.split(":");
                            return (
                              <li key={index} className="ml-4">
                                <span className={value ? "font-semibold" : ""}>
                                  {label}:
                                </span>{" "}
                                {value || label}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                  </div>

                  {isContentOverflowing && (
                    <div className="flex justify-center items-center h-10">
                      <span className="text-gray-600">
                        Scroll down to see more
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 m-2 pt-2 animate-bounce"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  )}
                  
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                    onClick={handleCloseDialog}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
