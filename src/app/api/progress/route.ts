import { auth } from '@/lib/auth'
import { markLessonComplete } from '@/lib/db/queries'
import { z } from 'zod'

const progressSchema = z.object({
  moduleId: z.string().min(1),
  lessonId: z.string().min(1),
})

export async function POST(req: Request) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return Response.json({ error: 'UNAUTHORIZED' }, { status: 401 })
    }

    const body = await req.json()
    const parsed = progressSchema.safeParse(body)

    if (!parsed.success) {
      return Response.json(
        { error: 'VALIDATION_ERROR', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { moduleId, lessonId } = parsed.data

    const result = await markLessonComplete(session.user.id, moduleId, lessonId)

    if (!result.success) {
      return Response.json({ error: 'INTERNAL_ERROR' }, { status: 500 })
    }

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Progress API error:', error)
    return Response.json({ error: 'INTERNAL_ERROR' }, { status: 500 })
  }
}
