
'use client';

import { useState } from 'react';
import Logo from "@public/Morphe-Logo.png";
import { FaBars, FaTimes, FaRegUser } from 'react-icons/fa';
import { IoCartOutline, IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { localStorageHandler } from "@/utils/index";

const navItems = [
  { title: 'HOME', link: '/' },
  {
    title: 'SHOP',
    link: '#',
    dropdown: ['Makeup', 'Skincare', 'Accessories', 'Haircare', 'Beauty Tools', 'Bath & Body']
  },
  {
    title: 'FACE',
    link: '#',
    dropdown: ['Foundation', 'Blush', 'Highlighter', 'Primer', 'Concealer', 'Setting Spray']
  },
  {
    title: 'EYES',
    link: '#',
    dropdown: ['Mascara', 'Eyeliner', 'Eyeshadow', 'Eyebrow Pencil', 'False Lashes', 'Eye Primer']
  },
  {
    title: 'LIPS',
    link: '#',
    dropdown: ['Lipstick', 'Lip Gloss', 'Lip Liner', 'Lip Balm', 'Lip Stain', 'Lip Scrub']
  },
  {
    title: 'NAIL IT',
    link: '#',
    dropdown: ['Nail Polish', 'Nail Art', 'Manicure Kits', 'Nail Extensions', 'Cuticle Care', 'Nail Strengthener']
  },
  {
    title: 'FRAGRANCES',
    link: '#',
    dropdown: ['Perfume', 'Body Mist', 'Cologne', 'Essential Oils', 'Roll-on Perfume', 'Aromatherapy']
  },
  {
    title: 'BUNDLES',
    link: '#',
    dropdown: ['Makeup Sets', 'Gift Packs', 'Beauty Kits', 'Skincare Combos', 'Haircare Bundles', 'Wellness Kits']
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const isUserLogin = localStorageHandler.get("user");
  console.log(isUserLogin)


  return (
    <nav className="bg-white shadow-md w-full relative z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-2">





        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <Link href="/" className="flex-shrink-0">
          <Image src={Logo} alt="Logo" width={140} height={80} className="object-contain" />
        </Link>

        <ul className="hidden md:flex space-x-4 font-semibold mx-auto text-sm  mt-1" style={{ fontFamily: "LuxuryFont" }}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link href={item.link} className="hover:text-gray-700">
                {item.title}
              </Link>
              {item.dropdown && (
                <ul className={clsx(
                  'absolute left-0 mt-2 w-40 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-2',
                  dropdownOpen === index && 'opacity-100 visible'
                )}>
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 border-b last:border-0">
                      <Link href="#">{subItem}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <li key={index} className="flex flex-col">
              <button
                className="w-full text-left font-semibold py-2 border-b flex items-center justify-between"
                onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
              >
                {item.title}
                {item.dropdown && <span className="text-gray-500 text-sm">{dropdownOpen === index ? "▲" : "▼"}</span>}
              </button>
              {item.dropdown && dropdownOpen === index && (
                <ul className="mt-2 space-y-2 border border-gray-500 rounded-md bg-white shadow-lg p-3">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex} className="text-gray-600">
                      <Link href="#">{subItem}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

    </nav>



  );
}