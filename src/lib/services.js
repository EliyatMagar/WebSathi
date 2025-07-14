import { 
  FiCode, FiSearch, FiPenTool, FiShare2, FiBarChart2, 
  FiMail, FiSmartphone, FiDollarSign, FiFilm, FiShoppingCart,
  FiUsers, FiGlobe, FiMessageSquare, FiTrendingUp, FiLayers,
  FiMonitor, FiHeadphones, FiBook, FiAward, FiTarget,
  FiCalendar, FiCreditCard, FiImage, FiDatabase, FiZap
} from "react-icons/fi";

export const services = [
  {
    id: 'web-design',
    title: "Web Design & Development",
    slug: "web-design-development",
    description: "Custom, responsive websites that convert visitors into customers with modern technologies.",
    icon: <FiCode className="w-6 h-6" />,
    features: ["UI/UX Design", "Frontend Development", "Backend Development", "E-commerce Solutions"]
  },
  {
    id: 'seo',
    title: "SEO Optimization",
    slug: "seo-optimization",
    description: "Higher rankings and organic traffic growth with proven strategies tailored to your business",
    icon: <FiSearch className="w-6 h-6" />,
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"]
  },
  {
    id: 'content-marketing',
    title: "Content Marketing",
    slug: "content-marketing",
    description: "Engaging content that drives traffic, builds authority, and nurtures leads.",
    icon: <FiPenTool className="w-6 h-6" />,
    features: ["Blog Writing", "Video Scripts", "Infographics", "Content Strategy"]
  },
  {
    id: 'social-media',
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description: "Strategic campaigns to grow your brand and engage audiences across platforms.",
    icon: <FiShare2 className="w-6 h-6" />,
    features: ["Platform Management", "Paid Ads", "Community Engagement", "Analytics"]
  },
  {
    id: 'ppc',
    title: "Pay-Per-Click (PPC) Ads",
    slug: "pay-per-click-ads",
    description: "Targeted ad campaigns to drive immediate traffic and conversions.",
    icon: <FiDollarSign className="w-6 h-6" />,
    features: ["Google Ads", "Facebook/Instagram Ads", "Retargeting", "A/B Testing"]
  },
  {
    id: 'email-marketing',
    title: "Email Marketing",
    slug: "email-marketing",
    description: "Automated campaigns to nurture leads and retain customers.",
    icon: <FiMail className="w-6 h-6" />,
    features: ["Newsletters", "Drip Campaigns", "Segmentation", "Performance Tracking"]
  },
  {
    id: 'mobile-marketing',
    title: "Mobile Marketing",
    slug: "mobile-marketing",
    description: "Reach users on smartphones with SMS, apps, and responsive strategies.",
    icon: <FiSmartphone className="w-6 h-6" />,
    features: ["SMS Campaigns", "Push Notifications", "App Store Optimization", "QR Codes"]
  },
  {
    id: 'video-marketing',
    title: "Video Marketing",
    slug: "video-marketing",
    description: "High-impact videos for ads, tutorials, and brand storytelling.",
    icon: <FiFilm className="w-6 h-6" />,
    features: ["YouTube SEO", "Explainer Videos", "Live Streaming", "Video Ads"]
  },
  {
    id: 'ecommerce',
    title: "E-Commerce Marketing",
    slug: "ecommerce-marketing",
    description: "Boost online sales with tailored strategies for Shopify, WooCommerce, etc.",
    icon: <FiShoppingCart className="w-6 h-6" />,
    features: ["Product Listings", "Cart Abandonment", "Marketplace Optimization", "Checkout Funnels"]
  },
  {
    id: 'influencer',
    title: "Influencer Marketing",
    slug: "influencer-marketing",
    description: "Leverage trusted voices to promote your brand authentically.",
    icon: <FiUsers className="w-6 h-6" />,
    features: ["Outreach", "Campaign Management", "Performance Tracking", "Affiliate Programs"]
  },
  {
    id: 'local-seo',
    title: "Local SEO",
    slug: "local-seo",
    description: "Dominate local search results and attract nearby customers.",
    icon: <FiGlobe className="w-6 h-6" />,
    features: ["Google My Business", "Local Citations", "Reviews Management", "NAP Consistency"]
  },
  {
    id: 'chatbot',
    title: "Chatbot Marketing",
    slug: "chatbot-marketing",
    description: "AI-powered chatbots to engage visitors 24/7.",
    icon: <FiMessageSquare className="w-6 h-6" />,
    features: ["Lead Qualification", "Customer Support", "Personalization", "Integration"]
  },
  {
    id: 'growth-hacking',
    title: "Growth Hacking",
    slug: "growth-hacking",
    description: "Data-driven experiments to accelerate business growth.",
    icon: <FiTrendingUp className="w-6 h-6" />,
    features: ["A/B Testing", "Viral Loops", "Referral Programs", "Scalable Tactics"]
  },
  {
    id: 'cms',
    title: "CMS Development",
    slug: "cms-development",
    description: "Custom content management systems for seamless updates.",
    icon: <FiLayers className="w-6 h-6" />,
    features: ["WordPress", "Headless CMS", "Custom Plugins", "Security"]
  },
  {
    id: 'conversion-rate',
    title: "Conversion Rate Optimization (CRO)",
    slug: "conversion-rate-optimization",
    description: "Increase conversions through data-backed UX improvements.",
    icon: <FiMonitor className="w-6 h-6" />,
    features: ["Heatmaps", "A/B Testing", "Landing Pages", "Funnel Analysis"]
  },
  {
    id: 'voice-search',
    title: "Voice Search Optimization",
    slug: "voice-search-optimization",
    description: "Optimize for Alexa, Siri, and Google Assistant queries.",
    icon: <FiHeadphones className="w-6 h-6" />,
    features: ["FAQ Schema", "Natural Language", "Local Queries", "Featured Snippets"]
  },
  {
    id: 'branding',
    title: "Branding & Identity",
    slug: "branding-identity",
    description: "Craft a memorable brand that resonates with your audience.",
    icon: <FiAward className="w-6 h-6" />,
    features: ["Logo Design", "Style Guides", "Brand Messaging", "Visual Assets"]
  },
  {
    id: 'remarketing',
    title: "Remarketing/Retargeting",
    slug: "remarketing-retargeting",
    description: "Re-engage visitors who didn’t convert the first time.",
    icon: <FiTarget className="w-6 h-6" />,
    features: ["Display Ads", "Email Sequences", "Dynamic Ads", "Lookalike Audiences"]
  },
  {
    id: 'event-marketing',
    title: "Event Marketing",
    slug: "event-marketing",
    description: "Promote webinars, conferences, and live events.",
    icon: <FiCalendar className="w-6 h-6" />,
    features: ["Ticketing", "Email Campaigns", "Social Promotion", "Post-Event Followups"]
  },
  {
    id: 'payment-gateway',
    title: "Payment Gateway Integration",
    slug: "payment-gateway-integration",
    description: "Seamless checkout experiences with secure payment options.",
    icon: <FiCreditCard className="w-6 h-6" />,
    features: ["Stripe", "PayPal", "Subscriptions", "Fraud Prevention"]
  },
  {
    id: 'graphic-design',
    title: "Graphic Design",
    slug: "graphic-design",
    description: "Visual content for ads, social media, and branding.",
    icon: <FiImage className="w-6 h-6" />,
    features: ["Social Media Graphics", "Print Materials", "Illustrations", "Brand Collateral"]
  },
  {
    id: 'data-analytics',
    title: "Data Analytics",
    slug: "data-analytics",
    description: "Turn raw data into actionable insights for smarter decisions.",
    icon: <FiDatabase className="w-6 h-6" />,
    features: ["Dashboards", "Customer Segmentation", "ROI Tracking", "Predictive Analysis"]
  },
  {
    id: 'chat-marketing',
    title: "Chat Marketing (WhatsApp/Telegram)",
    slug: "chat-marketing",
    description: "Engage customers via messaging apps for support and promotions.",
    icon: <FiMessageSquare className="w-6 h-6" />,
    features: ["Broadcast Lists", "Automated Replies", "CRM Integration", "Transactional Messages"]
  },
  {
    id: 'web-performance',
    title: "Web Performance Optimization",
    slug: "web-performance-optimization",
    description: "Speed up your site to reduce bounce rates and boost SEO.",
    icon: <FiZap className="w-6 h-6" />,
    features: ["Lazy Loading", "CDN Setup", "Caching", "Code Minification"]
  }
];