"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"; // You can use other icons if you want
import Link from "next/link";
import Logo from "@public/Morphe-Logo.png"
import { localStorageHandler } from "@/utils/index";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isUserLogin = localStorageHandler.get("user");

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={140}
            height={80}
            className="object-contain"
          />
        </Link>

        <ul className="hidden md:flex md:space-x-6 font-medium text-black text-sm">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/CarforSale">SHOP</Link>
          </li>

          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-black hover:bg-gray-100 rounded-lg px-4 py-0 flex items-center"
            >
              ACCESSORIES
              <svg
                className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2  bg-white border border-gray-200 rounded-lg w-48 z-10 text-center">
                <ul>
                  <li className="mb-2 mt-2"><Link href="/CompanyProfile">CLEANSER</Link></li>
                  <li className="mb-2"><Link href="/PaymentDetails">BODY CARE</Link></li>
                  <li className="mb-2"><Link href="/PrivacyPolicy">FACE MASK</Link></li>
                  <li className="mb-2"><Link href="/TermsofUse">EYE CARE</Link></li>
                  <li className="mb-2"><Link href="/Blogs">HAIR CARE</Link></li>
                </ul>
              </div>
            )}
          </li>

          <li><Link href="/contact">CONTACT</Link></li>
          <li><Link href="/how-to-buy">HOW TO ORDER </Link></li>
          <li><Link href="/why-choose-us">SALE</Link></li>
        </ul>

      
        <div className="flex items-center space-x-4">
          <Link href={isUserLogin ? "/Profile" : "/Login"} className="text-black hover:text-gray-700">
            <FaRegUser size={24} />
          </Link>
          <Link href="/search" className="text-black hover:text-gray-700">
            <IoSearchOutline size={24} />
          </Link>
          <Link href="/cart" className="text-black hover:text-gray-700">
            <IoCartOutline size={24} />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          {isMenuOpen ? (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-18 left-0 w-full bg-white shadow-md md:hidden z-[999999]"
          >
            <ul className="flex flex-col p-4 font-medium border border-gray-200 rounded-lg">
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/CarforSale">SHOP</Link></li>
              <li className="relative ">
                <button
                  onClick={toggleDropdown}
                  className="flex py-2 px-3 text-black  items-center"
                >
                  ACCESSORIES
                  <svg
                    className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2  bg-white border border-gray-200 rounded-lg w-48 z-10 text-center">
                    <ul>
                      <li className="mb-2 mt-2"><Link href="/CompanyProfile">CLEANSER</Link></li>
                      <li className="mb-2"><Link href="/PaymentDetails">BODY CARE</Link></li>
                      <li className="mb-2"><Link href="/PrivacyPolicy">FACE MASK</Link></li>
                      <li className="mb-2"><Link href="/TermsofUse">EYE CARE</Link></li>
                      <li className="mb-2"><Link href="/Blogs">HAIR CARE</Link></li>
                    </ul>
                  </div>
                )}
              </li>
              <li><Link href="/contact">CONTACT</Link></li>
              <li><Link href="/how-to-buy">HOW TO ORDER</Link></li>
              <li><Link href="/why-choose-us">SALE</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
