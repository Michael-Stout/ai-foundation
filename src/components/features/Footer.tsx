import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <Image
                src="/michael_stout_ai.png"
                alt="Michael Stout AI"
                width={128}
                height={128}
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 max-w-md text-foreground-muted">
              Master the fundamentals of artificial intelligence with my comprehensive
              learning program. Learn at your own pace with interactive modules
              and quizzes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/modules"
                  className="text-foreground-muted hover:text-primary transition-colors"
                >
                  Course Modules
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-foreground-muted hover:text-primary transition-colors"
                >
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-foreground-muted hover:text-primary transition-colors"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://michaelstout.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-primary transition-colors"
                >
                  Michael Stout AI
                </a>
              </li>
              <li>
                <span className="text-foreground-muted">Help Center</span>
              </li>
              <li>
                <span className="text-foreground-muted">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-foreground-muted">
            &copy; {currentYear} Michael Stout AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
