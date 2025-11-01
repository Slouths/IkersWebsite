'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sent'>('idle')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const subject = encodeURIComponent('Website inquiry')
    const body = encodeURIComponent(Array.from(fd.entries()).map(([k,v])=>`${k}: ${v}`).join('\n'))
    window.location.href = `mailto:hello@bulldiving.com?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <div className="container-p py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Contact</h1>
      <p className="mt-2 text-gray-700">Tell us a little about your project and we’ll get back to you.</p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
        <input className="border rounded-md px-3 py-2" required name="Name" placeholder="Your name" />
        <input className="border rounded-md px-3 py-2" required name="Email" placeholder="Your email" type="email" />
        <input className="border rounded-md px-3 py-2" name="Company" placeholder="Company (optional)" />
        <textarea className="border rounded-md px-3 py-2 h-32" required name="Message" placeholder="Tell us about your project" />
        <button className="btn w-fit" type="submit">Send</button>
        {status === 'sent' && <p className="text-sm text-green-700">Your email client should open—send it to finish.</p>}
      </form>
    </div>
  )
}
