import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import product_img_1 from "../assets/product_1.png";
import product_img_2 from "../assets/product_2.png";
import product_img_3 from "../assets/product_3.jpg";

function BestSeller() {
  return (
    <div className="hidden md:flex flex-col xl:flex-row h-auto my-2 xl:ml-24 xl:my-4">
      <div className="min-w-min xl:w-1/6 md:mx-16 lg:mx-24 xl:mx-0 xl:px-3 pb-4 xl:py-6">
        <p className="xl:mt-12 font-bold text-2xl xl:text-3xl">
          Best Selling Gifts
        </p>
        <p className="mt-1 xl:mt-3">Gifts That Sparkle, Shine, and Surprise!</p>
      </div>

      <div className="w-full xl:w-5/6 md:px-3 lg:px-10 xl:px-0 xl:pr-12">
      <CarouselProvider className="flex items-center"
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        isIntrinsicHeight={true}
        totalSlides={9}
        visibleSlides={3}
        step={3}
        infinite={true}
      >
        <ButtonBack className="shrink-0 w-10 h-10  rounded-full shadow-md">&#8592;</ButtonBack>
        <Slider>
          <Slide innerClassName="flex justify-center pb-1" index={0}>
            <div className="shrink-0 w-[93%] border border-black rounded-xl cursor-pointer">
              <img
                src={product_img_1}
                alt="Something Cool"
                className="w-full rounded-t-xl"
              />
              <div className="m-3">
                <p>Ceramic Mug</p>
                <p className="text-sm">₹ 699</p>
                <p className="text-sm">4.5 ⭐</p>
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
              <div className="m-3">
                <p>Ceramic Mug</p>
                <p className="text-sm">₹ 699</p>
                <p className="text-sm">4.5 ⭐</p>
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
              <div className="m-3">
                <p>Ceramic Mug</p>
                <p className="text-sm">₹ 699</p>
                <p className="text-sm">4.5 ⭐</p>
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
              <div className="m-3">
                <p>Ceramic Mug</p>
                <p className="text-sm">₹ 699</p>
                <p className="text-sm">4.5 ⭐</p>
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
              <div className="m-3">
                <p>Ceramic Mug</p>
                <p className="text-sm">₹ 699</p>
                <p className="text-sm">4.5 ⭐</p>
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
              <div className="m-3">
                <p>Ceramic Mug</p>
                <p className="text-sm">₹ 699</p>
                <p className="text-sm">4.5 ⭐</p>
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
              <div className="m-3">
                <p>Ceramic Mug</p>
                <p className="text-sm">₹ 699</p>
                <p className="text-sm">4.5 ⭐</p>
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
              <div className="m-3">
                <p>Ceramic Mug</p>
                <p className="text-sm">₹ 699</p>
                <p className="text-sm">4.5 ⭐</p>
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
              <div className="m-3">
                <p>Ceramic Mug</p>
                <p className="text-sm">₹ 699</p>
                <p className="text-sm">4.5 ⭐</p>
              </div>
            </div>
          </Slide>
        </Slider>
        <ButtonNext className="shrink-0 w-10 h-10 rounded-full shadow-md">&#8594;</ButtonNext>
      </CarouselProvider>
      </div>
    </div>
  );
}

export default BestSeller;
