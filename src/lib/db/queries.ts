import { eq, and } from 'drizzle-orm'
import { db } from './index'
import { userProgress, quizAttempts, type UserProgress, type QuizAttempt } from './schema'

export async function getUserProgress(userId: string): Promise<UserProgress[]> {
  try {
    return await db.query.userProgress.findMany({
      where: eq(userProgress.userId, userId),
    })
  } catch {
    return []
  }
}

export async function getUserQuizAttempts(userId: string): Promise<QuizAttempt[]> {
  try {
    return await db.query.quizAttempts.findMany({
      where: eq(quizAttempts.userId, userId),
    })
  } catch {
    return []
  }
}

export async function getLessonProgress(
  userId: string,
  moduleId: string,
  lessonId: string
): Promise<UserProgress | null> {
  try {
    const result = await db.query.userProgress.findFirst({
      where: and(
        eq(userProgress.userId, userId),
        eq(userProgress.moduleId, moduleId),
        eq(userProgress.lessonId, lessonId)
      ),
    })
    return result || null
  } catch {
    return null
  }
}

export async function markLessonComplete(
  userId: string,
  moduleId: string,
  lessonId: string
): Promise<{ success: boolean }> {
  try {
    const existing = await getLessonProgress(userId, moduleId, lessonId)

    if (existing) {
      await db
        .update(userProgress)
        .set({ completed: true, completedAt: new Date() })
        .where(eq(userProgress.id, existing.id))
    } else {
      await db.insert(userProgress).values({
        userId,
        moduleId,
        lessonId,
        completed: true,
        completedAt: new Date(),
      })
    }

    return { success: true }
  } catch {
    return { success: false }
  }
}

export async function getModuleQuizAttempts(
  userId: string,
  moduleId: string
): Promise<QuizAttempt[]> {
  try {
    return await db.query.quizAttempts.findMany({
      where: and(
        eq(quizAttempts.userId, userId),
        eq(quizAttempts.moduleId, moduleId)
      ),
    })
  } catch {
    return []
  }
}

export async function saveQuizAttempt(
  userId: string,
  moduleId: string,
  score: number,
  totalQuestions: number
): Promise<{ success: boolean; passed: boolean }> {
  try {
    const passed = (score / totalQuestions) >= 0.7

    await db.insert(quizAttempts).values({
      userId,
      moduleId,
      score,
      totalQuestions,
      passed,
    })

    return { success: true, passed }
  } catch {
    return { success: false, passed: false }
  }
}
