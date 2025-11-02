import Link from 'next/link'

export default function CertificationsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070)',
          minHeight: '400px'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title mb-4">Professional Certifications</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Industry-recognized certifications for diving professionals
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Certification Programs</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Achieve professional diving certifications recognized worldwide. Our programs meet international 
              standards and open doors to exciting career opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-brand">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold">Divemaster</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The first professional level in diving. Lead certified divers, assist instructors, 
                and work in the diving industry.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Professional Leadership</p>
                    <p className="text-gray-600 text-sm">Guide and supervise certified divers</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Instructor Assistant</p>
                    <p className="text-gray-600 text-sm">Support training programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Industry Gateway</p>
                    <p className="text-gray-600 text-sm">Work at dive centers worldwide</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600"><strong>Prerequisites:</strong> Rescue Diver, 40+ logged dives</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-brand">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold">Instructor (OWSI)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Become a certified scuba instructor. Teach all levels of recreational diving and 
                shape the next generation of divers.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Teach & Certify</p>
                    <p className="text-gray-600 text-sm">Conduct full certification courses</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Professional Career</p>
                    <p className="text-gray-600 text-sm">Work independently worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Specialty Instructor</p>
                    <p className="text-gray-600 text-sm">Teach specialized courses</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600"><strong>Prerequisites:</strong> Divemaster, 100+ logged dives</p>
              </div>
            </div>
          </div>

          {/* Specialty Certifications */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Specialty Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Nitrox Diver', desc: 'Use enriched air for extended bottom time' },
                { name: 'Deep Diver', desc: 'Safely dive to 40 meters' },
                { name: 'Wreck Diver', desc: 'Explore shipwrecks and structures' },
                { name: 'Night Diver', desc: 'Experience underwater after dark' },
                { name: 'Sidemount Diver', desc: 'Master sidemount configuration' },
                { name: 'Dry Suit Diver', desc: 'Cold water diving proficiency' }
              ].map((specialty) => (
                <div key={specialty.name} className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-lg mb-2">{specialty.name}</h4>
                  <p className="text-gray-600 text-sm">{specialty.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="btn-solid text-lg px-10 py-4">
              Start Your Professional Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Section - Poseidon Certification */}
      <section className="section-dark">
        <div className="content-container">
          <div className="text-section-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Poseidon Rebreather Certification</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              As a Poseidon Pro Academy, we offer comprehensive CCR training on SE7EN and MKVI rebreathers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">CCR Training</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Poseidon SE7EN certification
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Poseidon MKVI certification
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced CCR techniques
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Why CCR?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Extended dive times
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reduced decompression
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Silent diving for wildlife
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

