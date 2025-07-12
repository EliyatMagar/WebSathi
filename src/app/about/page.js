"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiUsers, FiCheckCircle, FiArrowRight, FiSearch, FiPenTool, FiCode, FiBarChart2, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import teamImage from "../../assets/team.jpeg";

export default function AboutPage() {
  const stats = [
    { value: "50+", label: "Projects Completed", icon: <FiCheckCircle className="w-6 h-6" /> },
    { value: "15+", label: "Satisfied Clients", icon: <FiUsers className="w-6 h-6" /> },
    { value: "5+", label: "Years Experience", icon: <FiAward className="w-6 h-6" /> }
  ];

  const teamMembers = [
    {
      name: "Saurav Aryal",
      role: "CEO & Founder",
      bio: "Visionary leader with expertise in digital strategy and business growth.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Eliyat Thapa Magar",
      role: "CTO & Co-Founder",
      bio: "Technology expert specializing in scalable architectures and innovative solutions.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Aayush Aryal",
      role: "Lead Designer",
      bio: "Creative director with an eye for stunning UI/UX and brand identity.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Binod Syangtan",
      role: "Senior Developer & Co-Founder",
      bio: "Full-stack developer focused on building robust, high-performance applications.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
     {
      name: "Shreesha Thapa",
      role: "Member",
      bio: "Full-stack developer focused on building robust, high-performance applications.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden min-h-[65vh] flex items-center">
        {/* Animated background elements */}
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
            className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-500 blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-indigo-500 blur-3xl"
          ></motion.div>
        </div>
        
        <div className="mx-auto max-w-[1240px] w-full px-6 py-8 md:py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              We're More Than Just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Digital Agency</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl"
            >
              We're strategic partners in your digital transformation journey, combining creativity with technology to deliver exceptional results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="px-6 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                Get in Touch
                <FiArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] w-full px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video hover:shadow-3xl transition-shadow duration-500">
                <Image
                  src={teamImage}
                  alt="Our team working together"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="w-full lg:w-1/2"
            >
              <motion.h2 
                whileHover={{ x: 5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Story</span>
              </motion.h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, we started as a small team of passionate digital experts with a vision to help businesses thrive in the digital landscape.
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Today, we've grown into a full-service digital agency, but we've kept our startup mentality - agile, innovative, and client-focused.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                What sets us apart is our commitment to understanding your unique challenges and crafting solutions that drive real business impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-[1240px] w-full px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600">
                  {stat.icon}
                </div>
                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl font-bold text-gray-900 mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
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
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The talented individuals who make our success possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 h-48 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-100 to-cyan-200 flex items-center justify-center text-4xl font-bold text-blue-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-5">{member.bio}</p>
                  <div className="flex gap-4">
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-700 transition-colors">
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-gray-500 hover:text-gray-900 transition-colors">
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-500 hover:text-blue-400 transition-colors">
                      <FiTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Approach</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Discover", 
                desc: "Deep dive into your business objectives",
                icon: <FiSearch className="w-6 h-6" />
              },
              { 
                title: "Strategize", 
                desc: "Create a customized digital roadmap",
                icon: <FiPenTool className="w-6 h-6" />
              },
              { 
                title: "Execute", 
                desc: "Implement with precision and creativity",
                icon: <FiCode className="w-6 h-6" />
              },
              { 
                title: "Optimize", 
                desc: "Continuously improve performance",
                icon: <FiBarChart2 className="w-6 h-6" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-3">{item.title}</div>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="px-8 py-3.5 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Project Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}