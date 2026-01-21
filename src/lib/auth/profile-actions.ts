'use server'

import bcrypt from 'bcryptjs'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import { auth } from '@/lib/auth'
import {
  changePasswordSchema,
  themePreferenceSchema,
  type ChangePasswordInput,
  type ThemePreferenceInput,
} from '@/lib/validations/auth'

export async function changePassword(data: ChangePasswordInput) {
  const session = await auth()

  if (!session?.user?.id) {
    return { error: 'You must be logged in to change your password' }
  }

  const validated = changePasswordSchema.safeParse(data)

  if (!validated.success) {
    return { error: 'Invalid input', details: validated.error.flatten() }
  }

  const { currentPassword, newPassword } = validated.data

  const user = await db.query.users.findFirst({
    where: eq(users.id, session.user.id),
  })

  if (!user || !user.password) {
    return { error: 'User not found' }
  }

  const passwordMatch = await bcrypt.compare(currentPassword, user.password)

  if (!passwordMatch) {
    return { error: 'Current password is incorrect' }
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12)

  await db
    .update(users)
    .set({
      password: hashedPassword,
      updatedAt: new Date(),
    })
    .where(eq(users.id, session.user.id))

  return { success: true }
}

export async function updateThemePreference(data: ThemePreferenceInput) {
  const session = await auth()

  if (!session?.user?.id) {
    return { error: 'You must be logged in to update theme preference' }
  }

  const validated = themePreferenceSchema.safeParse(data)

  if (!validated.success) {
    return { error: 'Invalid theme preference' }
  }

  const { theme } = validated.data

  await db
    .update(users)
    .set({
      themePreference: theme,
      updatedAt: new Date(),
    })
    .where(eq(users.id, session.user.id))

  return { success: true, theme }
}

export async function getThemePreference() {
  const session = await auth()

  if (!session?.user?.id) {
    return { theme: 'dark' as const }
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, session.user.id),
    columns: {
      themePreference: true,
    },
  })

  return { theme: (user?.themePreference as 'light' | 'dark' | 'auto') || 'dark' }
}
