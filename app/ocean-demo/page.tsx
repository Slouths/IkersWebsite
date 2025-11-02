'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function OceanHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070',
      title: 'Professional Diving Equipment Service',
      subtitle: 'Expert maintenance and repair for all your diving gear'
    },
    {
      url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070',
      title: 'Certified Technicians',
      subtitle: 'Official Poseidon Service Center with factory-trained specialists'
    },
    {
      url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2074',
      title: 'Complete Equipment Solutions',
      subtitle: 'From regulators to rebreathers, we service it all'
    },
    {
      url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070',
      title: 'Trusted by Professionals',
      subtitle: 'Serving dive teams, fire departments, and special forces worldwide'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <div>
      {/* Auto-Scrolling Hero Carousel */}
      <section className="relative w-full h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/60 via-[#001f3f]/40 to-[#001f3f]/80"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
              <div className="max-w-5xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                  {image.title}
                </h1>
                <p className="text-xl md:text-3xl text-white/90 mb-12 drop-shadow-lg">
                  {image.subtitle}
                </p>
                <div className="flex gap-6 justify-center flex-wrap">
                  <Link href="/services" className="btn text-lg px-10 py-4">
                    Our Services
                  </Link>
                  <Link href="/contact" className="btn text-lg px-10 py-4">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Wave SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#001f3f"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Dark Section - About with Ocean Gradient */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #001f3f 0%, #003d5c 100%)' }}>
        <div className="content-container text-section-center py-24 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">The New Generation of Diving Services</h2>
          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto text-white/90">
            At BullDiving, we provide <strong>unparalleled service and expertise</strong> with certified technicians who specialize
            in maintaining and repairing professional diving equipment.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-white/90">
            From regulators and drysuits to CCRs and emergency breathing systems, we handle everything with the
            <strong> highest standards of quality and precision</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="text-6xl font-bold mb-2 text-white">15+</div>
              <p className="text-lg text-white/80">Years Experience</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="text-6xl font-bold mb-2 text-white">1000+</div>
              <p className="text-lg text-white/80">Equipment Serviced</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="text-6xl font-bold mb-2 text-white">100%</div>
              <p className="text-lg text-white/80">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Bubble decorations */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Light Section - Services with Ocean Theme */}
      <section className="section-light relative">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#001f3f]">Comprehensive Equipment Services</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We specialize in maintaining mission-critical diving equipment for individual divers, professional teams,
              fire departments, and specialized underwater units.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Regulators',
                desc: 'Official Poseidon Service Center. Full maintenance for all brands.',
                link: '/services/regulators'
              },
              {
                title: 'Drysuits',
                desc: 'Complete repair and restoration for diving and surface drysuits.',
                link: '/services/drysuits'
              },
              {
                title: 'CCR',
                desc: 'Authorized rebreather servicing. Poseidon Pro Academy specialists.',
                link: '/services/ccr'
              },
              {
                title: 'BCD',
                desc: 'Wing and jacket maintenance for all configurations.',
                link: '/services/bcd'
              },
              {
                title: 'Tanks',
                desc: 'Inspection, testing, and valve maintenance.',
                link: '/services/tanks'
              },
              {
                title: 'EBS',
                desc: 'Emergency breathing system maintenance.',
                link: '/services/ebs'
              },
              {
                title: 'Surface Gear',
                desc: 'Kayaking, kitesurfing, and water rescue equipment.',
                link: '/services/surface-drysuits'
              },
              {
                title: 'Full Service',
                desc: 'Complete gear checks and comprehensive maintenance.',
                link: '/services'
              }
            ].map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="group relative bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-[#001f3f] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#001f3f]/5 to-transparent rounded-bl-full"></div>
                <h3 className="text-xl font-bold mb-3 text-[#001f3f] relative z-10">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{service.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-solid">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Section - Why Choose Us with Underwater Theme */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #003d5c 0%, #001f3f 100%)' }}>
        <div className="content-container py-24 relative z-10">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Why Choose BullDiving?</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              Your safety underwater depends on perfectly maintained equipment. We don't compromise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-t-4 border-white/50 overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/60 to-transparent"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">Certified Technicians</h3>
              <p className="text-lg leading-relaxed text-white/80">
                Our team includes factory-certified technicians trained by leading manufacturers. Official Poseidon Service Center
                with expertise across all major brands.
              </p>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-t-4 border-white/50 overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/60 to-transparent"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">Complete Transparency</h3>
              <p className="text-lg leading-relaxed text-white/80">
                Follow your equipment's entire service journey through shared photo documentation. See every step from
                initial diagnosis to final testing.
              </p>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-t-4 border-white/50 overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/60 to-transparent"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">Fast Turnaround</h3>
              <p className="text-lg leading-relaxed text-white/80">
                Most services completed within 30 days. We understand you need your gear mission-ready. Rush service
                available for professional teams.
              </p>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-t-4 border-white/50 overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/60 to-transparent"></div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quality Guarantee</h3>
              <p className="text-lg leading-relaxed text-white/80">
                60-day satisfaction guarantee on all services. If our work doesn't meet your expectations, we'll adjust
                or re-repair at no additional cost.
              </p>
            </div>
          </div>
        </div>

        {/* Underwater light rays effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-white to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-white to-transparent transform -skew-x-12"></div>
        </div>
      </section>

      {/* Light Section - Who We Serve */}
      <section className="section-light">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#001f3f]">Trusted by Professionals</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            We provide comprehensive maintenance for equipment used by the world's most demanding diving professionals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Individual Divers', desc: 'Recreational and technical diving enthusiasts' },
              { title: 'Fire Departments', desc: 'Emergency response diving teams' },
              { title: 'Special Forces', desc: 'Military underwater operations units' },
              { title: 'GEAS', desc: 'Specialized Underwater Activities Group, Guardia Civil' },
              { title: 'Diving Centers', desc: 'Professional schools and clubs' },
              { title: 'Commercial Divers', desc: 'Professional diving companies' }
            ].map((client) => (
              <div key={client.title} className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border-l-4 border-[#001f3f] hover:shadow-2xl transition-all overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#001f3f]/5 to-transparent rounded-bl-full"></div>
                <h3 className="text-xl font-bold mb-2 text-[#001f3f] relative z-10">{client.title}</h3>
                <p className="text-gray-600 relative z-10">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Section - CTA with Ocean Depth Effect */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #001f3f 0%, #001529 100%)' }}>
        <div className="content-container text-section-center py-24 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Service Your Gear?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Contact us today for a detailed quote. No maintenance will be carried out without your approval.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="font-semibold mb-1 text-sm uppercase tracking-wider text-white/70">Email</p>
              <p className="text-lg font-medium text-white">info@bulldiving.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="font-semibold mb-1 text-sm uppercase tracking-wider text-white/70">Phone</p>
              <p className="text-lg font-medium text-white">+34 955 467 119</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="font-semibold mb-1 text-sm uppercase tracking-wider text-white/70">WhatsApp</p>
              <p className="text-lg font-medium text-white">+34 747 41 85 10</p>
            </div>
          </div>

          <Link href="/contact" className="btn text-lg px-10 py-4">
            Get Your Free Quote
          </Link>
        </div>

        {/* Ocean floor effect */}
        <div className="absolute bottom-0 left-0 w-full opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path
              fill="#000"
              fillOpacity="0.3"
              d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  )
}
