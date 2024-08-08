import React, { useState } from "react";
import { WalletSelector } from "./WalletSelector";

import CustomButton from "../components/Connect";

 // Import the WalletSelector component

const DropdownBtn: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showWalletSelector, setShowWalletSelector] = useState(false);

 

  const handleButtonClick = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle dropdown open/close
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="text-white text-xs lg:text-base bg-transparent backdrop-blur-2xl backdrop-filter hover:scale-95 transform transition-transform duration-100 hover:shadow-xl bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 p-3 px-6 rounded-xl md:text-base border-2 brandy-font border-white custom-border-radius flex"
        onClick={handleButtonClick} // Toggle dropdown on button click
      >
        Connect Wallet
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 pl-2">
            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
          </svg>
      </button>

      {isDropdownOpen && (
        <div
          className="absolute left-0 mt-2 w-full border-2 gradient-border rounded-md shadow-lg bg-transparent"
        >
          <div className="py-1">
            <a
              href="#"
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md"
            >
            <CustomButton/>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md"
            >
              <WalletSelector />
            </a>
          </div>
        </div>
      )}

      {/* Conditionally render the WalletSelector component */}
      {/* {showWalletSelector && <WalletSelector />} */}
    </div>
  );
};

export default DropdownBtn;
