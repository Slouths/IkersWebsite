import Link from 'next/link'

export default function BCDPage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section
        className="hero-section"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070)' }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">BCD Maintenance</h1>
        </div>
      </section>

      {/* Dark Section - Introduction */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <p className="text-lg md:text-xl mb-6">
            Buoyancy control devices require periodic upkeep to extend lifespan and ensure diver safety.
          </p>
          <p className="text-lg md:text-xl mb-8">
            <strong>You don't want to lose buoyancy control during a dive, do you?</strong>
          </p>
          <p className="text-lg md:text-xl mb-8">
            Tier One Supply provides specialized BCD maintenance for various configurations including round wings, sidemount wings,
            buoyancy jackets, and single/twin-tank setups. Our certified technicians perform thorough inspections focused on
            safety, durability, and performance.
          </p>

          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6">Who We Serve</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                'Individual divers',
                'Fire Departments',
                'Professional diving companies',
                'Diving clubs and centers'
              ].map((client) => (
                <div key={client} className="flex items-start gap-3">
                  <span className="text-2xl">•</span>
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <button className="btn">Contact us</button>
          </div>
        </div>
      </section>

      {/* Light Section - Service Protocol */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">7-Step Service Protocol</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                number: '1',
                title: 'Visual Inspection',
                desc: 'Thorough examination of seams, fabric, inflators, dump valves, buckles, and weight systems.'
              },
              {
                number: '2',
                title: 'Bladder Leak Testing',
                desc: 'Comprehensive testing to ensure airtight integrity of the bladder.'
              },
              {
                number: '3',
                title: 'Thorough Cleaning',
                desc: 'Interior and exterior cleaning with complete disassembly of components.'
              },
              {
                number: '4',
                title: 'Inflator & Valve Verification',
                desc: 'Complete check with O-ring replacement as needed.'
              },
              {
                number: '5',
                title: 'Leak & Pressure Testing',
                desc: 'Full testing with overpressure system validation.'
              },
              {
                number: '6',
                title: 'Reassembly',
                desc: 'Careful reassembly with final quality control checks.'
              },
              {
                number: '7',
                title: 'Technical Report',
                desc: 'Personalized report with photos documenting each step.'
              }
            ].map((step) => (
              <div key={step.number} className="flex items-start gap-4 border-l-4 border-brand pl-6 py-2">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Section - Pricing */}
      <section className="section-light bg-gray-50">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Pricing</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">General Maintenance</h3>
                  <p className="text-gray-600">
                    Includes diagnosis, leak test, cleaning, reassembly, and quality control
                  </p>
                </div>
                <div className="text-4xl font-bold text-brand">$44</div>
              </div>
            </div>

            <div className="space-y-3 text-left max-w-2xl mx-auto">
              <p className="text-gray-700">• Additional charges apply for replacement parts or extra materials</p>
              <p className="text-gray-700">• Custom quotes available upon request</p>
              <p className="text-gray-600 text-sm italic">* VAT and shipping excluded</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
