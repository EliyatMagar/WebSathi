"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { FiExternalLink, FiGithub, FiFilter, FiArrowRight, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { projects, categories } from "./data";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-white overflow-hidden" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative bg-white min-h-screen flex items-center border-b border-gray-100 overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 overflow-hidden opacity-30"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                scale: Math.random() * 0.5 + 0.5,
                rotate: Math.random() * 360
              }}
              animate={{
                x: [null, Math.random() * 200 - 100],
                y: [null, Math.random() * 200 - 100],
                rotate: [0, Math.random() * 180]
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              className={`absolute rounded-lg ${i % 3 === 0 ? 'bg-blue-100' : i % 2 === 0 ? 'bg-indigo-100' : 'bg-cyan-100'} opacity-50`}
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(80px)',
                borderRadius: `${Math.random() * 50}% ${Math.random() * 50}%`
              }}
            />
          ))}
        </motion.div>

        {/* Digital grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 mb-6"
            >
              <motion.span 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-blue-500 mr-2"
              />
              <span className="text-sm font-medium text-blue-600">Featured Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
            >
              Our <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Creative Portfolio
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Discover our collection of innovative projects that transform ideas into digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-md flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block"
                >
                  <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scrolling indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
            <FiChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Filter Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full capitalize flex items-center gap-2 transition-all text-sm sm:text-base ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {activeCategory === category ? <FiFilter className="w-3 h-3 sm:w-4 sm:h-4" /> : null}
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-60 sm:h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Link 
                      href={`/portfolio/${project.id}`}
                      className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Parallax */}
      <motion.section 
        style={{ y }}
        className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Let's collaborate to bring your vision to life with cutting-edge solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}