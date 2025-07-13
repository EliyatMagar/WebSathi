'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogSection() {
  const featuredBlogs = [
    {
      id: 1,
      title: "10 Digital Marketing Trends to Watch in 2023",
      excerpt: "Discover the top digital marketing trends that will dominate 2023 and how your business can leverage them.",
      slug: "digital-marketing-trends-2023",
      date: "2023-05-15",
      category: "Trends",
      readTime: "5 min read",
      image: "/images/digital-marketing-trends.jpg"
    },
    {
      id: 2,
      title: "How to Improve Your SEO Ranking in 30 Days",
      excerpt: "Practical steps you can take to boost your website's SEO ranking within just one month.",
      slug: "improve-seo-ranking-30-days",
      date: "2023-04-22",
      category: "SEO",
      readTime: "7 min read",
      image: "/images/seo-ranking.jpg"
    },
    {
      id: 3,
      title: "The Complete Guide to Social Media Marketing",
      excerpt: "Learn how to create an effective social media marketing strategy for your business.",
      slug: "complete-guide-social-media-marketing",
      date: "2023-03-10",
      category: "Social Media",
      readTime: "10 min read",
      image: "/images/social-media-marketing.jpg"
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-blue-600">Marketing Insights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover expert tips and strategies to grow your business online
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  <Link href={`/blog/${blog.slug}`} className="hover:text-blue-600 transition-colors">
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                
                <Link 
                  href={`/blog/${blog.slug}`} 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link 
            href="/blog"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Blog Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
}