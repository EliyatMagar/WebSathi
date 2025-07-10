"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCode, FiSearch, FiPenTool, FiShare2, FiBarChart2 } from "react-icons/fi";

export default function ServiceOverview() {
  const services = [
    {
      title: "Web Design & Development",
      description: "Custom, responsive websites that convert visitors into customers",
      icon: <FiCode className="w-6 h-6" />
    },
    {
      title: "SEO Optimization",
      description: "Higher rankings and organic traffic growth with proven strategies",
      icon: <FiSearch className="w-6 h-6" />
    },
    {
      title: "Content Creation",
      description: "Compelling content that engages your audience and builds trust",
      icon: <FiPenTool className="w-6 h-6" />
    },
    {
      title: "Social Media Management",
      description: "Strategic social presence that grows your brand and community",
      icon: <FiShare2 className="w-6 h-6" />
    },
    {
      title: "Digital Marketing Strategy",
      description: "Data-driven campaigns that deliver measurable results",
      icon: <FiBarChart2 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your online presence and drive business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-block px-8 py-3.5 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}