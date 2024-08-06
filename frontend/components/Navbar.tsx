import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { WalletSelector } from './WalletSelector';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="bg-transparent z-50 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-20 pb-3 pt-2 px-3 flex justify-between items-center text-white border-x-2 border-b-2">
        <p className="brandy-font text-2xl border-2 custom-border-radius p-2 hover:scale-95">VortexEngine</p>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="block text-xl font-semibold focus:outline-none mr-4"
          >
            ☰
          </button>
        </div>
        <div
          className={`lg:hidden absolute inset-y-0 z-50 left-0 transform transition duration-300 ease-in-out bg-white text-black backdrop-filter backdrop-blur-lg h-screen w-64 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={handleCloseClick}
            className="absolute top-0 right-0 m-4 text-2xl focus:outline-none"
          >
            ×
          </button>
          <ul className="p-4 space-y-2 poppins-font font-medium">
            <li>
              <NavLink to="/" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black" onClick={handleCloseClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black" onClick={handleCloseClick}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/works" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black" onClick={handleCloseClick}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black" onClick={handleCloseClick}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="py-1 px-1 mx-1 pt-2 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black" onClick={handleCloseClick}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Desktop Navbar */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-4 space-x-2 poppins-font font-medium mr-4 text-lg">
          <div className="">
            <NavLink to="/" className="py-1 px-5 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap border-2 p-2 hover:scale-95">
              Home
            </NavLink>
            <NavLink to="/experience" className="py-1 px-5 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap border-2 p-2 hover:scale-95">
              Services
            </NavLink>
            <NavLink to="/works" className="py-1 px-5 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap border-2 p-2 hover:scale-95">
              Gallery
            </NavLink>
            <NavLink to="/about" className="py-1 px-5 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap border-2 p-2 hover:scale-95">
              About Us
            </NavLink>
            <NavLink to="/contact" className="py-1 px-5 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap border-2 p-2 hover:scale-95">
              Contact Us
            </NavLink>
            <WalletSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;