"use client"

import { useRef, useEffect, useState } from "react"
import { CheckCircle, Copyright } from "lucide-react"

const crewcialAdvantages = [
  "Fast communication you can count on",
  "Campaigns built around your unique goals",
  "Fresh tactics that drive today's growth",
  "Deep Insights into your specific niche",
  "Work by a team of in-house pros",
]

const otherAgencyDisadvantages = [
  "Delayed replies and unclear updates",
  "Generic strategies that miss the mark",
  "Rely on outdated, recycled playbooks",
  "Limited understanding of your audience",
  "Outsource to low-cost freelance networks",
]

function ComparisonCard({ title, items }) {
  // Removed 'type' prop as it's no longer needed for margin
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
        w-full
      `}
    >
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
            <span className="text-gray-300 text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function DifferenceSection() {
  return (
    <section className="bg-[#1A1A1A] py-16 px-4 md:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <span className="inline-flex items-center rounded-full  bg-transparent border border-white/10 px-3 py-1 text-sm font-medium text-gray-300 shadow-sm mb-4">
          Why Crewcial?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter 0 text-white mb-4">
          What makes us different?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          While other agencies focus on deliverables, we focus on your results.
        </p>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {" "}
          {/* Added justify-items-center */}
          {/* Crewcial Card Container */}
          <div className="flex flex-col items-center w-full">
            {" "}
            {/* Changed lg:items-start to items-center */}
            <div className="flex items-center mb-6">
              <Copyright className="w-8 h-8 text-white mr-3" />
              <h3 className="text-3xl font-bold text-white">Crewcial</h3>
            </div>
            <ComparisonCard title="Crewcial" items={crewcialAdvantages} />
          </div>
          {/* Other Agencies Card Container */}
          <div className="flex flex-col items-center w-full">
            {" "}
            {/* Changed lg:items-start to items-center */}
            <div className="flex items-center mb-6">
              <h3 className="text-3xl font-bold text-white">Other Agencies</h3>
            </div>
            <ComparisonCard title="Other Agencies" items={otherAgencyDisadvantages} />
          </div>
        </div>
      </div>
    </section>
  )
}
