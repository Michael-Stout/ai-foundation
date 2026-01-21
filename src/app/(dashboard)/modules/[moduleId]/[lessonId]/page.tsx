import { auth } from '@/lib/auth'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { getModule, getLesson, getAdjacentLessons, modules } from '@/lib/data/modules'
import { getLessonProgress } from '@/lib/db/queries'
import { LessonContent, LessonNav } from '@/components/features'
import { LessonActions } from './LessonActions'

interface LessonPageProps {
  params: Promise<{ moduleId: string; lessonId: string }>
}

export async function generateStaticParams() {
  const params: { moduleId: string; lessonId: string }[] = []
  modules.forEach((module) => {
    module.lessons.forEach((lesson) => {
      params.push({ moduleId: module.id, lessonId: lesson.id })
    })
  })
  return params
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { moduleId, lessonId } = await params
  const lesson = getLesson(moduleId, lessonId)
  const module = getModule(moduleId)
  return {
    title: lesson ? `${lesson.title} - ${module?.title}` : 'Lesson',
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  const { moduleId, lessonId } = await params
  const module = getModule(moduleId)
  const lesson = getLesson(moduleId, lessonId)

  if (!module || !lesson) {
    notFound()
  }

  const { prev, next } = getAdjacentLessons(moduleId, lessonId)
  const progress = await getLessonProgress(session.user.id, moduleId, lessonId)
  const isCompleted = progress?.completed || false

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
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

      <div className="mb-8">
        <p className="text-sm text-primary font-medium">
          Module {module.order}: {module.title}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">{lesson.title}</h1>
      </div>

      <LessonContent content={lesson.content} objectives={lesson.objectives} />

      <LessonActions
        moduleId={moduleId}
        lessonId={lessonId}
        prevLesson={prev}
        nextLesson={next}
        isCompleted={isCompleted}
      />
    </div>
  )
}
