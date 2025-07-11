"use client";
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowRight, FiClock, FiTag, FiShare2 } from 'react-icons/fi';
import Image from 'next/image';

export default function BlogUI() {
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Social Media Algorithms in 2024",
      excerpt: "Learn how to optimize your content for each platform's algorithm to maximize reach.",
      category: "Social Media",
      date: "June 15, 2024",
      readTime: "8 min read",
      author: "Aayush Aryal",
      image: "/social-media-algorithms.jpg"
    },
    {
      id: 2,
      title: "The Psychology of Brand Colors",
      excerpt: "How color choices impact consumer perception and brand recognition.",
      category: "Brand Strategy",
      date: "June 8, 2024",
      readTime: "6 min read",
      author: "Eliyat Thapa Magar",
      image: "/brand-colors.jpg"
    },
    {
      id: 3,
      title: "SEO vs. PPC: When to Use Each Strategy",
      excerpt: "A comprehensive comparison of organic and paid traffic approaches.",
      category: "Digital Marketing",
      date: "June 1, 2024",
      readTime: "10 min read",
      author: "Saurav Aryal",
      image: "/seo-vs-ppc.jpg"
    },
    {
      id: 4,
      title: "Creating Viral Content: What Actually Works",
      excerpt: "Data-backed strategies for creating shareable content across platforms.",
      category: "Content Marketing",
      date: "May 25, 2024",
      readTime: "7 min read",
      author: "Binod Syangtan",
      image: "/viral-content.jpg"
    },
    {
      id: 5,
      title: "Email Marketing Campaigns That Convert",
      excerpt: "Proven techniques to improve open rates and click-through rates.",
      category: "Email Marketing",
      date: "May 18, 2024",
      readTime: "9 min read",
      author: "Saurav Aryal",
      image: "/email-marketing.jpg"
    },
    {
      id: 6,
      title: "UX Design Principles for Higher Conversions",
      excerpt: "How thoughtful design can significantly improve your conversion rates.",
      category: "Web Design",
      date: "May 10, 2024",
      readTime: "5 min read",
      author: "Aayush Aryal",
      image: "/ux-design.jpg"
    }
  ];

  const categories = [
    "All Topics",
    "SEO",
    "Social Media",
    "Content Marketing",
    "PPC Advertising",
    "Email Marketing",
    "Brand Strategy",
    "Web Design",
    "Analytics"
  ];

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
        
        <div className="mx-auto max-w-[1240px] w-full px-6 py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Websathi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Insights</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Expert articles covering all aspects of digital marketing, from SEO to social media and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-[1240px] w-full px-6">
          {/* Categories Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300"
              >
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <time className="flex items-center text-gray-500 text-xs">
                      <FiCalendar className="mr-1" /> {post.date}
                    </time>
                    <span className="flex items-center text-gray-500 text-xs">
                      <FiClock className="mr-1" /> {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <FiTag className="text-gray-400 mr-2" />
                    <span className="text-xs font-medium text-blue-600">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    <a href={`/blog/${post.id}`} className="hover:text-blue-600">{post.title}</a>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <FiUser className="mr-1.5" /> {post.author}
                    </span>
                    <div className="flex gap-3">
                      <a href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300 flex items-center">
                        Read More
                        <FiArrowRight className="w-3 h-3 ml-1" />
                      </a>
                      <button className="text-gray-500 hover:text-blue-600">
                        <FiShare2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-24 bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Stay Updated on Digital Marketing Trends
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2">
                <p className="text-gray-600">
                  Get the latest articles, case studies, and resources delivered straight to your inbox.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <button 
                    type="submit"
                    className="px-6 py-3 font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}