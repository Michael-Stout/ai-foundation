import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { ModuleCard } from '@/components/features'
import { modules } from '@/lib/data/modules'
import { getUserProgress, getUserQuizAttempts } from '@/lib/db/queries'

export const metadata = {
  title: 'Course Modules',
}

export default async function ModulesPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  const progress = await getUserProgress(session.user.id)
  const quizAttempts = await getUserQuizAttempts(session.user.id)

  const moduleProgress = modules.map((module) => {
    const moduleLessonProgress = progress.filter((p) => p.moduleId === module.id)
    const completedModuleLessons = moduleLessonProgress.filter((p) => p.completed).length
    const quizPassed = quizAttempts.some((q) => q.moduleId === module.id && q.passed)

    return {
      moduleId: module.id,
      completedLessons: completedModuleLessons,
      totalLessons: module.lessons.length,
      quizPassed,
    }
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Course Modules</h1>
        <p className="mt-2 text-foreground-muted">
          Complete all 5 modules to earn your AI+ Foundation certification
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const mp = moduleProgress.find((p) => p.moduleId === module.id)
          return (
            <ModuleCard
              key={module.id}
              module={{
                ...module,
                lessonCount: module.lessons.length,
              }}
              progress={mp}
            />
          )
        })}
      </div>
    </div>
  )
}
