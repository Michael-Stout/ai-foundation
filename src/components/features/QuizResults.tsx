import Link from 'next/link'
import { Card, CardContent, Button } from '@/components/ui'

interface QuizResultsProps {
  score: number
  totalQuestions: number
  passed: boolean
  moduleId: string
  moduleTitle: string
  onRetry: () => void
}

export function QuizResults({
  score,
  totalQuestions,
  passed,
  moduleId,
  moduleTitle,
  onRetry,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)

  return (
    <Card className="mx-auto max-w-lg text-center">
      <CardContent className="py-8">
        <div
          className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full ${
            passed ? 'bg-success/10' : 'bg-error/10'
          }`}
        >
          {passed ? (
            <svg
              className="h-12 w-12 text-success"
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
          ) : (
            <svg
              className="h-12 w-12 text-error"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>

        <h2 className="mb-2 text-2xl font-bold text-foreground">
          {passed ? 'Congratulations!' : 'Not Quite There'}
        </h2>

        <p className="mb-6 text-foreground-muted">
          {passed
            ? `You passed the ${moduleTitle} quiz!`
            : `You need 70% to pass. Keep learning and try again!`}
        </p>

        <div className="mb-6 rounded-lg bg-background-secondary p-6">
          <div className="text-4xl font-bold text-foreground">
            {percentage}%
          </div>
          <div className="text-sm text-foreground-muted">
            {score} out of {totalQuestions} correct
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {!passed && (
            <Button onClick={onRetry} variant="outline">
              Try Again
            </Button>
          )}
          <Link href={`/modules/${moduleId}`}>
            <Button variant={passed ? 'primary' : 'ghost'}>
              {passed ? 'Continue Learning' : 'Review Module'}
            </Button>
          </Link>
          {passed && (
            <Link href="/modules">
              <Button variant="outline">All Modules</Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
