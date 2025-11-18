export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Lawn Care & Maintenance',
      description: 'Professional mowing, edging, fertilization, and seasonal maintenance to keep your lawn healthy and beautiful.',
      items: ['Weekly/Bi-weekly Mowing', 'Fertilization Programs', 'Weed Control'],
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      number: '02',
      title: 'Landscape Design',
      description: 'Custom landscape design and installation with native plants, trees, shrubs, and garden beds.',
      items: ['Custom Design Plans', 'Plant Selection & Installation', 'Mulching & Edging'],
      gradient: 'from-emerald-600 to-teal-700'
    },
    {
      number: '03',
      title: 'Hardscaping',
      description: 'Patios, walkways, retaining walls, and outdoor structures built to last.',
      items: ['Paver Patios & Walkways', 'Retaining Walls', 'Outdoor Kitchens'],
      gradient: 'from-teal-600 to-cyan-700'
    },
    {
      number: '04',
      title: 'Irrigation Systems',
      description: 'Efficient irrigation design, installation, and maintenance for optimal water management.',
      items: ['Sprinkler Installation', 'Drip Irrigation', 'System Repairs'],
      gradient: 'from-green-700 to-emerald-800'
    },
    {
      number: '05',
      title: 'Seasonal Services',
      description: 'Year-round care including spring cleanup, fall leaf removal, and winter preparation.',
      items: ['Spring/Fall Cleanup', 'Leaf Removal', 'Snow Removal'],
      gradient: 'from-emerald-700 to-green-800'
    },
    {
      number: '06',
      title: 'Tree & Shrub Care',
      description: 'Professional pruning, trimming, and health care for trees and shrubs.',
      items: ['Pruning & Trimming', 'Tree Removal', 'Disease Treatment'],
      gradient: 'from-teal-700 to-emerald-800'
    }
  ];

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.08),transparent_40%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-40 left-[8%] w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-60 right-[12%] w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-green-600 rounded-full"></div>
            <span className="text-green-700 font-bold text-sm uppercase tracking-widest">What We Do</span>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-green-600 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive landscaping solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid - Staggered Masonry */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative ${idx % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-8'}`}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500`}></div>

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent overflow-hidden">
                {/* Circular Number Badge */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <span className="text-white text-2xl font-black">{service.number}</span>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 rounded-br-[3rem]`}></div>

                {/* Content */}
                <div className="relative pt-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-green-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Items - Pill Style */}
                  <div className="space-y-2">
                    {service.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-3xl opacity-30 blur-2xl"></div>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              Get Your Free Quote
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
