"use client"

import { CheckCircle } from "lucide-react"

const featuresRow1 = [
  { text: "Book Your Strategy", faded: false },
  { text: "Get More Clients", faded: false },
  { text: "Boost Your Leads", faded: false },
  { text: "Grow Your Brand", faded: true },
  { text: "Custom Campaigns", faded: true },
]

const featuresRow2 = [
  { text: "Proven Results", faded: false },
  { text: "Increase Sales", faded: false },
  { text: "Custom Campaigns", faded: true },
  { text: "Grow Your Brand", faded: false },
  { text: "Book Your Strategy", faded: true },
]

function ScrollingBadgeRow({ features, animationDirection, duration }) {
  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* Fading overlays - narrower on small screens */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 z-20 bg-gradient-to-r from-gray-900/50 to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 z-20 bg-gradient-to-l from-gray-900/50 to-transparent pointer-events-none"></div>

      <div
        className={`flex whitespace-nowrap ${animationDirection}`}
        style={{ animationDuration: duration }}
      >
        {Array(3)
          .fill(features)
          .flat()
          .map((feature, index) => (
            <div
              key={`scrolling-${animationDirection}-${index}`}
              className={`inline-flex items-center rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-sm border mx-1.5 sm:mx-2
                ${
                  feature.faded
                    ? "bg-gray-800/50 text-gray-400 border-gray-700/50"
                    : "bg-gray-800 text-white border-gray-700"
                }
              `}
            >
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1.5 sm:mr-2" />
              {feature.text}
            </div>
          ))}
      </div>
    </div>
  )
}

export default function CtaSection() {
  return (
    <section className="bg-[#1A1A1A] py-12 sm:py-16 px-4 md:px-6 lg:px-8 text-white relative overflow-hidden">
      {/* Spotlight effects */}
      <div className="absolute top-0 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse-light"></div>
      <div className="absolute top-0 right-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse-light animation-delay-2000"></div>

      <div className="relative z-10 max-w-5xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-700/50 p-6 sm:p-8 md:p-12 text-center shadow-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4">
          Let's Boost Your Marketing Results
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Unlock your business potential with expert social media strategies
          that engage and deliver results.
        </p>

        <div className="relative inline-block mb-12">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm sm:text-lg font-medium h-10 sm:h-12 px-6 sm:px-8 bg-gradient-to-br from-gray-200 to-gray-400 text-gray-900 shadow-lg hover:from-gray-300 hover:to-gray-500 transition-colors">
            Book Free Consultation
          </button>
          {/* Arrow SVG - hidden on mobile */}
          <svg
            className="absolute -right-14 sm:-right-20 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-auto text-blue-400 hidden md:block"
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95 5C70 5 50 45 5 45"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 40L5 45L10 50"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Two Scrolling Rows */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <ScrollingBadgeRow
            features={featuresRow1}
            animationDirection="animate-scroll-left-cta"
            duration="30s"
          />
          <ScrollingBadgeRow
            features={featuresRow2}
            animationDirection="animate-scroll-right-cta"
            duration="35s"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-light {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
        .animate-pulse-light {
          animation: pulse-light 4s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes scroll-left-cta {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left-cta {
          animation: scroll-left-cta linear infinite;
        }

        @keyframes scroll-right-cta {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll-right-cta {
          animation: scroll-right-cta linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-left-cta,
          .animate-scroll-right-cta {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  )
}
