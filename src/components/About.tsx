import React from 'react';
import { ChefHat, Clock, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 1995, Gusto has been serving exceptional cuisine that combines traditional flavors with modern techniques. Our passion for quality ingredients and innovative cooking methods has earned us recognition as one of the city's premier dining destinations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every dish is crafted with care by our team of expert chefs, led by renowned Chef Maria Rodriguez, whose culinary expertise has been recognized with multiple awards.
            </p>
            <div className="flex space-x-8 pt-6">
              <div className="text-center">
                <ChefHat size={32} className="mx-auto text-amber-600 mb-2" />
                <p className="font-medium">Expert Chefs</p>
              </div>
              <div className="text-center">
                <Clock size={32} className="mx-auto text-amber-600 mb-2" />
                <p className="font-medium">Fresh Daily</p>
              </div>
              <div className="text-center">
                <Award size={32} className="mx-auto text-amber-600 mb-2" />
                <p className="font-medium">Award Winning</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Chef preparing food"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-amber-600">25+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}