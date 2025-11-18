'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-xl'
        : 'bg-white/80 backdrop-blur-md shadow-lg'
    }`}>
      {/* Gradient Border */}
      <div className={`h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Gradient Style */}
          <a href="#" className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
            <div className="relative">
              <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Four Brothers Outdoors
              </h1>
              <p className="hidden sm:block text-xs text-gray-600 font-semibold tracking-wide">
                Professional Landscaping
              </p>
            </div>
          </a>



          {/* Call Button - Gradient */}
          <a
            href="tel:5551234567"
            className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="hidden sm:inline">Call</span>
              (555) 123-4567
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>


      </div>

      {/* Bottom Decorative Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </nav>
  );
}
