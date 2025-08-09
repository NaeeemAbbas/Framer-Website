import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For hamburger icons
import logo from "../assets/logo.png"; // Make sure this path is correct

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white text-xl py-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-white">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
              <h1>Crewail</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-blue-400 font-semibold">Home</a>
            <a href="#" className="hover:text-blue-400">About</a>
            <a href="#" className="hover:text-blue-400">Work</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-gray-200  to-blue-200 text-black  rounded-lg shadow py-4 px-10 font-bold">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-3">
          <a href="#" className="block text-blue-400 font-semibold">Home</a>
          <a href="#" className="block hover:text-blue-400">About</a>
          <a href="#" className="block hover:text-blue-400">Work</a>
          <a href="#" className="block hover:text-blue-400">Contact</a>
          <button className="w-full bg-gradient-to-r from-gray-200 to-blue-200 text-black px-4 py-2 rounded-lg shadow">
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
}
