import { auth } from '@/lib/auth'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { Button, Badge, Progress } from '@/components/ui'
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
  const currentModule = getModule(moduleId)
  return {
    title: currentModule?.title || 'Module',
  }
}

export default async function ModulePage({ params }: ModulePageProps) {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  const { moduleId } = await params
  const currentModule = getModule(moduleId)

  if (!currentModule) {
    notFound()
  }

  const progress = await getUserProgress(session.user.id)
  const quizAttempts = await getUserQuizAttempts(session.user.id)

  const lessonProgress = progress.filter((p) => p.moduleId === moduleId)
  const completedLessons = lessonProgress.filter((p) => p.completed)
  const progressPercent = (completedLessons.length / currentModule.lessons.length) * 100
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
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <span className="text-xl font-bold text-primary">{currentModule.order}</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">{currentModule.title}</h1>
        </div>
        <p className="mt-3 text-foreground-muted">{currentModule.description}</p>
        {quizPassed && (
          <div className="mt-3">
            <Badge variant="success">Completed</Badge>
          </div>
        )}

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-foreground">Module Progress</span>
            <span className="text-lg font-semibold text-primary">
              {completedLessons.length} of {currentModule.lessons.length} lessons completed
            </span>
          </div>
          <Progress value={progressPercent} size="lg" className="mt-3" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Lessons</h2>
        <div className="grid gap-4">
        {currentModule.lessons.map((lesson, index) => {
          const isCompleted = completedLessons.some((p) => p.lessonId === lesson.id)
          const isLocked = false
          const gradients = [
            'from-cyan-500/10 via-blue-500/5 to-indigo-500/10 border-cyan-500/20 hover:border-cyan-500/40',
            'from-emerald-500/10 via-green-500/5 to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/40',
            'from-orange-500/10 via-amber-500/5 to-yellow-500/10 border-orange-500/20 hover:border-orange-500/40',
            'from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 border-violet-500/20 hover:border-violet-500/40',
            'from-rose-500/10 via-pink-500/5 to-red-500/10 border-rose-500/20 hover:border-rose-500/40',
          ]
          const iconColors = [
            'from-cyan-500 to-blue-600 shadow-cyan-500/40',
            'from-emerald-500 to-green-600 shadow-emerald-500/40',
            'from-orange-500 to-amber-600 shadow-orange-500/40',
            'from-violet-500 to-purple-600 shadow-violet-500/40',
            'from-rose-500 to-pink-600 shadow-rose-500/40',
          ]
          const gradient = gradients[index % gradients.length]
          const iconColor = iconColors[index % iconColors.length]

          return (
            <Link
              key={lesson.id}
              href={isLocked ? '#' : `/modules/${moduleId}/${lesson.id}`}
              className={isLocked ? 'cursor-not-allowed' : ''}
            >
              <div className={`
                relative overflow-hidden rounded-2xl p-5
                bg-gradient-to-br ${gradient}
                border transition-all duration-300
                hover:shadow-lg hover:scale-[1.01]
                group cursor-pointer
                ${isLocked ? 'opacity-60' : ''}
              `}>
                <div className="flex items-center gap-4">
                  <div className={`
                    flex-shrink-0 w-12 h-12 rounded-xl
                    ${isCompleted
                      ? 'bg-gradient-to-br from-success to-emerald-600 shadow-lg shadow-success/40'
                      : `bg-gradient-to-br ${iconColor} shadow-lg`}
                    flex items-center justify-center
                    transition-transform duration-300
                    group-hover:scale-110
                  `}>
                    {isCompleted ? (
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                      {lesson.title}
                    </h3>
                    {lesson.objectives && (
                      <p className="mt-1 text-sm text-foreground-muted">
                        {lesson.objectives.length} learning objectives
                      </p>
                    )}
                  </div>
                  {!isLocked && (
                    <div className="
                      flex-shrink-0 w-10 h-10 rounded-full
                      bg-foreground/5 border border-foreground/10
                      flex items-center justify-center
                      group-hover:bg-primary/10 group-hover:border-primary/30
                      transition-all duration-300
                    ">
                      <svg
                        className="h-5 w-5 text-foreground-muted group-hover:text-primary transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
        </div>
      </div>

      {/* Labs Section */}
      {currentModule.labs && currentModule.labs.length > 0 && (
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Labs</h2>

          {/* Lab Cards */}
          <div className="grid gap-4">
            {currentModule.labs.map((lab, index) => {
              const gradients = [
                'from-cyan-500/10 via-blue-500/5 to-indigo-500/10 border-cyan-500/20 hover:border-cyan-500/40',
                'from-emerald-500/10 via-green-500/5 to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/40',
                'from-orange-500/10 via-amber-500/5 to-yellow-500/10 border-orange-500/20 hover:border-orange-500/40',
              ]
              const iconColors = [
                'from-cyan-500 to-blue-600 shadow-cyan-500/40',
                'from-emerald-500 to-green-600 shadow-emerald-500/40',
                'from-orange-500 to-amber-600 shadow-orange-500/40',
              ]
              const gradient = gradients[index % gradients.length]
              const iconColor = iconColors[index % iconColors.length]

              return (
                <Link key={lab.id} href={`/modules/${moduleId}/labs/${lab.id}`}>
                  <div className={`
                    relative overflow-hidden rounded-2xl p-5
                    bg-gradient-to-br ${gradient}
                    border transition-all duration-300
                    hover:shadow-lg hover:scale-[1.01]
                    group cursor-pointer
                  `}>
                    <div className="flex items-center gap-4">
                      <div className={`
                        flex-shrink-0 w-12 h-12 rounded-xl
                        bg-gradient-to-br ${iconColor}
                        flex items-center justify-center
                        shadow-lg transition-transform duration-300
                        group-hover:scale-110
                      `}>
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                          {lab.title}
                        </h3>
                        <p className="mt-1 text-sm text-foreground-muted line-clamp-1">
                          {lab.description}
                        </p>
                      </div>
                      <div className="
                        flex-shrink-0 w-10 h-10 rounded-full
                        bg-foreground/5 border border-foreground/10
                        flex items-center justify-center
                        group-hover:bg-primary/10 group-hover:border-primary/30
                        transition-all duration-300
                      ">
                        <svg
                          className="h-5 w-5 text-foreground-muted group-hover:text-primary transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}

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
