import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { getThemePreference } from '@/lib/auth/profile-actions'
import { ProfileClient } from './ProfileClient'

export const metadata = {
  title: 'Profile',
}

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  const { theme } = await getThemePreference()

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Profile Settings</h1>
        <p className="mt-2 text-foreground-muted">
          Manage your account settings and preferences
        </p>
      </div>

      <ProfileClient
        user={{
          name: session.user.name ?? null,
          email: session.user.email ?? null,
        }}
        initialTheme={theme}
      />
    </div>
  )
}
