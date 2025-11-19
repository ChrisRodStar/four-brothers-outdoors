'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
          }`}
      >
        {/* Gradient Border Bottom (only when scrolled) */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-200 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'
            }`}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="group relative flex items-center gap-3 z-[60]">
              <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 overflow-hidden ${(scrolled || mobileMenuOpen)
                ? 'bg-white/10 backdrop-blur-md'
                : 'bg-white/10 backdrop-blur-md border border-white/20'
                }`}>
                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-black bg-clip-text text-transparent leading-none transition-all duration-300 ${(scrolled || mobileMenuOpen)
                  ? 'bg-gradient-to-r from-green-700 to-teal-700'
                  : 'bg-gradient-to-r from-white via-green-100 to-white'
                  }`}>
                  Four Brothers
                </span>
                <span className={`text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${(scrolled || mobileMenuOpen) ? 'text-gray-500' : 'text-green-100'
                  }`}>
                  Outdoors
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-colors relative group py-2 ${scrolled
                    ? 'text-gray-600 hover:text-green-700'
                    : 'text-green-50 hover:text-white'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-green-600' : 'bg-white'
                    }`}></span>
                </a>
              ))}

              <a
                href="tel:5551234567"
                className={`px-6 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all duration-300 flex items-center gap-2 ${scrolled
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 hover:-translate-y-0.5'
                  : 'bg-white text-green-900 hover:bg-green-50 hover:-translate-y-0.5'
                  }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (555) 123-4567
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors z-[60] relative ${(scrolled || mobileMenuOpen) ? 'text-gray-600 hover:text-green-700' : 'text-white hover:text-green-200'
                }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span
                  className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
                    }`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[55] md:hidden flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-600 hover:text-green-700 transition-colors z-[60]"
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col items-center gap-8 w-full px-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-black text-gray-800 hover:text-green-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:5551234567"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-3"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
