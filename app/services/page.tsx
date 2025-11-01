import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      name: 'Regulators',
      slug: 'regulators',
      desc: 'Comprehensive regulator maintenance through certified technicians. Official Poseidon Service Center servicing all major brands.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400'
    },
    {
      name: 'Drysuits',
      slug: 'drysuits',
      desc: 'Specialized drysuit repair and restoration services to maintain your equipment in optimal condition.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400'
    },
    {
      name: 'Surface Drysuits',
      slug: 'surface-drysuits',
      desc: 'Trilaminate drysuit repairs for kayaking, kitesurfing, paddleboarding, sailing, and water rescue operations.',
      image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=400'
    },
    {
      name: 'CCR',
      slug: 'ccr',
      desc: 'Comprehensive rebreather servicing with technicians following strict standards. Poseidon Pro Academy specialists.',
      image: 'https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=400'
    },
    {
      name: 'BCD',
      slug: 'bcd',
      desc: 'Specialized BCD maintenance for wings, sidemount, and buoyancy jackets to ensure diver safety.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400'
    },
    {
      name: 'Tanks',
      slug: 'tanks',
      desc: 'Comprehensive maintenance and inspection services for scuba tanks with the highest standards of quality and precision.',
      image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=400'
    },
    {
      name: 'EBS',
      slug: 'ebs',
      desc: 'Specialized maintenance and inspection for Emergency Breathing Systems with expertise in Poseidon EBS units.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400'
    }
  ]

  return (
    <div>
      {/* Hero Section with Image */}
      <section
        className="hero-section"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070)' }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Service Center</h1>
        </div>
      </section>

      {/* Dark Section - Introduction */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <p className="text-lg md:text-xl mb-6">
            Unparalleled service and expertise with certified technicians.
          </p>
          <p className="text-lg md:text-xl mb-8">
            We handle maintenance and repairs for regulators, drysuits, tanks, CCRs, and BCDs. From routine maintenance to complex repairs,
            we work with the <strong>highest standards of quality and precision</strong>.
          </p>

          <div className="mt-12">
            <button className="btn">Contact us</button>
          </div>
        </div>
      </section>

      {/* Light Section - Services Grid */}
      <section className="section-light">
        <div className="content-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(s => (
              <Link
                key={s.name}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-slate-700 transition-colors">{s.name}</h3>
                  <p className="text-gray-600 mb-4">{s.desc}</p>
                  <p className="text-slate-700 font-medium">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Section - Contact CTA */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Service?</h2>
          <p className="text-lg md:text-xl mb-8">
            Contact us for a detailed quote. No maintenance will be carried out without prior acceptance.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-lg">
              <strong>Email:</strong> info@tieronesupply.com
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> +34 955 467 119
            </p>
            <p className="text-lg">
              <strong>WhatsApp:</strong> +34 747 41 85 10
            </p>
          </div>
          <div className="mt-12">
            <button className="btn">Get in touch</button>
          </div>
        </div>
      </section>
    </div>
  )
}
