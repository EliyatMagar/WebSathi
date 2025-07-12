"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import WebSathiLogo from './webSathi.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  // Parallax effect setup
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 0.9]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.2], [0, 8]);
  const yOffset = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

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

  // Modern color palette
  const colors = {
    primary: '#1d263bff',       // Deep navy
    secondary: '#213050ff',     // Dark slate
    accent: '#7c3aed',        // Vibrant violet
    highlight: '#f59e0b',     // Amber
    text: '#e1dcdcff',          // Lightest slate
  };

  return (
    <motion.nav 
      ref={ref}
      style={{
        backgroundColor: `rgba(15, 23, 42, ${backgroundOpacity})`,
        backdropFilter: `blur(${blurAmount}px)`,
        y: yOffset
      }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with 3D hover effect */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: `0 10px 25px -5px rgba(124, 58, 237, 0.4)`
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative h-42 w-42 mr-2 rounded-md overflow-hidden"
              >
                <Image 
                  src={WebSathiLogo}
                  alt="WebSathi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              
            </Link>
            
            {/* Desktop Navigation with floating underline */}
            <div className="hidden md:block ml-4 lg:ml-10">
              <div className="flex space-x-4 lg:space-x-8">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase()}`} 
                    className="relative px-3 py-2 text-sm font-medium group"
                  >
                    <motion.span 
                      className="relative z-10"
                      style={{ color: colors.text }}
                      whileHover={{ color: colors.highlight }}
                      transition={{ duration: 0.3 }}
                    >
                      {item}
                    </motion.span>
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ width: '100%', opacity: 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-md"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button - Desktop with magnetic effect */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-amber-500 blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <Link 
                href="/contact" 
                className="relative px-6 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-amber-500 shadow-lg"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button with morphing animation */}
          <div className="md:hidden flex items-center">
            <motion.button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={colors.text}>
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    variants={{
                      open: { opacity: 1 },
                      closed: { opacity: 1 }
                    }}
                  />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu with 3D slide effect */}
      <motion.div 
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { 
            height: "auto",
            opacity: 1,
            rotateX: 0,
            transformOrigin: "top center",
            display: "block"
          },
          closed: { 
            height: 0,
            opacity: 0,
            rotateX: -15,
            transformOrigin: "top center",
            transitionEnd: { display: "none" }
          }
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Link 
                href={`/${item.toLowerCase()}`} 
                className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-purple-900/30 transition-all duration-300 flex items-center"
                onClick={toggleMenu}
              >
                <motion.span 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {item}
                </motion.span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 px-3"
          >
            <Link 
              href="/contact" 
              className="block w-full text-center px-3 py-3 rounded-md text-base font-medium text-white bg-gradient-to-r from-purple-600 to-amber-500 hover:shadow-lg transition-all duration-300"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}