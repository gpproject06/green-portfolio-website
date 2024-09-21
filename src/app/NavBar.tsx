'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import logo from '/public/logo.svg'

interface NavbarItem {
  name: string;
  path: string;
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Example list of navbar items
  const navbarList: NavbarItem[] = [
    { name: 'Home', path: '' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Contact', path: 'contact' },
  ];

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-green-600 md:bg-transparent fixed group md:absolute top-0 left-0 w-full z-50 md:flex ${isOpen ? 'nav-open' : 'nav-closed'}`}>
      <div className='absolute w-full m-14'>
        <ul className='items-center text-lg'>
          {navbarList.map((item) => (
            <li key={item.name} onClick={toggleNav}>
              <Link href={`/${item.path}`}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`text-3xl flex justify-center items-end md:justify-start py-4 md:px-5 md:w-60 h-full`}>
        {/* Simple Logo Text for standalone */}
        <div className="text-2xl md:text-3xl flex items-center">
          <Image src={logo} alt='sd' className='w-10'/>
        </div>
      </div>
      <div className='absolute top-3.5 left-3 w-8 md:hidden' onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="hamburger">
          <path className="top-line" strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5" />
          <path className="middle-line" strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5" />
          <path className="bottom-line" strokeLinecap="round" strokeLinejoin="round" d="M3.75 18.75h16.5" />
        </svg>
      </div>
      <div className={`hidden md:flex md:justify-between md:w-full ${isOpen ? 'flex' : ''}`}>
        <ul className='flex items-center text-lg'>
          {navbarList.map((item) => (
            <li key={item.name}>
              <Link href={`/${item.path}`}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='px-4 md:flex md:items-center'>
          <Link href={"/#contact-section"}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Let's Connect</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

