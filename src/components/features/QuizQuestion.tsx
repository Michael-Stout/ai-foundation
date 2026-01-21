'use client'

import { Card, CardContent } from '@/components/ui'

interface QuizQuestionProps {
  question: {
    id: string
    question: string
    options: string[]
  }
  questionNumber: number
  totalQuestions: number
  selectedAnswer: number | null
  onSelectAnswer: (index: number) => void
  showResult?: boolean
  correctAnswer?: number
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  showResult,
  correctAnswer,
}: QuizQuestionProps) {
  return (
    <Card>
      <CardContent>
        <div className="mb-4 text-sm text-foreground-muted">
          Question {questionNumber} of {totalQuestions}
        </div>
        <h3 className="mb-6 text-xl font-semibold text-foreground">
          {question.question}
        </h3>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let optionClass =
              'w-full rounded-lg border border-border p-4 text-left transition-all hover:border-primary/50'

            if (showResult) {
              if (index === correctAnswer) {
                optionClass =
                  'w-full rounded-lg border-2 border-success bg-success/10 p-4 text-left'
              } else if (index === selectedAnswer && index !== correctAnswer) {
                optionClass =
                  'w-full rounded-lg border-2 border-error bg-error/10 p-4 text-left'
              }
            } else if (selectedAnswer === index) {
              optionClass =
                'w-full rounded-lg border-2 border-primary bg-primary/10 p-4 text-left'
            }

            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => !showResult && onSelectAnswer(index)}
                disabled={showResult}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background-secondary text-sm font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-foreground">{option}</span>
                </div>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
