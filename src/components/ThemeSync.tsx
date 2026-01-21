'use client'

import { useEffect, useCallback, useRef } from 'react'
import { useTheme } from 'next-themes'
import { useSession } from 'next-auth/react'

export function ThemeSync() {
  const { setTheme } = useTheme()
  const { data: session, status } = useSession()
  const hasInitialized = useRef(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

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
          // Fallback: 6 AM - 6 PM = day
          applyBasedOnTime(6 * 60, 18 * 60)
        },
        { timeout: 5000, maximumAge: 300000 } // Cache location for 5 minutes
      )
    } else {
      applyBasedOnTime(6 * 60, 18 * 60)
    }
  }, [calculateSunTimes, setTheme])

  useEffect(() => {
    // Wait for session to load
    if (status === 'loading') return

    // Only initialize once
    if (hasInitialized.current) return

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    async function syncTheme() {
      // If not logged in, don't sync from server
      if (!session?.user?.id) {
        hasInitialized.current = true
        return
      }

      try {
        const response = await fetch('/api/theme')
        const data = await response.json()

        if (data.theme === 'auto') {
          applyAutoTheme()
          // Check every 5 minutes instead of every minute to reduce flickering
          intervalRef.current = setInterval(applyAutoTheme, 300000)
        } else if (data.theme) {
          setTheme(data.theme)
        }
      } catch {
        // Silently fail, keep current theme
      }

      hasInitialized.current = true
    }

    syncTheme()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [session?.user?.id, status, setTheme, applyAutoTheme])

  return null
}
