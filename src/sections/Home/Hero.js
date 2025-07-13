"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

const heroSlides = [
  {
    title: "We Craft Digital Experiences That Matter",
    subtitle: "Transforming your vision into powerful digital solutions",
    highlight: "Digital Experiences",
    parallaxImage: "/images/hero1.jpg"
  },
  {
    title: "Innovative Web Solutions For Your Business",
    subtitle: "From strategy to execution, we deliver results that drive growth",
    highlight: "Web Solutions",
    parallaxImage: "/images/hero2.jpg"
  },
  {
    title: "Elevate Your Brand With Our Expertise",
    subtitle: "Creative solutions that make your brand stand out",
    highlight: "Brand Expertise",
    parallaxImage: "/images/hero3.jpg"
  },
  {
    title: "Data-Driven Digital Marketing Strategies",
    subtitle: "Maximize your online presence with our proven approaches",
    highlight: "Marketing Strategies",
    parallaxImage: "/images/hero4.jpg"
  }
];

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles with different types
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
        className = 'bg-gray-800 opacity-30 rounded-full';
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
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-white">
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
            <div key={i} className="border border-gray-300"></div>
          ))}
        </div>
      </div>
      
      {/* Animated Glow */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(0, 200, 255, 0.8), transparent 60%)',
            'radial-gradient(circle at 70% 30%, rgba(100, 0, 255, 0.8), transparent 60%)',
            'radial-gradient(circle at 50% 80%, rgba(255, 0, 200, 0.8), transparent 60%)',
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Parallax]}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={2000}
        effect="fade"
        parallax={{
          enabled: !isMobile,
        }}
        loop={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Parallax Background Image */}
            {!isMobile && (
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                data-swiper-parallax="-30%"
                style={{ backgroundImage: `url(${slide.parallaxImage})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              </div>
            )}
            
            {/* Animated Digital Elements */}
            <AnimatedBackground />
            
            {/* Floating digital elements */}
            <DigitalElement className="top-10 left-10 w-20 h-20 text-blue-400" />
            <DigitalElement className="bottom-20 right-10 w-24 h-24 text-purple-400" />
            <DigitalElement className="top-1/3 right-1/4 w-16 h-16 text-cyan-400" />
            
            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 h-full flex items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="max-w-4xl mx-auto text-center px-4"
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-y={!isMobile ? "100" : "0"}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                    {slide.title.split(slide.highlight)[0]}
                    <motion.span 
                      className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      {slide.highlight}
                    </motion.span>
                    {slide.title.split(slide.highlight)[1]}
                  </h1>
                  
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto drop-shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    <Link 
                      href="/services" 
                      className="relative px-8 py-3.5 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden group"
                    >
                      <span className="relative z-10">Explore Services</span>
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '0%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </Link>
                    
                   <Link 
  href="/contact" 
  className="relative px-8 py-3.5 text-sm sm:text-base font-semibold rounded-full bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-opacity-5 transition-all duration-300 group overflow-hidden"
>
  <span className="relative z-10">Free Consultation</span>
  <motion.span 
    className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300 z-0"
    initial={{ scaleX: 0, originX: 0 }}
    whileHover={{ 
      scaleX: 1,
      opacity: 0.1,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      } 
    }}
  />
</Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
          <span className="text-gray-900 text-xs mb-2 drop-shadow-md">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-gray-900 rounded-full">
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
              className="w-1 h-2 bg-gray-900 rounded-full mx-auto mt-1"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Digital agency badge */}
      <motion.div 
        className="absolute top-6 right-6 z-10 bg-white bg-opacity-40 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-300"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex items-center">
          <motion.div 
            className="w-2 h-2 bg-green-600 rounded-full mr-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-sm text-gray-900 font-medium">Digital Agency</span>
        </div>
      </motion.div>
    </section>
  );
}