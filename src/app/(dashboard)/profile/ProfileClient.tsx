'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { changePassword, updateThemePreference } from '@/lib/auth/profile-actions'
import {
  changePasswordSchema,
  type ChangePasswordInput,
} from '@/lib/validations/auth'

interface ProfileClientProps {
  user: {
    name: string | null
    email: string | null
  }
  initialTheme: 'light' | 'dark' | 'auto'
}

// Calculate sunrise and sunset times based on location (pure function)
function calculateSunTimes(lat: number, lng: number, date: Date) {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  )
  const declination = -23.45 * Math.cos((360 / 365) * (dayOfYear + 10) * (Math.PI / 180))
  const latRad = lat * (Math.PI / 180)
  const decRad = declination * (Math.PI / 180)
  const hourAngle = Math.acos(-Math.tan(latRad) * Math.tan(decRad)) * (180 / Math.PI)
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
}

export function ProfileClient({ user, initialTheme }: ProfileClientProps) {
  const { setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(initialTheme)
  const [themeMessage, setThemeMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [passwordMessage, setPasswordMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [isChangingTheme, setIsChangingTheme] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordInput>({
    resolver: zodResolver(changePasswordSchema),
  })

  // Apply auto theme based on time of day
  const applyAutoTheme = useCallback(() => {
    const now = new Date()
    const hour = now.getHours()

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { sunrise, sunset } = calculateSunTimes(
            position.coords.latitude,
            position.coords.longitude,
            now
          )
          const currentMinutes = hour * 60 + now.getMinutes()
          const sunriseMinutes = sunrise.getHours() * 60 + sunrise.getMinutes()
          const sunsetMinutes = sunset.getHours() * 60 + sunset.getMinutes()

          if (currentMinutes >= sunriseMinutes && currentMinutes < sunsetMinutes) {
            setTheme('light')
          } else {
            setTheme('dark')
          }
        },
        () => {
          // Fallback: use simple hour-based logic (6 AM - 6 PM = day)
          if (hour >= 6 && hour < 18) {
            setTheme('light')
          } else {
            setTheme('dark')
          }
        }
      )
    } else {
      // Fallback for browsers without geolocation
      if (hour >= 6 && hour < 18) {
        setTheme('light')
      } else {
        setTheme('dark')
      }
    }
  }, [setTheme])

  // Apply theme based on preference
  useEffect(() => {
    if (selectedTheme === 'auto') {
      applyAutoTheme()
      const interval = setInterval(applyAutoTheme, 60000)
      return () => clearInterval(interval)
    } else {
      setTheme(selectedTheme)
    }
  }, [selectedTheme, setTheme, applyAutoTheme])

  async function handleThemeChange(theme: 'light' | 'dark' | 'auto') {
    setIsChangingTheme(true)
    setThemeMessage(null)

    try {
      const result = await updateThemePreference({ theme })

      if (result.error) {
        setThemeMessage({ type: 'error', text: result.error })
      } else {
        setSelectedTheme(theme)
        setThemeMessage({ type: 'success', text: 'Theme preference saved' })
        setTimeout(() => setThemeMessage(null), 3000)
      }
    } catch {
      setThemeMessage({ type: 'error', text: 'Failed to save theme preference' })
    } finally {
      setIsChangingTheme(false)
    }
  }

  async function onPasswordSubmit(data: ChangePasswordInput) {
    setIsChangingPassword(true)
    setPasswordMessage(null)

    try {
      const result = await changePassword(data)

      if (result.error) {
        setPasswordMessage({ type: 'error', text: result.error })
      } else {
        setPasswordMessage({ type: 'success', text: 'Password changed successfully' })
        reset()
        setTimeout(() => setPasswordMessage(null), 3000)
      }
    } catch {
      setPasswordMessage({ type: 'error', text: 'Failed to change password' })
    } finally {
      setIsChangingPassword(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Profile Info */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground-muted">Name</label>
              <p className="mt-1 text-foreground">{user.name || 'Not set'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground-muted">Email</label>
              <p className="mt-1 text-foreground">{user.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground-muted mb-4">
            Choose your preferred theme. Automatic mode switches between light and dark based on sunrise and sunset at your location.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handleThemeChange('light')}
              disabled={isChangingTheme}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                selectedTheme === 'light'
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <svg
                className="h-8 w-8 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              onClick={() => handleThemeChange('dark')}
              disabled={isChangingTheme}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                selectedTheme === 'dark'
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <svg
                className="h-8 w-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              onClick={() => handleThemeChange('auto')}
              disabled={isChangingTheme}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                selectedTheme === 'auto'
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              <span className="text-sm font-medium text-foreground">Auto</span>
              <span className="text-xs text-foreground-muted">Sunrise/Sunset</span>
            </button>
          </div>

          {themeMessage && (
            <p className={`mt-4 text-sm ${themeMessage.type === 'success' ? 'text-success' : 'text-error'}`}>
              {themeMessage.text}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onPasswordSubmit)} className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-foreground-muted mb-1">
                Current Password
              </label>
              <Input
                id="currentPassword"
                type="password"
                {...register('currentPassword')}
                error={errors.currentPassword?.message}
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-foreground-muted mb-1">
                New Password
              </label>
              <Input
                id="newPassword"
                type="password"
                {...register('newPassword')}
                error={errors.newPassword?.message}
              />
              <p className="mt-1 text-xs text-foreground-muted">
                Must be at least 8 characters with uppercase, lowercase, and a number
              </p>
            </div>

            <div>
              <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-foreground-muted mb-1">
                Confirm New Password
              </label>
              <Input
                id="confirmNewPassword"
                type="password"
                {...register('confirmNewPassword')}
                error={errors.confirmNewPassword?.message}
              />
            </div>

            {passwordMessage && (
              <p className={`text-sm ${passwordMessage.type === 'success' ? 'text-success' : 'text-error'}`}>
                {passwordMessage.text}
              </p>
            )}

            <Button type="submit" isLoading={isChangingPassword}>
              Change Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
