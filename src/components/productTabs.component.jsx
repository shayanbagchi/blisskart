import React, { useState } from 'react';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tabName, event) => {
    event.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <div className='md:mt-2 lg:mt-4 xl:mt-6 2xl:mt-8'>
      <div className="flex justify-evenly w-full">
        <button
          onClick={(e) => handleTabClick('description', e)}
          className={`w-2/5 md:py-1 lg:py-2 md:text-sm lg:text-base text-neutral-400 font-medium
          ${
            activeTab === 'description' ? 'text-neutral-700 border-b-2 border-neutral-700' : 'border-transparent'
          }`}
        >
          Description
        </button>
        <button
          onClick={(e) => handleTabClick('product-info', e)}
          className={`w-2/5 md:py-1 lg:py-2 md:text-sm lg:text-base text-neutral-400 font-medium
          ${
            activeTab === 'product-info' ? 'text-neutral-700 border-b-2 border-neutral-700' : 'border-transparent'
          }`}
        >
          Product Info
        </button>
      </div>

      <div className="border-b border-neutral-300"/>

      <div className={`md:m-2 lg:m-4 ${activeTab === 'description' ? 'show' : 'hidden'}`}>
        <p className="md:text-sm lg:text-base text-neutral-500 tracking-wide">
          {product.desc}
        </p>
      </div>

      <div className={`md:m-2 lg:m-4 ${activeTab === 'product-info' ? 'show' : 'hidden'}`}>
        {product.prodInfo && product.prodInfo.length > 0 && (
          <ul className="list-disc list-inside md:mt-2 lg:mt-4">
            <p className='md:mb-2 lg:mb-4 md:text-sm lg:text-lg font-semibold'>PID: <span className='text-blue-600'>{product.id}</span></p>
            {product.prodInfo.map((info, index) => {
              const [label, value] = info.split(":");
              return (
                <li key={index} className="ml-4 md:text-sm lg:text-base">
                  <span className={value ? "font-medium" : ""}>
                    {label}:
                  </span>{" "}
                  {value || label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
