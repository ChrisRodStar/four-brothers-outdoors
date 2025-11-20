'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import Image from 'next/image';

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Always use dark text/elements because the nav sits on a light background (Hero top padding)
  const textColor = 'text-stone-900';
  const logoFilter = ''; // No filter, use original logo
  const buttonStyle = 'bg-stone-900 text-white hover:bg-stone-800';

  const finalNavClass = (scrolled || mobileMenuOpen)
    ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
    : 'bg-transparent py-6';

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${finalNavClass}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group z-[60]">
              <div className={`relative w-10 h-10 md:w-12 md:h-12 transition-all duration-500 group-hover:scale-105 ${logoFilter}`}>
                <Image
                  src="/logo-new.png"
                  alt="Four Brothers Outdoors"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className={`flex flex-col transition-colors duration-500 ${textColor}`}>
                <span className="font-serif text-lg md:text-xl font-bold leading-none">Four Brothers</span>
                <span className="text-[0.6rem] md:text-[0.7rem] font-sans font-bold tracking-[0.2em] uppercase opacity-90">Outdoors</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-70 ${textColor}`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                className={`px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-transparent ${buttonStyle}`}
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 z-[60] ${mobileMenuOpen ? 'text-stone-900' : textColor}`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-[#F2F0E9] transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-4 p-2 text-stone-900 hover:text-stone-600 transition-colors z-[60]"
          aria-label="Close menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span className="block w-full h-0.5 bg-current rotate-45 translate-y-2"></span>
            <span className="block w-full h-0.5 bg-current opacity-0"></span>
            <span className="block w-full h-0.5 bg-current -rotate-45 -translate-y-2"></span>
          </div>
        </button>

        <div className="flex flex-col h-full pt-32 px-8 pb-8">
          <div className="flex flex-col gap-8 items-center justify-center flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-4xl md:text-5xl text-stone-900 hover:text-stone-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-8 py-4 bg-stone-900 text-white rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <div className="text-center text-stone-400 text-xs tracking-widest uppercase">
            © 2025 Four Brothers Outdoors
          </div>
        </div>
      </div>
    </>
  );
}
