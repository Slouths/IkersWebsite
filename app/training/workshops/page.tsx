import Link from 'next/link'

export default function WorkshopsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2070)',
          minHeight: '400px'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title mb-4">Diving Workshops</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Specialized training sessions for skill development and equipment mastery
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Enhance Your Skills</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Our workshops provide focused training on specific skills, equipment, and techniques. 
              Perfect for continuing education and staying current with best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Equipment Maintenance Workshop</h3>
              <p className="text-gray-700 mb-4">
                Learn to properly maintain and perform basic servicing on your diving equipment. 
                Understand how your gear works and identify potential issues.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">Regulator basics</p>
                    <p className="text-sm text-gray-600">Understanding your life support system</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">BCD care</p>
                    <p className="text-sm text-gray-600">Proper cleaning and storage</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">Drysuit maintenance</p>
                    <p className="text-sm text-gray-600">Seals, zippers, and repairs</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600">Duration: 4 hours</span>
                <span className="font-semibold text-brand">Contact for pricing</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Advanced Buoyancy Control</h3>
              <p className="text-gray-700 mb-4">
                Master perfect buoyancy and trim. Essential for technical diving, photography, 
                and minimizing environmental impact.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">Weight optimization</p>
                    <p className="text-sm text-gray-600">Find your perfect weight</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">Trim techniques</p>
                    <p className="text-sm text-gray-600">Horizontal positioning</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">Practical exercises</p>
                    <p className="text-sm text-gray-600">In-water skill refinement</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600">Duration: 2 pool + 2 open water</span>
                <span className="font-semibold text-brand">Contact for pricing</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Emergency Response Refresher</h3>
              <p className="text-gray-700 mb-4">
                Stay current with rescue skills and emergency procedures. Recommended annually 
                for all divers, mandatory for professionals.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">CPR & First Aid</p>
                    <p className="text-sm text-gray-600">Current techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">Oxygen administration</p>
                    <p className="text-sm text-gray-600">Emergency procedures</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">Scenario practice</p>
                    <p className="text-sm text-gray-600">Real-world situations</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600">Duration: 1 day</span>
                <span className="font-semibold text-brand">Contact for pricing</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-brand">
              <div className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-3">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Rebreather Familiarization</h3>
              <p className="text-gray-700 mb-4">
                Introduction to closed-circuit rebreather diving. Perfect for divers considering 
                CCR training or wanting to try before committing.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">CCR principles</p>
                    <p className="text-sm text-gray-600">How rebreathers work</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">Try dive</p>
                    <p className="text-sm text-gray-600">Supervised CCR experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold">Poseidon units</p>
                    <p className="text-sm text-gray-600">Hands-on with SE7EN/MKVI</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600">Duration: Half day</span>
                <span className="font-semibold text-brand">Contact for pricing</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="btn-solid text-lg px-10 py-4">
              Schedule a Workshop
            </Link>
            <p className="mt-4 text-gray-600">Custom workshops available for groups and organizations</p>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Training Programs</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            We offer tailored training programs for professional teams, fire departments, and specialized units. 
            Contact us to discuss your specific requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn">
              Discuss Custom Training
            </Link>
            <Link href="/training/courses" className="btn">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

