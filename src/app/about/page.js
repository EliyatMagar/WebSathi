"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FiAward, FiUsers, FiCheckCircle, FiArrowRight, FiSearch, FiPenTool, FiCode, FiBarChart2, FiLinkedin, FiGithub, FiTwitter, FiPlayCircle } from "react-icons/fi";
import teamImage from "../../assets/team.jpeg";

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yTeam = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const stats = [
    { value: "50+", label: "Projects Completed", icon: <FiCheckCircle className="w-6 h-6" /> },
    { value: "15+", label: "Satisfied Clients", icon: <FiUsers className="w-6 h-6" /> },
    { value: "5+", label: "Years Experience", icon: <FiAward className="w-6 h-6" /> }
  ];

 const teamMembers = [
    {
      name: "Saurav Aryal",
      role: "Project Lead & Digital Advocate",
      bio: "BSc CSIT student at ASCOL driving WebSathi’s vision to empower society with digital marketing knowledge. Passionate about tech for social impact.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Eliyat Thapa Magar",
      role: "Tech Architect & Systems Builder",
      bio: "ASCOL CSIT student crafting scalable solutions for WebSathi. Believes in open-source tools to democratize digital education.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Aayush Aryal",
      role: "Creative Designer & UX Strategist",
      bio: "Merges design thinking with digital marketing to make WebSathi’s content visually compelling. CSIT student at ASCOL.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Binod Syangtan",
      role: "Full-Stack Developer & Automation Specialist",
      bio: "Builds WebSathi’s platforms with a focus on accessibility. ASCOL CSIT student advocating for low-code digital tools.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "[Optional Member]",
      role: "Content Strategist & Outreach Coordinator",
      bio: "Bridges WebSathi’s message to local communities. CSIT student specializing in SEO and grassroots digital awareness.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="bg-white overflow-hidden" ref={ref}>
      {/* Modern Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
  {/* Animated Grid Background */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
  </div>

  {/* Floating Abstract Shapes */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 overflow-hidden"
  >
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          x: Math.random() * 100,
          y: Math.random() * 100,
          scale: Math.random() * 0.5 + 0.5
        }}
        animate={{
          x: [null, Math.random() * 100],
          y: [null, Math.random() * 100],
          rotate: [0, Math.random() * 360]
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className={`absolute rounded-lg ${i % 3 === 0 ? 'bg-blue-100' : i % 2 === 0 ? 'bg-indigo-100' : 'bg-cyan-100'} opacity-70`}
        style={{
          width: `${Math.random() * 200 + 50}px`,
          height: `${Math.random() * 200 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          filter: 'blur(30px)',
          borderRadius: `${Math.random() * 50}% ${Math.random() * 50}%`
        }}
      />
    ))}
  </motion.div>

  {/* Digital Particles */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: 0
        }}
        animate={{
          y: [0, Math.random() * 100 - 50],
          x: [0, Math.random() * 100 - 50],
          opacity: [0, 0.4, 0]
        }}
        transition={{
          duration: 10 + Math.random() * 20,
          repeat: Infinity,
          delay: Math.random() * 5
        }}
        className="absolute rounded-full bg-blue-400"
        style={{
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
      />
    ))}
  </div>

  {/* Content */}
  <motion.div 
    className="mx-auto max-w-[1240px] w-full px-6 py-8 md:py-12 relative z-10 text-center"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      {/* Animated Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 mb-6"
      >
        <motion.span 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-blue-500 mr-2"
        />
        <span className="text-sm font-medium text-blue-600">Innovating Digital Experiences</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
      >
        <span className="text-gray-900">We're More Than Just a </span>
        <motion.span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Digital Agency
        </motion.span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
      >
        We're strategic partners in your digital transformation journey, combining creativity with technology to deliver exceptional results.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.button 
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-md flex items-center gap-2 group"
        >
          <span className="relative z-10">Get in Touch</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block"
          >
            <FiArrowRight className="w-5 h-5 relative z-10" />
          </motion.span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 text-lg font-semibold rounded-full bg-white text-gray-800 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm flex items-center gap-2"
        >
          <FiPlayCircle className="w-5 h-5 text-blue-600" />
          <span>View Showcase</span>
        </motion.button>
      </motion.div>
    </motion.div>
  </motion.div>

  {/* Animated Scrolling Line */}
  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
      className="h-full bg-gradient-to-r from-transparent via-blue-500/80 to-transparent w-1/2"
    />
  </div>
</section>

      {/* Our Story */}
      <section className="relative py-16 md:py-24 bg-white z-10">
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

      {/* Stats with Floating Animation */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white z-10">
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
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

      {/* Our Team with Parallax */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <motion.div 
          style={{ y: yTeam }}
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-20 z-0"
        />
        
        <div className="relative mx-auto max-w-[1240px] w-full px-6 z-10">
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
                initial={{ opacity: 0, y: 40, rotateY: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                whileHover={{ 
                  y: -15,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.1)"
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 h-48 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-100 to-cyan-200 flex items-center justify-center text-4xl font-bold text-blue-600"
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-5">{member.bio}</p>
                  <div className="flex gap-4 justify-center">
                    <motion.a 
                      whileHover={{ y: -3 }}
                      href={member.social.linkedin} 
                      className="text-gray-500 hover:text-blue-700 transition-colors"
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ y: -3 }}
                      href={member.social.github} 
                      className="text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ y: -3 }}
                      href={member.social.twitter} 
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                    >
                      <FiTwitter className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-16 md:py-24 bg-white z-10">
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
                icon: <FiSearch className="w-6 h-6" />,
                color: "from-blue-500 to-blue-600"
              },
              { 
                title: "Strategize", 
                desc: "Create a customized digital roadmap",
                icon: <FiPenTool className="w-6 h-6" />,
                color: "from-cyan-500 to-blue-500"
              },
              { 
                title: "Execute", 
                desc: "Implement with precision and creativity",
                icon: <FiCode className="w-6 h-6" />,
                color: "from-purple-500 to-indigo-500"
              },
              { 
                title: "Optimize", 
                desc: "Continuously improve performance",
                icon: <FiBarChart2 className="w-6 h-6" />,
                color: "from-green-500 to-teal-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 bg-gradient-to-b ${item.color} relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-blue-500 to-cyan-500"></div>
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${item.color} text-white flex items-center justify-center relative z-10`}>
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</div>
                <p className="text-gray-600 relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
        
        <div className="relative mx-auto max-w-[1240px] w-full px-6 text-center">
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