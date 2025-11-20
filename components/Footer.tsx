import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200 py-20 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="block mb-8 group">
              <span className="font-serif text-4xl md:text-5xl text-white block mb-2 group-hover:text-stone-300 transition-colors">Four Brothers</span>
              <span className="text-xs font-bold tracking-[0.3em] text-stone-500 uppercase group-hover:text-stone-400 transition-colors">Outdoors</span>
            </Link>
            <p className="text-stone-400 font-light leading-relaxed max-w-sm mb-8">
              Crafting outdoor sanctuaries for the modern home. Built on friendship, driven by design.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-800 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">Now Booking 2025</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white font-serif text-xl mb-8">Explore</h4>
            <ul className="space-y-6">
              {[
                { name: 'Services', href: '/#services' },
                { name: 'About', href: '/#about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-stone-400 hover:text-white transition-colors tracking-wide flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-stone-500 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white font-serif text-xl mb-8">Inquiries</h4>
            <div className="space-y-6 text-stone-400 font-light">
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-[0.2em] text-stone-600 uppercase mb-2">Location</span>
                <span className="text-white">North Carolina</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-[0.2em] text-stone-600 uppercase mb-2">Phone</span>
                <a href="tel:5551234567" className="text-white hover:text-stone-300 transition-colors">(555) 123-4567</a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-[0.2em] text-stone-600 uppercase mb-2">Email</span>
                <a href="mailto:hello@fourbrothers.com" className="text-white hover:text-stone-300 transition-colors">hello@fourbrothers.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600 tracking-widest uppercase">
          <p>&copy; 2025 Four Brothers Outdoors.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-stone-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-stone-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* Decorative 'iv' */}
      <div className="absolute -bottom-20 -right-10 pointer-events-none select-none">
        <span className="font-serif text-[15rem] md:text-[20rem] leading-none text-stone-800/20 italic">iv</span>
      </div>
    </footer>
  );
}
