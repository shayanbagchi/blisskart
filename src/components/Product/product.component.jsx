import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HeartIcon } from "../../assets/heart_icon.svg";
import { ReactComponent as BagIcon } from "../../assets/bag_icon.svg";
import Navbar from "../Navigation/navbar.component";
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
import { ReactComponent as LeftIcon } from "../../assets/left_icon.svg";
import { ReactComponent as RightIcon } from "../../assets/right_icon.svg";
import Footer from "../Footer/footer.component";
import { Link, Navigate } from "react-router-dom";
import ProductTabs from "./productTabs.component";
import {
  fetchUserData,
  addToWishlist,
  removeFromWishlist,
} from "../../utils/firebase.util.js";

function Product({ userData, setUserData, product, bestsellers }) {
  const navigate = useNavigate();

  const [fill, setFill] = useState("#ffffff");
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);

  const [visibleSlides, setVisibleSlides] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const [carouselHeight, setCarouselHeight] = useState(285);
  const carouselRef = useRef(null);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    if (userData) {
      setIsProductInWishlist(userData.wishlist.includes(product.id));
    }
  }, [userData, product.id]);

  useEffect(() => {
    isProductInWishlist ? setFill("#e55e74") : setFill("#ffffff");
  }, [product.id, isProductInWishlist]);

  useEffect(() => {
    const handleResize = () => {
      const [width] = windowSize.current;
      const newWidth = window.innerWidth;

      if (width < 1024 && newWidth >= 1024) {
        setVisibleSlides("4");
      } else if (width >= 1024 && newWidth < 1024) {
        setVisibleSlides("4");
      }

      windowSize.current = [newWidth, window.innerHeight];
    };

    // Calculate the initial visibleSlides value based on screen size
    if (initialLoad) {
      const currentWidth = window.innerWidth;
      if (currentWidth >= 1024) {
        setVisibleSlides("4");
      } else {
        setVisibleSlides("3");
      }

      setInitialLoad(false); // Set initialLoad to false after the calculation
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialLoad, windowSize, carouselHeight]);

  useLayoutEffect(() => {
    const handleCarouselResize = () => {
      if (carouselRef.current) {
        const newHeight = carouselRef.current.clientHeight;
        setCarouselHeight(newHeight);
      }
    };

    // Function to handle content loaded
    const handleContentLoaded = () => {
      if (carouselRef.current) {
        const initialHeight = carouselRef.current.clientHeight;
        setCarouselHeight(initialHeight);
      }
    };

    // Check if the window is already loaded (in case the component is mounted after the window onload event)
    if (document.readyState === "complete") {
      handleContentLoaded();
    } else {
      window.addEventListener("load", handleContentLoaded);
    }

    window.addEventListener("resize", handleCarouselResize);

    return () => {
      window.removeEventListener("resize", handleCarouselResize);
      window.removeEventListener("load", handleContentLoaded);
    };
  });

  const addItemToWishlist = async () => {
    await addToWishlist(userData.uid, product.id);

    // Fetch the updated user data and update the userData state
    const updatedUserData = await fetchUserData(userData.uid);
    setUserData(updatedUserData);
  };

  const removeItemFromWishlist = async () => {
    await removeFromWishlist(userData.uid, product.id);

    // Fetch the updated user data and set it in the state
    const updatedUserData = await fetchUserData(userData.uid);
    setUserData(updatedUserData);
  };

  const handleItemInWishlist = async () => {

    if (!userData) {
      // User is not logged in, navigate to /user page
      navigate('/user');
      return;
    }

    if (isProductInWishlist) {
      // Product is already in wishlist, so remove it
      await removeItemFromWishlist();
      setFill("#ffffff");
    } else {
      // Product is not in wishlist, so add it
      await addItemToWishlist();
      setFill("#e55e74");
    }

    // Fetch the updated user data and update the userData state
    const updatedUserData = await fetchUserData(userData.uid);
    setUserData(updatedUserData);
  };

  return (
    <div className="hidden md:block font-poppins">
      <Navbar userData={userData} setUserData={setUserData} />
      <div className="flex mx-4 xs:mx-6 md:mx-10 lg:mx-16">
        <div
          className="w-1/2 md:my-4 xl:my-6 relative"
          style={{ height: carouselHeight }}
        >
          <div
            className="w-5/6 relative float-right border border-neutral-400 rounded"
            ref={carouselRef}
          >
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

        <div
          className="w-1/2 md:my-4 xl:my-6"
          style={{ height: carouselHeight }}
        >
          <div className="flex flex-col h-full md:pl-6 lg:pl-8">
            <div className="h-[90%] overflow-y-auto no-scrollbar">
              <h2
                className="md:text-lg lg:text-xl xl:text-2xl font-bold line-clamp-2"
                title={product.title}
              >
                {product.title}
              </h2>
              <p className="text-sm lg:text-base lg:mt-2 md:mb-1 lg:mb-2 xl:mb-4">
                No Ratings ⭐
              </p>

              <div className="border-b border-neutral-300" />

              {product.discountedPrice ? (
                <div className="flex items-center md:my-1 lg:my-2 xl:my-4">
                  <p className="md:text-sm lg:text-lg xl:text-xl">
                    <span className="text-red-500 font-semibold">
                      ₹ {product.discountedPrice}
                    </span>{" "}
                    <del className="pl-[2px] text-neutral-400">
                      ₹ {product.price}
                    </del>
                  </p>
                  <p className="ml-3 px-1 md:text-sm lg:text-lg xl:text-xl text-green-500 md:font-medium lg:font-semibold border border-green-500 rounded">
                    {parseInt(
                      100 - (product.discountedPrice / product.price) * 100
                    )}
                    % OFF
                  </p>
                </div>
              ) : (
                <p className="py-1 md:text-sm lg:text-lg xl:text-xl text-red-500 font-semibold">
                  ₹ {product.price}
                </p>
              )}

              <div className="border-b border-neutral-300" />

              <ProductTabs product={product} />

              <div className="border-b border-neutral-300" />
            </div>
            <div className="flex justify-evenly w-full h-[10%] mt-1">
              <button className="w-[48%] md:py-1 lg:py-2 lg:px-2 md:text-xs lg:text-base xl:text-lg text-neutral-700 bg-gray-100 hover:bg-gray-200 rounded-full">
                <span
                  className="flex justify-center items-center hover:scale-[101%]"
                  onClick={handleItemInWishlist}
                >
                  ADD TO WISHLIST{" "}
                  <HeartIcon
                    className="w-4 h-4 xl:w-6 xl:h-6 md:ml-1 lg:ml-2"
                    fill={fill}
                  />
                </span>
              </button>
              <button className="w-[48%] md:py-1 lg:py-2 lg:px-2 md:text-xs lg:text-base xl:text-lg text-white bg-magic-600 hover:bg-magic-800 py-2 px-2 rounded-full">
                <span className="flex justify-center hover:scale-[101%]">
                  ADD TO CART{" "}
                  <BagIcon className="w-4 h-4 xl:w-6 xl:h-6 md:ml-1 lg:ml-2" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-12 lg:mx-16 border-b border-neutral-300"></div>

      <div className="md:mx-12 lg:mx-16 md:my-4 xl:my-6">
        <p className="text-center my-4 xl:my-6 font-semibold md:font-bold text-slate-800 xs:text-lg md:text-2xl xl:text-3xl">
          Recommended For You
        </p>

        <CarouselProvider
          className="flex items-center relative"
          naturalSlideWidth={1}
          naturalSlideHeight={1}
          isIntrinsicHeight={true}
          totalSlides={bestsellers.length}
          visibleSlides={visibleSlides}
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
                      className="md:text-sm lg-text-base overflow-hidden line-clamp-1"
                      title={product.title}
                    >
                      {product.title}
                    </p>
                    {product.discountedPrice ? (
                      <div className="flex my-[2px]">
                        <p className="text-xs">
                          ₹ {product.discountedPrice}
                          <del className="pl-1 text-neutral-400">
                            ₹ {product.price}
                          </del>
                        </p>
                        <p className="md:ml-1 lg:ml-2 px-1 text-xs text-green-500 font-medium border border-green-500 rounded">
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
