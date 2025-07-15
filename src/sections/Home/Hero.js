"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax } from 'swiper/modules';
import Typed from 'typed.js';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';
import Image from "next/image";

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => {
      const type = Math.random() > 0.7 ? 'shape' : 
                  Math.random() > 0.5 ? 'code' : 'icon';
      
      let content = '';
      let className = '';
      
      if (type === 'code') {
        content = ['<>', '</>', '{}', '[]', '()', ';', '=>', '${ }'][Math.floor(Math.random() * 8)];
        className = 'text-blue-300 font-mono';
      } else if (type === 'icon') {
        content = ['★', '✧', '✦', '✹', '✺', '✼', '❖', '✪'][Math.floor(Math.random() * 8)];
        className = 'text-cyan-300';
      } else {
        className = 'bg-blue-800 opacity-20 rounded-full';
      }
      
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === 'shape' ? 
          Math.random() * 0.4 + 0.1 : 
          Math.random() * 0.8 + 0.5,
        delay: Math.random() * 2,
        type,
        content,
        className
      };
    });
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Floating Particles */}
      {particles.map(particle => (
        <motion.div
          key={`particle-${particle.id}`}
          className={`absolute ${particle.className}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.type === 'shape' ? `${particle.size}rem` : 'auto',
            height: particle.type === 'shape' ? `${particle.size}rem` : 'auto',
            fontSize: `${particle.size}rem`,
          }}
          animate={{
            y: [0, Math.random() > 0.5 ? -10 : 10, 0],
            x: [0, Math.random() > 0.5 ? -5 : 5, 0],
            opacity: [0.8, 1, 0.8],
            rotate: particle.type === 'shape' ? [0, 360] : [0, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: particle.delay
          }}
        >
          {particle.content}
        </motion.div>
      ))}
      
      {/* Digital Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-blue-200"></div>
          ))}
        </div>
      </div>
      
      {/* Animated Glow */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(0, 150, 255, 0.5), transparent 60%)',
            'radial-gradient(circle at 70% 30%, rgba(0, 100, 255, 0.5), transparent 60%)',
            'radial-gradient(circle at 50% 80%, rgba(0, 200, 255, 0.5), transparent 60%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

const DigitalElement = ({ className = "" }) => {
  return (
    <motion.div 
      className={`absolute ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 0] }}
      transition={{
        duration: 4 + Math.random() * 6,
        repeat: Infinity,
        repeatType: "reverse",
        delay: Math.random() * 3
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path 
          d="M20,20 L80,20 L80,80 L20,80 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
          strokeDasharray="5,2"
        />
      </svg>
    </motion.div>
  );
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const typedRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const options = {
      strings: [
        "powerful digital solutions",
        "responsive web applications",
        "scalable SaaS platforms",
        "engaging user experiences",
        "high-performance websites"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 2000,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
      <AnimatedBackground />
      
      {/* Floating digital elements */}
      <DigitalElement className="top-10 left-10 w-20 h-20 text-blue-400" />
      <DigitalElement className="bottom-20 right-10 w-24 h-24 text-blue-500" />
      <DigitalElement className="top-1/3 right-1/4 w-16 h-16 text-cyan-400" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center relative z-10 max-w-[1250px]">
        <div className="flex flex-col md:flex-row items-center w-full gap-8 md:gap-12 lg:gap-16">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-1/2 max-w-2xl mx-auto text-center md:text-left px-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Responsive gradient text with size scaling */}
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-4 sm:mb-6 leading-tight">
                We Craft Digital Experiences That Matter
                <motion.span 
                  className="block h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mt-4 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </h1>
              
              {/* Responsive paragraph text with typing animation */}
              <motion.p 
                className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto md:mx-0 min-h-[60px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                Transforming your vision into <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                  <span ref={typedRef}></span>
                </span> that drive results
              </motion.p>
              
              {/* Responsive buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 md:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <Link 
                  href="/services" 
                  className="relative px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Services 
                    <motion.span
                      initial={{ x: -5 }}
                      animate={{ x: 5 }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse",
                        duration: 1.5
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
                
                <Link 
                  href="/contact" 
                  className="relative px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold rounded-full bg-white/10 backdrop-blur-sm border-2 border-blue-400/30 text-blue-700 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden shadow-md hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Free Consultation
                    <motion.span
                      className="text-lg"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 2
                      }}
                    >
                      ✨
                    </motion.span>
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image - Right Side (Hidden on mobile) */}
          {!isMobile && (
            <motion.div 
              className="md:w-1/2 flex justify-center items-center px-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full max-w-xl h-[400px] lg:h-[500px]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/boy-hero-removebg.png" 
                    alt="Digital Agency Services"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
                {/* Animated glow effect around the image */}
                <motion.div 
                  className="absolute inset-0 rounded-full opacity-30"
                  animate={{
                    boxShadow: [
                      '0 0 60px 30px rgba(0, 150, 255, 0.3)',
                      '0 0 80px 40px rgba(0, 100, 255, 0.3)',
                      '0 0 60px 30px rgba(0, 200, 255, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <span className="text-blue-900 text-xs mb-2 drop-shadow-md">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-blue-900 rounded-full">
            <motion.div
              animate={{
                y: [0, 4, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-blue-900 rounded-full mx-auto mt-1"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}