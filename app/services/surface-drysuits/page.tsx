import Link from 'next/link'

export default function SurfaceDrysuitsPage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section
        className="hero-section"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=2070)' }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Surface Drysuits</h1>
        </div>
      </section>

      {/* Dark Section - Introduction */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <p className="text-lg md:text-xl mb-6">
            Specialized trilaminate drysuit repairs for water sports and professional use.
          </p>
          <p className="text-lg md:text-xl mb-8">
            <strong>The reliability of your activity depends on keeping your drysuit in optimal condition.</strong>
          </p>

          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Activities We Support</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              {[
                'Kayaking (touring, whitewater, surf ski, recreational)',
                'Kitesurfing and wingfoiling',
                'Stand-up paddleboarding in cold conditions',
                'Dinghy and performance sailing',
                'Water rescue operations'
              ].map((activity) => (
                <div key={activity} className="flex items-start gap-3">
                  <span className="text-2xl">•</span>
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <button className="btn">Contact us</button>
          </div>
        </div>
      </section>

      {/* Light Section - Repair Process */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '1', title: 'Contact', desc: 'Receive a detailed quote for your repair needs.' },
              { number: '2', title: 'Send', desc: 'Ship suit or arrange courier pickup.' },
              { number: '3', title: 'Repair', desc: 'Expert work typically takes up to 30 days.' },
              { number: '4', title: 'Enjoy', desc: 'Receive your restored drysuit ready for action.' }
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Section - Pricing */}
      <section className="section-light bg-gray-50">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Service Pricing</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { service: 'Wrist seal replacement', price: '$33' },
                { service: 'Neck seal replacement', price: '$66' },
                { service: 'Sock/boot replacement', price: '$88' },
                { service: 'Leak/puncture repair', price: '$33' },
                { service: 'Zipper replacement', price: '$176' },
                { service: 'Pocket placement', price: '$44' },
                { service: 'Pee valve placement', price: '$44' },
                { service: 'Kevlar knee reinforcement', price: '$88' },
                { service: 'Neoprene neck tightening', price: '$44' },
                { service: 'Cuff adjustment', price: '$44' },
                { service: 'Strap replacement', price: '$44' },
                { service: 'Ankle seal replacement', price: '$33' }
              ].map((item) => (
                <div key={item.service} className="flex justify-between items-center border-b pb-3">
                  <span className="text-left">{item.service}</span>
                  <span className="font-bold text-brand text-xl">{item.price}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 italic mt-8">* Materials, VAT, and shipping excluded</p>
          </div>
        </div>
      </section>
    </div>
  )
}
