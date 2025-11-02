import Image from 'next/image'
import Link from 'next/link'

export default function TeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070)',
          minHeight: '400px'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title mb-4">Meet Our Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Expert technicians and instructors dedicated to your diving safety
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional Excellence</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Our team brings decades of combined experience in diving, equipment servicing, and professional training. 
              Every member is certified, passionate, and committed to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                name: 'Iker Orzaiz',
                role: 'Owner & Lead Technician',
                certifications: ['Poseidon Certified', 'Technical Diver', 'Service Specialist'],
                bio: 'With over 15 years of experience, Iker is a Poseidon-certified technician and CCR specialist. He founded BullDiving to bring world-class equipment service to the diving community.',
                specialties: ['CCR Service', 'Technical Equipment', 'Poseidon Systems']
              },
              {
                name: 'Maria Rodriguez',
                role: 'Senior Service Technician',
                certifications: ['Multi-Brand Certified', 'Drysuit Specialist', 'QA Lead'],
                bio: 'Maria specializes in drysuit repairs and BCD maintenance. Her attention to detail and quality control ensures every piece of equipment meets our exacting standards.',
                specialties: ['Drysuits', 'BCD Systems', 'Quality Control']
              },
              {
                name: 'Carlos Jiménez',
                role: 'Regulator Technician',
                certifications: ['Factory Certified', 'Poseidon Service', 'Multi-Brand'],
                bio: 'Carlos is factory-certified for multiple regulator brands. He handles all regulator servicing with precision and extensive knowledge of life support systems.',
                specialties: ['Regulators', 'Emergency Systems', 'Testing & Calibration']
              }
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-brand font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Certifications:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert) => (
                        <span key={cert} className="text-xs px-2 py-1 bg-brand/10 text-brand rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Specialties:</p>
                    <ul className="space-y-1">
                      {member.specialties.map((specialty) => (
                        <li key={specialty} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Our Values</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: '🎯',
                  title: 'Precision',
                  desc: 'Every service performed to exact specifications'
                },
                {
                  icon: '🔒',
                  title: 'Safety First',
                  desc: 'Your safety is our absolute priority'
                },
                {
                  icon: '💎',
                  title: 'Quality',
                  desc: 'Only genuine parts and proven methods'
                },
                {
                  icon: '🤝',
                  title: 'Transparency',
                  desc: 'Clear communication at every step'
                }
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <div className="text-5xl mb-3">{value.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section - Certifications & Partnerships */}
      <section className="section-dark">
        <div className="content-container">
          <div className="text-section-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications & Partnerships</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We maintain official partnerships and certifications with leading manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Poseidon Service Center',
                desc: 'Official authorized service center for Poseidon equipment'
              },
              {
                title: 'Poseidon Pro Academy',
                desc: 'Certified instructors for CCR training programs'
              },
              {
                title: 'Multi-Brand Certified',
                desc: 'Factory training for major diving equipment brands'
              },
              {
                title: 'Technical Diving',
                desc: 'Advanced certifications in technical and CCR diving'
              },
              {
                title: 'Professional Instructors',
                desc: 'OWSI and specialty instructor certifications'
              },
              {
                title: 'Quality Assurance',
                desc: 'ISO-compliant service procedures and documentation'
              }
            ].map((cert) => (
              <div key={cert.title} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-white/90">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Section - Join Our Team */}
      <section className="section-light">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We're always looking for talented, certified technicians and instructors who share our passion for diving and commitment to excellence.
          </p>
          <Link href="/contact" className="btn-solid text-lg px-10 py-4">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

