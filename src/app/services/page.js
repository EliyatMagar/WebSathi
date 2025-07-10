"use client";
import { motion } from "framer-motion";
import { FiCode, FiSearch, FiPenTool, FiShare2, FiBarChart2, FiCheck, FiArrowRight } from "react-icons/fi";

export default function ServicePage() {
  const services = [
    {
      title: "Web Design & Development",
      description: "Custom, responsive websites that convert visitors into customers with modern technologies.",
      icon: <FiCode className="w-5 h-5 sm:w-6 sm:h-6" />,
      features: ["UI/UX Design", "Frontend Development", "Backend Development", "E-commerce Solutions"]
    },
    {
      title: "SEO Optimization",
      description: "Higher rankings and organic traffic growth with proven strategies tailored to your business.",
      icon: <FiSearch className="w-5 h-5 sm:w-6 sm:h-6" />,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"]
    },
    {
      title: "Content Creation",
      description: "Compelling content that engages your audience and builds brand authority.",
      icon: <FiPenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
      features: ["Blog Writing", "Video Production", "Graphic Design", "Social Media Content"]
    },
    {
      title: "Social Media Management",
      description: "Strategic social presence that grows your brand and fosters community engagement.",
      icon: <FiShare2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      features: ["Content Calendar", "Community Management", "Paid Advertising", "Analytics & Reporting"]
    },
    {
      title: "Digital Marketing Strategy",
      description: "Data-driven campaigns that deliver measurable results and maximize ROI.",
      icon: <FiBarChart2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      features: ["Campaign Planning", "Audience Targeting", "Conversion Optimization", "Performance Tracking"]
    },
    {
      title: "Brand Identity",
      description: "Comprehensive branding solutions that communicate your unique value proposition.",
      icon: <FiPenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Messaging"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden min-h-[50vh] sm:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          {/* Animated background elements */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-20 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-500 blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-10 right-20 w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-indigo-500 blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, 120, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-cyan-400 blur-3xl"
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive digital solutions tailored to elevate your online presence and drive business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                Get Started
                <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Offer</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we deliver comprehensive digital solutions that drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  whileHover: { duration: 0.3 }
                }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300"
              >
                <div className="p-5 sm:p-6 md:p-8">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4 md:mb-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6">{service.description}</p>
                  
                  <ul className="space-y-1 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <FiCheck className="text-green-500 mt-0.5 md:mt-1 mr-2 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm md:text-base text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="text-xs sm:text-sm md:text-base text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 flex items-center"
                  >
                    Learn more
                    <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Process</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure we deliver exceptional results every time.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 transform -translate-x-1/2"></div>
            
            <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-4 xl:gap-6 2xl:gap-8">
              {[
                { 
                  title: "Discovery", 
                  description: "We learn about your business goals and challenges through in-depth consultations.",
                  icon: <FiSearch className="w-5 h-5 sm:w-6 sm:h-6" />
                },
                { 
                  title: "Planning", 
                  description: "We create a customized strategy tailored to your specific needs.",
                  icon: <FiPenTool className="w-5 h-5 sm:w-6 sm:h-6" />
                },
                { 
                  title: "Execution", 
                  description: "Our team implements the plan with precision and creativity.",
                  icon: <FiCode className="w-5 h-5 sm:w-6 sm:h-6" />
                },
                { 
                  title: "Optimization", 
                  description: "We continuously refine and improve based on performance data.",
                  icon: <FiBarChart2 className="w-5 h-5 sm:w-6 sm:h-6" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                  }}
                  className="relative text-center lg:text-left"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="lg:absolute lg:left-0 lg:top-0 lg:transform lg:-translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto lg:mx-0 mb-2 sm:mb-3 md:mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white"
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6"
              whileInView={{ 
                scale: [1, 1.02, 1],
                transition: { duration: 1, delay: 0.2 }
              }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-xl text-blue-100 mb-4 sm:mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can help you achieve your digital goals.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3.5 text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Free Consultation
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3.5 text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded-full bg-transparent text-white border border-white sm:border-2 hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}