'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';   
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

import {FiCalendar, FiClock} from 'react-icons/fi';

export default function BlogPostPage() {
  // State hooks (must be first and in consistent order)
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Next.js hooks
  const pathname = usePathname();
  const slug = pathname.split('/').pop();

  // Animation refs
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // Scroll animations (must be called unconditionally)
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const contentScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);
  const newsletterY = useTransform(scrollYProgress, [0, 1], [0, 50]);

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
      <p class="mb-4">2023 brings transformative shifts in digital marketing. Brands that adapt to these 10 key trends will gain competitive advantage in today's fast-paced digital ecosystem.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">1. AI-Powered Personalization</h2>
      <p class="mb-4">Generative AI tools like ChatGPT are enabling hyper-personalized content at scale:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Dynamic email content that adapts to user behavior</li>
        <li>AI-generated product recommendations with 90%+ accuracy</li>
        <li>Chatbots handling 80% of routine customer queries</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">2. Voice Search Optimization</h2>
      <p class="mb-4">With 50% of US households owning smart speakers:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Optimize for natural language queries ("best Italian restaurant near me")</li>
        <li>Create FAQ pages targeting question-based searches</li>
        <li>Focus on local SEO for "near me" voice searches</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">3. Short-Form Video Dominance</h2>
      <p class="mb-4">TikTok's algorithm favors:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Authentic behind-the-scenes content (no polished productions)</li>
        <li>Trend-jacking with relevant sounds/challenges</li>
        <li>Educational content in <60 second bursts</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">4. Web3 & Metaverse Marketing</h2>
      <p class="mb-4">Early adopters are experimenting with:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Virtual product launches in Decentraland</li>
        <li>NFT-based loyalty programs</li>
        <li>AR try-on experiences for e-commerce</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">5. Zero-Click Content</h2>
      <p class="mb-4">Optimize for featured snippets by:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Answering questions concisely in 40-60 words</li>
        <li>Structuring content with clear H2/H3 headers</li>
        <li>Using bullet points for list-based queries</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
      <p class="mb-4">Staying ahead requires testing these trends with 20% of your marketing budget. Focus on 2-3 that align with your audience - we've seen brands increase engagement by 3x using this approach.</p>`
  },
  {
    id: 2,
    title: "How to Improve Your SEO Ranking in 30 Days",
    excerpt: "Practical steps you can take to boost your website's SEO ranking within just one month.",
    slug: "improve-seo-ranking-30-days",
    date: "2023-04-22",
    category: "SEO",
    readTime: "7 min read",
    image: "/images/seo-ranking.jpg",
    content: `<h2 class="text-2xl font-bold mt-6 mb-4">The 30-Day SEO Sprint</h2>
      <p class="mb-4">Our agency's proven framework for rapid rankings improvement:</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Week 1: Technical Foundation</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Fix crawl errors:</strong> Resolve 4xx/5xx errors in Google Search Console</li>
        <li><strong>Core Web Vitals:</strong> Achieve "Good" scores for LCP, FID, CLS</li>
        <li><strong>Mobile optimization:</strong> Test on real devices, not just emulators</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Week 2: Content Optimization</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Keyword clustering:</strong> Group 3-5 semantically related terms per page</li>
        <li><strong>Content upgrades:</strong> Add statistics, case studies, and expert quotes</li>
        <li><strong>Internal linking:</strong> Build 2-3 contextual links between related pages</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Week 3: Authority Building</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Skyscraper technique:</strong> Identify 3 underperforming competitor pages to outperform</li>
        <li><strong>Broken link building:</strong> Find and replace 10+ broken links in your niche</li>
        <li><strong>Local citations:</strong> Claim/optimize listings on 5 industry directories</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Week 4: Performance Tracking</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Rank tracking:</strong> Monitor 10 priority keywords daily</li>
        <li><strong>CTR optimization:</strong> Test 3 meta description variations</li>
        <li><strong>Conversion paths:</strong> Analyze drop-off points in top entry pages</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">Pro Tip: The 5% Rule</h2>
      <p class="mb-4">Improving each SEO factor by just 5% compounds dramatically. Our clients average 37% more organic traffic after 30 days using this method.</p>`
  },
  {
    id: 3,
    title: "The Complete Guide to Social Media Marketing",
    excerpt: "Learn how to create an effective social media marketing strategy for your business.",
    slug: "complete-guide-social-media-marketing",
    date: "2023-03-10",
    category: "Social Media",
    readTime: "10 min read",
    image: "/images/social-media-marketing.jpg",
    content: `<h2 class="text-2xl font-bold mt-6 mb-4">The 2023 Social Media Playbook</h2>
      <p class="mb-4">Platform-specific strategies for maximum engagement:</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Content Strategy Framework</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>4-1-1 Rule:</strong> 4 educational, 1 entertaining, 1 promotional post</li>
        <li><strong>Micro-content:</strong> Repurpose long-form into 15+ cross-platform assets</li>
        <li><strong>Trend Radar:</strong> Use Google Trends + SparkToro for viral opportunities</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">2. Platform-Specific Tactics</h2>
      <p class="mb-4 font-semibold">Instagram:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Post Reels at 9 AM & 7 PM (highest engagement)</li>
        <li>Use 3-5 hashtags (mix of niche and broad)</li>
        <li>Leverage "Add Yours" sticker challenges</li>
      </ul>
      
      <p class="mb-4 font-semibold">LinkedIn:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Publish long-form posts on Tuesdays 10-11 AM</li>
        <li>Use LinkedIn Live for Q&A sessions</li>
        <li>Join 5 relevant groups and provide value</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">3. Paid Social Advertising</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Lookalike audiences:</strong> Start with 1% similarity to warm leads</li>
        <li><strong>Story ads:</strong> 9:16 vertical videos with text overlays</li>
        <li><strong>Retargeting:</strong> Show different creative based on user actions</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">4. Analytics & Optimization</h2>
      <p class="mb-4">Track these key metrics weekly:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Engagement rate (aim for 3-6% on Instagram)</li>
        <li>Click-through rate (benchmark: 1.5% for LinkedIn)</li>
        <li>Amplification rate (shares/comments ratio)</li>
      </ul>`
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
    content: `<h2 class="text-2xl font-bold mt-6 mb-4">The PPC Profit Blueprint</h2>
      <p class="mb-4">Advanced techniques we use to achieve 5:1 ROAS for clients:</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Smart Bidding Strategies</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Target CPA:</strong> Set 20% below your historical average</li>
        <li><strong>Seasonal adjustments:</strong> +50% bids during peak periods</li>
        <li><strong>Device bid modifiers:</strong> Mobile often converts 30% better</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">2. Ad Creative That Converts</h2>
      <p class="mb-4">Test these variations:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Benefit-driven vs. feature-focused headlines</li>
        <li>Static images vs. cinemagraphs</li>
        <li>Single CTA vs. dual CTA buttons</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">3. Landing Page Secrets</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Above-the-fold:</strong> Place lead form in viewport without scrolling</li>
        <li><strong>Trust indicators:</strong> Display live visitor counters</li>
        <li><strong>Urgency elements:</strong> "3 spots left" counters increase conversions 27%</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">4. Remarketing Funnels</h2>
      <p class="mb-4">Segment audiences by:</p>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Cart abandoners:</strong> Show exact abandoned items + 10% discount</li>
        <li><strong>Blog readers:</strong> Retarget with related product ads</li>
        <li><strong>Video viewers:</strong> Target users who watched 75%+ of your video</li>
      </ul>`
  },
  {
    id: 5,
    title: "Content Marketing Strategies That Convert",
    excerpt: "How to create content that not only attracts but also converts your audience.",
    slug: "content-marketing-strategies",
    date: "2023-01-05",
    category: "Content",
    readTime: "8 min read",
    image: "/images/content-marketing.jpg",
    content: `<h2 class="text-2xl font-bold mt-6 mb-4">Conversion-Focused Content Framework</h2>
      <p class="mb-4">Move beyond vanity metrics with these proven tactics:</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">1. The 4-Stage Content Funnel</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Awareness:</strong> "What is..." guides (top of funnel)</li>
        <li><strong>Consideration:</strong> "X vs Y" comparison posts</li>
        <li><strong>Decision:</strong> Case studies with specific results</li>
        <li><strong>Retention:</strong> "How to get most from..." tutorials</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">2. High-Converting Formats</h2>
      <p class="mb-4">These formats deliver 3-5x more leads:</p>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Interactive content:</strong> Quizzes with personalized results</li>
        <li><strong>Lead magnets:</strong> "Done-for-you" templates (e.g., social media calendar)</li>
        <li><strong>Webinars:</strong> 45-minute deep dives with Q&A</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">3. The Skyscraper 2.0 Technique</h2>
      <ol class="list-decimal pl-6 mb-4">
        <li>Identify 3 top-performing competitor articles</li>
        <li>Analyze their content gaps using Ahrefs</li>
        <li>Create content that's 3x more comprehensive</li>
        <li>Add interactive elements (calculators, assessments)</li>
        <li>Outreach to their backlink sources</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">4. Conversion Optimization</h2>
      <p class="mb-4">Place CTAs strategically:</p>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Inline CTA:</strong> After key insights (25% scroll depth)</li>
        <li><strong>Slide-in CTA:</strong> Appears at 60% scroll</li>
        <li><strong>Exit-intent popup:</strong> Offer content upgrade</li>
      </ul>`
  },
  {
    id: 6,
    title: "Email Marketing in the Age of Privacy Changes",
    excerpt: "Adapting your email marketing strategy to new privacy regulations and user expectations.",
    slug: "email-marketing-privacy-changes",
    date: "2022-12-12",
    category: "Email",
    readTime: "5 min read",
    image: "/images/email-marketing.jpg",
    content: `<h2 class="text-2xl font-bold mt-6 mb-4">Privacy-First Email Strategies</h2>
      <p class="mb-4">How to thrive after iOS 15+ changes:</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">1. New Metrics That Matter</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Click-to-open rate (CTOR):</strong> More reliable than open rate</li>
        <li><strong>Conversion rate:</strong> Track from email click to goal completion</li>
        <li><strong>List growth rate:</strong> Aim for 2.5% monthly growth</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">2. List Building in 2023</h2>
      <p class="mb-4">High-converting lead magnets:</p>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Mini-courses:</strong> 3-day email courses (65% opt-in rate)</li>
        <li><strong>Toolkits:</strong> Curated resource collections</li>
        <li><strong>Community access:</strong> "Join our private Slack group"</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">3. Email Content That Converts</h2>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Subject lines:</strong> Use emojis 🚀 (+27% opens)</li>
        <li><strong>Preview text:</strong> Continue the subject line story</li>
        <li><strong>Mobile-first design:</strong> Single column, large CTA buttons</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">4. Automation Workflows</h2>
      <p class="mb-4">Essential sequences:</p>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Welcome series:</strong> 3 emails over 5 days</li>
        <li><strong>Re-engagement:</strong> "We miss you" with exclusive offer</li>
        <li><strong>Post-purchase:</strong> Cross-sell based on purchase history</li>
      </ul>`
  }
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-gray-600"
          >
            Loading blog post...
          </motion.p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-700 mt-4">Post Not Found</h2>
            <p className="text-gray-500 mt-2">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Back to Blog
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
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
        <link rel="canonical" href={`https://www.websathi.net/blog/${post.slug}`} />
        
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

     {/* Modern Parallax Blog Post Header */}
<motion.header 
  ref={headerRef}
  style={{ y: headerY }}
  className="relative bg-white text-gray-900 py-32 px-4 overflow-hidden"
>
  {/* Modern floating background elements */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-2000" />
    <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply opacity-40 animate-blob" />
    <div className="absolute right-0 bottom-0 w-60 h-60 bg-cyan-50 rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-4000" />
  </div>

  <div className="max-w-4xl mx-auto text-center relative z-10">
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 10 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="inline-block px-4 py-2 mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium shadow-lg"
    >
      {post.category}
    </motion.div>
    
    <motion.h1 
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
    >
      {post.title}
    </motion.h1>
    
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 0.3, 
        duration: 0.6,
        ease: "easeOut"
      }}
      className="flex items-center justify-center space-x-4 text-sm text-gray-600"
    >
      <time dateTime={post.date} className="flex items-center">
        <FiCalendar className="w-4 h-4 mr-1" />
        {formatDate(post.date)}
      </time>
      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
      <span className="flex items-center">
        <FiClock className="w-4 h-4 mr-1" />
        {post.readTime}
      </span>
    </motion.div>

    {/* Animated scroll indicator */}
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-16"
    >
      <div className="animate-bounce w-8 h-14 rounded-full border-2 border-gray-300 flex justify-center mx-auto">
        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
      </div>
    </motion.div>
  </div>
</motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 relative z-20">
        <motion.article 
          ref={contentRef}
          style={{ scale: contentScale }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Parallax Featured Image */}
          <motion.div 
            ref={imageRef}
            style={{ y: imageY }}
            className="w-full h-64 md:h-96 overflow-hidden"
          >
            <motion.img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              loading="eager"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Blog Content */}
          <div className="p-6 md:p-10">
            <motion.div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            ></motion.div>

            {/* Author Bio */}
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center">
                <motion.img 
                  src="/images/author.jpg" 
                  alt="Rahul Sharma" 
                  className="w-12 h-12 rounded-full mr-4"
                  whileHover={{ scale: 1.05 }}
                />
                <div>
                  <h4 className="font-bold text-gray-800">Rahul Sharma</h4>
                  <p className="text-sm text-gray-600">PPC Specialist at WebSathi with 8+ years of experience managing over $2M in ad spend across industries.</p>
                </div>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div 
              className="mt-8 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {post.category && (
                <Link href={`/blog/category/${post.category.toLowerCase()}`} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  #{post.category}
                </Link>
              )}
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">#DigitalMarketing</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">#PPC</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">#Advertising</span>
            </motion.div>
          </div>
        </motion.article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group block h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                      />
                      <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{relatedPost.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{formatDate(relatedPost.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Back to Blog */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center px-5 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Articles
          </Link>
        </motion.div>
      </main>

      {/* Newsletter CTA with Parallax */}
      <motion.section 
        className="relative bg-blue-50 py-20 px-4 overflow-hidden"
        style={{ y: newsletterY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Want More Marketing Insights?
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Subscribe to our newsletter and get the latest digital marketing tips delivered straight to your inbox.
          </motion.p>
          <motion.form 
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              aria-label="Your email address"
              className="flex-grow px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 shadow-sm"
            />
            <motion.button 
              type="submit" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
          <motion.p 
            className="text-xs text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}