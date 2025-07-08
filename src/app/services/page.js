"use client";
import { motion } from "framer-motion";
import { FiCode, FiSearch, FiPenTool, FiShare2, FiBarChart2, FiCheck, FiArrowRight } from "react-icons/fi";

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
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-500 blur-3xl"
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Comprehensive digital solutions tailored to elevate your online presence and drive business growth.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="px-8 py-3.5 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                Get Started
                <FiArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
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
        <div className="container mx-auto px-6">
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
        <div className="container mx-auto px-6 text-center">
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