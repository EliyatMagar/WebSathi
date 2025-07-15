"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiCode, FiSearch, FiPenTool, FiShare2, FiBarChart2 } from "react-icons/fi";
import { useRef } from "react";

export default function ServiceOverview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const services = [
    {
      title: "Web Design & Development",
      description: "Custom, responsive websites that convert visitors into customers",
      icon: <FiCode className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "SEO Optimization",
      description: "Higher rankings and organic traffic growth with proven strategies",
      icon: <FiSearch className="w-6 h-6" />,
      color: "from-purple-500 to-fuchsia-400"
    },
    {
      title: "Content Creation",
      description: "Compelling content that engages your audience and builds trust",
      icon: <FiPenTool className="w-6 h-6" />,
      color: "from-amber-500 to-yellow-400"
    },
    {
      title: "Social Media Management",
      description: "Strategic social presence that grows your brand and community",
      icon: <FiShare2 className="w-6 h-6" />,
      color: "from-rose-500 to-pink-400"
    },
    {
      title: "Digital Marketing Strategy",
      description: "Data-driven campaigns that deliver measurable results",
      icon: <FiBarChart2 className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-400"
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-cyan-50 z-0"
      />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-200 opacity-20 blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-cyan-200 opacity-20 blur-3xl -z-10" />

      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium inline-flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Our Services
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="inline-block">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                Our&nbsp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 inline-block"
              >
                Digital Services
              </motion.span>
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions tailored to elevate your online presence and drive business growth
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "backOut"
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                <div className="p-8 h-full flex flex-col">
                  <div className={`w-12 h-12 mb-6 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 group/link"
                  >
                    <span className="group-hover/link:underline">Learn more</span>
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-block px-8 py-3.5 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}