"use client";

import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import { FiCheck, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";

export default function ServiceDetail({ params }) {
  if (!params.slug) {
    console.error('No slug provided in params');
    return notFound();
  }
  
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    console.error(`Service not found for slug: ${params.slug}`);
    return notFound();
  }

  // Parallax effects
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Head>
        <title>{service.title} | Our Services</title>
        <meta name="description" content={service.description} />
      </Head>

      {/* Hero section */}
      <div className="relative overflow-hidden bg-white">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"
          style={{ y: yBg }}
        />
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="mb-8">
            <Link 
              href="/services" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-24 h-24 mb-8 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-900 shadow-sm"
              >
                <div className="text-4xl">
                  {service.icon}
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold text-gray-900 mb-6 md:text-5xl lg:text-6xl"
              >
                {service.title}
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl"
              >
                {service.description}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">What's included:</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-gray-900 mt-1 mr-3 flex-shrink-0 text-xl" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div ref={ref} className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          {/* Mobile features section */}
          <div className="md:hidden bg-gray-50 p-8 rounded-2xl shadow-sm mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">What's included:</h3>
            <ul className="space-y-4">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <FiCheck className="text-gray-900 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional content sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Approach</h3>
              <p className="text-gray-600 mb-4">
                We combine industry expertise with tailored solutions to deliver exceptional {service.title.toLowerCase()} services.
              </p>
              <p className="text-gray-600">
                Our methodology ensures efficiency, quality, and measurable results for every client.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheck className="text-gray-900 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Customized solutions for your specific needs</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-gray-900 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Experienced professionals with proven track records</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-gray-900 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Transparent communication and reporting</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gray-50 py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Interested in our {service.title} service?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="inline-block bg-white text-gray-900 font-medium py-3 px-8 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}