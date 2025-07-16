"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiSearch, FiPenTool, FiShare2, FiBarChart2, FiCheck, FiArrowRight, FiPlayCircle, FiClock } from "react-icons/fi";
import Link from "next/link";
import {services} from "@/lib/services";

export default function ServicePage() {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax values for different elements
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-[#c7c7d8ff]" ref={containerRef}>
      {/* Hero Section with Parallax */}
<section className="relative bg-white overflow-hidden min-h-[60vh] md:min-h-[80vh] flex items-center border-b border-gray-100">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ 
          opacity: 0,
          y: `${Math.random() * 100}%`,
          x: `${Math.random() * 100}%`,
          scale: 0.8
        }}
        animate={{ 
          opacity: [0, 0.05, 0],
          y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
          x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
          scale: [0.8, 1.1, 0.9]
        }}
        transition={{
          duration: 20 + Math.random() * 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute rounded-full bg-blue-50"
        style={{
          width: `${Math.random() * 300 + 100}px`,
          height: `${Math.random() * 300 + 100}px`,
          filter: 'blur(60px)'
        }}
      />
    ))}
  </div>

  {/* Main content */}
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24 w-full relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="lg:w-1/2 text-center lg:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 mb-6"
        >
          <motion.span 
            animate={{ 
              scale: [1, 1.2, 1],
              backgroundColor: ['#bfdbfe', '#93c5fd', '#bfdbfe']
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity 
            }}
            className="w-2 h-2 rounded-full bg-blue-500 mr-2"
          />
          <span className="text-sm font-medium text-blue-600">Est. April 2025</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
        >
          <span className="block">ASCOL Digital</span>
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            Innovation Lab
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
        >
          A <span className="text-blue-600 font-medium">student-led digital agency</span> from Tribhuvan University, combining academic excellence with <span className="text-blue-600 font-medium">cutting-edge technology</span> solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        >
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                viewport={{ once: true }}
                className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 overflow-hidden flex items-center justify-center"
              >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.div>
            ))}
          </div>
          <span className="text-sm text-blue-600 font-medium">
            Student innovators at work
          </span>
        </motion.div>
      </motion.div>

      {/* Graphic placeholder */}
    
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true, margin: "-100px" }}
  className="lg:w-1/2 relative w-full"
>
  {/* Electric gradient background (high contrast) */}
  <div className="relative rounded-xl overflow-hidden shadow-xl aspect-video bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500">
    <div className="absolute inset-0 flex items-center justify-center">
      <svg 
        className="w-full h-full"
        viewBox="0 0 500 300"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Glowing neon shapes */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          d="M50,150 Q125,50 200,150 T350,150"
          fill="none"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Pulsing cyan circle (complements purple) */}
        <motion.circle
          animate={{
            cx: [100, 150, 100],
            cy: [100, 150, 100],
            r: [30, 40, 30],
            opacity: [0.6, 0.9, 0.6],
            fill: ["rgba(34, 211, 238, 0.8)", "rgba(34, 211, 238, 0.5)", "rgba(34, 211, 238, 0.8)"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Glowing yellow rectangle (high visibility) */}
        <motion.rect
          animate={{
            x: [300, 280, 300],
            y: [50, 70, 50],
            width: [80, 100, 80],
            height: [80, 60, 80],
            opacity: [0.7, 1, 0.7],
            fill: ["rgba(250, 204, 21, 0.9)", "rgba(250, 204, 21, 0.6)", "rgba(250, 204, 21, 0.9)"]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          rx="10"
        />

        {/* Animated green path (energetic contrast) */}
        <motion.path
          animate={{
            d: [
              "M100,200 Q200,250 300,200",
              "M100,200 Q200,150 300,200",
              "M100,200 Q200,250 300,200"
            ],
            stroke: [
              "rgba(74, 222, 128, 0.9)",
              "rgba(163, 230, 53, 0.9)",
              "rgba(74, 222, 128, 0.9)"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* Animated overlay for depth */}
    <motion.div
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        background: [
          "radial-gradient(circle at 30% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
          "radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
          "radial-gradient(circle at 30% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)"
        ]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity 
      }}
      className="absolute inset-0"
    />
  </div>
</motion.div>
    </div>
  </div>
</section>


      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-[1240px] w-full px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we deliver comprehensive digital solutions that drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service,index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                  href={`/services/${service.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 flex items-center">
                    Learn more
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16 md:mb-20"
    >
      <span className="inline-block text-sm font-semibold text-blue-600 mb-3 tracking-wider uppercase">
        Our Methodology
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Process</span> Behind<br className="hidden md:block" /> Our Success
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        A structured yet flexible approach to deliver exceptional results tailored to your needs.
      </p>
    </motion.div>

    <div className="relative">
      {/* Animated gradient line (desktop only) */}
      <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 transform -translate-x-1/2">
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          className="h-full w-full origin-top"
        />
      </div>
      
      <div className="grid gap-12 md:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { 
            title: "Discovery", 
            description: "We conduct in-depth research to understand your business goals, challenges, and market position.",
            icon: <FiSearch className="w-6 h-6" />,
            color: "from-blue-500 to-blue-600"
          },
          { 
            title: "Strategy", 
            description: "We craft a customized plan with clear milestones and measurable objectives.",
            icon: <FiPenTool className="w-6 h-6" />,
            color: "from-cyan-500 to-blue-500"
          },
          { 
            title: "Execution", 
            description: "Our expert team implements solutions with precision, creativity, and agility.",
            icon: <FiCode className="w-6 h-6" />,
            color: "from-emerald-400 to-cyan-500"
          },
          { 
            title: "Optimization", 
            description: "Continuous refinement based on data-driven insights and performance metrics.",
            icon: <FiBarChart2 className="w-6 h-6" />,
            color: "from-teal-400 to-emerald-500"
          }
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "backOut"
            }}
            className="relative group"
          >
            <div className="flex flex-col items-center lg:items-start h-full p-6 md:p-5 lg:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent">
              <div className={`absolute -top-5 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <div className="mt-8 lg:mt-10 text-center lg:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

     {/* Enhanced CTA Section */}
<section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10">
    <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-cyan-400 mix-blend-screen filter blur-3xl"></div>
    <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-indigo-500 mix-blend-screen filter blur-3xl"></div>
  </div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-4xl mx-auto text-center"
    >
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="inline-block text-sm font-medium tracking-wider text-cyan-300 mb-4 uppercase"
      >
        Let's Build Something Amazing
      </motion.span>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="block"
        >
          Ready to Transform Your
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
        >
          Digital Presence?
        </motion.span>
      </h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
      >
        Schedule a free strategy session with our experts to explore how we can help you achieve your business goals.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
      >
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
        >
          <span className="relative z-10">Get a Free Consultation</span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.button>
        
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)"
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 text-lg font-semibold rounded-full bg-transparent text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">View Case Studies</span>
          <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.button>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-sm text-blue-200 mt-8 flex items-center justify-center gap-2"
      >
        <FiClock className="w-4 h-4" />
        <span>Book a 30-minute call with our team</span>
      </motion.p>
    </motion.div>
  </div>
</section>
    </div>
  );
}
