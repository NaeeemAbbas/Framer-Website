"use client"

import { CalendarDays } from "lucide-react"

const articles = [
  {
    image: "/src/assets/img.jpg",
    category: "BRANDING",
    date: "Jul 17, 2024",
    title: "Building a Strong Brand Identity",
    description:
      "This article emphasizes the power of storytelling in shaping a brand's identity and creating emotional connections with customers.",
  },
  {
    image: "/src/assets/img1.jpg",
    category: "PARTNERSHIPS",
    date: "Sep 10, 2024",
    title: "Influencer Partnerships for Brand Growth",
    description:
      "This article discusses how brands can utilize influencer partnerships to expand their reach and foster authentic connections.",
  },
  {
    image: "/src/assets/img2.png",
    category: "VIRAL",
    date: "Sep 5, 2024",
    title: "Top 10 Viral Content Campaigns to Inspire Your Strategy",
    description:
      "This article highlights ten successful viral content campaigns that effectively captured audience attention and generated significant brand awareness.",
  },
]

export default function InsightsTipsSection() {
  return (
    <section className="bg-[#1A1A1A] py-16 px-4 md:px-6 lg:px-8 text-white mx-auto max-w-7xl p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300 shadow-sm mb-4">
            Our Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4">
            Insights & Tips
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our blog for valuable insights and practical tips to enhance your social media marketing strategy
            and drive success for your business.
          </p>
        </div>

        {/* Article Cards */}
        <div className="space-y-8 mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-transparent  rounded-xl p-4 md:p-6 cursor-pointer flex flex-col md:flex-row items-center gap-6 shadow-lg border border-white/10"
            >
              <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={500}
                  height={350}
                  className="rounded-lg object-cover w-full h-[350px]"
                />
              </div>
              <div className="flex-grow flex flex-col justify-center text-center h-full">
                <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-400 mb-2 justify-center">
                  <span className="uppercase font-medium mb-1 md:mb-0 md:mr-2">{article.category}</span>
                  <span className="hidden md:inline-block">•</span>
                  <div className="flex items-center mt-1 md:mt-0 md:ml-2">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{article.title}</h3>
                <p className="text-gray-300 text-base">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center">
          <button className="inline-flex bg-transparent border border-white/10  items-center justify-center whitespace-nowrap rounded-lg shadow py-4 px-10 font-bold  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12   text-white cursor-pointer  hover:bg-gray-700 ">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}       