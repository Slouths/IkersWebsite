import Link from 'next/link'

export default function TanksPage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section
        className="hero-section"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=2070)' }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Tanks Maintenance</h1>
        </div>
      </section>

      {/* Dark Section - Introduction */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <p className="text-lg md:text-xl mb-6">
            Comprehensive maintenance and inspection services for scuba tanks, emphasizing <strong>safety and quality standards</strong>.
          </p>
          <p className="text-lg md:text-xl mb-8">
            We work with the <strong>highest standards of quality and precision</strong> in each of our services.
          </p>

          <div className="my-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
              <p className="text-xl font-semibold mb-2">Important Notice:</p>
              <p className="text-lg">
                No maintenance will be carried out without prior acceptance of the quote.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button className="btn">Contact us</button>
          </div>
        </div>
      </section>

      {/* Light Section - Service Process */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">3-Step Service Process</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: '1',
                title: 'Diagnosis',
                desc: 'Detailed visual inspections checking for wear, corrosion, or damage to cylinders, valves, and components.'
              },
              {
                number: '2',
                title: 'Kit Replacement and Cleaning',
                desc: 'Thorough cleaning to eliminate contaminants and saltwater buildup. Valve maintenance kits are replaced to ensure proper operation without leaks.'
              },
              {
                number: '3',
                title: 'Functionality Test',
                desc: 'Post-reassembly testing verifies all components work correctly and meet safety standards.'
              }
            ].map((step) => (
              <div key={step.number} className="flex items-start gap-4 border-l-4 border-brand pl-6 py-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-700 text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Section - Pricing */}
      <section className="section-light bg-gray-50">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Service Pricing</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { service: 'Visual Inspection', price: '$28' },
                { service: 'Hydrostatic Inspection', price: '$39' },
                { service: 'Painting', price: '$72' },
                { service: 'Valve Maintenance', price: '$17' }
              ].map((item) => (
                <div key={item.service} className="flex justify-between items-center border-b pb-4">
                  <span className="text-xl font-medium">{item.service}</span>
                  <span className="text-3xl font-bold text-brand">{item.price}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 italic mt-8">* VAT and shipping excluded</p>
          </div>
        </div>
      </section>
    </div>
  )
}
