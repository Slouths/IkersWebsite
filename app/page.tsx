import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070)',
          minHeight: '600px'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title mb-6">Professional Diving Equipment Service</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert maintenance and repair for all your diving gear. Certified technicians, highest quality standards.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/services" className="btn">
              Our Services
            </Link>
            <Link href="/contact" className="btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Section - About */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">The New Generation of Diving Services</h2>
          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            At BullDiving, we provide <strong>unparalleled service and expertise</strong> with certified technicians who specialize
            in maintaining and repairing professional diving equipment.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto">
            From regulators and drysuits to CCRs and emergency breathing systems, we handle everything with the
            <strong> highest standards of quality and precision</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-lg">Equipment Serviced</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-lg">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section - Services Overview */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Equipment Services</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We specialize in maintaining mission-critical diving equipment for individual divers, professional teams,
              fire departments, and specialized underwater units.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Regulators',
                desc: 'Official Poseidon Service Center. Full maintenance for all brands.',
                link: '/services/regulators'
              },
              {
                title: 'Drysuits',
                desc: 'Complete repair and restoration for diving and surface drysuits.',
                link: '/services/drysuits'
              },
              {
                title: 'CCR',
                desc: 'Authorized rebreather servicing. Poseidon Pro Academy specialists.',
                link: '/services/ccr'
              },
              {
                title: 'BCD',
                desc: 'Wing and jacket maintenance for all configurations.',
                link: '/services/bcd'
              },
              {
                title: 'Tanks',
                desc: 'Inspection, testing, and valve maintenance.',
                link: '/services/tanks'
              },
              {
                title: 'EBS',
                desc: 'Emergency breathing system maintenance.',
                link: '/services/ebs'
              },
              {
                title: 'Surface Gear',
                desc: 'Kayaking, kitesurfing, and water rescue equipment.',
                link: '/services/surface-drysuits'
              },
              {
                title: 'Full Service',
                desc: 'Complete gear checks and comprehensive maintenance.',
                link: '/services'
              }
            ].map((service, index) => (
              <Link
                key={service.title}
                href={service.link}
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-slate-600 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-slate-700 flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:bg-slate-800 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-slate-700 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-solid">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Section - Why Choose Us */}
      <section className="section-dark">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose BullDiving?</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Your safety underwater depends on perfectly maintained equipment. We don't compromise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 mx-auto rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-2xl mb-6">
                01
              </div>
              <h3 className="text-2xl font-bold mb-4">Certified Technicians</h3>
              <p className="text-lg leading-relaxed">
                Our team includes factory-certified technicians trained by leading manufacturers. Official Poseidon Service Center
                with expertise across all major brands.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 mx-auto rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-2xl mb-6">
                02
              </div>
              <h3 className="text-2xl font-bold mb-4">Complete Transparency</h3>
              <p className="text-lg leading-relaxed">
                Follow your equipment's entire service journey through shared photo documentation. See every step from
                initial diagnosis to final testing.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 mx-auto rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-2xl mb-6">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4">Fast Turnaround</h3>
              <p className="text-lg leading-relaxed">
                Most services completed within 30 days. We understand you need your gear mission-ready. Rush service
                available for professional teams.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 mx-auto rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-2xl mb-6">
                04
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Guarantee</h3>
              <p className="text-lg leading-relaxed">
                60-day satisfaction guarantee on all services. If our work doesn't meet your expectations, we'll adjust
                or re-repair at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section - Who We Serve */}
      <section className="section-light">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by Professionals</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            We provide comprehensive maintenance for equipment used by the world's most demanding diving professionals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Individual Divers', desc: 'Recreational and technical diving enthusiasts' },
              { title: 'Fire Departments', desc: 'Emergency response diving teams' },
              { title: 'Special Forces', desc: 'Military underwater operations units' },
              { title: 'GEAS', desc: 'Specialized Underwater Activities Group, Guardia Civil' },
              { title: 'Diving Centers', desc: 'Professional schools and clubs' },
              { title: 'Commercial Divers', desc: 'Professional diving companies' }
            ].map((client) => (
              <div key={client.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-2">{client.title}</h3>
                <p className="text-gray-600">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Section - CTA */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Service Your Gear?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a detailed quote. No maintenance will be carried out without your approval.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="font-semibold mb-1 text-sm uppercase tracking-wider text-white/70">Email</p>
              <p className="text-lg font-medium">info@tieronesupply.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="font-semibold mb-1 text-sm uppercase tracking-wider text-white/70">Phone</p>
              <p className="text-lg font-medium">+34 955 467 119</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="font-semibold mb-1 text-sm uppercase tracking-wider text-white/70">WhatsApp</p>
              <p className="text-lg font-medium">+34 747 41 85 10</p>
            </div>
          </div>

          <Link href="/contact" className="btn text-lg px-10 py-4">
            Get Your Free Quote
          </Link>

          <p className="text-sm mt-8 text-white/70">
            Aznalcázar Avenue 5, Unit 14, 41110 Bollullos de la Mitación, Seville, Spain
          </p>
        </div>
      </section>
    </div>
  )
}
