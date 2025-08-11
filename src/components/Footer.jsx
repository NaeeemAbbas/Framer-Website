"use client"

import { Copyright } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-10 sm:py-14 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 md:mb-16 text-center md:text-left">
          {/* Column 1: Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-3 sm:mb-4">
              <Copyright className="w-5 h-5 sm:w-6 sm:h-6 text-white mr-2" />
              <span className="text-lg sm:text-xl font-bold">Crewcial</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-[200px]">
              Boost Your Brand with Social Media Marketing
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Articles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Social Media</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="mailto:crewcialhello@gmail.com" className="hover:text-white transition-colors">crewcialhello@gmail.com</a></li>
              <li>23 Artist Avenue, Suite</li>
              <li>456, Wonderland</li>
            </ul>
          </div>
        </div>

        {/* Large "CREWCIAL" text */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase crewcial-gradient-text">
            CREWCIAL
          </h2>
        </div>

        {/* Copyright notice */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>{`2025 Crewcial. All rights reserved.`}</p>
        </div>
      </div>

      <style jsx>{`
        .crewcial-gradient-text {
          background: linear-gradient(to right, #63b3ed, #3182ce);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </footer>
  )
}
