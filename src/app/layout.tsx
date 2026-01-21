import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'AI+ Foundation | AI CERTs Certification',
    template: '%s | AI+ Foundation',
  },
  description:
    'Master the fundamentals of artificial intelligence with our comprehensive AI+ Foundation certification program. Learn about AI, prompt engineering, ethics, and future careers.',
  keywords: [
    'AI certification',
    'artificial intelligence',
    'AI training',
    'prompt engineering',
    'AI ethics',
    'machine learning',
    'AI careers',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AI+ Foundation',
    title: 'AI+ Foundation Certification',
    description: 'Comprehensive AI certification program by AI CERTs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI+ Foundation Certification',
    description: 'Master the fundamentals of artificial intelligence',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
