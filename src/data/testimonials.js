"use client";
import {useRef} from 'react'
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Testimonials() {
  // Parallax effect setup
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechSolutions Inc.",
      content: "Working with this team transformed our digital presence. Their innovative approach delivered results beyond our expectations.",
      rating: 5,
      avatar: "/avatars/sarah.jpg" // Replace with your image path
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "StartUp Ventures",
      content: "The level of professionalism and attention to detail is unmatched. They understood our vision perfectly and executed flawlessly.",
      rating: 5,
      avatar: "/avatars/michael.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Product Manager",
      company: "DesignHub",
      content: "Incredible work ethic and creative solutions. They delivered our project ahead of schedule with outstanding quality.",
      rating: 4,
      avatar: "/avatars/emma.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "CTO",
      company: "InnovateTech",
      content: "The team's technical expertise saved us months of development time. Their solutions were both elegant and efficient.",
      rating: 5,
      avatar: "/avatars/david.jpg"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <>
      <Head>
        <title>Client Testimonials | Our Success Stories</title>
        <meta name="description" content="Hear what our clients say about working with us" />
      </Head>

      {/* Parallax Hero Section */}
      <div className="relative h-[40vh] min-h-[200px] overflow-hidden" ref={ref}>
  <motion.div 
    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-cover bg-center"
    style={{
      y: yBg,
      opacity: opacityBg,
      backgroundImage: "url('/images/testimonials1-bg.png')" 
    }}
  />
  
  {/* Gradient overlay instead of black */}
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent flex items-center justify-center">
    <motion.div 
      className="text-center px-4 sm:px-6 lg:px-8 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 px-4">
        Client Success Stories
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4">
        Don't just take our word for it. Hear what our clients have to say about working with us.
      </p>
    </motion.div>
  </div>
</div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="text-center mb-16"
          >
            <motion.h2 variants={item} className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </motion.h2>
            <motion.p variants={item} className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped companies of all sizes achieve their goals. Here's what they have to say.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    {/* Replace with actual image if available */}
                    {/* <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" /> */}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Ready to join our satisfied clients?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create something amazing together. Get in touch today to discuss your project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
}