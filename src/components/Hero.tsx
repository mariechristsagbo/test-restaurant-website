import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Gusto</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Experience the art of fine dining with our carefully crafted menu and exceptional service</p>
        <button className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-700 transition-colors">
          Reserve Your Table
        </button>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
}