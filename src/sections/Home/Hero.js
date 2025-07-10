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
    highlight: "Digital Experiences"
  },
  {
    title: "Innovative Web Solutions For Your Business",
    subtitle: "From strategy to execution, we deliver results that drive growth",
    highlight: "Web Solutions"
  },
  {
    title: "Elevate Your Brand With Our Expertise",
    subtitle: "Creative solutions that make your brand stand out",
    highlight: "Brand Expertise"
  },
  {
    title: "Data-Driven Digital Marketing Strategies",
    subtitle: "Maximize your online presence with our proven approaches",
    highlight: "Marketing Strategies"
  }
];

const AnimatedBackground = () => {
  const [stars, setStars] = useState([]);
  const [hearts, setHearts] = useState([]);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate stars
    const newStars = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 2
    }));
    
    // Generate hearts
    const newHearts = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.8 + 0.5
    }));
    
    // Generate bubbles
    const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.6 + 0.3
    }));
    
    setStars(newStars);
    setHearts(newHearts);
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900">
      {/* Twinkling Stars */}
      {stars.map(star => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}rem`,
            height: `${star.size}rem`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: star.delay
          }}
        />
      ))}
      
      {/* Beating Hearts */}
      {hearts.map(heart => (
        <motion.div
          key={`heart-${heart.id}`}
          className="absolute text-pink-500"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: `${heart.size}rem`,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5 + Math.random(),
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          ❤
        </motion.div>
      ))}
      
      {/* Floating Bubbles */}
      {bubbles.map(bubble => (
        <motion.div
          key={`bubble-${bubble.id}`}
          className="absolute rounded-full border-2 border-white opacity-70"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}rem`,
            height: `${bubble.size}rem`,
          }}
          animate={{
            y: [0, -20, -40, -60],
            opacity: [0.7, 0.5, 0.3, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'linear-gradient(45deg, #ff00cc, #3333ff)',
            'linear-gradient(45deg, #3333ff, #00ccff)',
            'linear-gradient(45deg, #00ccff, #00ffcc)',
            'linear-gradient(45deg, #00ffcc, #ff00cc)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Parallax]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={1500}
        effect="fade"
        parallax={true}
        loop={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Animated Background */}
            <AnimatedBackground />
            
            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 h-full flex items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto text-center px-4"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5 leading-tight drop-shadow-lg">
                  {slide.title.split(slide.highlight)[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-md">
                    {slide.highlight}
                  </span>
                  {slide.title.split(slide.highlight)[1]}
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-lg">
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Link 
                    href="/services" 
                    className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Explore Services
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    Free Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <span className="text-white text-xs mb-1 drop-shadow-md">Scroll Down</span>
          <div className="w-4 h-6 border-2 border-white rounded-full">
            <motion.div
              animate={{
                y: [0, 3, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1 bg-white rounded-full mx-auto mt-1"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}