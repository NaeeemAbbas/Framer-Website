"use client"

import { useRef, useEffect, useState } from "react"
import { BarChart, Paintbrush, Brain, Users, DollarSign, Search } from "lucide-react"

const services = [
  {
    icon: BarChart,
    title: "Social Media Strategy",
    description:
      "We create data-driven strategies tailored to your business goals, ensuring you reach the right audience with maximum impact.",
  },
  {
    icon: Paintbrush,
    title: "Content Creation",
    description:
      "Our team produces eye-catching graphics and captivating copy that showcase your brand's message and attract attention.",
  },
  {
    icon: Brain,
    title: "Analytics & Reporting",
    description:
      "We provide detailed insights into your social media performance, helping you grow rapidly and strategically.",
  },
  {
    icon: Users,
    title: "Community Management",
    description:
      "We manage your online community by responding to comments and messages. This builds trust and loyalty with followers.",
  },
  {
    icon: DollarSign,
    title: "Paid Advertising",
    description:
      "We run targeted ads on social media to reach more people. Our goal is to drive traffic and boost sales for your business.",
  },
  {
    icon: Search,
    title: "Brand Monitoring",
    description:
      "We keep an eye on what people are saying about your brand online. This helps us manage your reputation.",
  },
]

function ServiceCard({ service, delay }) {
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

  const IconComponent = service.icon

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
      <div className="p-3 rounded-full bg-gray-700 mb-4">
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-gray-300 text-base">{service.description}</p>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section className="bg-[#1A1A1A] py-16 px-4 md:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="inline-flex items-center rounded-full bg-transparent  border border-white/10 px-3 py-1 text-sm font-medium text-gray-300 shadow-sm mb-4">
              What We Deliver
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              We offer tailored solutions to enhance your social media presence and drive real results for your
              business.
            </p>
          </div>
          <button className="mt-8 md:mt-0 inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 bg-gray-800 text-white shadow-lg hover:bg-gray-700 border border-gray-700">
            Learn More
          </button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
