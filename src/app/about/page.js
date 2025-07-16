"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FiAward, FiUsers, FiCheckCircle, FiArrowRight, FiSearch, FiPenTool, FiCode, FiBarChart2, FiLinkedin, FiGithub, FiTwitter, FiPlayCircle, FiStar ,FiChevronDown} from "react-icons/fi";
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
  {/* Modern Subtle Background */}
  <div className="absolute inset-0">
    {/* Very subtle grain texture */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
    
    {/* Ultra-light grid */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.05 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    
    {/* Minimal floating blobs */}
    <div className="absolute inset-0 overflow-hidden">
      {['blue', 'purple', 'cyan'].map((color, i) => (
        <motion.div
          key={i}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: 0.8
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 30 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className={`absolute rounded-full bg-gradient-to-br from-${color}-100 to-${color}-50 opacity-70`}
          style={{
            width: `${Math.random() * 300 + 200}px`,
            height: `${Math.random() * 300 + 200}px`,
            filter: 'blur(60px)'
          }}
        />
      ))}
    </div>
  </div>

  {/* Subtle floating elements */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          rotate: Math.random() * 360,
          opacity: 0
        }}
        animate={{
          y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
          x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
          rotate: [0, Math.random() * 180],
          opacity: [0, 0.2, 0]
        }}
        transition={{
          duration: 25 + Math.random() * 30,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "linear"
        }}
        className="absolute"
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          background: `hsla(${Math.random() * 60 + 200}, 80%, 70%, 0.3)`,
          borderRadius: `${Math.random() * 50}%`,
          boxShadow: `0 0 ${Math.random() * 10 + 5}px hsla(${Math.random() * 60 + 200}, 80%, 70%, 0.2)`
        }}
      />
    ))}
  </div>

  {/* Main Content */}
  <motion.div 
    className="mx-auto max-w-[1400px] w-full px-6 py-16 md:py-24 relative z-10 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="max-w-5xl mx-auto">
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: 0.3 
          } 
        }}
        whileHover={{
          y: -3,
          transition: { duration: 0.3 }
        }}
        viewport={{ once: true }}
        className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm mb-8 group cursor-default border border-blue-100"
      >
        <motion.span 
          animate={{ 
            scale: [1, 1.2, 1],
            boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 4px rgba(59, 130, 246, 0.2)", "0 0 0 0 rgba(59, 130, 246, 0)"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="w-2 h-2 rounded-full bg-blue-500 mr-2"
        />
        <span className="text-sm font-medium text-blue-600">Innovating Digital Experiences</span>
        <motion.span 
          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{
            x: [0, 4, 0],
            transition: { duration: 1.5, repeat: Infinity }
          }}
        >
          <FiArrowRight className="w-4 h-4 text-blue-500" />
        </motion.span>
      </motion.div>

      {/* Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900"
      >
        We Craft Exceptional{' '}
        <motion.span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            backgroundPosition: ['0% 50%', '100% 50%']
          }}
          transition={{ 
            duration: 1.2, 
            delay: 0.6,
            backgroundPosition: {
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }
          }}
          style={{
            backgroundSize: '200% 200%'
          }}
        >
          Digital Experiences
        </motion.span>
      </motion.h1>

      {/* Animated paragraph */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          transition: { duration: 0.8, delay: 0.8 }
        }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto relative"
      >
        <span className="relative z-10">
          We transform ideas into immersive digital solutions that captivate audiences and drive results.
        </span>
        <motion.span 
          className="absolute -bottom-2 left-1/2 w-24 h-1 bg-blue-400 rounded-full"
          initial={{ scaleX: 0, x: '-50%' }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        />
      </motion.p>

      {/* Interactive buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-6 justify-center"
      >
        <motion.button 
          whileHover={{ 
            scale: 1.05,
            y: -3,
            boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-5 text-lg font-semibold rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg flex items-center gap-3 group relative overflow-hidden"
        >
          <span className="relative z-10">Get Started</span>
          <motion.span
            animate={{ 
              x: [0, 4, 0],
              transition: { duration: 1.5, repeat: Infinity }
            }}
            className="relative z-10"
          >
            <FiArrowRight className="w-6 h-6" />
          </motion.span>
          <span className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
        </motion.button>

        <motion.button
          whileHover={{ 
            scale: 1.05,
            y: -3,
            backgroundColor: 'rgba(255, 255, 255, 0.95)'
          }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-5 text-lg font-semibold rounded-xl bg-white/95 text-gray-800 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm flex items-center gap-3 backdrop-blur-sm"
        >
          <FiPlayCircle className="w-6 h-6 text-blue-500" />
          <span>View Demo</span>
        </motion.button>
      </motion.div>

      {/* Floating testimonials */}
      <motion.div 
        className="mt-16 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        viewport={{ once: true }}
      >
        {['Trusted by innovators', 'Award-winning designs', '5-star rated service'].map((text, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 flex items-center gap-2"
          >
            <motion.div 
              animate={{ 
                rotate: [0, 10, -10, 0],
                transition: { 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.5
                }
              }}
            >
              <FiStar className="w-5 h-5 text-yellow-400" />
            </motion.div>
            <span className="text-gray-700 font-medium">{text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.div>

  {/* Scrolling indicator */}
  <motion.div 
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0, 1, 0],
      y: [20, 0, -10],
      transition: { 
        duration: 2,
        repeat: Infinity
      }
    }}
  >
    <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
    <motion.div
      animate={{ 
        y: [0, 8, 0],
        transition: { 
          duration: 1.5,
          repeat: Infinity
        }
      }}
    >
      <FiChevronDown className="w-6 h-6 text-gray-400" />
    </motion.div>
  </motion.div>
</section>

      {/* Our Story */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
  {/* Subtle animated background elements */}
  <div className="absolute inset-0">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.05, 0] }}
        transition={{
          duration: 15 + i * 3,
          repeat: Infinity,
          delay: i * 2
        }}
        className="absolute rounded-full bg-blue-100"
        style={{
          width: `${200 + i * 100}px`,
          height: `${200 + i * 100}px`,
          left: `${10 + i * 15}%`,
          top: `${20 + i * 10}%`,
          filter: 'blur(40px)'
        }}
      />
    ))}
  </div>

  <div className="mx-auto max-w-[1200px] px-6 relative z-10">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Team Image with Simple Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
          <Image
            src={teamImage}
            alt="ASCOL student team"
            fill
            className="object-cover hover:scale-102 transition-transform duration-500"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
          >
            📍 ASCOL, Tribhuvan University
          </motion.div>
        </div>
      </motion.div>
      
      {/* Content with Staggered Animations */}
      <div className="w-full lg:w-1/2">
        {/* Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Born from <span className="text-blue-600">Student Innovation</span>
        </motion.h2>

        {/* Animated paragraphs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-lg text-gray-600 mb-4 leading-relaxed"
          >
            Established in <span className="font-medium text-blue-600">April 2025</span> by ambitious students at ASCOL, Tribhuvan University, we combine academic excellence with digital creativity.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-lg text-gray-600 mb-4 leading-relaxed"
          >
            Our fresh perspective and cutting-edge approach help businesses thrive in the digital landscape.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            What makes us unique is our ability to blend theoretical knowledge with practical, results-driven solutions.
          </motion.p>
        </motion.div>

        {/* Simple animated badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="mt-8 inline-flex items-center text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-full"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mr-2"
          >
            ✨
          </motion.span>
          Student-powered digital solutions since 2025
        </motion.div>
      </div>
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