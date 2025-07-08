"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

// Import your images
import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";
import hero4 from "../../assets/hero-4.jpg";

const heroSlides = [
  {
    image: hero1,
    title: "We Craft Digital Experiences That Matter",
    subtitle: "Transforming your vision into powerful digital solutions",
    highlight: "Digital Experiences"
  },
  {
    image: hero2,
    title: "Innovative Web Solutions For Your Business",
    subtitle: "From strategy to execution, we deliver results that drive growth",
    highlight: "Web Solutions"
  },
  {
    image: hero3,
    title: "Elevate Your Brand With Our Expertise",
    subtitle: "Creative solutions that make your brand stand out",
    highlight: "Brand Expertise"
  },
  {
    image: hero4,
    title: "Data-Driven Digital Marketing Strategies",
    subtitle: "Maximize your online presence with our proven approaches",
    highlight: "Marketing Strategies"
  }
];

export default function Hero() {
  return (
    <section className="relative h-screen max-h-[1000px] min-h-[600px] overflow-hidden">
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
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover"
                priority={index === 0}
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 h-full flex items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto text-center px-4"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                  {slide.title.split(slide.highlight)[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-md">
                    {slide.highlight}
                  </span>
                  {slide.title.split(slide.highlight)[1]}
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 sm:mb-10 max-w-2xl mx-auto drop-shadow-lg">
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Link 
                    href="/services" 
                    className="px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Explore Services
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base md:text-lg font-semibold rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:bg-opacity-20 transition-all duration-300"
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <span className="text-white text-sm mb-1 drop-shadow-md">Scroll Down</span>
          <div className="w-4 h-8 border-2 border-white rounded-full">
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
              className="w-1 h-1 bg-white rounded-full mx-auto mt-1"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}