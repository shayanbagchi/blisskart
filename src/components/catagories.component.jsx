import React from "react";

function Catagories() {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-8 md:mx-16 lg:mx-24 my-4">
      {/* <div className='flex w-full md:w-[49%] lg:w-[49.5%] h-[192px] md:h-80 xl:h-[384px] border border-black rounded-2xl cursor-pointer hover:scale-[101%] transform transition-transform'>
          <p className='m-6 text-neutral-600 md:text-xl xl:text-2xl'>Stationary & <br/> Desk Accessories</p>
        </div> */}

      <div className="flex flex-col justify-between w-full md:w-[49%] lg:w-[49.5%] md:h-80 xl:h-[384px]">
        <div className="h-[192px] md:h-[156px] xl:h-[186px] mt-4 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[101%] transform transition-transform">
          <p className="m-6 text-neutral-600">Home & Living Decor</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[48.5%] lg:w-[49%] h-[192px] md:h-[156px] xl:h-[186px] mt-4 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[102%] transform transition-transform">
            <p className="m-6 text-neutral-600">Personalized</p>
          </div>
          <div className="w-full md:w-[48.5%] lg:w-[49%] h-[192px] md:h-[156px] xl:h-[186px] mt-4 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[102%] transform transition-transform">
            <p className="m-6 text-neutral-600">Posters & Prints</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full md:w-[49%] lg:w-[49.5%] md:h-80 xl:h-[384px]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[48.5%] lg:w-[49%] h-[192px] md:h-[156px] xl:h-[186px] mt-4 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[102%] transform transition-transform">
            <p className="m-6 text-neutral-600">Fashion</p>
          </div>
          <div className="w-full md:w-[48.5%] lg:w-[49%] h-[192px] md:h-[156px] xl:h-[186px] mt-4 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[102%] transform transition-transform">
            <p className="m-6 text-neutral-600">Figurines & Accessories</p>
          </div>
        </div>
        <div className="h-[192px] md:h-[156px] xl:h-[186px] mt-4 md:mt-0 border border-black rounded-2xl cursor-pointer hover:scale-[101%] transform transition-transform">
          <p className="m-6 text-neutral-600">Electronics</p>
        </div>
      </div>
    </div>
  );
}

export default Catagories;
