'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'
import { Button, ThemeToggle } from '@/components/ui'

export function Header() {
  const { data: session, status } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/michael_stout_ai.png"
            alt="Michael Stout AI"
            width={96}
            height={96}
            className="rounded-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {status === 'authenticated' ? (
            <>
              <Link
                href="/dashboard"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/modules"
                className="text-foreground-muted hover:text-foreground transition-colors"
              >
                Modules
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  href="/profile"
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                >
                  {session.user?.name || session.user?.email}
                </Link>
                <ThemeToggle />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  Sign Out
                </Button>
              </div>
            </>
          ) : (
            <>
              <ThemeToggle />
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 px-4 py-4">
            {status === 'authenticated' ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-foreground-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/modules"
                  className="text-foreground-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Modules
                </Link>
                <Link
                  href="/profile"
                  className="text-foreground-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground-muted">Theme</span>
                  <ThemeToggle />
                </div>
                <Button
                  variant="outline"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground-muted">Theme</span>
                  <ThemeToggle />
                </div>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
