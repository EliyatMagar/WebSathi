"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WebSathiLogo from './webSathi.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#202429] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with better contrast */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative h-40 w-40 mr-2  p-1 rounded-md"> 
                <Image 
                  src={WebSathiLogo}
                  alt="WebSathi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-4 lg:ml-10">
              <div className="flex space-x-4 lg:space-x-8">
                <Link 
                  href="/" 
                  className="text-white hover:text-[#E5862A] px-2 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-white hover:text-[#E5862A] px-2 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  About
                </Link>
                <Link 
                  href="/services" 
                  className="text-white hover:text-[#E5862A] px-2 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Services
                </Link>
                <Link 
                  href="/portfolio" 
                  className="text-white hover:text-[#E5862A] px-2 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Portfolio
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-[#E5862A] px-2 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#E5862A] hover:bg-[#019FD5] focus:outline-none transition duration-300"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#E5862A] to-[#019FD5] hover:from-[#019FD5] hover:to-[#E5862A] transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#112C5A]">
          <Link 
            href="/" 
            className="text-white hover:bg-[#019FD5] hover:text-white block px-3 py-3 rounded-md text-base font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-white hover:bg-[#019FD5] hover:text-white block px-3 py-3 rounded-md text-base font-medium transition duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className="text-white hover:bg-[#019FD5] hover:text-white block px-3 py-3 rounded-md text-base font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link 
            href="/portfolio" 
            className="text-white hover:bg-[#019FD5] hover:text-white block px-3 py-3 rounded-md text-base font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link 
            href="/contact" 
            className="text-white hover:bg-[#019FD5] hover:text-white block px-3 py-3 rounded-md text-base font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link 
            href="/contact" 
            className="block w-full mt-2 text-center px-3 py-3 rounded-md text-base font-medium text-white bg-gradient-to-r from-[#E5862A] to-[#019FD5] hover:from-[#019FD5] hover:to-[#E5862A] transition duration-300"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}