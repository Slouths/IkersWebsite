import Link from 'next/link'

export default function AccessoriesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2070)',
          minHeight: '400px'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title mb-4">Diving Accessories</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Complete your diving setup with quality accessories and safety equipment
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything You Need</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              From safety equipment to maintenance tools, we stock a comprehensive range of diving accessories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                category: 'Safety Equipment',
                items: ['Surface markers', 'Cutting tools', 'Dive lights', 'Whistles & signals']
              },
              {
                category: 'Maintenance Tools',
                items: ['Service kits', 'O-rings', 'Lubricants', 'Repair tools']
              },
              {
                category: 'Bags & Cases',
                items: ['Gear bags', 'Regulator bags', 'Drysuit bags', 'Travel cases']
              },
              {
                category: 'Exposure Protection',
                items: ['Gloves', 'Hoods', 'Booties', 'Thermal wear']
              },
              {
                category: 'Instruments',
                items: ['Compasses', 'Depth gauges', 'Tank pressure gauges', 'Consoles']
              },
              {
                category: 'Weights & Mounting',
                items: ['Weight belts', 'Integrated weights', 'D-rings', 'Mounting brackets']
              },
              {
                category: 'Snorkeling Gear',
                items: ['Snorkels', 'Snorkel masks', 'Fins', 'Vests']
              },
              {
                category: 'Specialty Items',
                items: ['Underwater cameras', 'Slates', 'Reels', 'Lift bags']
              }
            ].map((category) => (
              <div key={category.category} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-brand">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Need something specific? We can source hard-to-find items.
            </p>
            <Link href="/contact" className="btn-solid text-lg px-10 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Section - Maintenance Kits */}
      <section className="section-dark">
        <div className="content-container">
          <div className="text-section-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Maintenance & Service Kits</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Keep your equipment in top condition with manufacturer-approved service kits and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Regulator Kits</h3>
              <p className="text-lg leading-relaxed">
                Genuine manufacturer service kits for all major brands. O-rings, seats, and components.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Drysuit Repair</h3>
              <p className="text-lg leading-relaxed">
                Seals, adhesives, patches, and tools for drysuit maintenance and emergency repairs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold mb-4">BCD Parts</h3>
              <p className="text-lg leading-relaxed">
                Inflator valves, dump valves, bladders, and accessories for all BCD configurations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

