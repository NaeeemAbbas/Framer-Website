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
        <div className="absolute inset-y-0 left-0 w-24 z-20 bg-gradient-to-r from-[#1A1A1A] to-transparent pointer-events-none md:block hidden"></div>
        {/* Fading overlay on the right */}
        <div className="absolute inset-y-0 right-0 w-24 z-20 bg-gradient-to-l from-[#1A1A1A] to-transparent pointer-events-none md:block hidden"></div>

        <div className="flex whitespace-nowrap animate-marquee md:flex-nowrap flex-wrap justify-center">
          {[...items, ...items].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center mx-4 md:mx-8 my-2"
            >
              <Star className="w-5 h-5 text-gray-400 mr-4" />
              <span className="text-lg font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            white-space: normal;
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          .animate-marquee {
            animation: none;
            white-space: normal;
            justify-content: center;
            gap: 1rem;
          }
          .absolute {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}