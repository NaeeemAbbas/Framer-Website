"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Working with Crewcial has been amazing. Great results!",
    avatar: "/placeholder.svg?height=48&width=48",
    name: "Josh Brown",
    title: "Social Manager",
  },
  {
    quote: "Thanks to Crewcial, I finally understand Facebook ads. Their guidance was a game-changer!",
    avatar: "/placeholder.svg?height=48&width=48",
    name: "Kylie Davis",
    title: "Digital Marketer",
  },
  {
    quote: "We hit our targets thanks to Crewcial! Their strategies really work! Highly recommend!",
    avatar: "/placeholder.svg?height=48&width=48",
    name: "Sherry Greys",
    title: "Brand Visualizer",
  },
  {
    quote: "I learned so much from Crewcial! They helped me tackle my ad fears and they are 100% my go-to!",
    avatar: "/placeholder.svg?height=48&width=48",
    name: "Alex Johnson",
    title: "E-commerce Owner",
  },
  {
    quote: "The session was informative and inspiring! I left ready to implement everything.",
    avatar: "/placeholder.svg?height=48&width=48",
    name: "Zaheer Khan",
    title: "Online Marketer",
  },
  {
    quote: "Thank you, Crewcial, for your guidance! My business has seen real growth. I will stay in touch!",
    avatar: "/placeholder.svg?height=48&width=48",
    name: "Maria Lopez",
    title: "Startup Founder",
  },
  {
    quote: "Crewcial's team is incredibly responsive and knowledgeable. They truly care about our success.",
    avatar: "/placeholder.svg?height=48&width=48",
    name: "David Chen",
    title: "Marketing Director",
  },
  {
    quote: "Outstanding results and excellent communication. Highly recommend Crewcial for any marketing needs.",
    avatar: "/placeholder.svg?height=48&width=48",
    name: "Sarah Miller",
    title: "Small Business Owner",
  },
]

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col shadow-lg border border-gray-700 h-auto">
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

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden">
        {/* Top shadow overlay */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1A1A1A] to-transparent z-10 pointer-events-none"></div>
        {/* Bottom shadow overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10 pointer-events-none"></div>

        {/* Column 1: Moving Downward */}
        <div className="relative h-full overflow-hidden">
          <div className="flex flex-col gap-6 animate-scroll-down-col">
            {Array(2)
              .fill(testimonials)
              .flat()
              .map((testimonial, index) => (
                <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
              ))}
          </div>
        </div>

        {/* Column 2: Moving Downward (Changed from Upward) */}
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

        {/* Column 3: Moving Downward */}
        <div className="relative h-full overflow-hidden">
          <div className="flex flex-col gap-6 animate-scroll-down-col">
            {Array(2)
              .fill(testimonials)
              .flat()
              .map((testimonial, index) => (
                <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
              ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down-col {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-down-col {
          animation: scroll-down-col 40s linear infinite;
        }

        .animate-scroll-down-col:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll-down-col {
            animation: none;
          }
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
          .h-[600px] {
            height: auto;
          }
          .overflow-hidden {
            overflow: visible;
          }
        }
      `}</style>
    </section>
  )
}