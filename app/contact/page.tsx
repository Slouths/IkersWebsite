'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact us</h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Need to get in touch with us? Either fill out the form with your inquiry or find the{' '}
                <a href="mailto:info@bulldiving.com" className="text-brand hover:underline font-medium">
                  department email
                </a>{' '}
                you'd like to contact below.
              </p>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">General Inquiries</h3>
                  <a href="mailto:info@bulldiving.com" className="text-brand hover:underline">
                    info@bulldiving.com
                  </a>
                  <p className="text-gray-600 mt-2">For general questions and information</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Service Department</h3>
                  <a href="mailto:iker@bulldiving.com" className="text-brand hover:underline">
                    iker@bulldiving.com
                  </a>
                  <p className="text-gray-600 mt-2">Equipment service and maintenance</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Phone & WhatsApp</h3>
                  <p className="text-gray-900 font-medium">+34 955 467 119</p>
                  <p className="text-gray-900 font-medium">+34 747 41 85 10 (WhatsApp)</p>
                  <p className="text-gray-600 mt-2">Mon-Fri, 9:00 AM - 6:00 PM CET</p>
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
                      First name*
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
                      Last name*
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
                    Email*
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
                    What can we help you with?*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-brand text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {status === 'sending' ? 'Sending...' : 'Submit'}
                </button>

                {status === 'sent' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm">
                      Your email client should open. Please send the email to complete your submission.
                    </p>
                  </div>
                )}

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy" className="text-brand hover:underline">
                    privacy policy
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Whether you need equipment service or just have questions, we're here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services" className="btn">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
