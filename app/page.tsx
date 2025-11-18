export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">4B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Four Brothers Outdoors</h1>
                <p className="text-xs text-gray-600">Professional Landscaping</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-700 transition font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-green-700 transition font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-700 transition font-medium">Contact</a>
            </div>
            <a href="tel:5551234567" className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition font-semibold shadow-lg hover:shadow-xl">
              (555) 123-4567
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0yNCAzNmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTYiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto pt-20">
          <div className="text-center text-white">
            <div className="inline-block mb-4 px-4 py-2 bg-green-600/30 backdrop-blur-sm rounded-full border border-green-400/30">
              <span className="text-green-100 font-medium">🌱 Now Accepting New Clients for 2025</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your<br />
              <span className="text-green-300">Outdoor Paradise</span>
            </h2>
            <p className="text-xl md:text-2xl text-green-50 mb-10 max-w-3xl mx-auto leading-relaxed">
              Professional landscaping, lawn care, and outdoor design services. Let's create beautiful spaces where memories are made.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#contact" className="bg-white text-green-800 px-10 py-5 rounded-xl text-lg font-bold hover:bg-green-50 transition shadow-2xl hover:scale-105 transform">
                Get Free Quote →
              </a>
              <a href="tel:5551234567" className="border-2 border-white text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white/10 transition backdrop-blur-sm">
                📞 Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-green-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Family Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Quality Workmanship</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive landscaping solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Lawn Care & Maintenance</h3>
              <p className="text-gray-600 mb-4">Professional mowing, edging, fertilization, and seasonal maintenance to keep your lawn healthy and beautiful.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Weekly/Bi-weekly Mowing</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Fertilization Programs</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Weed Control</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-3xl">🌳</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Landscape Design</h3>
              <p className="text-gray-600 mb-4">Custom landscape design and installation with native plants, trees, shrubs, and garden beds.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Custom Design Plans</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Plant Selection & Installation</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Mulching & Edging</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-3xl">🏡</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Hardscaping</h3>
              <p className="text-gray-600 mb-4">Patios, walkways, retaining walls, and outdoor structures built to last.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Paver Patios & Walkways</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Retaining Walls</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Outdoor Kitchens</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-3xl">💧</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Irrigation Systems</h3>
              <p className="text-gray-600 mb-4">Efficient irrigation design, installation, and maintenance for optimal water management.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Sprinkler Installation</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Drip Irrigation</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> System Repairs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-3xl">🍂</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Seasonal Services</h3>
              <p className="text-gray-600 mb-4">Year-round care including spring cleanup, fall leaf removal, and winter preparation.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Spring/Fall Cleanup</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Leaf Removal</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Snow Removal</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-3xl">✂️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Tree & Shrub Care</h3>
              <p className="text-gray-600 mb-4">Professional pruning, trimming, and health care for trees and shrubs.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Pruning & Trimming</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Tree Removal</li>
                <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Disease Treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* About/Why Choose Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Your New Landscaping Partner</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Four Brothers Outdoors is a family-owned and operated landscaping company launching in 2025. We're dedicated to transforming outdoor spaces into beautiful, functional environments with passion, expertise, and attention to detail.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As a new business, we're eager to build lasting relationships with our community. We bring fresh energy, modern techniques, and a commitment to excellence. From residential lawns to commercial properties, we'll treat every project as if it were our own.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-4xl font-bold text-green-700 mb-2">2025</div>
                  <div className="text-gray-600 font-medium">Now Accepting Clients</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-4xl font-bold text-green-700 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Satisfaction Focus</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Family Owned & Operated</h4>
                    <p className="text-gray-600">Local business dedicated to serving our community</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Guarantee</h4>
                    <p className="text-gray-600">We stand behind our work with a satisfaction guarantee</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Eco-Friendly Practices</h4>
                    <p className="text-gray-600">Sustainable landscaping solutions that protect the environment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-green-50 mb-8 text-lg">
                  Get a free, no-obligation quote for your landscaping project. We'll work with you to bring your vision to life.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <span>📋</span>
                    </div>
                    <span className="text-green-50">Free Consultation & Estimate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <span>💰</span>
                    </div>
                    <span className="text-green-50">Competitive Pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <span>⚡</span>
                    </div>
                    <span className="text-green-50">Fast Response Time</span>
                  </div>
                </div>

                <a href="#contact" className="block w-full text-center bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition shadow-lg text-lg">
                  Request Free Quote
                </a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-300 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Let's Start Your Project</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your outdoor space? Get in touch for a free consultation and estimate.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Call Us</h3>
              <a href="tel:5551234567" className="text-green-700 text-lg font-semibold hover:text-green-800">(555) 123-4567</a>
              <p className="text-gray-600 text-sm mt-2">Mon-Sat: 7AM-6PM</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✉️</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@fourbrothersoutdoors.com" className="text-green-700 font-semibold hover:text-green-800 break-all">info@fourbrothersoutdoors.com</a>
              <p className="text-gray-600 text-sm mt-2">We respond within 24 hours</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700 font-semibold">123 Main Street</p>
              <p className="text-gray-600 text-sm mt-2">Your City, ST 12345</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request a Free Quote</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition">
                  <option>Select a service...</option>
                  <option>Lawn Care & Maintenance</option>
                  <option>Landscape Design</option>
                  <option>Hardscaping</option>
                  <option>Irrigation Systems</option>
                  <option>Seasonal Services</option>
                  <option>Tree & Shrub Care</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full bg-green-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                Send Message →
              </button>

              <p className="text-center text-sm text-gray-600">
                By submitting this form, you agree to be contacted by Four Brothers Outdoors
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4B</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Four Brothers Outdoors</h3>
                  <p className="text-green-200 text-sm">Professional Landscaping</p>
                </div>
              </div>
              <p className="text-green-100 mb-6 max-w-md">
                Transforming outdoor spaces with quality craftsmanship, reliable service, and family values.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <span>f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <span>in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <span>ig</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-green-100 hover:text-white transition">Services</a></li>
                <li><a href="#about" className="text-green-100 hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="text-green-100 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-start gap-2">
                  <span className="text-green-300">📞</span>
                  <a href="tel:5551234567" className="hover:text-white transition">(555) 123-4567</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✉️</span>
                  <a href="mailto:info@fourbrothersoutdoors.com" className="hover:text-white transition break-all">info@fourbrothersoutdoors.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">📍</span>
                  <span>123 Main Street<br />Your City, ST 12345</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700/50 pt-8 text-center">
            <p className="text-green-200 text-sm">
              © 2025 Four Brothers Outdoors. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
