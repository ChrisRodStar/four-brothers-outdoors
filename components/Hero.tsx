'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#F2F0E9] px-2 pb-2 pt-24 md:px-4 md:pb-4 md:pt-28 lg:px-6 lg:pb-6 lg:pt-32 flex flex-col overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        .font-serif-custom {
          font-family: 'Playfair Display', serif;
        }
      `}</style>



      {/* Main Image Container */}
      <div className="relative flex-1 rounded-[2rem] overflow-hidden group isolate">
        {/* Background Image with Parallax-like Scale */}
        <div className="absolute inset-0 bg-stone-900">
          <Image
            src="/hero-new.png"
            alt="Luxury Landscaping"
            fill
            priority
            className={`object-cover transition-transform duration-[2000ms] ease-out ${loaded ? 'scale-100' : 'scale-110'} group-hover:scale-105 opacity-90`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
          <div className={`transition-all duration-1000 delay-300 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-white/80 mb-4 uppercase">
              Est. 2025
            </h2>
          </div>

          <div className="relative">
            <h1 className={`font-serif-custom text-5xl md:text-7xl lg:text-9xl leading-[0.9] mb-6 transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <span className="block italic font-light">Four</span>
              <span className="block font-semibold mt-2">Brothers</span>
            </h1>

            {/* Decorative Lines */}
            <div className={`absolute -left-12 top-1/2 w-8 h-[1px] bg-white/40 hidden md:block transition-all duration-1000 delay-700 ${loaded ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
            <div className={`absolute -right-12 top-1/2 w-8 h-[1px] bg-white/40 hidden md:block transition-all duration-1000 delay-700 ${loaded ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
          </div>

          <p className={`text-lg md:text-xl font-light tracking-wide max-w-lg text-white/90 transition-all duration-1000 delay-700 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Crafting outdoor sanctuaries for the modern home.
          </p>
        </div>

        {/* Bottom Left CTA */}
        <div className={`absolute bottom-8 left-6 md:bottom-12 md:left-12 z-20 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="/contact"
            className="group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-white hover:text-green-900 transition-all duration-300"
          >
            <span className="font-bold text-xs md:text-sm tracking-widest uppercase">Start Your Project</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Bottom Right Services */}
        <div className={`absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20 text-right hidden md:block transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col gap-2">
            {['Design', 'Hardscape', 'Maintenance'].map((service) => (
              <div key={service} className="flex items-center justify-end gap-3 group cursor-pointer">
                <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{service}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Frame Meta */}
      <div className="flex justify-between items-center px-2 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-800 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold tracking-[0.2em] text-stone-600 uppercase">Now Booking 2025</span>
        </div>
        <div className="hidden md:block">
          <span className="text-xs font-bold tracking-[0.2em] text-stone-600 uppercase">North Carolina</span>
        </div>
      </div>
    </section>
  );
}
