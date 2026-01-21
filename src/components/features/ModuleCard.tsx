import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Progress } from '@/components/ui'

interface ModuleCardProps {
  module: {
    id: string
    title: string
    description: string
    duration: string
    lessonCount: number
    order: number
  }
  progress?: {
    completedLessons: number
    totalLessons: number
    quizPassed: boolean
  }
}

export function ModuleCard({ module, progress }: ModuleCardProps) {
  const completedLessons = progress?.completedLessons || 0
  const totalLessons = module.lessonCount
  const progressPercent = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0
  const isCompleted = progress?.quizPassed && completedLessons === totalLessons

  return (
    <Link href={`/modules/${module.id}`}>
      <Card className="h-full cursor-pointer hover:border-primary/50 transition-all">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <span className="text-lg font-bold text-primary">{module.order}</span>
            </div>
            {isCompleted ? (
              <Badge variant="success">Completed</Badge>
            ) : progressPercent > 0 ? (
              <Badge variant="accent">In Progress</Badge>
            ) : null}
          </div>
          <CardTitle className="mt-4">{module.title}</CardTitle>
          <CardDescription>{module.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-foreground-muted">
            <div className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{module.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>{totalLessons} lessons</span>
            </div>
          </div>
        </CardContent>
        {progress && (
          <CardFooter>
            <div className="w-full">
              <Progress value={progressPercent} size="sm" />
              <p className="mt-2 text-xs text-foreground-muted">
                {completedLessons} of {totalLessons} lessons completed
              </p>
            </div>
          </CardFooter>
        )}
      </Card>
    </Link>
  )
}
