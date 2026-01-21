import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">AI</span>
              </div>
              <span className="text-xl font-bold text-foreground">AI+ Foundation</span>
            </div>
            <p className="mt-4 max-w-md text-foreground-muted">
              Master the fundamentals of artificial intelligence with our comprehensive
              certification program. Learn at your own pace with interactive modules
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
                  href="https://aicerts.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-primary transition-colors"
                >
                  AI CERTs
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
            &copy; {currentYear} AI CERTs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
