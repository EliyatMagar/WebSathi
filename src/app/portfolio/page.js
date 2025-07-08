"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink, FiGithub, FiFilter, FiX } from "react-icons/fi";
import Image from "next/image";

// Portfolio data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    description: "A full-featured online store with custom checkout and inventory management.",
    image: "/images/ecommerce-project.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 2,
    title: "Corporate Website",
    category: "web",
    description: "Modern responsive website for a financial services company.",
    image: "/images/corporate-project.jpg",
    tags: ["Next.js", "Tailwind CSS", "Contentful"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "mobile",
    description: "Secure banking application with biometric authentication.",
    image: "/images/banking-app.jpg",
    tags: ["React Native", "Firebase", "AWS"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "design",
    description: "Complete visual identity for a health tech startup.",
    image: "/images/branding-project.jpg",
    tags: ["Logo Design", "Brand Guidelines", "Packaging"],
    links: {
      live: "https://example.com",
      github: ""
    }
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "web",
    description: "Analytics dashboard with real-time data visualization.",
    image: "/images/saas-project.jpg",
    tags: ["TypeScript", "D3.js", "GraphQL"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 6,
    title: "Fitness App",
    category: "mobile",
    description: "Workout tracking application with AI recommendations.",
    image: "/images/fitness-app.jpg",
    tags: ["Flutter", "Firebase", "TensorFlow"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  }
];

const categories = ["all", "web", "mobile", "design"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden min-h-[50vh] flex items-center">
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
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Portfolio</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore our collection of successful projects and see how we've helped businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Filter Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full capitalize flex items-center gap-2 transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {activeCategory === category ? <FiFilter className="w-4 h-4" /> : null}
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-80 md:h-96">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm capitalize">
                    {selectedProject.category}
                  </span>
                </div>
                <div className="flex gap-3">
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">{selectedProject.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Category</h4>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm capitalize">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Testimonial</h3>
                <blockquote className="text-gray-600 italic mb-4">
                  "Working with this team was an incredible experience. They delivered beyond our expectations and helped us achieve a 300% increase in user engagement."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">John Smith</p>
                    <p className="text-sm text-gray-500">CEO, Example Company</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3.5 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}