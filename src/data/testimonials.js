"use client";
import { motion } from "framer-motion";
import { FiMessageSquare, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import testimonials1 from "../assets/testimonials-1.jpg";
import testimonials2 from "../assets/testimonials-2.jpg";
import testimonials3 from "../assets/testimonials-3.jpg";
import testimonials4 from "../assets/testimonials-4.jpg";
import logo from "../assets/web-sathi.png";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      content: "Working with this digital agency transformed our online presence. Their strategic approach and creative execution resulted in a 150% increase in our conversion rates within just three months.",
      rating: 5,
      image: testimonials1
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, Startup Ventures",
      content: "The team delivered beyond our expectations. Their technical expertise and attention to detail made our complex e-commerce platform a reality ahead of schedule.",
      rating: 5,
      image: testimonials2
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Brand Manager, Global Retail",
      content: "From branding to digital strategy, this agency has been an invaluable partner. They truly understand how to connect brands with their target audiences in meaningful ways.",
      rating: 4,
      image: testimonials3
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO, FinTech Solutions",
      content: "Their development team integrated seamlessly with ours, delivering robust solutions that scaled perfectly with our growing user base. Highly recommended for technical projects.",
      rating: 5,
      image: testimonials4
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Responsive */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden min-h-[50vh] md:min-h-[60vh] flex items-center">
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
        
        <div className="container mx-auto px-4 sm:px-6 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center mx-auto px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Testimonials</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Hear what our clients say about working with us and the results we've achieved together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Content - Responsive Carousel */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Trusted by <span className="text-blue-600">Businesses Worldwide</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We measure our success by the success of our clients. Here's what they have to say.
            </p>
          </motion.div>

          {/* Responsive Carousel */}
          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            <div className="relative h-[500px] sm:h-[400px] md:h-[350px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: index > currentTestimonial ? 100 : -100 }}
                  animate={{ 
                    opacity: index === currentTestimonial ? 1 : 0,
                    x: index === currentTestimonial ? 0 : (index > currentTestimonial ? 100 : -100),
                    scale: index === currentTestimonial ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-white rounded-xl shadow-md sm:shadow-lg p-6 md:p-8 transition-all duration-300 ${
                    index === currentTestimonial ? "z-10" : "z-0"
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
                    {/* Client Image - Responsive */}
                    <div className="w-full md:w-1/3 flex justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.03 }}
                        className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-blue-100 shadow-md"
                      >
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 128px, 160px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                      </motion.div>
                    </div>
                    
                    {/* Testimonial Content - Responsive */}
                    <div className="w-full md:w-2/3 flex flex-col justify-center">
                      <FiMessageSquare className="text-blue-600 text-3xl md:text-4xl mb-3 md:mb-4 opacity-20" />
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="mb-3 md:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`text-lg md:text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm sm:text-base text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Navigation Arrows - Responsive */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md sm:shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md sm:shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Dots Indicator - Responsive */}
            <div className="flex justify-center mt-8 gap-1 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-blue-600 w-4 sm:w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud - Responsive */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h3 className="text-sm sm:text-base text-gray-500 mb-1 sm:mb-2">TRUSTED BY INDUSTRY LEADERS</h3>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">We Partner With Amazing Companies</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
            {[
              { name: "TechCorp", logo: logo },
              { name: "Global Retail", logo: logo },
              { name: "FinTech Solutions", logo: logo },
              { name: "Startup Ventures", logo: logo }
            ].map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-4 sm:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="relative w-full h-12 sm:h-16">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 640px) 160px, 200px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 sm:mb-8">
              Join the ranks of satisfied clients who've transformed their businesses with our help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-xl"
              >
                Get Started
              </motion.a>
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base md:text-lg font-semibold rounded-full bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                View Our Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}