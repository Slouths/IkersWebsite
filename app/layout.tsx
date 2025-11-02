import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'BullDiving — Scuba Diving & Services',
  description: 'Professional scuba diving experiences, gear service, and training.',
  openGraph: {
    title: 'BullDiving',
    description: 'Professional scuba diving experiences, gear service, and training.',
    type: 'website'
  },
  metadataBase: new URL('https://bulldiving.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
