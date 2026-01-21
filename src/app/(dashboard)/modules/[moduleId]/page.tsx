import { auth } from '@/lib/auth'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { Button, Card, CardContent, Badge, Progress } from '@/components/ui'
import { getModule, modules } from '@/lib/data/modules'
import { getUserProgress, getUserQuizAttempts } from '@/lib/db/queries'

interface ModulePageProps {
  params: Promise<{ moduleId: string }>
}

export async function generateStaticParams() {
  return modules.map((module) => ({
    moduleId: module.id,
  }))
}

export async function generateMetadata({ params }: ModulePageProps) {
  const { moduleId } = await params
  const module = getModule(moduleId)
  return {
    title: module?.title || 'Module',
  }
}

export default async function ModulePage({ params }: ModulePageProps) {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  const { moduleId } = await params
  const module = getModule(moduleId)

  if (!module) {
    notFound()
  }

  const progress = await getUserProgress(session.user.id)
  const quizAttempts = await getUserQuizAttempts(session.user.id)

  const lessonProgress = progress.filter((p) => p.moduleId === moduleId)
  const completedLessons = lessonProgress.filter((p) => p.completed)
  const progressPercent = (completedLessons.length / module.lessons.length) * 100
  const quizPassed = quizAttempts.some((q) => q.moduleId === moduleId && q.passed)
  const bestQuizScore = quizAttempts
    .filter((q) => q.moduleId === moduleId)
    .reduce((max, q) => Math.max(max, (q.score / q.totalQuestions) * 100), 0)

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-2">
        <Link
          href="/modules"
          className="inline-flex items-center text-sm text-foreground-muted hover:text-foreground"
        >
          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Modules
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-xl font-bold text-primary">{module.order}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default">{module.duration}</Badge>
                {quizPassed && <Badge variant="success">Completed</Badge>}
              </div>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-foreground">{module.title}</h1>
            <p className="mt-2 text-foreground-muted">{module.description}</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground-muted">Module Progress</span>
            <span className="font-medium text-foreground">
              {completedLessons.length} of {module.lessons.length} lessons completed
            </span>
          </div>
          <Progress value={progressPercent} className="mt-2" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Lessons</h2>
        {module.lessons.map((lesson, index) => {
          const isCompleted = completedLessons.some((p) => p.lessonId === lesson.id)
          const isLocked = false

          return (
            <Link
              key={lesson.id}
              href={isLocked ? '#' : `/modules/${moduleId}/${lesson.id}`}
              className={isLocked ? 'cursor-not-allowed' : ''}
            >
              <Card className={`hover:border-primary/50 ${isLocked ? 'opacity-60' : ''}`}>
                <CardContent className="flex items-center gap-4 py-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      isCompleted
                        ? 'bg-success text-success-foreground'
                        : 'bg-background-secondary text-foreground-muted'
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{lesson.title}</h3>
                    {lesson.objectives && (
                      <p className="mt-1 text-sm text-foreground-muted">
                        {lesson.objectives.length} learning objectives
                      </p>
                    )}
                  </div>
                  {!isLocked && (
                    <svg className="h-5 w-5 text-foreground-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-foreground">Module Quiz</h3>
            <p className="text-sm text-foreground-muted">
              {quizPassed
                ? `Passed with ${Math.round(bestQuizScore)}%`
                : 'Complete all lessons, then test your knowledge'}
            </p>
          </div>
          <Link href={`/modules/${moduleId}/quiz`}>
            <Button variant={quizPassed ? 'outline' : 'primary'}>
              {quizPassed ? 'Retake Quiz' : 'Take Quiz'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
