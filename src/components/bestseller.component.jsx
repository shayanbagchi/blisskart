import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";

const BestSeller = ({products}) => {
  return (
    <div className="hidden md:flex flex-col xl:flex-row h-auto my-2 xl:ml-24 xl:my-6">
      <div className="min-w-min xl:w-1/6 md:mx-16 lg:mx-24 xl:mx-0 xl:px-3 pb-4 xl:py-6">
        <p className="xl:mt-12 font-bold text-2xl xl:text-3xl">
          Best Selling Gifts
        </p>
        <p className="mt-1 xl:mt-3 md:text-sm font-light">
          Gifts That Sparkle, Shine, and Surprise!
        </p>
      </div>

      <div className="w-full xl:w-5/6 md:px-3 lg:px-10 xl:px-0 xl:pr-12">
        <CarouselProvider
          className="flex items-center"
          naturalSlideWidth={1}
          naturalSlideHeight={1}
          isIntrinsicHeight={true}
          totalSlides={products.length}
          visibleSlides={3}
          step={3}
          infinite={true}
        >
          <ButtonBack className="shrink-0 w-10 h-10  rounded-full shadow-md">
            &#8592;
          </ButtonBack>
          <Slider>
            {products.map((product, index) => (
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
                  <div className="m-3">
                    <p className="overflow-hidden line-clamp-1" title={product.title}>{product.title}</p>
                    {product.discountedPrice ? (
                      <div className="flex my-[2px]">
                        <p className="text-xs">
                          ₹ {product.discountedPrice}{" "}
                          <del className="pl-[2px] text-neutral-400">
                            ₹ {product.price}
                          </del>
                        </p>
                        <p className="ml-2 px-1 text-xs text-green-500 font-medium border border-green-500 rounded">
                          {parseInt( 100 - (product.discountedPrice / product.price) * 100 )}% OFF
                        </p>
                      </div>
                    ) : (
                      <p className="my-[2px] text-xs">
                        ₹ {product.price}
                      </p>
                    )}
                    <p className="text-xs">No Ratings ⭐</p>
                  </div>
                </Link>
              </Slide>
            ))}
          </Slider>
          <ButtonNext className="shrink-0 w-10 h-10 rounded-full shadow-md">
            &#8594;
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default BestSeller;
