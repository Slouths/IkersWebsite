import Link from 'next/link'

export default function EBSPage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section
        className="hero-section"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070)' }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">EBS Maintenance</h1>
        </div>
      </section>

      {/* Dark Section - Introduction */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <p className="text-lg md:text-xl mb-6">
            Specialized service center offering comprehensive maintenance and inspection for <strong>Emergency Breathing Systems (EBS)</strong>,
            with particular expertise in Poseidon EBS units.
          </p>
          <p className="text-lg md:text-xl mb-8">
            We maintain readiness to service other brands and models as well.
          </p>
          <p className="text-lg md:text-xl mb-8">
            Emergency Breathing Systems are critical safety equipment that require meticulous maintenance to ensure they function
            perfectly when needed most. Our certified technicians follow strict protocols to maintain the highest standards of
            safety and reliability.
          </p>

          <div className="my-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
              <p className="text-xl font-semibold mb-2">Special Rates Available:</p>
              <p className="text-lg">
                We offer special rates for emergency response teams and specialized units. Quote acceptance required before service initiation.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">5-Phase Maintenance Process</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                number: '1',
                title: 'Diagnosis',
                desc: 'Initial assessment identifies external damage, corrosion, and component wear. Technicians evaluate the cylinder, regulators, and hoses while verifying intermediate pressure readings.'
              },
              {
                number: '2',
                title: 'Disassembly & Cleaning',
                desc: 'Complete unit disassembly removes salt deposits and debris. We replace the specific maintenance kits for the first stage, second stage, and cylinder using certified components.'
              },
              {
                number: '3',
                title: 'Cylinder Inspection',
                desc: 'Comprehensive review includes visual damage assessment and hydrostatic pressure testing when necessary to verify structural soundness.'
              },
              {
                number: '4',
                title: 'Assembly & Lubrication',
                desc: 'Careful reassembly with appropriate lubrication of moving parts reduces operational friction and wear.'
              },
              {
                number: '5',
                title: 'Final Quality Checks',
                desc: 'Intermediate pressure fine-tuning and second-stage adjustment occur, followed by full functionality testing and leak verification before delivery.'
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-start gap-4 border-l-4 border-slate-700 pl-6 py-2">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                  {phase.number}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{phase.title}</h4>
                  <p className="text-gray-700">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Documentation & Transparency</h3>
              <p className="text-gray-700 text-lg">
                Clients receive comprehensive photo documentation via a shared folder that tracks the entire maintenance journey from
                initial inspection through completion. This ensures complete transparency and provides you with a detailed record of
                all work performed on your EBS unit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section - Pricing */}
      <section className="section-light bg-gray-50">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Custom Pricing</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <svg
                className="w-20 h-20 mx-auto mb-6 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-2xl font-bold mb-4">Custom Quotes Available</h3>
              <p className="text-gray-700 text-lg">
                EBS maintenance pricing varies based on the specific model, required services, and any special requirements.
                Contact us for a detailed quote tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
