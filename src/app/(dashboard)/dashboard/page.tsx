import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { DashboardStats, ProgressRing, ModuleCard } from '@/components/features'
import { Button } from '@/components/ui'
import { modules } from '@/lib/data/modules'
import { getUserProgress, getUserQuizAttempts } from '@/lib/db/queries'

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  const progress = await getUserProgress(session.user.id)
  const quizAttempts = await getUserQuizAttempts(session.user.id)

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedLessons = progress.filter((p) => p.completed).length
  const overallProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0
  const passedQuizzes = quizAttempts.filter((q) => q.passed).length

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

  const stats = [
    {
      label: 'Lessons Completed',
      value: `${completedLessons}/${totalLessons}`,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      label: 'Modules Completed',
      value: `${passedQuizzes}/${modules.length}`,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      label: 'Quizzes Passed',
      value: passedQuizzes,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: 'Time Invested',
      value: `${Math.round(completedLessons * 8)}min`,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  const nextModule = moduleProgress.find(
    (mp) => mp.completedLessons < mp.totalLessons || !mp.quizPassed
  )
  const nextModuleData = nextModule
    ? modules.find((m) => m.id === nextModule.moduleId)
    : null

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back, {session.user.name || 'Learner'}!
        </h1>
        <p className="mt-2 text-foreground-muted">
          Continue your AI learning journey
        </p>
      </div>

      <div className="mb-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DashboardStats stats={stats} />
        </div>
        <div className="flex items-center justify-center rounded-xl border border-border bg-card p-6">
          <ProgressRing progress={overallProgress} size={140} />
        </div>
      </div>

      {nextModuleData && (
        <div className="mb-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Continue Learning</h3>
              <p className="text-foreground-muted">
                {nextModuleData.title}
              </p>
            </div>
            <Link href={`/modules/${nextModuleData.id}`}>
              <Button>
                Continue
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      )}

      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Your Modules</h2>
          <Link href="/modules">
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </Link>
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
    </div>
  )
}
