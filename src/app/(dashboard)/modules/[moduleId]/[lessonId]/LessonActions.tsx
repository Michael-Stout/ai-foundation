'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LessonNav } from '@/components/features'

interface LessonActionsProps {
  moduleId: string
  lessonId: string
  prevLesson: { id: string; title: string } | null
  nextLesson: { id: string; title: string } | null
  isCompleted: boolean
}

export function LessonActions({
  moduleId,
  lessonId,
  prevLesson,
  nextLesson,
  isCompleted: initialCompleted,
}: LessonActionsProps) {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(initialCompleted)
  const [isLoading, setIsLoading] = useState(false)

  const handleComplete = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moduleId, lessonId }),
      })

      if (response.ok) {
        setIsCompleted(true)
        router.refresh()
      }
    } catch (error) {
      console.error('Failed to mark lesson complete:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LessonNav
      moduleId={moduleId}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
      onComplete={handleComplete}
      isCompleted={isCompleted}
      isLoading={isLoading}
    />
  )
}
