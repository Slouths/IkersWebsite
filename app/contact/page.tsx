'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.currentTarget)
    const firstName = fd.get('firstName')
    const lastName = fd.get('lastName')
    const email = fd.get('email')
    const message = fd.get('message')
    
    const subject = encodeURIComponent('Website Contact Form')
    const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:info@bulldiving.com?subject=${subject}&body=${body}`
    
    setTimeout(() => setStatus('sent'), 500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-light pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div className="lg:sticky lg:top-32">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('contact.hero.title')}</h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t('contact.hero.subtitle')}{' '}
                <a href="mailto:info@bulldiving.com" className="text-brand hover:underline font-medium">
                  {t('contact.hero.email')}
                </a>{' '}
                {t('contact.hero.below')}
              </p>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{t('contact.general')}</h3>
                  <a href="mailto:info@bulldiving.com" className="text-brand hover:underline">
                    info@bulldiving.com
                  </a>
                  <p className="text-gray-600 mt-2">{t('contact.generalDesc')}</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{t('contact.service')}</h3>
                  <a href="mailto:iker@bulldiving.com" className="text-brand hover:underline">
                    iker@bulldiving.com
                  </a>
                  <p className="text-gray-600 mt-2">{t('contact.serviceDesc')}</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{t('contact.phoneWhatsapp')}</h3>
                  <p className="text-gray-900 font-medium">+1 (305) 522-7386</p>
                  <p className="text-gray-600 mt-2">{t('contact.hours')}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.firstName')}*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.lastName')}*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                    placeholder="john.doe@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none resize-none"
                    placeholder={t('contact.form.placeholder')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-brand text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                </button>

                {status === 'sent' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm">
                      {t('contact.form.success')}
                    </p>
                  </div>
                )}

                <p className="text-sm text-gray-500 text-center">
                  {t('contact.form.privacy')}{' '}
                  <Link href="/privacy" className="text-brand hover:underline">
                    {t('contact.form.privacyLink')}
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('contact.cta.title')}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            {t('contact.cta.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services" className="btn">
              {t('contact.cta.services')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
