'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Mock data - replace with actual API call in production
        const mockBlogs = [
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
          },
          {
            id: 4,
            title: "PPC Advertising: Maximizing Your ROI",
            excerpt: "Strategies to get the most out of your pay-per-click advertising campaigns.",
            slug: "ppc-advertising-maximizing-roi",
            date: "2023-02-18",
            category: "PPC",
            readTime: "6 min read",
            image: "/images/ppc-advertising.jpg"
          },
          {
            id: 5,
            title: "Content Marketing Strategies That Convert",
            excerpt: "How to create content that not only attracts but also converts your audience.",
            slug: "content-marketing-strategies",
            date: "2023-01-05",
            category: "Content",
            readTime: "8 min read",
            image: "/images/content-marketing.jpg"
          },
          {
            id: 6,
            title: "Email Marketing in the Age of Privacy Changes",
            excerpt: "Adapting your email marketing strategy to new privacy regulations and user expectations.",
            slug: "email-marketing-privacy-changes",
            date: "2022-12-12",
            category: "Email",
            readTime: "5 min read",
            image: "/images/email-marketing.jpg"
          }
        ];
        setBlogs(mockBlogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  const filteredBlogs = blogs.filter(blog =>
    (activeCategory === 'All' || blog.category === activeCategory) &&
    (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Digital Marketing Insights & Tips | WebSathi Blog</title>
        <meta name="description" content="Stay updated with the latest digital marketing trends, SEO strategies, and social media tips from WebSathi experts." />
        <meta name="keywords" content="digital marketing, SEO, social media marketing, content marketing, PPC, WebSathi" />
        <meta property="og:title" content="Digital Marketing Insights & Tips | WebSathi Blog" />
        <meta property="og:description" content="Stay updated with the latest digital marketing trends from WebSathi experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.websathi.com/blog" />
        <link rel="canonical" href="https://www.websathi.com/blog" />
      </Head>

      {/* Blog Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WebSathi Digital Marketing Blog</h1>
          <p className="text-xl opacity-90 mb-8">Expert insights, trends, and strategies to grow your business online</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search blog posts"
              className="w-full py-4 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            {searchTerm && (
              <button 
                type="button" 
                onClick={() => setSearchTerm('')} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Category Filters */}
      <div className="max-w-6xl mx-auto px-4 py-6 overflow-x-auto">
        <div className="flex space-x-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors duration-200 shadow-sm`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                itemScope 
                itemType="https://schema.org/BlogPosting"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    itemProp="image"
                  />
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <time dateTime={blog.date} itemProp="datePublished">
                      {formatDate(blog.date)}
                    </time>
                    <span className="mx-2">•</span>
                    <span itemProp="timeRequired">{blog.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3" itemProp="headline">
                    <a href={`/blog/${blog.slug}`} className="hover:text-blue-600 transition-colors" itemProp="url">
                      {blog.title}
                    </a>
                  </h2>
                  
                  <p className="text-gray-600 mb-4" itemProp="description">{blog.excerpt}</p>
                  
                  <a 
                    href={`/blog/${blog.slug}`} 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-700 mt-4">No blog posts found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your search or select a different category.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Newsletter CTA */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated with Digital Marketing Insights</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and get the latest tips straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              aria-label="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}