'use client';

export default function ContactUs() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(5,150,105,0.08),transparent_50%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-40 left-[5%] w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-[10%] w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header with Decorative Elements */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-green-600 rounded-full"></div>
            <span className="text-green-700 font-bold text-sm uppercase tracking-widest">Contact Us</span>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-green-600 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 bg-clip-text">
            Let&rsquo;s Start Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your outdoor space? Get in touch for a free consultation and estimate.
          </p>
        </div>

        {/* Contact Cards - Diagonal Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Phone Card */}
          <div className="group relative bg-gradient-to-br from-green-600 to-emerald-700 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
            <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <h3 className="font-black text-2xl text-white mb-3">Call Us</h3>
              <a href="tel:5551234567" className="text-white text-2xl font-bold hover:text-green-100 transition block mb-2">
                (555) 123-4567
              </a>
              <p className="text-green-100 text-sm font-medium">Mon&ndash;Sat: 7AM&ndash;6PM</p>
            </div>
            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-green-400/20 rounded-full blur-2xl"></div>
          </div>

          {/* Email Card */}
          <div className="group relative bg-gradient-to-br from-teal-600 to-cyan-700 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
            <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <h3 className="font-black text-2xl text-white mb-3">Email Us</h3>
              <a href="mailto:info@fourbrothersoutdoors.com" className="text-white text-lg font-bold hover:text-teal-100 transition block mb-2 break-all">
                info@fourbrothersoutdoors.com
              </a>
              <p className="text-teal-100 text-sm font-medium">We respond within 24 hours</p>
            </div>
            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl"></div>
          </div>

          {/* Location Card */}
          <div className="group relative bg-gradient-to-br from-emerald-700 to-green-800 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
            <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <h3 className="font-black text-2xl text-white mb-3">Visit Us</h3>
              <p className="text-white text-xl font-bold mb-1">123 Main Street</p>
              <p className="text-emerald-100 text-sm font-medium">Your City, ST 12345</p>
            </div>
            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Form Section - Unique Design */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative Background Elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-[3rem] opacity-20 blur-2xl"></div>

          <div className="relative bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl p-12 md:p-16 border border-white/50">
            {/* Form Header */}
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black text-gray-900 mb-3">
                Request a Free Quote
              </h3>
              <p className="text-gray-600">Fill out the form below and we&rsquo;ll get back to you soon</p>
            </div>

            <form className="space-y-6">
              {/* Name Fields - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-gray-900 font-medium"
                    placeholder="John"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-gray-900 font-medium"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-gray-900 font-medium"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-gray-900 font-medium"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Service Needed</label>
                <select
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-gray-900 font-medium appearance-none cursor-pointer"
                >
                  <option>Select a service...</option>
                  <option>Lawn Care & Maintenance</option>
                  <option>Landscape Design</option>
                  <option>Hardscaping</option>
                  <option>Irrigation Systems</option>
                  <option>Seasonal Services</option>
                  <option>Tree & Shrub Care</option>
                  <option>Other</option>
                </select>
                <div className="absolute right-6 top-[50px] pointer-events-none text-gray-400">▼</div>
              </div>

              {/* Project Details */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Project Details</label>
                <textarea
                  rows={6}
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all resize-none text-gray-900 font-medium"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Privacy Notice */}
              <p className="text-center text-sm text-gray-500 pt-4">
                By submitting this form, you agree to be contacted by Four Brothers Outdoors
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
