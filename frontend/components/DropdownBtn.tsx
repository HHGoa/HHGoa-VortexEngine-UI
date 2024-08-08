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
        className="text-white flex items-center broge-font text-[8px] md:text-xs bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:shadow-xl p-2 md:p-3 rounded font-medium border-b-2 border-white"
        onClick={handleButtonClick} // Toggle dropdown on button click
      >
        Connect Wallet
      </button>

      {isDropdownOpen && (
        <div
          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1">
            <a
              href="#"
              
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
            <CustomButton/>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
