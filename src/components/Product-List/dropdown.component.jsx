import React, { useState } from "react";

const Dropdown = ({ defaultText, options, className, onOptionSelect }) => {
  const label = defaultText;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);

    if (typeof onOptionSelect === 'function') {
      onOptionSelect(option);
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        type="button"
        className="flex items-center justify-between w-full text-sm focus:outline-none"
        onClick={handleDropdownToggle}
      >
        <span>{selectedOption || label}</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-[-8px] md:right-[-12px] z-10 w-24 mt-1 bg-neutral-100 rounded-md">
          <ul className="">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  className="block w-full p-1 text-sm font-normal hover:bg-neutral-300 hover:rounded"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;