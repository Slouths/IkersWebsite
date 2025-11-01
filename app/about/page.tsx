import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container-p py-12 space-y-6">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">About Us</h1>
      <p className="text-gray-700 max-w-3xl">
        We help businesses launch websites that are fast, beautiful, and easy to maintain.
        With a focus on performance and accessibility, we deliver experiences users love.
      </p>
      <div className="relative h-72 rounded-xl overflow-hidden">
        <Image src="/team.jpg" alt="Team" fill className="object-cover" />
      </div>
    </div>
  )
}
