import { auth } from '@/lib/auth'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { getModule, getLab, getModuleLabs, modules } from '@/lib/data/modules'
import { LabContent } from '@/components/features'
import { Button } from '@/components/ui'

interface LabPageProps {
  params: Promise<{ moduleId: string; labId: string }>
}

export async function generateStaticParams() {
  const params: { moduleId: string; labId: string }[] = []
  modules.forEach((module) => {
    if (module.labs) {
      module.labs.forEach((lab) => {
        params.push({ moduleId: module.id, labId: lab.id })
      })
    }
  })
  return params
}

export async function generateMetadata({ params }: LabPageProps) {
  const { moduleId, labId } = await params
  const lab = getLab(moduleId, labId)
  const currentModule = getModule(moduleId)
  return {
    title: lab ? `Lab: ${lab.title} - ${currentModule?.title}` : 'Lab',
  }
}

export default async function LabPage({ params }: LabPageProps) {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  const { moduleId, labId } = await params
  const currentModule = getModule(moduleId)
  const lab = getLab(moduleId, labId)
  const labs = getModuleLabs(moduleId)

  if (!currentModule || !lab || !labs) {
    notFound()
  }

  // Find adjacent labs for navigation
  const currentIndex = labs.findIndex((l) => l.id === labId)
  const prevLab = currentIndex > 0 ? labs[currentIndex - 1] : null
  const nextLab = currentIndex < labs.length - 1 ? labs[currentIndex + 1] : null

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
          Back to {currentModule.title}
        </Link>
      </div>

      {/* Lab Header */}
      <div className="
        relative overflow-hidden rounded-2xl p-6 mb-8
        bg-gradient-to-br from-violet-600/20 via-purple-600/15 to-fuchsia-600/20
        border border-violet-500/30
      ">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.2),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(217,70,239,0.15),transparent_40%)]" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="
              w-12 h-12 rounded-xl
              bg-gradient-to-br from-violet-500 to-fuchsia-600
              flex items-center justify-center
              shadow-lg shadow-violet-500/40
            ">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="
                inline-flex items-center self-start px-3 py-1 rounded-full
                bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20
                border border-violet-500/30
                text-violet-300 text-sm font-semibold
              ">
                Hands-on Lab
              </span>
              <span className="text-sm text-foreground-muted">
                Module {currentModule.order}: {currentModule.title}
              </span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground">{lab.title}</h1>
          <p className="mt-2 text-foreground-muted">{lab.description}</p>
        </div>
      </div>

      <LabContent lab={lab} />

      {/* Navigation */}
      <div className="mt-12 border-t border-border pt-8">
        <div className="flex items-center justify-between gap-4">
          {prevLab ? (
            <Link href={`/modules/${moduleId}/labs/${prevLab.id}`} className="flex-1">
              <Button variant="outline" className="w-full justify-start gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="truncate">{prevLab.title}</span>
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <Link href={`/modules/${moduleId}`}>
            <Button variant="ghost" size="sm">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </Button>
          </Link>

          {nextLab ? (
            <Link href={`/modules/${moduleId}/labs/${nextLab.id}`} className="flex-1">
              <Button variant="outline" className="w-full justify-end gap-2">
                <span className="truncate">{nextLab.title}</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  )
}
