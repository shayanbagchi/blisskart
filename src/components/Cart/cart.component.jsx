import React, { useState, useEffect, useRef } from "react";
import NavBar from "../Navigation/navbar.component";
import Footer from "../Footer/footer.component";
import { Link } from "react-router-dom";
import WishlistLogin from "../../assets/wishlist_login.jpg";
import EmptyCart from "../../assets/empty_cart_icon.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash-icon.svg";
import { ReactComponent as MinusIcon } from "../../assets/minus_icon.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus_icon.svg";
import {
  fetchUserData,
  incrementProductCount,
  decrementProductCount,
  removeItemFromCart
} from "../../utils/firebase.util.js";

function Cart({ userData, setUserData, products }) {
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  const [productsInCart, setProductsInCart] = useState([]);

  const scrollableElementRef = useRef(null);

  useEffect(() => {
    if (scrollableElementRef.current) {
      const scrollHeight = scrollableElementRef.current.scrollHeight;
      const containerHeight = scrollableElementRef.current.clientHeight;
      setIsContentOverflowing(scrollHeight > containerHeight);
    }
  }, []);

  useEffect(() => {

    function filterProductsInCart(products, cart) {
      // Extract an array of product IDs from the cart
      const cartProductIds = cart.map(item => item.productId);
    
      // Filter products based on whether their IDs are in the cartProductIds array
      const productsInCart = products.filter(product =>
        cartProductIds.includes(product.id)
      );
    
      return productsInCart;
    }

    setProductsInCart(filterProductsInCart(products, userData.cart));

  }, [products, userData.cart]);

  const getProductCountInCart = (productID) => {
    const cartItem = userData.cart.find(item => item.productId === productID);
  return cartItem ? cartItem.productCount : 0;
  }

  const handleIncrementProductCount = async (e, productId) => {
    e.preventDefault();
    await incrementProductCount(userData.uid, productId);

    // Fetch the updated user data and update the userData state
    const updatedUserData = await fetchUserData(userData.uid);
    setUserData(updatedUserData);
  };

  const handleDecrementProductCount = async (e, productId) => {
    e.preventDefault();
    await decrementProductCount(userData.uid, productId);

    // Fetch the updated user data and update the userData state
    const updatedUserData = await fetchUserData(userData.uid);
    setUserData(updatedUserData);
  };

  const handleRemoveItemFromCart = async (e, productId) => {
    e.preventDefault();
    await removeItemFromCart(userData.uid, productId);

    // Fetch the updated user data and update the userData state
    const updatedUserData = await fetchUserData(userData.uid);
    setUserData(updatedUserData);
  };

  return (
    <div className="flex flex-col font-poppins">
      <NavBar userData={userData} setUserData={setUserData} />
      <div className="px-4 xs:px-6 md:px-10 lg:px-16">
        {userData ? (
          userData.cart.length !== 0 ? (
            <div className="flex justify-center items-start">
              <div
                className="relative w-2/3 bg-white rounded my-16 mr-8 h-screen overflow-y-scroll no-scrollbar"
                ref={scrollableElementRef}
              >
                <div className="sticky top-0 bg-white">
                  <div className="flex justify-between items-center pb-4">
                    <p className="text-3xl font-semibold text-neutral-700">
                      Cart
                    </p>
                    <span
                      className="flex items-center justify-center py-2 cursor-pointer"
                      title="Remove Selected"
                    >
                      <TrashIcon className="w-4 h-4 mr-1" />
                      <p className="text-sm text-neutral-600 font-semibold pt-[2px]">
                        Remove
                      </p>
                    </span>
                  </div>
                  {/* Headings */}
                  <div className="flex items-center w-full py-4">
                    <div className="w-[5%]">
                      <input type="checkbox" className="w-4 h-4" />
                    </div>
                    <div className="w-[55%]">
                      <p className="text-sm font-semibold text-slate-400">
                        PRODUCT
                      </p>
                    </div>
                    <div className="text-sm flex justify-center w-[12%]">
                      <p className="font-semibold text-slate-400">QUANTITY</p>
                    </div>
                    <div className="text-sm flex justify-end w-[28%]">
                      <p className="font-semibold text-slate-400">PRICE</p>
                    </div>
                  </div>
                  <div className="border border-neutral-200" />
                </div>
                {/* Product items */}
                {productsInCart.map((product, index) => (
                  <Link
                  to={`/${product.id}/${encodeURIComponent(product.title)}`}
                  key={index}className="border-b border-gray-300" >
                    <div className="flex items-center my-6">
                      <div className="w-[5%]">
                        <input type="checkbox" className="w-4 h-4" />
                      </div>
                      <div className="flex-1 flex w-[55%]">
                        <img
                          src={product.imageURIs[0]}
                          alt="Product"
                          className="w-24 h-24 rounded-xl"
                        />
                        <div className="ml-4">
                          <p className="font-semibold text-slate-600">
                            {product.title}
                          </p>
                          <div className="flex mt-1">
                            <p className="text-sm text-slate-400">
                              No Ratings ⭐
                            </p>
                            <div className="mx-2 my-1 border border-slate-200" />
                            <p className="text-sm text-slate-400">
                              {product.outOfStock ? "Out Of Stock" : "In Stock"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-evenly items-center w-[12%]">
                        <div className="flex justify-evenly items-center w-full h-10 border border-neutral-200 rounded-lg">
                          <button className="p-3" title="Decrease Quantity" onClick={(e) => handleDecrementProductCount(e, product.id)}>
                            <MinusIcon className="w-2 h-2" fill="#374957"/>
                          </button>
                          <span>{getProductCountInCart(product.id)}</span>
                          <button className="p-3" title="Increase Quantity" onClick={(e) => handleIncrementProductCount(e, product.id)}>
                            <PlusIcon className="w-2 h-2" fill="#374957"/>
                          </button>
                        </div>
                        <div>
                          <span
                            className="flex items-center pt-4 cursor-pointer"
                            title="Remove Item"
                            onClick={(e) => handleRemoveItemFromCart(e, product.id)}
                          >
                            <TrashIcon className="w-4 h-4 mr-1" />
                            <p className="text-sm text-slate-700 font-semibold pt-[2px]">
                              Remove
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end w-[28%] mb-6">
                        <div>
                          {product.discountedPrice ? (
                            <div className="flex">
                              <p className="mb-2 font-medium">
                                ₹ {product.discountedPrice}{" "}
                                <del className="pl-[2px] text-slate-400">
                                  ₹ {product.price}
                                </del>
                              </p>
                            </div>
                          ) : (
                            <p className="my-[2px] text-slate-600 font-medium">
                              ₹ {product.price}
                            </p>
                          )}
                        </div>
                        <div>
                          {product.discountedPrice && (
                            <p className="flex justify-end px-1 text-sm text-green-500 font-medium border border-green-500 rounded">
                              {parseInt(
                                100 -
                                  (product.discountedPrice / product.price) *
                                    100
                              )}
                              % OFF
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}

                {isContentOverflowing && (
                  <div className="sticky bottom-0 flex justify-center items-center">
                    <span className="flex justify-center items-center h-10 mt-1 p-4 bg-neutral-50 rounded-3xl border border-neutral-200">
                      <p className="text-gray-600">Scroll down to see more</p>
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
                    </span>
                  </div>
                )}
              </div>

              <div className="w-1/4 mt-16 ml-8 rounded-lg border border-neutral-300">
                <p className="text-lg font-semibold text-slate-500 px-6 pt-6 pb-4">
                  Order Summary
                </p>

                <div className="mx-6 border border-dashed border-neutral-200" />

                <div className="flex flex-col mx-6 py-4">
                  <div className="flex justify-between w-full pb-2">
                    <p className="font-medium text-slate-400">Sub Total</p>
                    <p className="font-medium text-slate-700">₹ 699.00</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="font-medium text-slate-400">Discount</p>
                    <p className="font-medium text-slate-400">₹ 0.00</p>
                  </div>
                </div>

                <div className="mx-6 border border-dashed border-neutral-200" />

                <div className="flex justify-between mx-6 py-3">
                  <p className="font-medium text-slate-700">Grand Total</p>
                  <p className="font-medium text-slate-700">₹ 699.00</p>
                </div>

                <div className="w-full flex items-center justify-between px-6 py-4">
                  <button
                    className="w-full h-12 text-white font-medium py-2 px-4 rounded-lg bg-magic-600 hover:bg-magic-800 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center my-[3%]">
              <p className="text-2xl text-neutral-600 font-semibold">
                Your Cart Is Empty
              </p>
              <p className="m-1 text-neutral-600">
                Fill Your Cart with Delightful Surprises!
              </p>
              <img
                src={EmptyCart}
                alt="Cart Empty"
                className="h-[420px] opacity-80"
              />
              <div>
                <Link to="/wishlist">
                  <button className="mr-4 font-semibold text-magic-800 py-3 px-6 border-2 border-magic-600 hover:bg-magic-200 hover:bg-opacity-40 rounded-lg focus:outline-none focus:shadow-outline">
                    Add From Wishlist
                  </button>
                </Link>
                <Link to="/">
                  <button className="font-semibold text-magic-800 py-3 px-6 border-2 border-magic-600 hover:bg-magic-200 hover:bg-opacity-40 rounded-lg focus:outline-none focus:shadow-outline">
                    Browse Our Collection
                  </button>
                </Link>
              </div>
            </div>
          )
        ) : (
          <div className="flex flex-col justify-center items-center my-[6%]">
            <p className="text-xl text-neutral-600 font-semibold">
              Please Sign In
            </p>
            <p className="mt-2 text-neutral-400">
              Log In to view/add items in your Cart.
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

export default Cart;
