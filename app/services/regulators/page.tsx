import Link from 'next/link'
import Image from 'next/image'

export default function RegulatorsPage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section
        className="hero-section"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070)' }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Regulator Services</h1>
        </div>
      </section>

      {/* Dark Section - Introduction */}
      <section className="section-dark">
        <div className="content-container text-section-center">
          <p className="text-lg md:text-xl mb-6">
            Regulators should undergo <strong>periodic maintenance</strong> approximately every 100 dives or once a year.
          </p>
          <p className="text-lg md:text-xl mb-6">
            This helps prolong their lifespan and, above all, <strong>ensures our safety!</strong>
          </p>
          <p className="text-lg md:text-xl mb-6">
            The regulator we use for breathing must always be in <strong>perfect condition</strong>, don't you think?
          </p>
          <p className="text-lg md:text-xl mb-8">
            Our certified <strong>experience-based technicians</strong> work thorough inspections, disassemble and clean
            components, and replace worn parts to maintain <strong>optimal performance.</strong>
          </p>

          <p className="text-lg md:text-xl">
            We offer technical service for <strong>all types of brands</strong> such as
            Scubapro, Mares, Cressi, Apeks, Aqualung, Beuchat, Hollis, Oceanic, and Seac.
          </p>

          <div className="mt-12">
            <button className="btn">Contact us</button>
          </div>
        </div>
      </section>

      {/* Light Section - Service Features */}
      <section className="section-light">
        <div className="content-container">
          <div className="text-section-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Maintenance Regulator Services Features</h2>
            <p className="text-lg">
              The regulator maintenance process ensures the perfect performance of your diving regulators.
            </p>
            <p className="text-lg mt-4">
              We don't only maintain and repair equipment for individual divers. We can also work with various Fire Departments,
              professional diving companies, as well as diving clubs and centers,
              to <strong>provide comprehensive maintenance</strong> for all their equipment.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">How is Our Regulator Full Service Protocol?</h3>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  number: '1',
                  title: 'General Diagnosis of the Regulator',
                  desc: 'We begin by taking several photos of your regulator, assessing its condition, and identifying any potential damage. A functional diagnosis is then performed, including a leak test by fully submerging the equipment to check for possible leaks. Following this, our technicians will check the intermediate pressure of the first stage and the operation of the second stage.'
                },
                {
                  number: '2',
                  title: 'Disassembly',
                  desc: 'We disassemble the components of your regulator and inspect any parts that may be damaged. Photos are taken throughout the process so you can follow along with the maintenance or repair.'
                },
                {
                  number: '3',
                  title: 'Cleaning',
                  desc: 'The metal parts of your regulator are cleaned using ultrasonic machines and a specific acid solution designed for regulator cleaning (Regulator Cleaner by Proquimia) in distilled water to ensure they are spotless. Plastic components are cleaned manually with warm soapy water and disinfectant. The hose connections are also placed in the ultrasonic cleaner. All parts are thoroughly inspected for cleaning quality and left to dry.'
                },
                {
                  number: '4',
                  title: 'Replacement of Worn Components',
                  desc: 'We replace sealing components, such as O-rings and seats, using the official kit from your regulator\'s brand to ensure it functions properly and without leaks. The O-rings on the hoses and pressure gauge are also replaced.'
                },
                {
                  number: '5',
                  title: 'Reassembly & Adjustment',
                  desc: 'We reassemble all the components, following the lubrication and adjustment settings recommended by each manufacturer to guarantee the correct intermediate pressure of the first stage and the cracking effort of the second stage.'
                },
                {
                  number: '6',
                  title: 'Functionality Test',
                  desc: 'We test the proper operation of the regulator. We simulate the flow of the second stage in both the demand and purge positions and verify the inspiratory effort with a manometer following the recommendations of the EN250 standard. We also check the intermediate pressure drop to ensure that it never switches to continuous flow.'
                },
                {
                  number: '7',
                  title: 'Leak Test',
                  desc: 'The regulator is fully submerged under pressure. First, the first stage is checked for leaks, followed by the two second stages to ensure there are no leaks. The diaphragm is pressed in various positions to verify the flow and ensure it does not switch to continuous.'
                },
                {
                  number: '8',
                  title: 'Drying and Packaging',
                  desc: 'Once the regulator is dry, it is carefully packed to prevent any damage. All components included in the kit, as well as any replaced components, are returned. The replaced parts are rendered unusable to prevent future use.'
                }
              ].map((step) => (
                <div key={step.number} className="border-l-4 border-gray-300 pl-6">
                  <h4 className="text-xl font-bold mb-2">{step.number}. {step.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-lg mb-4">
                <strong>Remember!</strong> You will be able to follow the entire procedure through a shared folder with photos of every step from start to finish!
              </p>
              <p className="text-lg mb-4">
                You may send it yourself, or <strong>prepare the package</strong> and I will arrange for the courier to collect it.
              </p>
              <p className="text-lg">
                If any of the services do not meet your expectations, we will adjust or re-repair your equipment at no additional cost within 60 days
                of the service date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section - Pricing */}
      <section className="section-light bg-gray-50">
        <div className="content-container text-section-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Service Pricing</h2>

          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <p className="text-5xl md:text-6xl font-bold mb-2">
                <span className="text-2xl font-normal">1st Stage</span> Maintenance: <span className="text-brand">$44</span>
              </p>
            </div>
            <div className="mb-12">
              <p className="text-5xl md:text-6xl font-bold">
                <span className="text-2xl font-normal">2nd Stage</span> Maintenance: <span className="text-brand">$22</span>
              </p>
            </div>

            <div className="text-lg space-y-4">
              <p>Diagnosis, Leak test, Hose maintenance and Cleaning are included in the service,</p>
              <p>except for the <strong>specific kit</strong> to your regulator.</p>
              <p className="mt-8"><strong>Contact us</strong>, and we'll send you a <strong>quote</strong> for your regulator.</p>
              <p>If you need a <strong>specific service or repair</strong>,</p>
              <p>feel free to send us a message or <strong>give us a call</strong> to discuss your specific needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
