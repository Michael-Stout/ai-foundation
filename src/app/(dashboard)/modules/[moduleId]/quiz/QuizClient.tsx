'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui'
import { QuizQuestion, QuizResults } from '@/components/features'
import type { QuizQuestion as QuizQuestionType } from '@/lib/data/modules'

interface QuizClientProps {
  moduleId: string
  moduleTitle: string
  questions: QuizQuestionType[]
  hasPassed: boolean
}

export function QuizClient({
  moduleId,
  moduleTitle,
  questions,
  hasPassed: initialHasPassed,
}: QuizClientProps) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  )
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [passed, setPassed] = useState(initialHasPassed)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    let correctCount = 0
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correctCount++
      }
    })

    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moduleId,
          score: correctCount,
          totalQuestions: questions.length,
        }),
      })

      const result = await response.json()

      setScore(correctCount)
      setPassed(result.passed)
      setShowResults(true)
      router.refresh()
    } catch (error) {
      console.error('Failed to submit quiz:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
    setScore(0)
    setQuizStarted(true)
  }

  if (showResults) {
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
        passed={passed}
        moduleId={moduleId}
        moduleTitle={moduleTitle}
        onRetry={handleRetry}
      />
    )
  }

  if (!quizStarted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="h-8 w-8 text-primary"
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
        </div>
        <h2 className="mb-2 text-xl font-semibold text-foreground">
          Ready to Test Your Knowledge?
        </h2>
        <p className="mb-6 text-foreground-muted">
          This quiz contains {questions.length} questions. You need to score at least 70% to pass.
          You can review your answers before submitting.
        </p>
        <Button size="lg" onClick={() => setQuizStarted(true)}>
          Start Quiz
        </Button>
      </div>
    )
  }

  const allAnswered = answers.every((a) => a !== null)

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`h-8 w-8 rounded-full text-sm font-medium transition-colors ${
                answers[index] !== null
                  ? currentQuestion === index
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-primary/20 text-primary'
                  : currentQuestion === index
                  ? 'bg-foreground-muted text-background'
                  : 'bg-background-secondary text-foreground-muted'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <QuizQuestion
        question={questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        selectedAnswer={answers[currentQuestion]}
        onSelectAnswer={handleSelectAnswer}
      />

      <div className="mt-6 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </Button>

        {currentQuestion === questions.length - 1 ? (
          <Button
            onClick={handleSubmit}
            disabled={!allAnswered || isSubmitting}
            isLoading={isSubmitting}
          >
            Submit Quiz
          </Button>
        ) : (
          <Button onClick={handleNext} disabled={answers[currentQuestion] === null}>
            Next
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
        )}
      </div>

      {!allAnswered && currentQuestion === questions.length - 1 && (
        <p className="mt-4 text-center text-sm text-foreground-muted">
          Please answer all questions before submitting
        </p>
      )}
    </div>
  )
}
