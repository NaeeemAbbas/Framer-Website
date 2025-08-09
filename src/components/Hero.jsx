// No 'use client' needed for plain React
import { Star } from "lucide-react"
import ReviewCards from "./RiviewCards"

export default function Hero() {
  return (
    <div className="relative flex flex-col
     min-h-screen bg-[#1A1A1A] text-white overflow-hidden  items-center justify-center px-4 py-12 md:px-6 lg:px-8">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-gray-700/30 to-transparent rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-tl from-gray-700/30 to-transparent rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-gradient-to-bl from-gray-700/20 to-transparent rounded-full filter blur-3xl opacity-40"></div>
      </div>

      {/* Faded Testimonials */}
      <div className="absolute top-[15%] left-[5%] text-gray-400 opacity-30 transform -rotate-12 text-center md:text-left">
        <p className="text-lg md:text-xl font-medium max-w-xs">
          Crewcial simplified our marketing efforts. Their support made all the difference!
        </p>
        <div className="flex justify-center md:justify-start mt-2">
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
        </div>
      </div>

      <div className="absolute top-[10%] right-[5%] text-gray-400 opacity-30 transform rotate-12 text-center md:text-right">
        <p className="text-lg md:text-xl font-medium max-w-xs">Excellent quality! I like working with Crewcial!</p>
        <div className="flex justify-center md:justify-end mt-2">
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
        </div>
      </div>

      <div className="absolute bottom-[15%] left-[5%] text-gray-400 opacity-30 transform rotate-6 text-center md:text-left">
        <p className="text-lg md:text-xl font-medium max-w-xs">
          Thanks to Crewcial, I finally understand Facebook ads. Their guidance was invaluable.
        </p>
        <div className="flex justify-center md:justify-start mt-2">
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center rounded-full bg-gray-800 px-4 py-1 text-sm font-medium text-gray-300 shadow-sm">
          All Marketing Solutions
        </span>
        <h1 className="text-2xl md:text-6xl lg:text-6xl font-bold leading-tight tracking-tighter">
          Drive Growth with Expert Social Media Marketing
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          We help businesses connect with their audience, boost engagement, and drive sales through tailored social
          media strategies and compelling content.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap  text-lg  ring-offset-background rounded-lg shadow py-8 cursor-pointer hover:bg-blue-800 px-10 font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 bg-gradient-to-br from-gray-200 to-gray-400 text-gray-900">
            Book Consultation Call
          </button>
        </div>
      </div>

     
      <ReviewCards/>
    </div>
  )
}
