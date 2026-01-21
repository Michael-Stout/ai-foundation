import { auth } from '@/lib/auth'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { getModule, getModuleQuiz, modules } from '@/lib/data/modules'
import { getModuleQuizAttempts } from '@/lib/db/queries'
import { QuizClient } from './QuizClient'

interface QuizPageProps {
  params: Promise<{ moduleId: string }>
}

export async function generateStaticParams() {
  return modules.map((module) => ({
    moduleId: module.id,
  }))
}

export async function generateMetadata({ params }: QuizPageProps) {
  const { moduleId } = await params
  const module = getModule(moduleId)
  return {
    title: module ? `Quiz: ${module.title}` : 'Quiz',
  }
}

export default async function QuizPage({ params }: QuizPageProps) {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  const { moduleId } = await params
  const module = getModule(moduleId)
  const quiz = getModuleQuiz(moduleId)

  if (!module || !quiz) {
    notFound()
  }

  const attempts = await getModuleQuizAttempts(session.user.id, moduleId)
  const hasPassed = attempts.some((a) => a.passed)
  const attemptCount = attempts.length

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-2">
        <Link
          href={`/modules/${moduleId}`}
          className="inline-flex items-center text-sm text-foreground-muted hover:text-foreground"
        >
          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {module.title}
        </Link>
      </div>

      <div className="mb-8 text-center">
        <p className="text-sm text-primary font-medium">
          Module {module.order} Quiz
        </p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">{module.title}</h1>
        <p className="mt-2 text-foreground-muted">
          {quiz.length} questions &bull; 70% required to pass
          {attemptCount > 0 && ` &bull; ${attemptCount} previous attempt${attemptCount > 1 ? 's' : ''}`}
        </p>
      </div>

      <QuizClient
        moduleId={moduleId}
        moduleTitle={module.title}
        questions={quiz}
        hasPassed={hasPassed}
      />
    </div>
  )
}
