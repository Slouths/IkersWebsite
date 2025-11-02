import Link from 'next/link'

export default function CCRPage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section
        className="hero-section"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070)' }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">CCR Services</h1>
        </div>
      </section>

      {/* Dark Section - Introduction */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <p className="text-lg md:text-xl mb-6">
            Comprehensive rebreather servicing with technicians following strict standards for evaluation, maintenance, and repairs.
          </p>
          <p className="text-lg md:text-xl mb-8">
            Our certified technicians provide <strong>expert rebreather maintenance</strong> for all major manufacturers and models.
          </p>

          <div className="my-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Specialized CCR Service</h3>
              <p className="text-lg mb-4">
                Rebreather units require periodic authorized maintenance following manufacturer specifications to ensure optimal performance and safety.
              </p>
              <p className="text-lg">
                Our comprehensive maintenance packages ensure your rebreather remains safe and mission-ready.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button className="btn">Contact us</button>
          </div>
        </div>
      </section>

      {/* Light Section - What's Included */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Included</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              'Complete cleaning and inspection of all components',
              'First stage evaluations (diluent and oxygen)',
              'Bottle valve inspections (both types)',
              'O-ring replacement throughout the breathing loop',
              'Bail Out Valve assessment',
              'Firmware updates',
              'POST test execution',
              'Service countdown reset',
              'Circuit disinfection using Gigasept'
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 border rounded-lg">
                <svg className="w-6 h-6 text-brand flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="bg-slate-50 border-l-4 border-brand p-6 rounded">
              <p className="font-semibold mb-2">Important Service Requirements:</p>
              <p className="text-gray-700">
                Send the complete rebreather excluding BCD, wing, and harness. Estimated turnaround is 30 days from receipt.
                Quote acceptance required before service begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section - Pricing */}
      <section className="section-light bg-gray-50">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Pricing Structure</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { item: 'Labor (MkVI/Se7en/Se7en+)', price: '$329' },
                { item: 'Complete Service Kit', price: '$373' },
                { item: 'Oxygen Molex Cell (per unit)', price: '$82' },
                { item: 'Oxygen Solid State Cell (per unit)', price: '$564' }
              ].map((item) => (
                <div key={item.item} className="flex justify-between items-center border-b pb-4">
                  <span className="text-lg font-medium">{item.item}</span>
                  <span className="text-2xl font-bold text-brand">{item.price}</span>
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
