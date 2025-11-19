'use client';

import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: '01',
      title: 'Lawn Care & Maintenance',
      description: 'The foundation of a pristine property. We provide comprehensive care programs tailored to the specific needs of your turf, ensuring lush, vibrant growth year-round.',
      features: ['Weekly Precision Mowing', 'Organic Fertilization', 'Aeration & Overseeding', 'Weed Control'],
      image: '/service-lawn.png'
    },
    {
      id: '02',
      title: 'Landscape Design',
      description: 'Visionary planning for your outdoor sanctuary. Our landscape architects blend horticulture with high design to create spaces that are both functional and breathtaking.',
      features: ['3D Visualization', 'Native Plant Selection', 'Garden Architecture', 'Seasonal Color Planning'],
      image: '/service-design.png'
    },
    {
      id: '03',
      title: 'Hardscaping & Construction',
      description: 'Permanent elegance. From stone patios to retaining walls, we build the structural elements that define your outdoor living experience.',
      features: ['Stone Patios & Walkways', 'Retaining Walls', 'Outdoor Kitchens', 'Fire Features'],
      image: '/service-hardscape.png'
    }
  ];

  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-24 md:mb-32 text-center md:text-left">
          <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase block mb-4">Our Expertise</span>
          <h2 className="font-serif text-4xl md:text-6xl text-stone-900 leading-tight max-w-2xl">
            Cultivating beauty through <span className="italic text-stone-600">precision</span> and <span className="italic text-stone-600">design</span>.
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                {/* Decorative Offset Border */}
                <div className={`absolute -bottom-4 -right-4 w-full h-full border border-stone-200 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 ${index % 2 === 1 ? '-left-4 right-auto' : ''}`}></div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="flex items-baseline gap-4 border-b border-stone-200 pb-6">
                  <span className="font-serif text-5xl text-stone-200">{service.id}</span>
                  <h3 className="font-serif text-3xl md:text-4xl text-stone-900">{service.title}</h3>
                </div>

                <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-stone-800">
                      <span className="w-1.5 h-1.5 bg-green-700 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-stone-900 hover:text-green-800 transition-colors group">
                    Inquire
                    <span className="block w-8 h-[1px] bg-stone-900 group-hover:w-12 group-hover:bg-green-800 transition-all"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
