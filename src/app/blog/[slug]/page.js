'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';   
import { usePathname } from 'next/navigation';

export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const pathname = usePathname();
  const slug = pathname.split('/').pop();

  // Complete mock data for all blog posts
  const allPosts = [
    {
      id: 1,
      title: "10 Digital Marketing Trends to Watch in 2023",
      excerpt: "Discover the top digital marketing trends that will dominate 2023 and how your business can leverage them.",
      slug: "digital-marketing-trends-2023",
      date: "2023-05-15",
      category: "Trends",
      readTime: "5 min read",
      image: "/images/digital-marketing-trends.jpg",
      content: `<h2 class="text-2xl font-bold mt-6 mb-4">Introduction</h2>
        <p class="mb-4">The digital marketing landscape is constantly evolving. In 2023, we're seeing several key trends emerge that businesses should pay attention to.</p>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">1. AI-Powered Marketing</h2>
        <p class="mb-4">Artificial intelligence is transforming how we approach marketing, from chatbots to predictive analytics.</p>
        <p class="mb-4">Key applications include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Personalized content recommendations</li>
          <li>Predictive customer behavior modeling</li>
          <li>Automated ad optimization</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">2. Voice Search Optimization</h2>
        <p class="mb-4">With the rise of smart speakers, optimizing for voice search has become crucial.</p>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">3. Video Content Dominance</h2>
        <p class="mb-4">Video continues to dominate content marketing strategies across all platforms.</p>`
    },
    {
      id: 4,
      title: "PPC Advertising: Maximizing Your ROI",
      excerpt: "Strategies to get the most out of your pay-per-click advertising campaigns.",
      slug: "ppc-advertising-maximizing-roi",
      date: "2023-02-18",
      category: "PPC",
      readTime: "6 min read",
      image: "/images/ppc-advertising.jpg",
      content: `<h2 class="text-2xl font-bold mt-6 mb-4">Introduction to PPC ROI</h2>
        <p class="mb-4">Pay-per-click advertising remains one of the most effective ways to drive targeted traffic to your website. However, maximizing your return on investment requires careful strategy and optimization.</p>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">1. Keyword Research and Selection</h2>
        <p class="mb-4">Effective PPC campaigns begin with thorough keyword research. Focus on:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>High-intent keywords that indicate purchase readiness</li>
          <li>Long-tail phrases with less competition</li>
          <li>Negative keywords to filter irrelevant traffic</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">2. Ad Copy Optimization</h2>
        <p class="mb-4">Your ad copy should:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Include your primary keyword naturally</li>
          <li>Highlight unique value propositions</li>
          <li>Contain a clear, compelling call-to-action</li>
          <li>Use emotional triggers when appropriate</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">3. Landing Page Alignment</h2>
        <p class="mb-4">Ensure your landing pages:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Match the ad's promise exactly</li>
          <li>Have clear conversion paths with minimal distractions</li>
          <li>Load quickly on all devices (under 3 seconds)</li>
          <li>Include trust signals like testimonials and security badges</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">4. Bid Strategy and Budget Allocation</h2>
        <p class="mb-4">Implement smart bidding strategies based on your campaign goals:</p>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>Target ROAS</strong> for e-commerce (aim for at least 300%)</li>
          <li><strong>Maximize conversions</strong> for lead generation</li>
          <li><strong>Portfolio bids</strong> for managing multiple campaigns</li>
          <li><strong>Dayparting</strong> to focus on high-converting times</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">5. Continuous Testing and Optimization</h2>
        <p class="mb-4">Regularly test:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Ad variations (try at least 3 per ad group)</li>
          <li>Landing page elements (headlines, CTAs, forms)</li>
          <li>Bid adjustments by device, location, and time</li>
          <li>New audience segments and targeting options</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
        <p class="mb-4">By implementing these strategies, you can significantly improve your PPC campaign performance. Remember that PPC optimization is an ongoing process - what works today may need adjustment tomorrow. Regular monitoring and willingness to test new approaches will help you maintain and improve your ROI over time.</p>
        <p class="mb-4">At WebSathi, we've helped clients achieve an average 220% improvement in PPC ROI within 90 days using these methods. Ready to maximize your PPC returns? <a href="/contact" class="text-blue-600 hover:underline">Contact our team</a> for a free audit.</p>`
    },
    // ... other posts (same structure as above)
  ];

  useEffect(() => {
    const fetchPostData = () => {
      try {
        const foundPost = allPosts.find(post => post.slug === slug);
        setPost(foundPost);

        // Get related posts (same category, excluding current post)
        const related = allPosts.filter(p => 
          p.category === foundPost?.category && p.id !== foundPost?.id
        ).slice(0, 3);
        setRelatedPosts(related);

        setLoading(false);
      } catch (error) {
        console.error("Error loading post:", error);
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-700 mt-4">Post Not Found</h2>
          <p className="text-gray-500 mt-2">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{`${post.title} | WebSathi Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, digital marketing, PPC, advertising, ${post.title}`} />
        <meta property="og:title" content={`${post.title} | WebSathi Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="article:author" content="WebSathi Team" />
        <meta property="article:section" content={post.category} />
        <link rel="canonical" href={`https://www.websathi.com/blog/${post.slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": new Date(post.date).toISOString(),
            "dateModified": new Date(post.date).toISOString(),
            "author": {
              "@type": "Organization",
              "name": "WebSathi"
            },
            "publisher": {
              "@type": "Organization",
              "name": "WebSathi",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.websathi.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.websathi.com/blog/${post.slug}`
            },
            "image": {
              "@type": "ImageObject",
              "url": post.image,
              "width": "1200",
              "height": "630"
            }
          })}
        </script>
      </Head>

      {/* Blog Post Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-4 bg-white text-blue-800 rounded-full text-sm font-medium">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <time dateTime={post.date} className="opacity-90">
              {formatDate(post.date)}
            </time>
            <span className="opacity-70">•</span>
            <span className="opacity-90">{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Featured Image */}
          <div className="w-full h-64 md:h-80 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Blog Content */}
          <div className="p-6 md:p-8">
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>

            {/* Author Bio */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <img 
                  src="/images/author.jpg" 
                  alt="Rahul Sharma" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Rahul Sharma</h4>
                  <p className="text-sm text-gray-600">PPC Specialist at WebSathi with 8+ years of experience managing over $2M in ad spend across industries.</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.category && (
                <Link href={`/blog/category/${post.category.toLowerCase()}`} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  #{post.category}
                </Link>
              )}
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">#DigitalMarketing</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">#PPC</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">#Advertising</span>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{relatedPost.title}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{formatDate(relatedPost.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </main>

      {/* Newsletter CTA */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Want More Marketing Insights?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and get the latest digital marketing tips delivered straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              aria-label="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
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