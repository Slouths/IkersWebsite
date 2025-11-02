'use client'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #001f3f 0%, #003d5c 100%)' }}>
        <div className="content-container text-section-center py-24 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{t('about.hero.title')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            {t('about.hero.subtitle')}
          </p>
        </div>

        {/* Underwater light rays effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-white to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-white to-transparent transform -skew-x-12"></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-light">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#001f3f]">{t('about.story.title')}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.story.text1')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.story.text2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.story.text3')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#001f3f] to-[#003d5c] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">{t('about.founded.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t('about.founded.miami')}</h4>
                    <p className="text-white/80">{t('about.founded.miamiDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t('about.founded.safety')}</h4>
                    <p className="text-white/80">{t('about.founded.safetyDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t('about.founded.professional')}</h4>
                    <p className="text-white/80">{t('about.founded.professionalDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #003d5c 0%, #001f3f 100%)' }}>
        <div className="content-container py-24 relative z-10">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('about.expertise.title')}</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              {t('about.expertise.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-white">{t('about.expertise.certified')}</h3>
              <p className="text-white/80 leading-relaxed">
                {t('about.expertise.certifiedDesc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-white">{t('about.expertise.knowledge')}</h3>
              <p className="text-white/80 leading-relaxed">
                {t('about.expertise.knowledgeDesc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-white">{t('about.expertise.training')}</h3>
              <p className="text-white/80 leading-relaxed">
                {t('about.expertise.trainingDesc')}
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

      {/* What We Provide */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#001f3f]">{t('about.provide.title')}</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {t('about.provide.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-[#001f3f]">{t('about.provide.equipment')}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.regulators')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.drysuits')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.ccr')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.bcd')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.tanks')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.ebs')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-[#001f3f]">{t('about.provide.commitment')}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.transparency')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.turnaround')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.guarantee')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.approval')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.quality')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#001f3f] font-bold">•</span>
                  <span>{t('about.provide.allLevels')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #001f3f 0%, #001529 100%)' }}>
        <div className="content-container text-section-center py-24 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('about.cta.title')}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            {t('about.cta.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services" className="btn text-lg px-10 py-4">
              {t('about.cta.services')}
            </Link>
            <Link href="/contact" className="btn text-lg px-10 py-4">
              {t('about.cta.contact')}
            </Link>
          </div>
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
