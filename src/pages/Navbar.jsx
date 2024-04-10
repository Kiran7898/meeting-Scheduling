import React, { useState } from 'react';
import SchedulingPopup from '../pages/SchedulingPopup'
// import PopCalendar from '../pages/PopCalendar'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Toggle popup visibility
  };

  return (
    <nav className="bg-white shadow-md py-0 px-3  md:flex md:justify-between md:items-center">
      <div className="flex  justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <div className='flex'>
            <div className='text-2xl font-mono'>Fibery</div>
            <img class='navlogo ' src="https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/b53f6730-9e93-409b-92ef-6a1000e8480e/a37e1896.png" alt="324" />
            <p className=' py-3  text-green-500 font-bold italic font-sans pl-1 px-3'>+AI Now!</p>
          </div>
          
          {/* Anchor tags */}
          <div className="md:flex flex-start md:space-x-4">
            <a href="#" className=" text-gray-900 hover:text-gray-600 font-semibold	 font-sans text-base gap-x-8 block py-3 px-5">
              Solutions
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 font-semibold	font-sans text-base gap-x-8 block py-3 px-5">
              Product
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 font-semibold	font-sans text-base gap-x-8 block py-3 px-5">
              Resources
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 font-semibold font-sans text-base gap-x-84 block py-3 px-5">
              Pricing
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 font-semibold font-sans text-base gap-x-8 block py-3 px-5">
              ...
            </a>
          </div>
        </div>
        <button
          className="md:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`md:flex md:items-center md:space-x-4 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="md:flex md:space-x-4 mt-4 md:mt-0">
          <button className="bg-white-500  text-black font-base py-2 px-4 rounded">
            Log in
          </button>
          <button className="bg-gray-50 border-slate-950 border-2 hover:border-4 hover:delay-150 text-black font-bold rounded h-12 w-52" onClick={togglePopup}>
            Get a demo
            
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white  font-bold h-12 w-52 rounded">
            Try for free
          </button>
        </div>
      </div>
      {/* Render SchedulingPopup if isPopupOpen is true */}
      {isPopupOpen && <SchedulingPopup onClose={togglePopup} />}
    </nav>
  );
};

export default Navbar;
