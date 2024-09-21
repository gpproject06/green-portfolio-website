'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo.svg';

interface NavbarItem {
  name: string;
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navbarList: NavbarItem[] = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Services' },
    { name: 'Contact' },
  ];

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-lighter-green md:bg-transparent fixed group md:absolute top-0 left-0 w-full z-50 md:flex">
      {/* Mobile Menu - sliding effect */}
      <div className={`absolute w-full transition-all duration-1000 ease-in-out ${isOpen ? 'nav-open' : 'nav-closed'}`}>
        <ul className="flex flex-col items-center text-lg mt-20">
          {navbarList.map((item) => (
            <li className='py-3 text-2xl' key={item.name} onClick={toggleNav}>
              <span className=' text-white'>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Logo section */}
      <div className="text-3xl flex justify-center items-end md:justify-start py-2 md:px-5 md:w-60 h-full">
        <div className="text-2xl md:text-3xl flex items-center">
          <Image src={logo} alt="Logo" className="w-10 z-50" />
        </div>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="absolute top-3.5 left-3 w-8 md:hidden" onClick={toggleNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 -1 30 24"
          strokeWidth="2"
          stroke="currentColor"
          className="hamburger w-10"
        >
          <path
            className={`transition-transform duration-300 ease-in-out top-line ${isOpen ? 'rotate-top-burger -translate-y-1 translate-x-2' : ''}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5"
          />
          <path
            className={`transition-opacity duration-300 ease-in-out middle-line ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 12h16.5"
          />
          <path
            className={`transition-transform duration-300 ease-in-out bottom-line ${isOpen ? 'rotate-bottom-burger translate-y-1 -translate-x-2.5' : ''}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 18.75h16.5"
          />
        </svg>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden md:flex md:justify-between md:w-full ${isOpen ? 'flex' : ''}`}>
        <ul className="flex items-center text-lg">
          {navbarList.map((item) => (
            <li key={item.name}>
              <span className='px-4'>{item.name}</span>
            </li>
          ))}
        </ul>
        <div className="px-4 md:flex md:items-center">
          <Link href="/#contact-section">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Let's Connect</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
