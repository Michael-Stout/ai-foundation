'use client'

import { Lab } from '@/lib/data/modules'

interface LabContentProps {
  lab: Lab
}

export function LabContent({ lab }: LabContentProps) {
  return (
    <div>
      {/* Lab Description - Gradient Card */}
      <div className="
        mb-8 rounded-2xl p-6
        bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-fuchsia-500/10
        border border-violet-500/20
        shadow-lg shadow-violet-500/5
      ">
        <div className="flex items-start gap-4">
          <div className="
            flex-shrink-0 w-12 h-12 rounded-xl
            bg-gradient-to-br from-violet-500 to-purple-600
            flex items-center justify-center shadow-lg shadow-violet-500/30
          ">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">About This Lab</h3>
            <p className="text-foreground-muted leading-relaxed">{lab.description}</p>
          </div>
        </div>
      </div>

      {/* Tools Section - Colorful Cards */}
      {lab.tools && lab.tools.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="
              w-10 h-10 rounded-xl
              bg-gradient-to-br from-cyan-500 to-blue-600
              flex items-center justify-center shadow-lg shadow-cyan-500/30
            ">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Tools & Resources</h3>
          </div>
          <div className="grid gap-4">
            {lab.tools.map((tool, index) => (
              <div
                key={index}
                className="
                  relative overflow-hidden rounded-2xl p-5
                  bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10
                  border border-cyan-500/20
                  hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4">
                  <div className="
                    flex-shrink-0 w-14 h-14 rounded-xl
                    bg-gradient-to-br from-cyan-500/20 to-blue-500/20
                    border border-cyan-500/30
                    flex items-center justify-center
                  ">
                    <svg className="h-7 w-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground text-lg">{tool.name}</div>
                    <div className="text-sm text-foreground-muted mt-0.5">{tool.type}</div>
                  </div>
                  {tool.url && (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-shrink-0 px-5 py-2.5 rounded-xl
                        bg-gradient-to-r from-cyan-500 to-blue-600
                        text-white text-sm font-semibold
                        hover:from-cyan-400 hover:to-blue-500
                        shadow-lg shadow-cyan-500/30
                        transition-all duration-300 hover:scale-105
                        flex items-center gap-2
                      "
                    >
                      <span>Launch Tool</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Learning Objectives - Green Theme */}
      {lab.objectives && lab.objectives.length > 0 && (
        <div className="
          mb-8 rounded-2xl p-6
          bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10
          border border-emerald-500/20
          shadow-lg shadow-emerald-500/5
        ">
          <div className="flex items-center gap-3 mb-4">
            <div className="
              w-10 h-10 rounded-xl
              bg-gradient-to-br from-emerald-500 to-green-600
              flex items-center justify-center shadow-lg shadow-emerald-500/30
            ">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">What You&apos;ll Learn</h3>
          </div>
          <div className="grid gap-3">
            {lab.objectives.map((objective, index) => (
              <div
                key={index}
                className="
                  flex items-start gap-3 p-3 rounded-xl
                  bg-emerald-500/5 border border-emerald-500/10
                  hover:bg-emerald-500/10 transition-colors
                "
              >
                <div className="
                  flex-shrink-0 w-6 h-6 rounded-full mt-0.5
                  bg-gradient-to-br from-emerald-500 to-green-600
                  flex items-center justify-center
                  shadow-sm shadow-emerald-500/30
                ">
                  <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground-muted">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lab Content */}
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
        dangerouslySetInnerHTML={{ __html: formatContent(lab.content) }}
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
      html += `<h2>${formatInline(line.slice(3))}</h2>`
    } else if (line.startsWith('### ')) {
      if (inList) { html += '</ul>'; inList = false }
      if (inOrderedList) { html += '</ol>'; inOrderedList = false }
      html += `<h3>${formatInline(line.slice(4))}</h3>`
    } else if (line.startsWith('#### ')) {
      if (inList) { html += '</ul>'; inList = false }
      if (inOrderedList) { html += '</ol>'; inOrderedList = false }
      html += `<h4>${formatInline(line.slice(5))}</h4>`
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
  <div class="text-foreground-muted text-sm leading-relaxed">${formatInline(inner.trim())}</div>
</div>`
  )

  // Process :::tip blocks with optional title
  content = content.replace(
    /:::tip\[([^\]]+)\]\s*\n([\s\S]*?)\n:::/g,
    (_, title, inner) => `
<div class="my-6 rounded-xl border border-green-500/30 bg-green-500/10 p-5">
  <div class="font-semibold text-green-400 mb-2">${title}</div>
  <div class="text-foreground-muted text-sm leading-relaxed">${formatInline(inner.trim())}</div>
</div>`
  )

  // Process :::tip blocks without title
  content = content.replace(
    /:::tip\s*\n([\s\S]*?)\n:::/g,
    (_, inner) => `
<div class="my-6 rounded-xl border border-green-500/30 bg-green-500/10 p-5">
  <div class="text-foreground-muted text-sm leading-relaxed">${formatInline(inner.trim())}</div>
</div>`
  )

  // Process :::warning blocks
  content = content.replace(
    /:::warning\s*\n([\s\S]*?)\n:::/g,
    (_, inner) => `
<div class="my-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
  <div class="font-semibold text-amber-400 mb-2">Warning</div>
  <div class="text-foreground-muted text-sm leading-relaxed">${formatInline(inner.trim())}</div>
</div>`
  )

  // Process :::key-concept blocks
  content = content.replace(
    /:::key-concept\[([^\]]+)\]\s*\n([\s\S]*?)\n:::/g,
    (_, title, inner) => `
<div class="my-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-5">
  <div class="font-semibold text-foreground mb-3">${title}</div>
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

  // Process :::feature-list blocks
  content = content.replace(
    /:::feature-list\s*\n([\s\S]*?)\n:::end-list/g,
    (_, inner) => {
      const items = inner.trim().split('\n').filter((line: string) => line.startsWith('- '))
      const listHtml = items.map((item: string) => {
        const match = item.match(/^- \*\*([^*]+)\*\*:\s*(.+)$/)
        if (match) {
          const [, title, description] = match
          return `
<div class="flex items-start gap-3 p-3 rounded-lg hover:bg-background-secondary transition-colors">
  <div class="flex-shrink-0 mt-0.5">
    <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <div>
    <div class="font-medium text-foreground">${title}</div>
    <div class="text-foreground-muted text-sm">${description}</div>
  </div>
</div>`
        }
        return ''
      }).join('')
      return `<div class="my-6 space-y-1 rounded-xl border border-border bg-card p-2">${listHtml}</div>`
    }
  )

  return content
}

function getIconHtml(iconName: string): string {
  const icons: Record<string, string> = {
    'eye': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>',
    'brain': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
    'chart': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
    'database': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>',
    'cog': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
    'default': '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
  }
  return icons[iconName] || icons['default']
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
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
