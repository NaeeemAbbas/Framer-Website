"use client"

import { useRef, useEffect, useState, useCallback } from "react"

const stats = [
  { title: "Campaign ROI", value: "4x return on ad spend" },
  { title: "Lead Increase", value: "+65% average growth" },
  { title: "Audience", value: "+50% more interactions" },
  { title: "Completion Speed", value: "30% faster delivery" },
]

const caseStudiesData = [
  {
    image: "/src/assets/img7.jpg",
    date: "Oct 29, 2024",
    category: "SOCIAL MEDIA",
    title: "DV Fitness Brand Social Media",
    description:
      "A fitness brand struggled to maintain consistent engagement across multiple social media platforms and enhance.",
  },
  {
    image: "/src/assets/img6.jpg",
    date: "Sep 15, 2024",
    category: "BRANDING",
    title: "InnovateTech Rebranding Success",
    description:
      "Helped a tech startup redefine its brand identity, leading to increased market recognition and investor interest.",
  },
  {
    image: "/src/assets/img7.jpg",
    date: "Aug 01, 2024",
    category: "PAID ADS",
    title: "GourmetGo App User Acquisition",
    description:
      "Launched a highly successful paid advertising campaign for a food delivery app, boosting new user sign-ups by 120%.",
  },
  {
    image: "/src/assets/img7.jpg",
    date: "Jul 10, 2024",
    category: "CONTENT MARKETING",
    title: "ChicStyle E-commerce Content Strategy",
    description:
      "Developed a content marketing strategy that significantly increased organic traffic and sales for an online fashion boutique.",
  },
  {
    image: "/src/assets/img7.jpg",
    date: "Jun 20, 2024",
    category: "SEO",
    title: "UrbanLiving Realty SEO Boost",
    description:
      "Implemented SEO best practices for a real estate agency, resulting in top rankings for key local search terms.",
  },
  {
    image: "/src/assets/img7.jpg",
    date: "May 05, 2024",
    category: "COMMUNITY",
    title: "Harmony Records Fan Engagement",
    description:
      "Managed and grew the online community for a music label, fostering deeper fan engagement and loyalty.",
  },
]

function CaseStudyCard({ study, rootRef }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(cardRef.current) // Stop observing once visible
        }
      },
      {
        root: rootRef.current, // Observe relative to the scrollable container
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the card is visible
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [rootRef]) // Re-run if rootRef changes

  return (
    <div
      ref={cardRef}
      className={`
        bg-transparent rounded-xl p-4 md:p-6 flex flex-col shadow-lg border border-white/10
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <img
        src={study.image || "/src/assets/img1.jpg"}
        alt={study.title}
        className="rounded-lg mb-4 object-cover w-full h-[300px]"
      />
      <div className="flex items-center text-sm text-gray-400 mb-2">
        <span>{study.date}</span>
        <span className="mx-2">•</span>
        <span className="uppercase font-medium">{study.category}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
      <p className="text-gray-300 text-base">{study.description}</p>
    </div>
  )
}

export default function CaseStudiesSection() {
  const scrollContainerRef = useRef(null) // Ref for the right scrollable column
  const sectionRef = useRef(null) // Ref for the entire section

  const handleWheel = useCallback((event) => {
    const container = scrollContainerRef.current
    if (!container) return

    const { scrollTop, scrollHeight, clientHeight } = container
    const delta = event.deltaY // Amount of vertical scroll

    // Check if scrolling up and at the top of the inner container
    if (delta < 0 && scrollTop === 0) {
      // Allow default page scroll
      return
    }

    // Check if scrolling down and at the bottom of the inner container
    if (delta > 0 && scrollTop + clientHeight >= scrollHeight) {
      // Allow default page scroll
      return
    }

    // If not at the top/bottom of the inner scroll, prevent default page scroll
    // and manually scroll the inner container
    event.preventDefault()
    container.scrollTop += delta
  }, [])

  useEffect(() => {
    const sectionElement = sectionRef.current
    if (sectionElement) {
      sectionElement.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener("wheel", handleWheel)
      }
    }
  }, [handleWheel])

  return (
    <section ref={sectionRef} className="bg-[#1A1A1A]  py-16 px-4 md:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        {/* Left Column: Sticky and Independently Scrollable if content overflows */}
        <div className="lg:sticky  lg:top-16 lg:min-h-[calc(100vh-64px)] lg:overflow-y-auto lg:pr-4 custom-scrollbar flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-transparent border border-white/10 px-3 py-1 text-sm font-medium text-gray-300 shadow-sm mb-4">
              Proven Success
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4">
              Case Studies
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-12">
              Explore our case studies to see how we've helped clients overcome challenges and achieve remarkable
              results through effective strategies.
            </p>

            {/* Stat Cards - In a single column */}
            <div className="grid grid-cols-1 gap-6 ">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-transparent rounded-xl p-6 flex flex-col items-start text-left shadow-lg border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.title}</h3>
                  <p className="text-gray-300 text-base">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

         
        </div>

        {/* Right Column: Scrollable Case Study Cards */}
        <div ref={scrollContainerRef} className="lg:h-[800px]  overflow-y-scroll custom-scrollbar">
          <div className="space-y-8 pb-8">
            {caseStudiesData.map((study, index) => (
              <CaseStudyCard key={index} study={study} rootRef={scrollContainerRef} />
            ))}
          </div>
        </div>
        
      </div>
       {/* View All Button - At the bottom of the left column's content */}
          <div className="flex justify-center mt-12">
            <button className="inline-flex items-center justify-center cursor-pointer rounded-lg shadow py-4 px-8 font-bold whitespace-nowrap text-xl ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 bg-transparent border border-white/10 text-white hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-500 hover:scale-105">
              View All Case Studies <span className="ml-2">→</span>
            </button>
          </div>

      {/* Custom Scrollbar Styles to hide it */}
      <style jsx>{`
        .custom-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  )
}