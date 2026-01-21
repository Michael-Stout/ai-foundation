'use client'

import Link from 'next/link'
import { Button } from '@/components/ui'

interface LessonNavProps {
  moduleId: string
  prevLesson?: { id: string; title: string } | null
  nextLesson?: { id: string; title: string } | null
  onComplete?: () => void
  isCompleted?: boolean
  isLoading?: boolean
}

export function LessonNav({
  moduleId,
  prevLesson,
  nextLesson,
  onComplete,
  isCompleted,
  isLoading,
}: LessonNavProps) {
  return (
    <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        {prevLesson ? (
          <Link href={`/modules/${moduleId}/${prevLesson.id}`}>
            <Button variant="outline">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous: {prevLesson.title}
            </Button>
          </Link>
        ) : (
          <Link href={`/modules/${moduleId}`}>
            <Button variant="outline">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Module
            </Button>
          </Link>
        )}
      </div>

      <div className="flex items-center gap-3">
        {onComplete && !isCompleted && (
          <Button
            variant="secondary"
            onClick={onComplete}
            isLoading={isLoading}
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Mark Complete
          </Button>
        )}

        {isCompleted && (
          <span className="flex items-center gap-2 text-success">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Completed
          </span>
        )}

        {nextLesson ? (
          <Link href={`/modules/${moduleId}/${nextLesson.id}`}>
            <Button>
              Next: {nextLesson.title}
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Link>
        ) : (
          <Link href={`/modules/${moduleId}/quiz`}>
            <Button>
              Take Quiz
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
