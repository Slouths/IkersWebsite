'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseEnter = (menu: string) => setOpenDropdown(menu)
  const handleMouseLeave = () => setOpenDropdown(null)

  return (
    <header className={`${scrolled ? 'bg-[#001f3f]/95 backdrop-blur' : 'bg-[#001f3f]/90 backdrop-blur'} sticky top-0 z-50 transition-colors duration-300`}>
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo_for_header.png" alt="BullDiving Logo" width={80} height={80} className="object-contain" />
          <span className="text-white font-bold text-2xl tracking-tight">BullDiving</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          {/* Supply Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('supply')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors">
              {t('nav.supply')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'supply' && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                <Link href="/supply/diving-gear" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  Diving Gear
                </Link>
                <Link href="/supply/equipment" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  Equipment
                </Link>
                <Link href="/supply/accessories" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  Accessories
                </Link>
                </div>
              </div>
            )}
          </div>

          {/* Service Center Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('service')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors">
              {t('nav.serviceCenter')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'service' && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                <Link href="/services/regulators" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  Regulators
                </Link>
                <Link href="/services/drysuits" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  Drysuits
                </Link>
                <Link href="/services/ccr" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  CCR
                </Link>
                <Link href="/services/bcd" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  BCD
                </Link>
                <Link href="/services/tanks" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  Tanks
                </Link>
                <Link href="/services/ebs" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  EBS
                </Link>
                <Link href="/services" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors font-semibold border-t border-gray-100 mt-2 pt-3">
                  {t('nav.allServices')}
                </Link>
                </div>
              </div>
            )}
          </div>

          {/* Training Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('training')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors">
              {t('nav.training')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'training' && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                <Link href="/training/courses" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  Courses
                </Link>
                <Link href="/training/certifications" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  Certifications
                </Link>
                <Link href="/training/workshops" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  Workshops
                </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors">
              {t('nav.about')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'about' && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                <Link href="/about" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  {t('nav.ourStory')}
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors">
                  {t('nav.contact')}
                </Link>
                </div>
              </div>
            )}
          </div>

          {/* Language Selector */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('language')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-white">
              <span className="text-xl">{language === 'en' ? '🇺🇸' : '🇪🇸'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'language' && (
              <div className="absolute top-full right-0 pt-2">
                <div className="w-40 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                <button
                  onClick={() => { setLanguage('en'); setOpenDropdown(null); }}
                  className="w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors flex items-center gap-2"
                >
                  <span className="text-xl">🇺🇸</span> English
                </button>
                <button
                  onClick={() => { setLanguage('es'); setOpenDropdown(null); }}
                  className="w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-brand transition-colors flex items-center gap-2"
                >
                  <span className="text-xl">🇪🇸</span> Español
                </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
