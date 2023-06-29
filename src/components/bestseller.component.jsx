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

function Bestseller() {
  return (
    <div className="hidden 2xl:flex h-auto mx-8 md:mx-16 lg:mx-24 my-8">
      <div className="min-w-min py-6">
        <p className="mt-12 font-bold text-3xl">
          Best Selling Gifts
        </p>
        <p className="mt-3">Gifts That Sparkle, Shine, and Surprise!</p>
      </div>

      <div className="w-5/6">
      <CarouselProvider className="flex items-center"
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        isIntrinsicHeight={true}
        totalSlides={9}
        visibleSlides={3}
        step={3}
        infinite={true}
      >
        <ButtonBack className="shrink-0 w-10 h-10 rounded-full shadow-md">&#8592;</ButtonBack>
        <Slider>
          <Slide innerClassName="flex justify-center" index={0}>
            <div className="shrink-0 w-80 border border-black rounded-xl cursor-pointer">
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
          <Slide innerClassName="flex justify-center" index={1}>
            <div className="shrink-0 w-80 border border-black rounded-xl cursor-pointer">
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
          <Slide innerClassName="flex justify-center" index={2}>
            <div className="shrink-0 w-80 border border-black rounded-xl cursor-pointer">
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
          <Slide innerClassName="flex justify-center" index={3}>
            <div className="shrink-0 w-80 border border-black rounded-xl cursor-pointer">
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
          <Slide innerClassName="flex justify-center" index={4}>
            <div className="shrink-0 w-80 border border-black rounded-xl cursor-pointer">
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
          <Slide innerClassName="flex justify-center" index={5}>
            <div className="shrink-0 w-80 border border-black rounded-xl cursor-pointer">
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
          <Slide innerClassName="flex justify-center" index={6}>
            <div className="shrink-0 w-80 border border-black rounded-xl cursor-pointer">
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
          <Slide innerClassName="flex justify-center" index={7}>
            <div className="shrink-0 w-80 border border-black rounded-xl cursor-pointer">
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
          <Slide innerClassName="flex justify-center" index={8}>
            <div className="shrink-0 w-80 border border-black rounded-xl cursor-pointer">
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

      {/* <div className='flex justify-between w-full'>
            <div className='w-80 border border-black rounded-xl cursor-pointer'>
                <img src={product_img} alt='Something Cool' className='w-full rounded-t-xl'/>
                <div className='m-3'>
                  <p>Ceramic Mug</p>
                  <p className='text-sm'>₹ 699</p>
                  <p className='text-sm'>4.5 ⭐</p>
                </div>
            </div>
            <div className='w-80 border border-black rounded-xl cursor-pointer'>
                <img src={product_img} alt='Something Cool' className='w-full rounded-t-xl'/>
                <div className='m-3'>
                  <p>Ceramic Mug</p>
                  <p className='text-sm'>₹ 699</p>
                  <p className='text-sm'>4.5 ⭐</p>
                </div>
            </div>
            <div className='w-80 border border-black rounded-xl cursor-pointer'>
                <img src={product_img} alt='Something Cool' className='w-full rounded-t-xl'/>
                <div className='m-3'>
                  <p>Ceramic Mug</p>
                  <p className='text-sm'>₹ 699</p>
                  <p className='text-sm'>4.5 ⭐</p>
                </div>
            </div>
        </div> */}
    </div>
  );
}

export default Bestseller;
