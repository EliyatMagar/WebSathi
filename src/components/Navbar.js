"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WebSathiLogo from './webSathi.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for framer-motion would go here
  // (Note: You would need to install framer-motion for these advanced animations)

  return (
    <nav className={`bg-[#202429] text-white shadow-lg sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with hover animation */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="relative h-40 w-40 mr-2 p-1 rounded-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"> 
                <Image 
                  src={WebSathiLogo}
                  alt="WebSathi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            
            {/* Desktop Navigation with underline animation */}
            <div className="hidden md:block ml-4 lg:ml-10">
              <div className="flex space-x-4 lg:space-x-8">
                <Link 
                  href="/" 
                  className="relative text-white hover:text-[#E5862A] px-2 py-2 rounded-md text-sm font-medium transition duration-300 group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5862A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="/about" 
                  className="relative text-white hover:text-[#E5862A] px-2 py-2 rounded-md text-sm font-medium transition duration-300 group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5862A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="/services" 
                  className="relative text-white hover:text-[#E5862A] px-2 py-2 rounded-md text-sm font-medium transition duration-300 group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5862A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="/portfolio" 
                  className="relative text-white hover:text-[#E5862A] px-2 py-2 rounded-md text-sm font-medium transition duration-300 group"
                >
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5862A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="/contact" 
                  className="relative text-white hover:text-[#E5862A] px-2 py-2 rounded-md text-sm font-medium transition duration-300 group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5862A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#E5862A] hover:bg-[#019FD5] focus:outline-none transition-all duration-300 transform hover:rotate-90"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* CTA Button - Desktop with pulse animation */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#E5862A] to-[#019FD5] hover:from-[#019FD5] hover:to-[#E5862A] transition-all duration-300 hover:shadow-lg hover:scale-105 animate-pulse hover:animate-none"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu with slide-down animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#112C5A] backdrop-blur-md bg-opacity-90">
          <Link 
            href="/" 
            className="transform hover:translate-x-2 text-white hover:bg-[#019FD5] hover:text-white block px-3 py-3 rounded-md text-base font-medium transition-all duration-300"
            onClick={toggleMenu}
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </span>
          </Link>
          <Link 
            href="/about" 
            className="transform hover:translate-x-2 text-white hover:bg-[#019FD5] hover:text-white block px-3 py-3 rounded-md text-base font-medium transition-all duration-300"
            onClick={toggleMenu}
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </span>
          </Link>
          <Link 
            href="/services" 
            className="transform hover:translate-x-2 text-white hover:bg-[#019FD5] hover:text-white block px-3 py-3 rounded-md text-base font-medium transition-all duration-300"
            onClick={toggleMenu}
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Services
            </span>
          </Link>
          <Link 
            href="/portfolio" 
            className="transform hover:translate-x-2 text-white hover:bg-[#019FD5] hover:text-white block px-3 py-3 rounded-md text-base font-medium transition-all duration-300"
            onClick={toggleMenu}
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Portfolio
            </span>
          </Link>
          <Link 
            href="/contact" 
            className="transform hover:translate-x-2 text-white hover:bg-[#019FD5] hover:text-white block px-3 py-3 rounded-md text-base font-medium transition-all duration-300"
            onClick={toggleMenu}
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </span>
          </Link>
         <Link 
  href="/contact" 
  className="block w-full mt-2 text-center px-3 py-3 rounded-md text-base font-medium text-white 
            bg-gradient-to-r from-[#FF7B25] to-[#00A6ED] 
            hover:bg-gradient-to-r hover:from-[#00A6ED] hover:to-[#FF7B25] 
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
            hover:shadow-lg hover:shadow-[#00A6ED]/30 hover:scale-[1.02]"
  onClick={toggleMenu}
>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}