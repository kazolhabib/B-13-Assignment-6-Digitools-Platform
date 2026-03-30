import React, { useState } from 'react';

const Navbar = ({ cartCount = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white relative border-b border-[#F2F2F2] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between items-center h-[80px]">

          <div className="flex-1 flex items-center justify-start">
            <a href="/" className="text-3xl font-extrabold bg-linear-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent">
              DigiTools
            </a>
          </div>

          {/* Hamburger Menu Toggle (Visible below 998px) */}
          <div className="flex items-center min-[998px]:hidden">````
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#101727] hover:text-blue-700 focus:outline-hidden p-2 cursor-pointer transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden min-[998px]:flex flex-1 justify-center items-center space-x-10">
            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-base transition-colors">Products</a>
            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-base transition-colors">Features</a>
            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-base transition-colors">Pricing</a>
            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-base transition-colors">Testimonials</a>
            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-base transition-colors">FAQ</a>
          </div>

          
          <div className="hidden min-[998px]:flex flex-1 justify-end items-center space-x-6">
            <div className='flex mr-4'>
              {/* Cart icon */}
              <button className="relative text-[#101727] mr-4 cursor-pointer hover:text-blue-700 transition" aria-label="Cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-base transition-colors">
                Login
              </a>
            </div>
            <a href="#" className="bg-linear-to-r from-blue-700 to-purple-500 text-white px-6 py-2.5 rounded-full font-medium text-[15px] transition-colors shadow-sm cursor-pointer hover:opacity-90">
              Get Started
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="min-[998px]:hidden bg-white border-t border-gray-100 absolute top-[80px] left-0 w-full shadow-xl z-50">
          <div className="flex flex-col space-y-3 px-6 pb-8 pt-4">
            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-lg transition-colors py-2 border-b border-gray-50">Products</a>
            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-lg transition-colors py-2 border-b border-gray-50">Features</a>
            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-lg transition-colors py-2 border-b border-gray-50">Pricing</a>
            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-lg transition-colors py-2 border-b border-gray-50">Testimonials</a>
            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-lg transition-colors py-2 border-b border-gray-50">FAQ</a>

            <div className="flex items-center gap-4 pt-2 pb-2">
              <span className="font-semibold text-[#101727]">Your Cart</span>
              <button className="relative text-[#101727] hover:text-blue-700 transition" aria-label="Cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <a href="#" className="font-semibold text-[#101727] hover:text-blue-700 text-lg transition-colors py-2 w-full block">
              Login
            </a>
            <a href="#" className="bg-linear-to-r from-blue-700 to-purple-500 text-white px-6 py-3 rounded-full font-medium text-lg transition-colors text-center w-full shadow-sm block mt-2 hover:opacity-90">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
