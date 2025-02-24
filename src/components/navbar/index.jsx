// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaRegUser   } from "react-icons/fa";
// import { IoCartOutline,IoSearchOutline  } from "react-icons/io5"; // You can use other icons if you want
// import Link from "next/link";
// import Logo from "@public/Morphe-Logo.png"

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//   const closeDropdown = () => setIsDropdownOpen(false);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav className="bg-white fixed w-full z-20 top-0 border-b border-gray-200 ">
//       <div className="max-w-screen-xl flex items-center justify-between mx-auto p-0">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src={Logo}
//             alt="Logo"
//             width={140}
//             height={80}
//             className="object-contain"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex md:space-x-6 font-medium text-black text-sm">
//           <li>
//             <Link href="/">HOME</Link>
//           </li>
//           <li>
//             <Link href="/CarforSale">SHOP</Link>
//           </li>

//           {/* Dropdown for About */}
//           <li className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="text-black hover:bg-gray-100 rounded-lg px-4 py-0 flex items-center"
//             >
//               ACCESSORIES
//               <svg
//                 className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {/* Desktop Dropdown Menu */}
//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2  bg-white border border-gray-200 rounded-lg w-48 z-10 text-center">
//                 <ul>
//                 <li className="mb-2 mt-2"><Link href="/CompanyProfile">CLEANSER</Link></li>
//     <li className="mb-2"><Link href="/PaymentDetails">BODY CARE</Link></li>
//     <li className="mb-2"><Link href="/PrivacyPolicy">FACE MASK</Link></li>
//     <li className="mb-2"><Link href="/TermsofUse">EYE CARE</Link></li>
//     <li className="mb-2"><Link href="/Blogs">HAIR CARE</Link></li>
//                 </ul>
//               </div>
//             )}
//           </li>

//           <li><Link href="/contact">CONTACT</Link></li>
//           <li><Link href="/how-to-buy">HOW TO ORDER </Link></li>
//           <li><Link href="/why-choose-us">SALE</Link></li>
//         </ul>

//         {/* Right Side Icons (Login, Search, Cart) */}
//         <div className="flex items-center space-x-4">
//           <Link href="/login" className="text-black hover:text-gray-700">
//             <FaRegUser   size={24} />
//           </Link>
//           <Link href="/search" className="text-black hover:text-gray-700">
//             <IoSearchOutline size={24} />
//           </Link>
//           <Link href="/cart" className="text-black hover:text-gray-700">
//             <IoCartOutline  size={24} />
//           </Link>
//         </div>

//         {/* Hamburger Menu Button (for mobile) */}
//         <button
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//           onClick={toggleMenu}
//           aria-expanded={isMenuOpen}
//         >
//           <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
//           {isMenuOpen ? (
//             <svg
//               className="w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="absolute top-18 left-0 w-full bg-white shadow-md md:hidden z-[999999]"
//           >
//             <ul className="flex flex-col p-4 font-medium border border-gray-200 rounded-lg">
//               <li><Link href="/">HOME</Link></li>
//               <li><Link href="/CarforSale">SHOP</Link></li>
//               <li className="relative ">
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex py-2 px-3 text-black  items-center"
//                 >
//                   ACCESSORIES
//                   <svg
//                     className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {/* Mobile Dropdown Menu */}
//                 {isDropdownOpen && (
//                  <div className="absolute left-0 mt-2  bg-white border border-gray-200 rounded-lg w-48 z-10 text-center">
//                 <ul>
//                 <li className="mb-2 mt-2"><Link href="/CompanyProfile">CLEANSER</Link></li>
//     <li className="mb-2"><Link href="/PaymentDetails">BODY CARE</Link></li>
//     <li className="mb-2"><Link href="/PrivacyPolicy">FACE MASK</Link></li>
//     <li className="mb-2"><Link href="/TermsofUse">EYE CARE</Link></li>
//     <li className="mb-2"><Link href="/Blogs">HAIR CARE</Link></li>
//                 </ul>
//               </div>
//                 )}
//               </li>
//               <li><Link href="/contact">CONTACT</Link></li>
//               <li><Link href="/how-to-buy">HOW TO ORDER</Link></li>
//               <li><Link href="/why-choose-us">SALE</Link></li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
'use client';

import { useState } from 'react';
import Logo from "@public/Morphe-Logo.png";
import { FaBars, FaTimes, FaRegUser } from 'react-icons/fa';
import { IoCartOutline, IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

const navItems = [
  { title: 'BEAUTY STEAL SALE', link: '#' },
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
        <IoLocationOutline size={24} />
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

