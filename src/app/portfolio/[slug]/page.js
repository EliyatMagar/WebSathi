"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub, FiX, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data";
import { useRef, useEffect } from "react";

export default function ProjectDetailPage({ params }) {
  const projectId = parseInt(params.slug);
  const project = projects.find(p => p.id === projectId);
  const containerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Fix for close button going under navbar
  useEffect(() => {
    const updateButtonPosition = () => {
      if (closeBtnRef.current) {
        const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
        closeBtnRef.current.style.top = `${navbarHeight + 20}px`;
      }
    };

    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="text-center max-w-md px-6">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600"
          >
            Project Not Found
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-600 hover:text-blue-700 transition-all shadow-sm border border-gray-200 hover:shadow-md"
            >
              <FiArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white overflow-hidden" ref={containerRef}>
      {/* Fixed Close Button */}
      <motion.div
        ref={closeBtnRef}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed right-6 z-50"
        style={{ top: '6rem' }} // Default fallback
      >
        <Link 
          href="/portfolio"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <FiX className="w-5 h-5 text-gray-700" />
        </Link>
      </motion.div>

      {/* Hero Section with Parallax */}
      <motion.div 
        style={{ y }}
        className="relative bg-gray-900"
      >
        <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-90"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12 pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="inline-block px-3 py-1 bg-white/90 text-blue-800 rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto px-6 max-w-6xl py-16 md:py-24">
        {/* Project Meta */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Project Overview
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                This project represents our agency's commitment to delivering cutting-edge digital solutions. 
                We combined innovative design with robust engineering to create a seamless user experience 
                that drives measurable results for our client.
              </p>
              <p className="mt-4">
                Our team implemented the latest technologies to ensure scalability and performance, 
                while maintaining a focus on intuitive user interfaces that engage and convert visitors.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-medium"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Project Links
              </h3>
              <div className="space-y-3">
                {project.links.live && (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
                {project.links.github && (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all shadow-md"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <Image
                  src={`/images/project-${item}.jpg`}
                  alt={`Project screenshot ${item}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <FiArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}