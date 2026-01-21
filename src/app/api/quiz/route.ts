import { auth } from '@/lib/auth'
import { saveQuizAttempt } from '@/lib/db/queries'
import { z } from 'zod'

const quizSchema = z.object({
  moduleId: z.string().min(1),
  score: z.number().min(0),
  totalQuestions: z.number().min(1),
})

export async function POST(req: Request) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return Response.json({ error: 'UNAUTHORIZED' }, { status: 401 })
    }

    const body = await req.json()
    const parsed = quizSchema.safeParse(body)

    if (!parsed.success) {
      return Response.json(
        { error: 'VALIDATION_ERROR', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { moduleId, score, totalQuestions } = parsed.data

    const result = await saveQuizAttempt(
      session.user.id,
      moduleId,
      score,
      totalQuestions
    )

    if (!result.success) {
      return Response.json({ error: 'INTERNAL_ERROR' }, { status: 500 })
    }

    return Response.json({ success: true, passed: result.passed }, { status: 200 })
  } catch (error) {
    console.error('Quiz API error:', error)
    return Response.json({ error: 'INTERNAL_ERROR' }, { status: 500 })
  }
}
