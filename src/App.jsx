import CaseStudiesSection from "./components/CaseStudyCard";
import DifferenceSection from "./components/Crewcial";
import Hero from "./components/Hero";
import InsightsTipsSection from "./components/InsightsTipsSection";
import MarqueeSection from "./components/Marquee";
import Navbar from "./components/Navbar";
import PricingSection from "./components/Pricing";
import ProcessSection from "./components/ProcessCard";
import ServicesSection from "./components/Services";
import TestimonialsSection from "./components/TestimonialCard";


export default function App() {
  return (
    <div className="bg-[#1A1A1A]">
      <Navbar />
     <Hero/>
   <MarqueeSection/>
     <ServicesSection/>
     <DifferenceSection/>
     <ProcessSection/>
     <CaseStudiesSection/>
     <PricingSection/>
     <InsightsTipsSection/>
     <TestimonialsSection/>
    </div>
  );
}
