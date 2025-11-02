'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070',
      titleKey: 'home.hero.title1',
      subtitleKey: 'home.hero.subtitle1'
    },
    {
      url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070',
      titleKey: 'home.hero.title2',
      subtitleKey: 'home.hero.subtitle2'
    },
    {
      url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2074',
      titleKey: 'home.hero.title3',
      subtitleKey: 'home.hero.subtitle3'
    },
    {
      url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070',
      titleKey: 'home.hero.title4',
      subtitleKey: 'home.hero.subtitle4'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <div>
      {/* Auto-Scrolling Hero Carousel */}
      <section className="relative w-full h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/60 via-[#001f3f]/40 to-[#001f3f]/80"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
              <div className="max-w-5xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                  {t(image.titleKey)}
                </h1>
                <p className="text-xl md:text-3xl text-white/90 drop-shadow-lg">
                  {t(image.subtitleKey)}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Buttons - Fixed Position */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex gap-6 justify-center flex-wrap">
          <Link href="/services" className="btn text-lg px-10 py-4">
            {t('home.hero.ourServices')}
          </Link>
          <Link href="/contact" className="btn text-lg px-10 py-4">
            {t('home.hero.getInTouch')}
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Wave SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full" style={{ marginBottom: '-1px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full block">
            <path
              fill="#001f3f"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Dark Section - About with Ocean Gradient */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #001f3f 0%, #003d5c 100%)' }}>
        <div className="content-container text-section-center py-24 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">{t('home.about.title')}</h2>
          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto text-white/90" dangerouslySetInnerHTML={{ __html: t('home.about.text1') }} />
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-white/90" dangerouslySetInnerHTML={{ __html: t('home.about.text2') }} />

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-6xl font-bold mb-2 text-white">15+</div>
              <p className="text-lg text-white/80">{t('home.about.yearsExperience')}</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-6xl font-bold mb-2 text-white">1000+</div>
              <p className="text-lg text-white/80">{t('home.about.equipmentServiced')}</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-6xl font-bold mb-2 text-white">100%</div>
              <p className="text-lg text-white/80">{t('home.about.satisfactionRate')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section - Services with Ocean Theme */}
      <section className="section-light relative">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#001f3f]">{t('home.services.title')}</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Regulators',
                desc: 'Certified technicians. Full maintenance for all brands.',
                link: '/services/regulators'
              },
              {
                title: 'Drysuits',
                desc: 'Complete repair and restoration for diving and surface drysuits.',
                link: '/services/drysuits'
              },
              {
                title: 'CCR',
                desc: 'Authorized rebreather servicing by certified specialists.',
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
            ].map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3 text-[#001f3f]">{service.title}</h3>
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

      {/* Dark Section - Why Choose Us with Underwater Theme */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #003d5c 0%, #001f3f 100%)' }}>
        <div className="content-container py-24 relative z-10">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Why Choose BullDiving?</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              Your safety underwater depends on perfectly maintained equipment. We don't compromise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Certified Technicians</h3>
              <p className="text-lg leading-relaxed text-white/80">
                Our team includes factory-certified technicians trained by leading manufacturers with expertise across all major brands.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Complete Transparency</h3>
              <p className="text-lg leading-relaxed text-white/80">
                Follow your equipment's entire service journey through shared photo documentation. See every step from
                initial diagnosis to final testing.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Fast Turnaround</h3>
              <p className="text-lg leading-relaxed text-white/80">
                Most services completed within 30 days. We understand you need your gear mission-ready. Rush service
                available for professional teams.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Quality Guarantee</h3>
              <p className="text-lg leading-relaxed text-white/80">
                60-day satisfaction guarantee on all services. If our work doesn't meet your expectations, we'll adjust
                or re-repair at no additional cost.
              </p>
            </div>
          </div>
        </div>

        {/* Underwater light rays effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-white to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-white to-transparent transform -skew-x-12"></div>
        </div>
      </section>

      {/* Light Section - Who We Serve */}
      <section className="section-light">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#001f3f]">Trusted by Professionals</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            We provide comprehensive maintenance for equipment used by the world's most demanding diving professionals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Individual Divers', desc: 'Recreational and technical diving enthusiasts' },
              { title: 'Fire Departments', desc: 'Emergency response diving teams' },
              { title: 'Special Forces', desc: 'Military underwater operations units' },
              { title: 'Diving Centers', desc: 'Professional schools and clubs' },
              { title: 'Commercial Divers', desc: 'Professional diving companies' }
            ].map((client) => (
              <div key={client.title} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2 text-[#001f3f]">{client.title}</h3>
                <p className="text-gray-600">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Section - CTA with Ocean Depth Effect */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #001f3f 0%, #001529 100%)' }}>
        <div className="content-container text-section-center py-24 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t('home.cta.title')}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            {t('home.cta.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="font-semibold mb-1 text-sm uppercase tracking-wider text-white/70">{t('home.cta.email')}</p>
              <p className="text-lg font-medium text-white">info@bulldiving.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <p className="font-semibold mb-1 text-sm uppercase tracking-wider text-white/70">{t('home.cta.phone')}</p>
              <p className="text-lg font-medium text-white">+1 (305) 522-7386</p>
            </div>
          </div>

          <Link href="/contact" className="btn text-lg px-10 py-4">
            {t('home.cta.getQuote')}
          </Link>
        </div>

        {/* Ocean floor effect */}
        <div className="absolute bottom-0 left-0 w-full opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path
              fill="#000"
              fillOpacity="0.3"
              d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  )
}
