"use client"

import { useRef, useEffect, useState } from "react"

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Schedule an initial meeting to discuss your goals and social media needs.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "We'll create a customized social media strategy tailored to your brand.",
  },
  {
    number: "03",
    title: "Launch and Improve",
    description: "We implement the strategy and monitor performance for results that boosts impact.",
  },
]

function ProcessCard({ step, delay }) {
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
        root: null, // viewport
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
  }, [])

  return (
    <div
      ref={cardRef}
      className={`
        bg-transparent rounded-xl p-6 md:p-8 flex flex-col items-start text-left shadow-lg border border-white/10
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-4xl font-bold text-gray-400 mb-4">{step.number}</span>
      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
      <p className="text-gray-300 text-base">{step.description}</p>
    </div>
  )
}

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(sectionRef.current)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="  py-16 px-4 md:px-6 lg:px-8 text-white">
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300 shadow-sm mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We simplify social media marketing by guiding you through our clear, three-step process.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {processSteps.map((step, index) => (
            <ProcessCard key={index} step={step} delay={index * 100} />
          ))}
        </div>

        {/* Ready to Grow CTA */}
        <div className="bg-transparent rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center shadow-lg border border-white/10">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Grow Your Business?</h3>
            <p className="text-gray-300 text-base">
              Partner with our expert team to boost your online presence and attract more customers.
            </p>
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg shadow py-4 px-10 font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12  bg-gradient-to-br from-gray-200 to-gray-400 text-gray-900  hover:from-gray-300 hover:to-gray-500">
            Book Consultation Call
          </button>
        </div>
      </div>
    </section>
  )
}
