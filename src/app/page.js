
import Testimonials from "../data/testimonials";
import Hero from "../sections/Home/Hero";
import ServiceOverview from "../sections/Home/ServiceOverview";

export default function Home() {
  return(
    <>
     <Hero/>
     <ServiceOverview/>
     <Testimonials />
    </>
  )
}