import React, { useState } from "react";
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

  const handleProductCardClick = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-wrap items-center mb-2 md:mb-0 sm:mt-3 md:mt-4 lg:mt-6 mx-4 pl-1 xs:mx-6 md:mx-16 lg:mx-24">
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
            <p className="text-xs sm:text-sm">₹ {product.price}</p>
          </div>
        </div>
      ))}

      {/* Product details dialog */}
      {selectedProduct && isDialogOpen && (
        <div className="flex fixed inset-0 bg-neutral-100">
          <div className="flex justify-center items-center mx-24">
            <div className="flex justify-center items-center relative py-24 bg-white rounded-xl">
              <div className="w-2/5 ml-6">
              <div className="w-5/6 pb-1 relative float-right">
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
                          className="border border-black"
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
              <div className="w-3/5 flex items-center justify-center">
                <div className="p-8 mx-4 md:mx-auto">
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-lg mb-4">
                    Price: ₹ {selectedProduct.price}
                  </p>
                  <p className="text-lg mb-4">
                    ID: <span className="font-semibold text-blue-500">{selectedProduct.id}</span>
                  </p>
                  {selectedProduct.categories &&
                    selectedProduct.categories.length > 0 && (
                      <p className="text-lg mb-4">
                        Categories: {selectedProduct.categories.join(", ")}
                      </p>
                    )}
                  <p className="text-lg">{selectedProduct.desc}</p>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
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
