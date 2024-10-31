import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-serif font-bold text-gray-900">Gusto</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">Home</a>
              <a href="#about" className="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">About</a>
              <a href="#menu" className="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">Menu</a>
              <a href="#contact" className="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">Contact</a>
              <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                Reserve Table
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">Home</a>
            <a href="#about" className="block text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">About</a>
            <a href="#menu" className="block text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">Menu</a>
            <a href="#contact" className="block text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">Contact</a>
            <button className="w-full bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
              Reserve Table
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}