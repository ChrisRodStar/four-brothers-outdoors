'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Gradient Background with Mouse Parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 transition-all duration-1000"
        style={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`
        }}
      >
        {/* Layered Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,150,105,0.15),transparent_70%)]"></div>

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0yNCAzNmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTYiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-[10%] w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-[15%] w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-bold tracking-wide">Now Accepting 2025 Projects</span>
            </div>

            {/* Main Heading - Massive & Bold */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[0.95]">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-green-300 via-emerald-200 to-teal-300 bg-clip-text text-transparent">
                  Outdoor Space
                </span>
              </h1>
              <div className="h-2 w-32 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-green-50 leading-relaxed max-w-xl">
              Professional landscaping services that bring your vision to life. From lawn care to complete outdoor transformations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group relative overflow-hidden bg-white text-green-900 px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Free Quote
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="tel:5551234567"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="hidden sm:inline">Call</span>
                  (555) 123-4567
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-2xl font-black text-white">✓</span>
                </div>
                <div>
                  <div className="text-white font-black text-lg">Family Owned</div>
                  <div className="text-green-200 text-sm">Local business</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-2xl font-black text-white">★</span>
                </div>
                <div>
                  <div className="text-white font-black text-lg">Quality Work</div>
                  <div className="text-green-200 text-sm">100% Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Service Cards in Unique Layout */}
          <div className="relative">
            {/* Decorative Glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 rounded-[3rem] opacity-20 blur-3xl"></div>

            {/* Cards Grid - Asymmetric */}
            <div className="relative grid grid-cols-2 gap-4">
              {/* Card 1 - Large */}
              <div className="col-span-2 group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl font-black text-white text-xl">
                  01
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Lawn Care & Maintenance</h3>
                <p className="text-green-100 text-sm leading-relaxed">Professional mowing, edging, and seasonal care</p>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-xl font-black text-white text-sm">
                  02
                </div>
                <h3 className="text-xl font-black text-white mb-2">Landscape Design</h3>
                <p className="text-green-100 text-xs">Custom outdoor plans</p>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl font-black text-white text-sm">
                  03
                </div>
                <h3 className="text-xl font-black text-white mb-2">Hardscaping</h3>
                <p className="text-green-100 text-xs">Patios & walkways</p>
              </div>

              {/* Card 4 - Wide */}
              <div className="col-span-2 group relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl font-black text-white text-sm">
                  04
                </div>
                <h3 className="text-xl font-black text-white mb-2">Irrigation & Seasonal Services</h3>
                <p className="text-green-100 text-sm">Complete year-round outdoor care solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
