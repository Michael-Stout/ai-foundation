import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { getThemePreference } from '@/lib/auth/profile-actions'

export async function GET() {
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json({ theme: 'dark' })
  }

  const { theme } = await getThemePreference()
  return NextResponse.json({ theme })
}
