import React from "react";
import { Link } from "react-router-dom";

function Catagories() {
  return (
    <div>
      <div className="my-2 mx-4 pl-1 xs:mx-6 md:mx-16 lg:mx-24">
        <p className="xl:mt-6 font-semibold md:font-bold xs:text-lg md:text-2xl xl:text-3xl">Shop By Collection</p>
        <p className="md:mt-1 font-light text-xs md:text-sm text-neutral-600">Find the Perfect Gift for Your Loved Ones!</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between mx-4 xs:mx-6 md:mx-16 lg:mx-24 my-2 md:my-4">
      {/* <div className='flex w-full md:w-[49%] lg:w-[49.5%] h-[192px] md:h-80 xl:h-[384px] border border-black rounded-2xl cursor-pointer hover:scale-[101%] transform transition-transform'>
          <p className='m-6 text-neutral-600 md:text-xl xl:text-2xl'>Stationary & <br/> Desk Accessories</p>
        </div> */}

      <div className="flex flex-col justify-between w-full md:w-[49.5%] lg:w-[49.6%] md:h-[264px] xl:h-[326px]">
        <Link to='/product-list'>
          <div className="h-24 xs:h-32 xl:h-40 border border-black rounded-2xl cursor-pointer hover:scale-[101%] transform transition-transform">
            <p className="m-3 xs:m-4 xl:m-6 text-xs xs:text-sm lg:text-base text-neutral-600">Home & Living Decor</p>
          </div>
        </Link>
        <div className="flex justify-between">
          <div className="w-[49%] xs:w-[49.3%] md:w-[49%] lg:w-[49.3%] h-24 xs:h-32 xl:h-40 mt-2 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[102%] transform transition-transform">
            <p className="m-3 xs:m-4 xl:m-6 text-xs xs:text-sm lg:text-base text-neutral-600">Personalized</p>
          </div>
          <div className="w-[49%] xs:w-[49.3%] md:w-[49%] lg:w-[49.3%] h-24 xs:h-32 xl:h-40 mt-2 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[102%] transform transition-transform">
            <p className="m-3 xs:m-4 xl:m-6 text-xs xs:text-sm lg:text-base text-neutral-600">Electronics</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full md:w-[49.5%] lg:w-[49.6%] md:h-[264px] xl:h-[326px]">
        <div className="flex justify-between">
          <div className="w-[49%] xs:w-[49.3%] md:w-[49%] lg:w-[49.3%] h-24 xs:h-32 xl:h-40 mt-2 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[102%] transform transition-transform">
            <p className="m-3 xs:m-4 xl:m-6 text-xs xs:text-sm lg:text-base text-neutral-600">Fashion</p>
          </div>
          <div className="w-[49%] xs:w-[49.3%] md:w-[49%] lg:w-[49.3%] h-24 xs:h-32 xl:h-40 mt-2 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[102%] transform transition-transform">
            <p className="m-3 xs:m-4 xl:m-6 text-xs xs:text-sm lg:text-base text-neutral-600">Figurines & Accessories</p>
          </div>
        </div>
        <div className="h-24 xs:h-32 xl:h-40 mt-2 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[101%] transform transition-transform">
          <p className="m-3 xs:m-4 xl:m-6 text-xs xs:text-sm lg:text-base text-neutral-600">Posters & Prints</p>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Catagories;
