"use client";
import { motion } from "framer-motion";
import { FiCode, FiSearch, FiPenTool, FiShare2, FiBarChart2, FiCheck,FiArrowRight, FiPlayCircle } from "react-icons/fi";

export default function ServicePage() {
  const services = [
    {
      title: "Web Design & Development",
      description: "Custom, responsive websites that convert visitors into customers with modern technologies.",
      icon: <FiCode className="w-6 h-6" />,
      features: ["UI/UX Design", "Frontend Development", "Backend Development", "E-commerce Solutions"]
    },
    {
      title: "SEO Optimization",
      description: "Higher rankings and organic traffic growth with proven strategies tailored to your business.",
      icon: <FiSearch className="w-6 h-6" />,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"]
    },
    {
      title: "Content Creation",
      description: "Compelling content that engages your audience and builds brand authority.",
      icon: <FiPenTool className="w-6 h-6" />,
      features: ["Blog Writing", "Video Production", "Graphic Design", "Social Media Content"]
    },
    {
      title: "Social Media Management",
      description: "Strategic social presence that grows your brand and fosters community engagement.",
      icon: <FiShare2 className="w-6 h-6" />,
      features: ["Content Calendar", "Community Management", "Paid Advertising", "Analytics & Reporting"]
    },
    {
      title: "Digital Marketing Strategy",
      description: "Data-driven campaigns that deliver measurable results and maximize ROI.",
      icon: <FiBarChart2 className="w-6 h-6" />,
      features: ["Campaign Planning", "Audience Targeting", "Conversion Optimization", "Performance Tracking"]
    },
    {
      title: "Brand Identity",
      description: "Comprehensive branding solutions that communicate your unique value proposition.",
      icon: <FiPenTool className="w-6 h-6" />,
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Messaging"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
     <section className="relative bg-white overflow-hidden min-h-[60vh] md:min-h-[80vh] flex items-center border-b border-gray-100">
  {/* Animated floating elements */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ 
          opacity: 0.05,
          y: Math.random() * 300,
          x: Math.random() * 500 - 100,
          scale: Math.random() * 0.5 + 0.5
        }}
        animate={{ 
          y: [0, Math.random() * 100 - 50],
          x: [0, Math.random() * 100 - 50],
          rotate: [0, Math.random() * 360]
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: Math.random() * 5
        }}
        className="absolute rounded-full bg-gradient-to-r from-blue-100 to-indigo-100"
        style={{
          width: `${Math.random() * 200 + 100}px`,
          height: `${Math.random() * 200 + 100}px`,
          filter: 'blur(40px)'
        }}
      />
    ))}
  </div>

  {/* Main content */}
  <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left"
    >
      {/* Animated badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 mb-6"
      >
        <motion.span 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-blue-500 mr-2"
        />
        <span className="text-sm font-medium text-blue-600">We're accepting new projects</span>
      </motion.div>

      {/* Animated headline with word-by-word reveal */}
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="block">Transform Your </span>
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Digital Presence
          </motion.span>
        </motion.h1>
      </div>

      {/* Animated paragraph with typing effect */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto md:mx-0"
      >
        Comprehensive solutions to elevate your brand and accelerate growth in the digital landscape.
      </motion.p>

      {/* Animated CTA button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
      >
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md flex items-center gap-2 group"
        >
          <span>Get Started</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block"
          >
            <FiArrowRight className="w-5 h-5" />
          </motion.span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 text-lg font-semibold rounded-full bg-white text-gray-800 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm flex items-center gap-2"
        >
          <FiPlayCircle className="w-5 h-5 text-blue-600" />
          <span>Watch Demo</span>
        </motion.button>
      </motion.div>
    </motion.div>
  </div>

  {/* Floating mockup image (optional) */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    viewport={{ once: true }}
    className="hidden lg:block absolute right-0 bottom-0 w-1/3 max-w-xl pointer-events-none"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-l from-white via-white/90 to-transparent w-1/3" />
      <img 
        src="/images/hero-mockup.png" 
        alt="Digital device mockup"
        className="w-full h-auto"
      />
    </div>
  </motion.div>
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
            {services.map((service, index) => (
              <motion.div
                key={index}
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
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 flex items-center">
                    Learn more
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[1240px] w-full px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure we deliver exceptional results every time.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 transform -translate-x-1/2"></div>
            
            <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
              {[
                { 
                  title: "Discovery", 
                  description: "We learn about your business goals and challenges through in-depth consultations.",
                  icon: <FiSearch className="w-6 h-6" />
                },
                { 
                  title: "Planning", 
                  description: "We create a customized strategy tailored to your specific needs.",
                  icon: <FiPenTool className="w-6 h-6" />
                },
                { 
                  title: "Execution", 
                  description: "Our team implements the plan with precision and creativity.",
                  icon: <FiCode className="w-6 h-6" />
                },
                { 
                  title: "Optimization", 
                  description: "We continuously refine and improve based on performance data.",
                  icon: <FiBarChart2 className="w-6 h-6" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center lg:text-left"
                >
                  <div className="lg:absolute lg:left-0 lg:top-0 lg:transform lg:-translate-x-1/2 w-12 h-12 mx-auto lg:mx-0 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="mx-auto max-w-[1240px] w-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 text-lg font-semibold rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:bg-opacity-10 transition-all duration-300"
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