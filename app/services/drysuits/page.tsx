import Link from 'next/link'

export default function DrysuitsPage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section
        className="hero-section"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070)' }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Drysuits Services</h1>
        </div>
      </section>

      {/* Dark Section - Introduction */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <p className="text-lg md:text-xl mb-6">
            Drysuits are an <strong>essential piece of equipment for diving</strong> that ensure comfortable and safe underwater experiences.
          </p>
          <p className="text-lg md:text-xl mb-6">
            They require proper maintenance and timely repairs to preserve performance and safety.
          </p>
          <p className="text-lg md:text-xl mb-8">
            Tier One Supply offers specialized drysuit repair and restoration services. Our goal is helping divers maintain equipment
            in optimal condition while extending gear lifespan.
          </p>

          <div className="mt-12">
            <button className="btn">Contact us</button>
          </div>
        </div>
      </section>

      {/* Light Section - Repair Process */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Repair Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '1', title: 'Contact & Quote', desc: 'Describe your issues and receive detailed pricing estimates.' },
              { number: '2', title: 'Send Equipment', desc: 'Drysuits can be shipped or picked up by courier.' },
              { number: '3', title: 'Expert Repair', desc: 'Typically completed within 30 days depending on complexity.' },
              { number: '4', title: 'Return & Enjoy', desc: 'Repaired suits returned ready for use.' }
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
                { service: 'Boot/sock replacement', price: '$88' },
                { service: 'Small leak/puncture repair', price: '$33' },
                { service: 'Zipper replacement', price: '$176' },
                { service: 'Pocket placement', price: '$44' },
                { service: 'Pee valve placement', price: '$44' },
                { service: 'Kevlar knee reinforcement (pair)', price: '$88' },
                { service: 'Neoprene neck tightening', price: '$44' },
                { service: 'Cuff adjustment (pair)', price: '$44' },
                { service: 'Strap replacement', price: '$44' },
                { service: 'Ankle seal replacement', price: '$33' }
              ].map((item) => (
                <div key={item.service} className="flex justify-between items-center border-b pb-3">
                  <span className="text-left">{item.service}</span>
                  <span className="font-bold text-brand text-xl">{item.price}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 italic mt-8">* Materials, VAT, and shipping not included</p>
          </div>
        </div>
      </section>
    </div>
  )
}
