
'use client';

import { useState } from 'react';
import Logo from "@public/Morphe-Logo.png";
import { FaBars, FaTimes, FaRegUser } from 'react-icons/fa';
import { IoCartOutline, IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

const navItems = [
  { title: 'SHOP NOW', link: '#' },

  { 
    title: 'MAKEUP', 
    link: '#', 
    dropdown: ['Foundation', 'Blush', 'Highlighter', 'Primer', 'Concealer', 'Setting Spray', 'Mascara', 'Eyeliner', 'Eyeshadow', 'Eyebrow Pencil', 'False Lashes', 'Eye Primer']
  },

  { 
    title: 'SKINCARE', 
    link: '#', 
    dropdown: ['Makeup Sets', 'Gift Packs', 'Beauty Kits', 'Skincare Combos', 'Haircare Bundles', 'Wellness Kits']
  },

  { 
    title: 'ACCESSORIES', 
    link: '#', 
    dropdown: ['Nail Art', 'Manicure Kits', 'Nail Extensions', 'Cuticle Care', 'Nail Strengthener', 'Beauty Tools']
  },

  { 
    title: 'FRAGRANCES', 
    link: '#', 
    dropdown: ['Perfume', 'Body Mist', 'Cologne', 'Essential Oils', 'Roll-on Perfume', 'Aromatherapy']
  },

  { 
    title: 'BATH & BODY', 
    link: '#', 
    dropdown: ['Bath & Body', 'Haircare', 'Body Lotion', 'Shower Gels', 'Scrubs & Exfoliators']
  }
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <nav className="bg-white shadow-md w-full relative z-50">
    <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-6">
      
      {/* Left: Mobile Menu Button */}
     
     


    <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Left: Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image src={Logo} alt="Logo" width={140} height={80} className="object-contain" />
      </Link>
  
      {/* Center: Desktop Menu */}
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
  
      {/* Right: Icons (visible in mobile & desktop) */}
      <div className="flex items-center space-x-1 md:space-x-6">
        <IoSearchOutline size={24} />
        <FaRegUser size={20} />
        <IoCartOutline size={24} />
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

