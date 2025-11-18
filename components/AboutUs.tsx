export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,150,105,0.06),transparent_50%)]"></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-[5%] w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <div className="relative">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-gradient-to-r from-green-600 to-transparent rounded-full"></div>
                <span className="text-green-700 font-bold text-sm uppercase tracking-widest">About Us</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Your New<br />
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Landscaping Partner
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                Four Brothers Outdoors is a family-owned and operated landscaping company launching in 2025. We&rsquo;re dedicated to transforming outdoor spaces into beautiful, functional environments with passion, expertise, and attention to detail.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a new business, we&rsquo;re eager to build lasting relationships with our community. We bring fresh energy, modern techniques, and a commitment to excellence. From residential lawns to commercial properties, we&rsquo;ll treat every project as if it were our own.
              </p>
            </div>

            {/* Stats - Diagonal Layout */}
            <div className="flex gap-6 mb-10">
              <div className="relative group">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="text-5xl font-black text-white mb-2">2025</div>
                  <div className="text-green-100 font-semibold text-sm">Now Accepting Clients</div>
                </div>
                <div className="absolute -inset-1 bg-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative group mt-8">
                <div className="bg-gradient-to-br from-teal-600 to-cyan-700 p-8 rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="text-5xl font-black text-white mb-2">100%</div>
                  <div className="text-teal-100 font-semibold text-sm">Satisfaction Focus</div>
                </div>
                <div className="absolute -inset-1 bg-teal-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Features - Staggered Cards */}
            <div className="space-y-4">
              <div className="group bg-white/60 backdrop-blur-sm border-l-4 border-green-600 p-6 rounded-r-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:translate-x-2">
                <h4 className="font-black text-gray-900 mb-2 text-lg">Family Owned & Operated</h4>
                <p className="text-gray-600">Local business dedicated to serving our community</p>
              </div>

              <div className="group bg-white/60 backdrop-blur-sm border-l-4 border-emerald-600 p-6 rounded-r-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:translate-x-2 ml-6">
                <h4 className="font-black text-gray-900 mb-2 text-lg">Quality Guarantee</h4>
                <p className="text-gray-600">We stand behind our work with a satisfaction guarantee</p>
              </div>

              <div className="group bg-white/60 backdrop-blur-sm border-l-4 border-teal-600 p-6 rounded-r-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:translate-x-2 ml-12">
                <h4 className="font-black text-gray-900 mb-2 text-lg">Eco-Friendly Practices</h4>
                <p className="text-gray-600">Sustainable landscaping solutions that protect the environment</p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="relative">
            {/* Decorative Background Elements */}
            <div className="absolute -inset-8 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-500 rounded-[3rem] opacity-20 blur-3xl"></div>

            {/* Main CTA Card */}
            <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 rounded-[2.5rem] p-12 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0yNCAzNmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTYiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 rounded-[2.5rem]"></div>

              <div className="relative">
                <h3 className="text-4xl font-black mb-4 leading-tight">Ready to Get Started?</h3>
                <p className="text-green-50 mb-10 text-lg leading-relaxed">
                  Get a free, no-obligation quote for your landscaping project. We&rsquo;ll work with you to bring your vision to life.
                </p>

                {/* Benefits - Pill Style */}
                <div className="space-y-3 mb-10">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white font-semibold">Free Consultation & Estimate</span>
                  </div>
                  <br />
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="text-white font-semibold">Competitive Pricing</span>
                  </div>
                  <br />
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="text-white font-semibold">Fast Response Time</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="group relative block w-full text-center bg-white text-green-700 px-8 py-5 rounded-2xl font-black hover:bg-green-50 transition-all shadow-2xl text-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Request Free Quote
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Floating Accent Orbs */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl"></div>
            </div>

            {/* Additional Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
