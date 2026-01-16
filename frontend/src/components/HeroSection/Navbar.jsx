"use client";

import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

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
        <Link href="/" aria-label="Go to Home">
          <div className="flex items-center space-x-2 cursor-pointer hover:opacity-90 transition">
            <Image
              src="/logo.jpg"
              alt="Onkar Hospital Logo"
              width={50}
              height={40}
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex cursor-pointer items-center space-x-6 text-[#293241] text-sm font-medium">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-[#ee6c4d] font-semibold border-b-2 border-[#ee6c4d]"
                : "hover:text-[#3D5A80]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/services"
            className={`${
              pathname === "/services"
                ? "text-[#ee6c4d] font-semibold border-b-2 border-[#ee6c4d]"
                : "hover:text-[#3D5A80]"
            }`}
          >
            Our Services
          </Link>

          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-[#ee6c4d] font-semibold border-b-2 border-[#ee6c4d]"
                : "hover:text-[#3D5A80]"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "text-[#ee6c4d] font-semibold border-b-2 border-[#ee6c4d]"
                : "hover:text-[#3D5A80]"
            }`}
          >
            Contact Us
          </Link>

          <Link
            href="/doctors"
            className={`${
              pathname === "/doctors"
                ? "text-[#ee6c4d] font-semibold border-b-2 border-[#ee6c4d]"
                : "hover:text-[#3D5A80]"
            }`}
          >
            Meet Our Doctors
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden lg:flex w-full text-sm font-medium px-4 py-2 rounded-full transition bg-[#ee6c4d] text-white hover:bg-[#293241] items-center justify-center gap-2"
          >
            Enquire Now <FaLongArrowAltRight />
          </Link>

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
        <div className="md:hidden mt-3 bg-white text-[#293241] border border-[#582f0e]/10 shadow-lg rounded-2xl px-6 py-4 space-y-2 text-sm font-medium">
          <Link
            href="/"
            className={`block px-3 py-2 rounded-lg ${
              pathname === "/"
                ? " text-[#ee6c4d] font-semibold"
                : "hover:bg-slate-100"
            }`}
          >
            Home
          </Link>

          <Link
            href="/services"
            className={`block px-3 py-2 rounded-lg ${
              pathname === "/services"
                ? " text-[#ee6c4d] font-semibold"
                : "hover:bg-slate-100"
            }`}
          >
            Our Services
          </Link>

          <Link
            href="/about"
            className={`block px-3 py-2 rounded-lg ${
              pathname === "/about"
                ? " text-[#ee6c4d] font-semibold"
                : "hover:bg-slate-100"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={`block px-3 py-2 rounded-lg ${
              pathname === "/contact"
                ? " text-[#ee6c4d] font-semibold"
                : "hover:bg-slate-100"
            }`}
          >
            Contact Us
          </Link>

          <Link
            href="/doctors"
            className={`block px-3 py-2 rounded-lg ${
              pathname === "/doctors"
                ? " text-[#ee6c4d] font-semibold"
                : "hover:bg-slate-100"
            }`}
          >
            Meet Our Doctors
          </Link>

          <div className="pt-4 border-t border-[#293241]/20">
            <Link
              href="/contact"
              className="w-full text-sm font-medium px-4 py-2 rounded-full transition bg-[#ee6c4d] text-white hover:bg-[#293241] flex items-center justify-center gap-2"
            >
              Enquire Now <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
