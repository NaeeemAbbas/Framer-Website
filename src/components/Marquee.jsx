"use client"

import { Star } from "lucide-react"
import React from "react"

export default function MarqueeSection() {
  const items = [
    "Audience Growth",
    "Content Creation",
    "Marketing Strategy",
    "Brand Development",
    "SEO Optimization",
    "Paid Advertising",
    "Email Marketing",
    "Analytics & Reporting",
  ]

  return (
    <section className="bg-[#1A1A1A] py-8 overflow-hidden relative max-w-5xl mx-auto">
      <div className="relative w-full">
        {/* Fading overlay on the left */}
        <div className="absolute inset-y-0 left-0 w-24 z-20 bg-gradient-to-r from-[#141414ef] to-transparent pointer-events-none"></div>

        {/* Fading overlay on the right */}
        <div className="absolute inset-y-0 right-0 w-24 z-20 bg-gradient-to-l from-[#1A1A1A] to-transparent pointer-events-none"></div>

        <div className="flex whitespace-nowrap animate-marquee">
          {[...items, ...items].map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center mx-8">
                <Star className="w-5 h-5 text-gray-400 mr-4" />
                <span className="text-lg font-medium text-white">{item}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%); /* Moves half the total width (one full set of items) */
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite; /* Adjusted duration for smoother loop */
        }
      `}</style>
    </section>
  )
}
