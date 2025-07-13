
import Testimonials from "../data/testimonials";
import Hero from "../sections/Home/Hero";
import ServiceOverview from "../sections/Home/ServiceOverview";
import BlogPage from "../sections/Blog/BlogSection";

export default function Home() {
  return(
    <div>
     <Hero/>
     <ServiceOverview/>
     <BlogPage />
     <Testimonials />
    </div>
  )
}