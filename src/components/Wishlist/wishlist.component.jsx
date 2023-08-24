import React, { useEffect, useState } from "react";
import NavBar from "../Navigation/navbar.component";
import Footer from "../Footer/footer.component";
import WishlistLogin from "../../assets/wishlist_login.jpg";
import WishlistEmpty from "../../assets/WishList-Empty.png";
import { ReactComponent as HeartIcon } from "../../assets/heart_icon.svg";
import { Link } from "react-router-dom";
import {
  fetchUserData,
  removeFromWishlist,
} from "../../utils/firebase.util.js";

function Wishlist({ userData, setUserData, products }) {
  const [wishlistedProducts, setWishlistedProducts] = useState([]);

  useEffect(() => {
    if (userData) {
      setWishlistedProducts(
        products.filter((product) => userData.wishlist.includes(product.id))
      );
    }
  }, [products, userData]);

  const removeItemToWishlist = async (e, productId) => {
    e.preventDefault();
    await removeFromWishlist(userData.uid, productId);

    // Fetch the updated user data and set it in the state
    const updatedUserData = await fetchUserData(userData.uid);
    setUserData(updatedUserData);
  };

  return (
    <div className="flex flex-col font-poppins">
      <NavBar userData={userData} setUserData={setUserData} />
      <div className="">
        {userData ? (
          userData.wishlist.length !== 0 ? (
            <div>
              <div className="flex justify-center items-center mx-4 xs:mx-6 md:mx-10 lg:mx-16 my-6">
                <p className="font-medium text-2xl text-neutral-700 mr-2">
                  My Wishlist
                </p>
                <HeartIcon className="w-6 h-6" fill="#e55e74"/>
              </div>
              <div className="xs:mx-6 md:mx-10 lg:mx-16 mb-8 border border-neutral-200"/>
              <div className="flex mx-4 xs:mx-6 md:mx-10 lg:mx-16 sm:my-2 md:my-4 mb-2">
                {wishlistedProducts.map((product, index) => (
                  <Link
                    to={`/${product.id}/${encodeURIComponent(product.title)}`}
                    key={index}
                    className="relative w-[49%] xs:w-[32%] lg:w-[24%] mx-[0.5%] xs:mx-[0.65%] lg:mx-[0.5%] mb-[6px] sm:mb-2 xl:mb-3 border border-black rounded-xl cursor-pointer hover:scale-[100.5%]"
                  >
                    <button
                      onClick={(e) => removeItemToWishlist(e, product.id)} // Add the remove function here
                      className="absolute top-0 right-0 p-2 bg-white bg-opacity-50 rounded-tr-xl rounded-bl-xl focus:outline-none"
                      title="Remove from Wishlist"
                    >
                      <HeartIcon className="w-6 h-6" fill="#e55e74" />
                    </button>
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
                              100 -
                                (product.discountedPrice / product.price) * 100
                            )}
                            % OFF
                          </p>
                        </div>
                      ) : (
                        <p className="my-[2px] text-[10px] sm:text-sm">
                          ₹ {product.price}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm">No Ratings⭐</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center my-[3%]">
              <p className="text-2xl text-neutral-600 font-semibold">
                Your Wishlist Is Empty
              </p>
              <p className="m-1 text-neutral-600">
                Fill Your Wishlist with Delightful Surprises!
              </p>
              <img
                src={WishlistEmpty}
                alt="Please Login"
                className="h-[420px]"
              />
              <Link to="/">
                <button className="text-xl font-semibold text-magic-800 py-3 px-6 border-2 border-magic-600 hover:bg-magic-200 hover:bg-opacity-40 rounded-lg focus:outline-none focus:shadow-outline">
                  Browse Gifts!
                </button>
              </Link>
            </div>
          )
        ) : (
          <div className="flex flex-col justify-center items-center my-[6%]">
            <p className="text-xl text-neutral-600 font-semibold">
              Please Sign In
            </p>
            <p className="mt-2 text-neutral-400">
              Log In to view items in your Wishlist.
            </p>
            <img src={WishlistLogin} alt="Please Login" />
            <Link to="/user">
              <button className="text-xl font-semibold text-magic-800 py-3 px-6 border-2 border-magic-600 hover:bg-magic-200 hover:bg-opacity-40 rounded-lg focus:outline-none focus:shadow-outline">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Wishlist;
