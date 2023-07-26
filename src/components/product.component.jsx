import React from "react";
import Navbar from "./navbar.component";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ReactComponent as LeftIcon } from "../assets/left_icon.svg";
import { ReactComponent as RightIcon } from "../assets/right_icon.svg";
import Footer from "./footer.component";
import { Link } from "react-router-dom";

function Product({ product, bestsellers }) {
  return (
    <div>
      <Navbar />
      <div className="hidden md:flex mx-4 xs:mx-6 md:mx-16 lg:mx-24">
        <div className="w-1/2 md:my-4 xl:my-6">
          <div className="w-5/6 relative float-right border border-neutral-400 rounded">
            <CarouselProvider
              visibleSlides={1}
              totalSlides={product.imageURIs.length} // Update this to the total number of images
              naturalSlideWidth={5}
              naturalSlideHeight={3}
              isIntrinsicHeight={true}
            >
              <Slider>
                {product.imageURIs.map((imageURI, index) => (
                  <Slide key={index} index={index}>
                    <div className="rounded cursor-pointer">
                      <img
                        src={imageURI}
                        alt={product.title}
                        className="w-full"
                      />
                    </div>
                  </Slide>
                ))}
              </Slider>
              <div className="flex flex-col w-1/6 h-full absolute top-1/2 transform -translate-y-1/2 left-[-20%] overflow-y-scroll no-scrollbar">
                {product.imageURIs.map((imageURI, index) => (
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
        <div className="w-1/2">{/* Add code here */}</div>
      </div>

      <div className="hidden md:block md:mx-16 lg:mx-24 border-b border-black"></div>

      <div className="hidden md:block md:mx-16 lg:mx-24 md:my-4 xl:my-6">
        <p className="hidden md:block text-center my-4 xl:my-6 font-semibold md:font-bold xs:text-lg md:text-2xl xl:text-3xl">
          Recommended For You
        </p>

        <CarouselProvider
          className="flex items-center relative"
          naturalSlideWidth={1}
          naturalSlideHeight={1}
          isIntrinsicHeight={true}
          totalSlides={bestsellers.length}
          visibleSlides={4}
          step={3}
          infinite={true}
        >
          <ButtonBack className="flex items-center justify-center absolute md:left-[-1.0%] xl:left-[-0.5%] shrink-0 md:w-8 lg:w-10 md:h-8 lg:h-10 bg-white rounded-full shadow-md z-10">
            <LeftIcon className="md:w-4 lg:w-5 md:h-4 lg:h-5" />
          </ButtonBack>
          <Slider>
            {bestsellers.map((product, index) => (
              <Slide
                innerClassName="flex justify-center pb-1"
                key={index}
                index={index}
              >
                <Link
                  to={`/${product.id}/${encodeURIComponent(product.title)}`}
                  key={index}
                  className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer"
                >
                  <img
                    src={product.imageURIs[0]}
                    alt={product.title}
                    className="w-full rounded-t-xl"
                  />
                  <div className="md:m-2 lg:m-3">
                    <p
                      className="overflow-hidden line-clamp-1"
                      title={product.title}
                    >
                      {product.title}
                    </p>
                    {product.discountedPrice ? (
                      <div className="flex my-[2px]">
                        <p className="text-xs">
                          ₹ {product.discountedPrice}{" "}
                          <del className="pl-[2px] text-neutral-400">
                            ₹ {product.price}
                          </del>
                        </p>
                        <p className="ml-2 px-1 text-xs text-green-500 font-medium border border-green-500 rounded">
                          {parseInt(
                            100 -
                              (product.discountedPrice / product.price) * 100
                          )}
                          % OFF
                        </p>
                      </div>
                    ) : (
                      <p className="my-[2px] text-xs">₹ {product.price}</p>
                    )}
                    <p className="text-xs">No Ratings ⭐</p>
                  </div>
                </Link>
              </Slide>
            ))}
          </Slider>
          <ButtonNext className="flex items-center justify-center absolute md:right-[-1%] lg:right-[-0.5%] shrink-0 md:w-8 lg:w-10 md:h-8 lg:h-10 bg-white rounded-full shadow-md z-10">
            <RightIcon className="md:w-4 lg:w-5 md:h-4 lg:h-5" />
          </ButtonNext>
        </CarouselProvider>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
