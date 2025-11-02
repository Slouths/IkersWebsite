import Link from 'next/link'

export default function DivingGearPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070)',
          minHeight: '400px'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title mb-4">Diving Gear Supply</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Premium diving equipment from the world's leading manufacturers
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional Diving Equipment</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We supply high-quality diving gear for recreational, technical, and professional divers. 
              All equipment meets international safety standards and comes with full manufacturer warranties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Regulators',
                description: 'First and second stage regulators from Poseidon, Scubapro, Apeks, and more.',
                features: ['High-performance', 'Cold water rated', 'Professional grade']
              },
              {
                title: 'BCDs & Wings',
                description: 'Buoyancy control devices for all diving configurations.',
                features: ['Recreational', 'Technical', 'Sidemount']
              },
              {
                title: 'Drysuits',
                description: 'Premium drysuits for cold water and technical diving.',
                features: ['Custom sizing', 'Durable materials', 'Professional fit']
              },
              {
                title: 'Masks & Fins',
                description: 'High-quality masks and fins for optimal performance.',
                features: ['Multiple styles', 'Professional grade', 'All sizes']
              },
              {
                title: 'Dive Computers',
                description: 'Advanced dive computers with multi-gas support.',
                features: ['Technical capable', 'User-friendly', 'Reliable']
              },
              {
                title: 'Accessories',
                description: 'Complete range of diving accessories and safety equipment.',
                features: ['Safety gear', 'Tools', 'Maintenance']
              }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="btn-solid text-lg px-10 py-4">
              Request Quote
            </Link>
            <p className="mt-4 text-gray-600">Contact us for pricing and availability</p>
          </div>
        </div>
      </section>

      {/* Dark CTA Section */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Advice?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Our team can help you choose the right equipment for your diving needs.
          </p>
          <Link href="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

