"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 opacity-95 animate-gradient-x"></div>
      
      {/* Particles background (optional) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-white"></div>
        {/* Add more particles as needed */}
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Experiences</span> That Matter
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Transforming your vision into powerful digital solutions. From strategy to execution, we deliver results that drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/services" 
              className="px-8 py-3.5 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Services
            </Link>
            
            <Link 
              href="/contact" 
              className="px-8 py-3.5 text-lg font-semibold rounded-full bg-transparent text-white border-2 border-white hover:from-cyan-600 hover:to-blue-700 hover:bg-opacity-10 transition-all duration-300"
            >
              Get a Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating elements (optional) */}
      <motion.div 
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-blue-500 opacity-20 blur-xl"
      ></motion.div>
    </section>
  );
}