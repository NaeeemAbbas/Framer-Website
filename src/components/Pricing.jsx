"use client"

import { useRef, useEffect, useState } from "react"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter Plan",
    description: "Perfect for startups and small businesses building their online presence.",
    price: "$900",
    period: "/one-time",
    features: [
      "Website Setup (up to 5 pages)",
      "Basic SEO Optimization",
      "Social Media Profile Setup (up to 2 platforms)",
      "1 Case Study Showcase",
      "Email Support",
    ],
    isPopular: false,
  },
  {
    name: "Growth Plan",
    description: "Ideal for growing agencies or businesses ready to scale.",
    price: "$1,800",
    period: "/month",
    features: [
      "Website Setup (up to 10 pages)",
      "Advanced SEO & Analytics Integration",
      "Social Media Management (up to 3 platforms, 8 posts/month)",
      "3 Case Studies & Blog Integration (CMS)",
      "Monthly Performance Report",
    ],
    isPopular: true,
  },
  {
    name: "Premium Retainer",
    description: "For established agencies needing a comprehensive digital marketing solution.",
    price: "$299",
    period: "/month",
    features: [
      "Unlimited Website Pages & Custom Features",
      "Full SEO Suite + Local SEO",
      "Unlimited Case Studies & Articles (CMS)",
      "Dedicated Account Manager",
      "Quarterly Strategy Sessions",
    ],
    isPopular: false,
  },
]

function PricingCard({ plan, delay }) {
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
        relative bg-transparent  rounded-xl p-6 md:p-8 flex flex-col items-start text-left shadow-lg border border-white/10
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full transform rotate-12 shadow-md">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
      <p className="text-gray-300 text-base mb-4">{plan.description}</p>
      <div className="text-white mb-6">
        <span className="text-4xl font-bold">{plan.price}</span>
        <span className="text-xl font-medium text-gray-400">{plan.period}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
            <span className="text-gray-300 text-base">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`
          inline-flex items-center justify-center border border-white/10 whitespace-nowrap rounded-xl text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8 w-full
          ${
            plan.isPopular
              ? "  hover:rgb(0, 0, 238)   border cursor-pointer bg-gray-500"
              : "bg-transparent   text-white  cursor-pointer"
          }
          shadow-lg
        `}
      >
        Book My Call
      </button>
    </div>
  )
}

export default function PricingSection() {
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
    <section ref={sectionRef} className="bg-[#1A1A1A] py-16 px-4 md:px-6 lg:px-8 text-white">
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-transparent px-3 py-1 text-sm font-medium text-gray-300 border border-white/10 shadow-sm mb-4">
            Flexible Plans for Every Agency
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Whether you're just starting out or scaling up, our plans are designed to help you achieve your marketing
            goals with ease and confidence.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch ">
          {pricingPlans.map((plan, index) => (
            <PricingCard  key={index} plan={plan} delay={index * 100}  />
          ))}
        </div>
      </div>
    </section>
  )
}
