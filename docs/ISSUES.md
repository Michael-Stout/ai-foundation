# AI Foundation Platform - Technical Issues & Improvements

This document tracks known technical issues, architectural improvements, and recommendations identified during code review.

---

## Completed Fixes ✅

| Issue | Description | Commit |
|-------|-------------|--------|
| XSS Vulnerability | Added DOMPurify sanitization to `dangerouslySetInnerHTML` | `d86c2c5` |
| Security Headers | Added X-Frame-Options, X-Content-Type-Options, Referrer-Policy, etc. | `8fc5e10` |
| Lint Errors | Fixed `module` variable naming, unused imports, useEffect dependencies | `ebc0a6f` |
| Middleware Protection | Added `/profile` route to authentication middleware | `fb8256e` |

---

## Remaining Issues

### Issue #2: Large Content Bundle (HIGH Priority)

**Problem:**
`src/lib/data/modules.ts` is 5,000+ lines and gets bundled into client-side JavaScript. This adds ~200-300KB to every page load.

**Impact:**
- Slow initial page loads
- Poor Core Web Vitals (LCP)
- All content loaded even when viewing single lesson
- Not scalable as more modules are added

**Files Affected:**
- `src/lib/data/modules.ts`

**Options:**

#### Option A: Database Migration (Recommended for Production)
**Effort:** 16 hours

Move content to PostgreSQL/Neon database:

```typescript
// src/lib/db/schema.ts
export const lessons = pgTable('lessons', {
  id: text('id').primaryKey(),
  moduleId: text('module_id').references(() => modules.id),
  title: text('title').notNull(),
  content: text('content').notNull(),
  objectives: json('objectives').$type<string[]>(),
  order: integer('order').notNull(),
})

// src/lib/db/queries.ts
export async function getLesson(moduleId: string, lessonId: string) {
  return await db.query.lessons.findFirst({
    where: and(
      eq(lessons.moduleId, moduleId),
      eq(lessons.id, lessonId)
    )
  })
}
```

**Pros:** Best scalability, easy content updates, proper separation of concerns
**Cons:** Requires migration effort, database costs

#### Option B: JSON Files with Dynamic Imports
**Effort:** 4 hours

Split content into per-module JSON files with lazy loading:

```
src/content/
├── modules/
│   ├── intro-to-ai/
│   │   ├── meta.json
│   │   ├── understanding-ai.json
│   │   └── ai-everyday-life.json
│   ├── prompt-engineering/
│   └── ...
```

```typescript
// Dynamic import
export async function getLesson(moduleId: string, lessonId: string) {
  const lesson = await import(`@/content/modules/${moduleId}/${lessonId}.json`)
  return lesson.default
}
```

**Pros:** No database needed, code splitting benefits, simple implementation
**Cons:** Still in codebase, requires rebuild for content changes

#### Option C: Keep As-Is
**Effort:** 0 hours

Accept current bundle size.

**Pros:** No work required
**Cons:** Performance issues persist, technical debt grows

---

### Issue #3: Code Duplication (MEDIUM Priority)

**Problem:**
`LessonContent.tsx` (425 lines) and `LabContent.tsx` (460 lines) share ~80% identical code for markdown parsing.

**Impact:**
- Bug fixes must be applied twice
- Inconsistent behavior risk
- Harder to maintain

**Files Affected:**
- `src/components/features/LessonContent.tsx`
- `src/components/features/LabContent.tsx`

**Duplicated Functions:**
- `formatContent()`
- `processSpecialBlocks()`
- `formatInline()`
- `escapeHtml()`
- `renderTable()`
- `getIconHtml()`

**Options:**

#### Option A: Extract Shared Utility (Recommended)
**Effort:** 3 hours

Create a shared markdown parser:

```typescript
// src/lib/utils/markdown-parser.ts
export function formatContent(content: string): string { ... }
export function processSpecialBlocks(content: string): string { ... }
export function formatInline(text: string): string { ... }
export function escapeHtml(text: string): string { ... }
export function renderTable(rows: string[][]): string { ... }
export function getIconHtml(iconName: string): string { ... }

// In components
import { formatContent } from '@/lib/utils/markdown-parser'
```

**Pros:** DRY code, single source of truth, easier testing
**Cons:** Some refactoring effort

#### Option B: Merge into Single Component
**Effort:** 2 hours

Create unified `ContentRenderer` component:

```typescript
// src/components/features/ContentRenderer.tsx
interface ContentRendererProps {
  content: string
  variant: 'lesson' | 'lab'
  objectives?: string[]
  tools?: Tool[]
}

export function ContentRenderer({ content, variant, ...props }: ContentRendererProps) {
  // Shared rendering logic with variant-specific sections
}
```

**Pros:** Single component to maintain
**Cons:** Less flexibility for future divergence

---

### Issue #5: Logging Infrastructure (MEDIUM Priority)

**Problem:**
Using `console.error` instead of structured logging. Violates CLAUDE.md standards.

**Impact:**
- No log levels in production
- No structured data for log aggregation
- Difficult debugging in production
- No request tracing

**Files Affected:**
- `src/app/api/progress/route.ts`
- `src/app/api/quiz/route.ts`
- `src/app/(dashboard)/modules/[moduleId]/[lessonId]/LessonActions.tsx`
- `src/lib/db/queries.ts`

**Current Code:**
```typescript
catch (error) {
  console.error('Progress API error:', error)
  return Response.json({ error: 'INTERNAL_ERROR' }, { status: 500 })
}
```

**Options:**

#### Option A: Full Pino Implementation (Recommended for Production)
**Effort:** 4 hours

Implement structured logging per CLAUDE.md:

```typescript
// src/lib/logger/index.ts
import pino from 'pino'

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => ({ level: label }),
  },
})

export const dbLogger = logger.child({ module: 'db' })
export const apiLogger = logger.child({ module: 'api' })
export const authLogger = logger.child({ module: 'auth' })

// Usage
apiLogger.error({ error, userId, moduleId }, 'Failed to save progress')
```

**Pros:** Production-ready, structured JSON logs, log levels, child loggers
**Cons:** Requires setup, dependency added

#### Option B: Simple Logger Wrapper
**Effort:** 1 hour

Create minimal wrapper for future upgrade:

```typescript
// src/lib/logger/index.ts
type LogLevel = 'debug' | 'info' | 'warn' | 'error'

export const logger = {
  debug: (data: object, msg: string) => console.debug(JSON.stringify({ ...data, msg })),
  info: (data: object, msg: string) => console.info(JSON.stringify({ ...data, msg })),
  warn: (data: object, msg: string) => console.warn(JSON.stringify({ ...data, msg })),
  error: (data: object, msg: string) => console.error(JSON.stringify({ ...data, msg })),
}
```

**Pros:** Quick to implement, easy upgrade path to Pino later
**Cons:** Missing advanced features (child loggers, transports)

---

## Future Considerations

### Testing (Not Yet Implemented)

Per CLAUDE.md, target 80%+ coverage. Currently at 0%.

**Required:**
- Unit tests with Vitest
- E2E tests with Playwright
- Test auth flows, data mutations, form validation

### CSRF Protection (Low Priority)

API routes accept POST without CSRF tokens. Consider adding origin verification:

```typescript
const origin = req.headers.get('origin')
const host = req.headers.get('host')
if (origin && new URL(origin).host !== host) {
  return Response.json({ error: 'FORBIDDEN' }, { status: 403 })
}
```

### Rate Limiting (Low Priority)

No rate limiting on API endpoints. Consider `@upstash/ratelimit` for production.

---

## Priority Order

1. **Issue #2** - Content bundle size (HIGH impact on performance)
2. **Issue #3** - Code duplication (MEDIUM, maintainability)
3. **Issue #5** - Logging (MEDIUM, production readiness)

---

*Last updated: 2026-01-22*
