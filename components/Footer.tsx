export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Wavy Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative pt-16">
        {/* Diagonal Split Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-green-900 to-teal-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="absolute iadial-gradient(circle_at_70%_80%,rgba(6,78,59,0.4),transparent_50%)]"></div>

        {/* Animated Floating Orbs */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Middle Section - Asymmetric Grid */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Left Column - Brand */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-20 blur-2xl"></div>
                <h3 className="text-5xl font-black mb-3 bg-gradient-to-r from-green-300 via-emerald-200 to-teal-300 bg-clip-text text-transparent">
                  Four Brothers
                </h3>
                <p className="text-2xl text-green-300 font-light mb-6 italic">Outdoors</p>
                <p className="text-green-100 text-lg leading-relaxed">
                  Transforming outdoor spaces with quality work and dependable service since 2025.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Cards */}
            <div className="lg:col-span-7 space-y-6 hidden lg:block">
              {/* Phone Card */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 shadow-2xl transform hover:translate-x-4 transition-all duration-300 border-l-8 border-white/30">
                <div>
                  <p className="text-green-100 text-sm font-semibold uppercase tracking-wider mb-2">Call Anytime</p>
                  <a href="tel:5551234567" className="text-white text-3xl font-black hover:text-green-100 transition">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 shadow-2xl transform hover:translate-x-4 transition-all duration-300 border-l-8 border-white/30">
                <div>
                  <p className="text-teal-100 text-sm font-semibold uppercase tracking-wider mb-2">Email Us</p>
                  <a href="mailto:info@fourbrothersoutdoors.com" className="text-white text-xl font-bold hover:text-teal-100 transition break-all">
                    info@fourbrothersoutdoors.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gradient-to-r from-emerald-700 to-green-700 rounded-2xl p-8 shadow-2xl transform hover:translate-x-4 transition-all duration-300 border-l-8 border-white/30">
                <div>
                  <p className="text-emerald-100 text-sm font-semibold uppercase tracking-wider mb-2">Visit Us</p>
                  <p className="text-white text-xl font-bold">123 Main Street</p>
                  <p className="text-emerald-100 text-lg">Your City, ST 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Zigzag Links */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px top-1/2"></div>

            <div className="relative flex flex-wrap justify-center items-center gap-8 py-12">
              {['Lawn Care', 'Design', 'Hardscaping', 'Irrigation', 'Seasonal', 'Tree Care'].map((service, idx) => (
                <a
                  key={idx}
                  href="/#services"
                  className="group relative px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-green-400 transition-all duration-300"
                  style={{
                    transform: `translateY(${idx % 2 === 0 ? '-8px' : '8px'})`
                  }}
                >
                  <span className="text-green-200 group-hover:text-white font-semibold transition-colors">
                    {service}
                  </span>
                  <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/10 rounded-full blur-xl transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright - Centered with Decorative Elements */}
          <div className="text-center pt-12 relative">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-green-400"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-green-400"></div>
            </div>
            <p className="text-green-300 text-sm font-medium">
              © 2025 Four Brothers Outdoors. All rights reserved.
            </p>
            <p className="text-green-400/60 text-xs mt-2">
              Crafted for beautiful landscapes
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-2 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600"></div>
    </footer>
  );
}
