'use client'

import DOMPurify from 'isomorphic-dompurify'

interface LessonContentProps {
  content: string
  objectives?: string[]
}

export function LessonContent({ content, objectives }: LessonContentProps) {
  return (
    <div>
      {objectives && objectives.length > 0 && (
        <div className="mb-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Learning Objectives
          </h3>
          <ul className="mt-3 space-y-2">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground-muted">
                <svg
                  className="mt-1 h-4 w-4 flex-shrink-0 text-primary"
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
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className="prose prose-invert max-w-none
          prose-headings:text-foreground
          prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
          prose-h4:text-lg prose-h4:font-medium prose-h4:mt-4 prose-h4:mb-2
          prose-p:text-foreground-muted prose-p:leading-relaxed
          prose-strong:text-foreground prose-strong:font-semibold
          prose-ul:text-foreground-muted prose-ul:space-y-2
          prose-ol:text-foreground-muted prose-ol:space-y-2
          prose-li:text-foreground-muted
          prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-background-secondary prose-pre:border prose-pre:border-border
          prose-table:border prose-table:border-border
          prose-th:bg-background-secondary prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-border
          prose-td:p-3 prose-td:border prose-td:border-border
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        "
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(formatContent(content)) }}
      />
    </div>
  )
}

function formatContent(content: string): string {
  // First, process special blocks
  const processedContent = processSpecialBlocks(content)

  const lines = processedContent.trim().split('\n')
  let html = ''
  let inList = false
  let inOrderedList = false
  let inCodeBlock = false
  let inTable = false
  let tableRows: string[][] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Skip already processed HTML blocks
    if (line.startsWith('<div') || line.startsWith('</div') || line.includes('class="')) {
      html += line
      continue
    }

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        html += '</code></pre>'
        inCodeBlock = false
      } else {
        html += '<pre><code>'
        inCodeBlock = true
      }
      continue
    }

    if (inCodeBlock) {
      html += escapeHtml(line) + '\n'
      continue
    }

    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        inTable = true
        tableRows = []
      }
      const cells = line.slice(1, -1).split('|').map(c => c.trim())
      if (!cells.every(c => c.match(/^-+$/))) {
        tableRows.push(cells)
      }
      continue
    } else if (inTable) {
      html += renderTable(tableRows)
      inTable = false
      tableRows = []
    }

    if (line.startsWith('## ')) {
      if (inList) { html += '</ul>'; inList = false }
      if (inOrderedList) { html += '</ol>'; inOrderedList = false }
      html += `<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">${formatInline(line.slice(3))}</h2>`
    } else if (line.startsWith('### ')) {
      if (inList) { html += '</ul>'; inList = false }
      if (inOrderedList) { html += '</ol>'; inOrderedList = false }
      html += `<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">${formatInline(line.slice(4))}</h3>`
    } else if (line.startsWith('#### ')) {
      if (inList) { html += '</ul>'; inList = false }
      if (inOrderedList) { html += '</ol>'; inOrderedList = false }
      html += `<h4 class="text-lg font-medium text-foreground mt-4 mb-2">${formatInline(line.slice(5))}</h4>`
    } else if (line.match(/^- /)) {
      if (inOrderedList) { html += '</ol>'; inOrderedList = false }
      if (!inList) { html += '<ul>'; inList = true }
      html += `<li>${formatInline(line.slice(2))}</li>`
    } else if (line.match(/^\d+\. /)) {
      if (inList) { html += '</ul>'; inList = false }
      if (!inOrderedList) { html += '<ol>'; inOrderedList = true }
      html += `<li>${formatInline(line.replace(/^\d+\. /, ''))}</li>`
    } else if (line.trim() === '') {
      if (inList) { html += '</ul>'; inList = false }
      if (inOrderedList) { html += '</ol>'; inOrderedList = false }
    } else if (line.startsWith('**') && line.endsWith('**')) {
      if (inList) { html += '</ul>'; inList = false }
      if (inOrderedList) { html += '</ol>'; inOrderedList = false }
      html += `<p><strong>${formatInline(line.slice(2, -2))}</strong></p>`
    } else {
      if (inList) { html += '</ul>'; inList = false }
      if (inOrderedList) { html += '</ol>'; inOrderedList = false }
      if (line.trim()) {
        html += `<p>${formatInline(line)}</p>`
      }
    }
  }

  if (inTable) {
    html += renderTable(tableRows)
  }
  if (inList) html += '</ul>'
  if (inOrderedList) html += '</ol>'
  if (inCodeBlock) html += '</code></pre>'

  return html
}

function processSpecialBlocks(content: string): string {
  // Process :::info blocks
  content = content.replace(
    /:::info\s*\n([\s\S]*?)\n:::/g,
    (_, inner) => `
<div class="my-6 rounded-xl border border-blue-500/30 bg-blue-500/10 p-5">
  <div class="flex items-start gap-3">
    <div class="flex-shrink-0 mt-0.5">
      <svg class="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="text-foreground-muted text-sm leading-relaxed">${formatInline(inner.trim())}</div>
  </div>
</div>`
  )

  // Process :::tip blocks
  content = content.replace(
    /:::tip\s*\n([\s\S]*?)\n:::/g,
    (_, inner) => `
<div class="my-6 rounded-xl border border-green-500/30 bg-green-500/10 p-5">
  <div class="flex items-start gap-3">
    <div class="flex-shrink-0 mt-0.5">
      <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div>
    <div class="text-foreground-muted text-sm leading-relaxed">${formatInline(inner.trim())}</div>
  </div>
</div>`
  )

  // Process :::warning blocks
  content = content.replace(
    /:::warning\s*\n([\s\S]*?)\n:::/g,
    (_, inner) => `
<div class="my-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
  <div class="flex items-start gap-3">
    <div class="flex-shrink-0 mt-0.5">
      <svg class="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    <div class="text-foreground-muted text-sm leading-relaxed">${formatInline(inner.trim())}</div>
  </div>
</div>`
  )

  // Process :::key-concept blocks
  content = content.replace(
    /:::key-concept\[([^\]]+)\]\s*\n([\s\S]*?)\n:::/g,
    (_, title, inner) => `
<div class="my-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-5">
  <div class="flex items-center gap-2 mb-3">
    <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
    <span class="font-semibold text-foreground">${title}</span>
  </div>
  <div class="text-foreground-muted text-sm leading-relaxed">${formatInline(inner.trim())}</div>
</div>`
  )

  // Process :::card-grid blocks
  content = content.replace(
    /:::card-grid\s*\n([\s\S]*?)\n:::end-grid/g,
    (_, inner) => {
      // Process individual cards within the grid
      const cardsHtml = inner.replace(
        /:::card\[([^\]]*)\]\[([^\]]*)\]\s*\n([\s\S]*?)(?=:::card|$)/g,
        (_: string, icon: string, title: string, cardContent: string) => {
          const iconHtml = getIconHtml(icon.trim())
          return `
<div class="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors">
  <div class="flex items-center gap-3 mb-3">
    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
      ${iconHtml}
    </div>
    <h4 class="font-semibold text-foreground text-base">${title.trim()}</h4>
  </div>
  <div class="text-foreground-muted text-sm leading-relaxed">${formatInline(cardContent.trim())}</div>
</div>`
        }
      )
      return `<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">${cardsHtml}</div>`
    }
  )

  // Process :::timeline blocks
  content = content.replace(
    /:::timeline\s*\n([\s\S]*?)\n:::end-timeline/g,
    (_, inner) => {
      const items = inner.trim().split('\n').filter((line: string) => line.startsWith('- '))
      const timelineHtml = items.map((item: string, index: number) => {
        const match = item.match(/^- \*\*([^*]+)\*\*:\s*(.+)$/)
        if (match) {
          const [, date, description] = match
          return `
<div class="relative pl-8 pb-6 ${index === items.length - 1 ? '' : 'border-l-2 border-border'}">
  <div class="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
  <div class="text-sm font-semibold text-primary mb-1">${date}</div>
  <div class="text-foreground-muted text-sm">${description}</div>
</div>`
        }
        return ''
      }).join('')
      return `<div class="my-6 ml-2">${timelineHtml}</div>`
    }
  )

  // Process :::feature-list blocks with :::feature[Title] syntax
  content = content.replace(
    /:::feature-list\s*\n([\s\S]*?)\n:::end-list/g,
    (_, inner) => {
      // Handle :::feature[Title] format
      const featureMatches = inner.matchAll(/:::feature\[([^\]]+)\]\s*\n([^\n:]+(?:\n(?!:::)[^\n]+)*)/g)
      const features = Array.from(featureMatches)

      if (features.length > 0) {
        const listHtml = (features as RegExpMatchArray[]).map((match, index) => {
          const title = match[1]
          const description = match[2].trim()
          const icons = [
            '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
            '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
            '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
            '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
            '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
          ]
          const icon = icons[index % icons.length]
          return `
<div class="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors">
  <div class="flex items-center gap-3 mb-3">
    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
      ${icon}
    </div>
    <h4 class="font-semibold text-foreground text-base">${title}</h4>
  </div>
  <div class="text-foreground-muted text-sm leading-relaxed">${description}</div>
</div>`
        }).join('')
        return `<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">${listHtml}</div>`
      }

      // Fallback to old format: - **Title**: Description
      const items = inner.trim().split('\n').filter((line: string) => line.startsWith('- '))
      const listHtml = items.map((item: string) => {
        const match = item.match(/^- \*\*([^*]+)\*\*:\s*(.+)$/)
        if (match) {
          const [, title, description] = match
          return `
<div class="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors">
  <div class="flex items-center gap-3 mb-3">
    <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
      <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h4 class="font-semibold text-foreground text-base">${title}</h4>
  </div>
  <div class="text-foreground-muted text-sm leading-relaxed">${description}</div>
</div>`
        }
        return ''
      }).join('')
      return `<div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">${listHtml}</div>`
    }
  )

  // Process :::stats blocks
  content = content.replace(
    /:::stats\s*\n([\s\S]*?)\n:::end-stats/g,
    (_, inner) => {
      const items = inner.trim().split('\n').filter((line: string) => line.startsWith('- '))
      const statsHtml = items.map((item: string) => {
        const match = item.match(/^- \*\*([^*]+)\*\*:\s*(.+)$/)
        if (match) {
          const [, value, label] = match
          return `
<div class="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-border">
  <div class="text-2xl font-bold text-primary">${value}</div>
  <div class="text-foreground-muted text-sm mt-1">${label}</div>
</div>`
        }
        return ''
      }).join('')
      return `<div class="my-6 grid grid-cols-2 md:grid-cols-4 gap-4">${statsHtml}</div>`
    }
  )

  return content
}

function getIconHtml(iconName: string): string {
  const icons: Record<string, string> = {
    'eye': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>',
    'microphone': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>',
    'brain': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
    'chat': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>',
    'robot': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>',
    'chart': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
    'database': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>',
    'cog': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
    'heart': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>',
    'home': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>',
    'car': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h8m-8 5h8m-4-9a9 9 0 110 18 9 9 0 010-18z" /></svg>',
    'star': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>',
    'check': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>',
    'book': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
    'shield': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
    'default': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
  }
  return icons[iconName] || icons['default']
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function renderTable(rows: string[][]): string {
  if (rows.length === 0) return ''

  let html = '<div class="my-6 overflow-x-auto rounded-xl border border-border"><table class="w-full">'

  if (rows.length > 0) {
    html += '<thead class="bg-background-secondary"><tr>'
    rows[0].forEach(cell => {
      html += `<th class="p-4 text-left font-semibold text-foreground border-b border-border">${formatInline(cell)}</th>`
    })
    html += '</tr></thead>'
  }

  if (rows.length > 1) {
    html += '<tbody>'
    for (let i = 1; i < rows.length; i++) {
      html += `<tr class="${i % 2 === 0 ? 'bg-background-secondary/50' : ''}">`
      rows[i].forEach(cell => {
        html += `<td class="p-4 text-foreground-muted border-b border-border last:border-b-0">${formatInline(cell)}</td>`
      })
      html += '</tr>'
    }
    html += '</tbody>'
  }

  html += '</table></div>'
  return html
}
