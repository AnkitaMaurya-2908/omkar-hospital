"use client";

import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-8 md:top-10 lg:top-10 left-1/2 transform -translate-x-1/2 z-[1054] transition-all duration-500 ease-in-out rounded-2xl
        ${isScrolled ? "w-[90%] max-w-[1000px]" : "w-[95%] max-w-[1100px]"}
        px-10 sm:px-9 md:px-8 lg:px-10
      `}
    >
      <nav className="flex items-center justify-between px-6 py-3 border-2 shadow-md rounded-full bg-white text-[#7f5539] border-[#293241]/10 w-full transition-all duration-500 ease-in-out">
        <a>
          <div className="flex items-center space-x-2 cursor-pointer">
            <div>
              <Image
                src="/logo.jpg"
                alt="Onkar Logo"
                width={50}
                height={40}
                priority
              />
            </div>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex cursor-pointer items-center space-x-6 text-[#293241] text-sm font-medium">
          <a href="#" className="hover:text-[#3D5A80]">
            Home
          </a>
          <a href="#" className="hover:text-[#3D5A80]">
            Our Services
          </a>
          <a href="#" className="hover:text-[#3D5A80]">
            About Us
          </a>
          <a href="#" className="hover:text-[#3D5A80]">
            Contact Us
          </a>
          <a href="#" className="hover:text-[#3D5A80]">
            Meet Our Doctors
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden lg:flex  text-sm font-medium px-4 py-1.5 rounded-full transition bg-[#ee6c4d] text-white hover:bg-[#293241] items-center gap-2">
            Enquire Now <FaLongArrowAltRight />
          </button>

          <button
            className="md:hidden focus:outline-none text-[#EE6C4D]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white text-[#293241] border border-[#582f0e]/10 shadow-lg rounded-2xl px-6 py-4 space-y-4 text-sm font-medium">
          <a href="#" className="block hover:text-[#3D5A80]">
            Home
          </a>
          <a href="#" className="block hover:text-[#3D5A80]">
            Our Services
          </a>
          <a href="#" className="block hover:text-[#3D5A80]">
            About Us
          </a>
          <a href="#" className="block hover:text-[#3D5A80]">
            Contact Us
          </a>
          <a href="#" className="block hover:text-[#3D5A80]">
                        Meet Our Doctors

          </a>
          <div className="flex items-center justify-between pt-4 border-t border-[#293241]">
            <button className="text-sm font-medium px-4 py-1.5 rounded-full transition bg-[#ee6c4d] text-white hover:bg-[#293241] flex items-center gap-2">
              Enquire Now <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
