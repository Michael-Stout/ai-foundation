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
    default: 'AI Fundamentals | Michael Stout AI',
    template: '%s | AI Fundamentals',
  },
  description:
    'Master the fundamentals of artificial intelligence with my comprehensive AI Fundamentals program. Learn about AI, prompt engineering, ethics, and future careers.',
  keywords: [
    'AI fundamentals',
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
    siteName: 'AI Fundamentals',
    title: 'AI Fundamentals',
    description: 'Comprehensive AI learning program by Michael Stout AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Fundamentals',
    description: 'Master the fundamentals of artificial intelligence',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
