"use client"

import { Star } from "lucide-react"
import React from "react"
import img from '../assets/img.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'



const testimonials = [
  {
    quote: "Working with Crewcial has been amazing. Great results!",
    avatar: img,
    name: "Josh Brown",
    title: "Social Manager",
  },
  {
    quote: "Thanks to Crewcial, I finally understand Facebook ads. Their guidance was a game-changer!",
    avatar: img1,
    name: "Kylie Davis",
    title: "Digital Marketer",
  },
  {
    quote: "We hit our targets thanks to Crewcial! Their strategies really work! Highly recommend!",
    avatar:img2,
    name: "Sherry Greys",
    title: "Brand Visualizer",
  },
  {
    quote: "I learned so much from Crewcial! They helped me tackle my ad fears and they are 100% my go-to!",
    avatar: img3,
    name: "Alex Johnson",
    title: "E-commerce Owner",
  },
  {
    quote: "The session was informative and inspiring! I left ready to implement everything.",
    avatar: img4,
    name: "Zaheer Khan",
    title: "Online Marketer",
  },
  {
    quote: "Thank you, Crewcial, for your guidance! My business has seen real growth. I will stay in touch!",
    avatar: img5,
    name: "Maria Lopez",
    title: "Startup Founder",
  },
  {
    quote: "Crewcial's team is incredibly responsive and knowledgeable. They truly care about our success.",
    avatar: img6,
    name: "David Chen",
    title: "Marketing Director",
  },
  {
    quote: "Outstanding results and excellent communication. Highly recommend Crewcial for any marketing needs.",
    avatar: img7,
    name: "Sarah Miller",
    title: "Small Business Owner",
  },
]

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col shadow-lg border border-gray-700 h-auto min-w-[300px]">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
        ))}
      </div>
      <p className="text-gray-300 text-base mb-4 flex-grow">{testimonial.quote}</p>
      <div className="flex items-center mt-auto">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#1A1A1A] py-16 px-4 md:px-6 lg:px-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300 shadow-sm mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4">
          Hear from Our Clients
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Hear from our satisfied clients about how we have transformed their social media presence and driven
          meaningful results.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Large Screens: Three-column layout with vertical scrolling */}
        <div className="hidden lg:grid grid-cols-3 gap-6 h-[600px] overflow-hidden relative">
          {/* Top shadow overlay */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1A1A1A] to-transparent z-10 pointer-events-none"></div>
          {/* Bottom shadow overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10 pointer-events-none"></div>

          {/* Column 1: Moving Upward */}
          <div className="relative h-full overflow-hidden">
            <div className="flex flex-col gap-6 animate-scroll-up-col">
              {Array(2)
                .fill(testimonials)
                .flat()
                .map((testimonial, index) => (
                  <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
                ))}
            </div>
          </div>

          {/* Column 2: Moving Downward */}
          <div className="relative h-full overflow-hidden">
            <div className="flex flex-col gap-6 animate-scroll-down-col">
              {Array(2)
                .fill(testimonials)
                .flat()
                .map((testimonial, index) => (
                  <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
                ))}
            </div>
          </div>

          {/* Column 3: Moving Upward */}
          <div className="relative h-full overflow-hidden">
            <div className="flex flex-col gap-6 animate-scroll-up-col">
              {Array(2)
                .fill(testimonials)
                .flat()
                .map((testimonial, index) => (
                  <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
                ))}
            </div>
          </div>
        </div>

        {/* Medium Screens: Single row with horizontal scrolling */}
        <div className="hidden md:block lg:hidden relative h-auto overflow-hidden">
          {/* Left shadow overlay */}
          <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none"></div>
          {/* Right shadow overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-4 animate-scroll-right-row">
            {Array(2)
              .fill(testimonials)
              .flat()
              .map((testimonial, index) => (
                <TestimonialCard key={`row-md-${index}`} testimonial={testimonial} />
              ))}
          </div>
        </div>

        {/* Small Screens: Single row with horizontal scrolling (changed from vertical) */}
        <div className="md:hidden relative h-auto overflow-hidden">
          {/* Left shadow overlay */}
          <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none"></div>
          {/* Right shadow overlay */}
          <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-4 animate-scroll-right-row">
            {Array(2)
              .fill(testimonials)
              .flat()
              .map((testimonial, index) => (
                <TestimonialCard key={`row-sm-${index}`} testimonial={testimonial} />
              ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up-col {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down-col {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes scroll-right-row {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-up-col {
          animation: scroll-up-col 60s linear infinite;
        }

        .animate-scroll-down-col {
          animation: scroll-down-col 40s linear infinite;
        }

        .animate-scroll-right-row {
          animation: scroll-right-row 30s linear infinite;
          display: flex;
          width: max-content;
        }

        /* Pause animation on hover */
        .animate-scroll-up-col:hover,
        .animate-scroll-down-col:hover,
        .animate-scroll-right-row:hover {
          animation-play-state: paused;
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-up-col,
          .animate-scroll-down-col,
          .animate-scroll-right-row {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}