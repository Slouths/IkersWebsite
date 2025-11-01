'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${scrolled ? 'border-b bg-white/80 backdrop-blur' : 'bg-transparent'} sticky top-0 z-50`}>
      <div className="container-p flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <span className="font-bold">BullDiving</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="btn">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
