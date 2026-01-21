'use server'

import bcrypt from 'bcryptjs'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import { registerSchema, type RegisterInput } from '@/lib/validations/auth'

export async function registerUser(data: RegisterInput) {
  const validated = registerSchema.safeParse(data)

  if (!validated.success) {
    return { error: 'Invalid input', details: validated.error.flatten() }
  }

  const { name, email, password } = validated.data

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  })

  if (existingUser) {
    return { error: 'An account with this email already exists' }
  }

  const hashedPassword = await bcrypt.hash(password, 12)

  const [newUser] = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id })

  return { success: true, userId: newUser.id }
}
