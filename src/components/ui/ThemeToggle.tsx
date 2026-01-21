'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { updateThemePreference } from '@/lib/auth/profile-actions'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { data: session } = useSession()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark' | 'auto'>('dark')
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Sync selected theme state with current theme when modal opens
  useEffect(() => {
    if (isOpen && session?.user?.id) {
      fetch('/api/theme')
        .then((res) => res.json())
        .then((data) => {
          if (data.theme) {
            setSelectedTheme(data.theme)
          }
        })
        .catch(() => {})
    }
  }, [isOpen, session?.user?.id])

  const calculateSunTimes = useCallback((lat: number, lng: number, date: Date) => {
    const dayOfYear = Math.floor(
      (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
    )
    const declination = -23.45 * Math.cos((360 / 365) * (dayOfYear + 10) * (Math.PI / 180))
    const latRad = lat * (Math.PI / 180)
    const decRad = declination * (Math.PI / 180)
    const cosHourAngle = -Math.tan(latRad) * Math.tan(decRad)
    const clampedCos = Math.max(-1, Math.min(1, cosHourAngle))
    const hourAngle = Math.acos(clampedCos) * (180 / Math.PI)
    const solarNoon = 12 - lng / 15
    const sunriseUTC = solarNoon - hourAngle / 15
    const sunsetUTC = solarNoon + hourAngle / 15
    const timezoneOffset = -date.getTimezoneOffset() / 60
    const sunriseLocal = sunriseUTC + timezoneOffset
    const sunsetLocal = sunsetUTC + timezoneOffset
    const sunrise = new Date(date)
    sunrise.setHours(Math.floor(sunriseLocal), (sunriseLocal % 1) * 60, 0, 0)
    const sunset = new Date(date)
    sunset.setHours(Math.floor(sunsetLocal), (sunsetLocal % 1) * 60, 0, 0)
    return { sunrise, sunset }
  }, [])

  const applyAutoTheme = useCallback(() => {
    const now = new Date()
    const hour = now.getHours()

    const applyBasedOnTime = (sunriseMinutes: number, sunsetMinutes: number) => {
      const currentMinutes = hour * 60 + now.getMinutes()
      if (currentMinutes >= sunriseMinutes && currentMinutes < sunsetMinutes) {
        setTheme('light')
      } else {
        setTheme('dark')
      }
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { sunrise, sunset } = calculateSunTimes(
            position.coords.latitude,
            position.coords.longitude,
            now
          )
          const sunriseMinutes = sunrise.getHours() * 60 + sunrise.getMinutes()
          const sunsetMinutes = sunset.getHours() * 60 + sunset.getMinutes()
          applyBasedOnTime(sunriseMinutes, sunsetMinutes)
        },
        () => {
          applyBasedOnTime(6 * 60, 18 * 60)
        },
        { timeout: 5000, maximumAge: 300000 }
      )
    } else {
      applyBasedOnTime(6 * 60, 18 * 60)
    }
  }, [calculateSunTimes, setTheme])

  async function handleThemeSelect(newTheme: 'light' | 'dark' | 'auto') {
    setIsSaving(true)
    setSelectedTheme(newTheme)

    if (newTheme === 'auto') {
      applyAutoTheme()
    } else {
      setTheme(newTheme)
    }

    // Save preference if logged in
    if (session?.user?.id) {
      try {
        await updateThemePreference({ theme: newTheme })
      } catch {
        // Silently fail
      }
    }

    setIsSaving(false)
    setIsOpen(false)
  }

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-background-secondary text-foreground-muted"
        aria-label="Toggle theme"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg bg-background-secondary hover:bg-border text-foreground-muted hover:text-foreground transition-colors"
        aria-label="Open theme settings"
      >
        {theme === 'dark' ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-background border border-border rounded-2xl p-6 w-full max-w-sm mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Theme Settings</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-background-secondary text-foreground-muted hover:text-foreground transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-foreground-muted mb-6">
              Choose your preferred theme. Automatic mode switches based on sunrise and sunset at your location.
            </p>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleThemeSelect('light')}
                disabled={isSaving}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  selectedTheme === 'light'
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <svg className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-foreground">Light</span>
              </button>

              <button
                onClick={() => handleThemeSelect('dark')}
                disabled={isSaving}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  selectedTheme === 'dark'
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <span className="text-sm font-medium text-foreground">Dark</span>
              </button>

              <button
                onClick={() => handleThemeSelect('auto')}
                disabled={isSaving}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  selectedTheme === 'auto'
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                <span className="text-sm font-medium text-foreground">Auto</span>
              </button>
            </div>

            {selectedTheme === 'auto' && (
              <p className="mt-4 text-xs text-foreground-muted text-center">
                Theme will change based on sunrise/sunset at your location
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
