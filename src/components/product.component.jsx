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
import product_img_1 from "../assets/product_1.png";
import product_img_2 from "../assets/product_2.png";
import product_img_3 from "../assets/product_3.jpg";
import Footer from "./footer.component";

function Product() {
  return (
    <div>
      <Navbar />
      <div className="hidden md:flex mx-4 xs:mx-6 md:mx-16 lg:mx-24">
        <div className="w-1/2 md:my-4 xl:my-6">
          <div className="w-5/6 relative float-right border border-neutral-400 rounded">
            <CarouselProvider
              visibleSlides={1}
              totalSlides={6} // Update this to the total number of images
              naturalSlideWidth={5}
              naturalSlideHeight={3}
              isIntrinsicHeight={true}
            >
              <Slider>
                <Slide index={0}>
                  <div className="rounded cursor-pointer">
                    <img
                      src={product_img_1}
                      alt="Something Cool"
                      className="w-full"
                    />
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="rounded cursor-pointer">
                    <img
                      src={product_img_2}
                      alt="Something Cool"
                      className="w-full"
                    />
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="rounded cursor-pointer">
                    <img
                      src={product_img_1}
                      alt="Something Cool"
                      className="w-full"
                    />
                  </div>
                </Slide>
                <Slide index={3}>
                  <div className="rounded cursor-pointer">
                    <img
                      src={product_img_2}
                      alt="Something Cool"
                      className="w-full"
                    />
                  </div>
                </Slide>
                <Slide index={4}>
                  <div className="rounded cursor-pointer">
                    <img
                      src={product_img_1}
                      alt="Something Cool"
                      className="w-full"
                    />
                  </div>
                </Slide>
                <Slide index={5}>
                  <div className="rounded cursor-pointer">
                    <img
                      src={product_img_2}
                      alt="Something Cool"
                      className="w-full"
                    />
                  </div>
                </Slide>
              </Slider>
              {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <ButtonBack className="w-8 h-8 rounded-full shadow-md flex items-center justify-center">
                &#8592;
              </ButtonBack>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <ButtonNext className="w-8 h-8 rounded-full shadow-md flex items-center justify-center">
                &#8594;
              </ButtonNext>
            </div> */}
              <div className="flex flex-col w-1/6 h-full absolute top-1/2 transform -translate-y-1/2 left-[-20%] overflow-y-scroll no-scrollbar">
                <Dot
                  className="w-full mb-1 xl:mb-2 border border-neutral-400 hover:border-2 rounded"
                  slide={0}
                >
                  <Image src={product_img_1} />
                </Dot>
                <Dot
                  className="w-full mb-1 xl:mb-2 border border-neutral-400 hover:border-2 rounded"
                  slide={1}
                >
                  <Image src={product_img_2} />
                </Dot>
                <Dot
                  className="w-full mb-1 xl:mb-2 border border-neutral-400 hover:border-2 rounded"
                  slide={2}
                >
                  <Image src={product_img_1} />
                </Dot>
                <Dot
                  className="w-full mb-1 xl:mb-2 border border-neutral-400 hover:border-2 rounded"
                  slide={3}
                >
                  <Image src={product_img_2} />
                </Dot>
                <Dot
                  className="w-full mb-1 xl:mb-2 border border-neutral-400 hover:border-2 rounded"
                  slide={4}
                >
                  <Image src={product_img_1} />
                </Dot>
                <Dot
                  className="w-full mb-1 xl:mb-2 border border-neutral-400 hover:border-2 rounded"
                  slide={5}
                >
                  <Image src={product_img_2} />
                </Dot>
              </div>
            </CarouselProvider>
          </div>
        </div>
        <div className="w-1/2">
          {/* Add code here */}
        </div>
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
          totalSlides={9}
          visibleSlides={4}
          step={3}
          infinite={true}
        >
          <ButtonBack className="flex items-center justify-center absolute md:left-[-1.0%] xl:left-[-0.5%] shrink-0 md:w-8 lg:w-10 md:h-8 lg:h-10 bg-white rounded-full shadow-md z-10">
            <LeftIcon className="md:w-4 lg:w-5 md:h-4 lg:h-5" />
          </ButtonBack>
          <Slider>
            <Slide innerClassName="flex justify-center pb-1" index={0}>
              <div className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer">
                <img
                  src={product_img_1}
                  alt="Something Cool"
                  className="w-full rounded-t-xl"
                />
                <div className="md:m-2 lg:m-3">
                  <p className="text-sm lg:text-base">Ceramic Mug</p>
                  <p className="text-xs lg:text-sm">₹ 699</p>
                  <p className="text-xs lg:text-sm">4.5 ⭐</p>
                </div>
              </div>
            </Slide>
            <Slide innerClassName="flex justify-center pb-1" index={1}>
              <div className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer">
                <img
                  src={product_img_3}
                  alt="Something Cool"
                  className="w-full rounded-t-xl"
                />
                <div className="md:m-2 lg:m-3">
                  <p className="text-sm lg:text-base">Ceramic Mug</p>
                  <p className="text-xs lg:text-sm">₹ 699</p>
                  <p className="text-xs lg:text-sm">4.5 ⭐</p>
                </div>
              </div>
            </Slide>
            <Slide innerClassName="flex justify-center pb-1" index={2}>
              <div className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer">
                <img
                  src={product_img_2}
                  alt="Something Cool"
                  className="w-full rounded-t-xl"
                />
                <div className="md:m-2 lg:m-3">
                  <p className="text-sm lg:text-base">Ceramic Mug</p>
                  <p className="text-xs lg:text-sm">₹ 699</p>
                  <p className="text-xs lg:text-sm">4.5 ⭐</p>
                </div>
              </div>
            </Slide>
            <Slide innerClassName="flex justify-center pb-1" index={3}>
              <div className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer">
                <img
                  src={product_img_3}
                  alt="Something Cool"
                  className="w-full rounded-t-xl"
                />
                <div className="md:m-2 lg:m-3">
                  <p className="text-sm lg:text-base">Ceramic Mug</p>
                  <p className="text-xs lg:text-sm">₹ 699</p>
                  <p className="text-xs lg:text-sm">4.5 ⭐</p>
                </div>
              </div>
            </Slide>
            <Slide innerClassName="flex justify-center pb-1" index={4}>
              <div className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer">
                <img
                  src={product_img_1}
                  alt="Something Cool"
                  className="w-full rounded-t-xl"
                />
                <div className="md:m-2 lg:m-3">
                  <p className="text-sm lg:text-base">Ceramic Mug</p>
                  <p className="text-xs lg:text-sm">₹ 699</p>
                  <p className="text-xs lg:text-sm">4.5 ⭐</p>
                </div>
              </div>
            </Slide>
            <Slide innerClassName="flex justify-center pb-1" index={5}>
              <div className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer">
                <img
                  src={product_img_2}
                  alt="Something Cool"
                  className="w-full rounded-t-xl"
                />
                <div className="md:m-2 lg:m-3">
                  <p className="text-sm lg:text-base">Ceramic Mug</p>
                  <p className="text-xs lg:text-sm">₹ 699</p>
                  <p className="text-xs lg:text-sm">4.5 ⭐</p>
                </div>
              </div>
            </Slide>
            <Slide innerClassName="flex justify-center pb-1" index={6}>
              <div className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer">
                <img
                  src={product_img_3}
                  alt="Something Cool"
                  className="w-full rounded-t-xl"
                />
                <div className="md:m-2 lg:m-3">
                  <p className="text-sm lg:text-base">Ceramic Mug</p>
                  <p className="text-xs lg:text-sm">₹ 699</p>
                  <p className="text-xs lg:text-sm">4.5 ⭐</p>
                </div>
              </div>
            </Slide>
            <Slide innerClassName="flex justify-center pb-1" index={7}>
              <div className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer">
                <img
                  src={product_img_1}
                  alt="Something Cool"
                  className="w-full rounded-t-xl"
                />
                <div className="md:m-2 lg:m-3">
                  <p className="text-sm lg:text-base">Ceramic Mug</p>
                  <p className="text-xs lg:text-sm">₹ 699</p>
                  <p className="text-xs lg:text-sm">4.5 ⭐</p>
                </div>
              </div>
            </Slide>
            <Slide innerClassName="flex justify-center pb-1" index={8}>
              <div className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer">
                <img
                  src={product_img_2}
                  alt="Something Cool"
                  className="w-full rounded-t-xl"
                />
                <div className="md:m-2 lg:m-3">
                  <p className="text-sm lg:text-base">Ceramic Mug</p>
                  <p className="text-xs lg:text-sm">₹ 699</p>
                  <p className="text-xs lg:text-sm">4.5 ⭐</p>
                </div>
              </div>
            </Slide>
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
