import Link from 'next/link'

export default function CoursesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070)',
          minHeight: '400px'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title mb-4">Diving Courses</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            From beginner to professional - comprehensive diving education
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional Dive Training</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Learn from experienced instructors with certifications recognized worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-4">
                BEGINNER
              </div>
              <h3 className="text-2xl font-bold mb-4">Open Water Diver</h3>
              <p className="text-gray-700 mb-4">
                Start your diving journey with our comprehensive beginner course. Learn essential skills 
                and safety procedures in controlled environments before progressing to open water.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Theory & classroom sessions
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Confined water training
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  4 open water dives
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-4">
                INTERMEDIATE
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced Open Water</h3>
              <p className="text-gray-700 mb-4">
                Expand your diving skills with specialized adventure dives. Navigation, deep diving, 
                and other specialty areas to build confidence and capability.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Deep diving (30m)
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Underwater navigation
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  3 specialty dives
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                RESCUE
              </div>
              <h3 className="text-2xl font-bold mb-4">Rescue Diver</h3>
              <p className="text-gray-700 mb-4">
                Learn to prevent and manage diving emergencies. Essential course for serious divers 
                and those pursuing professional levels.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Emergency response
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accident management
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rescue scenarios
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 border-2 border-brand">
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
                TECHNICAL
              </div>
              <h3 className="text-2xl font-bold mb-4">Technical Diving</h3>
              <p className="text-gray-700 mb-4">
                Advanced training for extended range diving, decompression procedures, and technical configurations. 
                Prerequisites required.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Extended range (40m+)
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Decompression diving
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced gas management
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="btn-solid text-lg px-10 py-4">
              Inquire About Courses
            </Link>
            <p className="mt-4 text-gray-600">Contact us for schedule and pricing information</p>
          </div>
        </div>
      </section>

      {/* Dark CTA Section */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Diving Journey?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Our experienced instructors are here to guide you every step of the way.
          </p>
          <Link href="/contact" className="btn">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

