# AI Foundation Platform Style Guide

This document defines the design patterns and content formatting standards for the AI Foundation learning platform. It covers both module pages and lesson content.

---

## Part 1: Module Page Structure

Module pages serve as the hub for each learning module, displaying progress, lessons, labs, and quizzes.

### Page Layout

```
┌─────────────────────────────────────────────────────┐
│ ← Back to Modules                                   │
├─────────────────────────────────────────────────────┤
│ [1] Introduction to AI & Its Impact                 │
│                                                     │
│ Module description text goes here...                │
│                                                     │
│ [Duration Badge] [Completed Badge]                  │
├─────────────────────────────────────────────────────┤
│ Module Progress                    2 of 5 completed │
│ ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
├─────────────────────────────────────────────────────┤
│ Lessons                                             │
│ ┌─────────────────────────────────────────────────┐ │
│ │ [1] Lesson Title                            → │ │
│ │     X learning objectives                      │ │
│ └─────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────┐ │
│ │ [2] Lesson Title                            → │ │
│ └─────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────┤
│ Labs                                                │
│ ┌─────────────────────────────────────────────────┐ │
│ │ [1] Lab Title                               → │ │
│ │     Lab description                            │ │
│ └─────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Module Quiz                    [Take Quiz]     │ │
│ │ Complete all lessons, then test your knowledge │ │
│ └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

### Header Section

The header displays module metadata in this order:

1. **Back Navigation** - Link to return to modules list
2. **Module Number + Title** - Number in a rounded box on the left, title to the right
3. **Description** - Full module description below the title
4. **Badges** - Duration badge, completion badge (if applicable)
5. **Progress Bar** - Large progress indicator with completion count

```tsx
// Header structure example
<div className="mb-8">
  {/* Module number + Title on same line */}
  <div className="flex items-center gap-4">
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
      <span className="text-xl font-bold text-primary">{module.order}</span>
    </div>
    <h1 className="text-3xl font-bold text-foreground">{module.title}</h1>
  </div>

  {/* Description */}
  <p className="mt-3 text-foreground-muted">{module.description}</p>

  {/* Badges */}
  <div className="mt-3 flex items-center gap-2">
    <Badge variant="default">{module.duration}</Badge>
    {quizPassed && <Badge variant="success">Completed</Badge>}
  </div>

  {/* Progress (not in a card) */}
  <div className="mt-6">
    <div className="flex items-center justify-between">
      <span className="text-lg font-medium text-foreground">Module Progress</span>
      <span className="text-lg font-semibold text-primary">
        {completedLessons.length} of {module.lessons.length} lessons completed
      </span>
    </div>
    <Progress value={progressPercent} size="lg" className="mt-3" />
  </div>
</div>
```

### Lesson Tiles

Lessons display as colorful gradient tiles that cycle through 5 color schemes:

| Index | Gradient Colors | Border Colors |
|-------|-----------------|---------------|
| 0 | cyan → blue → indigo | cyan |
| 1 | emerald → green → teal | emerald |
| 2 | orange → amber → yellow | orange |
| 3 | violet → purple → fuchsia | violet |
| 4 | rose → pink → red | rose |

```tsx
// Gradient definitions
const gradients = [
  'from-cyan-500/10 via-blue-500/5 to-indigo-500/10 border-cyan-500/20 hover:border-cyan-500/40',
  'from-emerald-500/10 via-green-500/5 to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/40',
  'from-orange-500/10 via-amber-500/5 to-yellow-500/10 border-orange-500/20 hover:border-orange-500/40',
  'from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 border-violet-500/20 hover:border-violet-500/40',
  'from-rose-500/10 via-pink-500/5 to-red-500/10 border-rose-500/20 hover:border-rose-500/40',
]

// Icon color definitions (for numbered badges)
const iconColors = [
  'from-cyan-500 to-blue-600 shadow-cyan-500/40',
  'from-emerald-500 to-green-600 shadow-emerald-500/40',
  'from-orange-500 to-amber-600 shadow-orange-500/40',
  'from-violet-500 to-purple-600 shadow-violet-500/40',
  'from-rose-500 to-pink-600 shadow-rose-500/40',
]
```

**Tile Structure:**
- Rounded corners (`rounded-2xl`)
- Padding (`p-5`)
- Gradient background (`bg-gradient-to-br`)
- Border with hover effect
- Hover scale animation (`hover:scale-[1.01]`)
- Shadow on hover (`hover:shadow-lg`)

**Tile Content:**
- **Left**: Numbered badge (or checkmark if completed)
- **Center**: Title + learning objectives count
- **Right**: Arrow indicator

### Lab Tiles

Labs use the same tile styling as lessons but cycle through only 3 color schemes (cyan, emerald, orange).

### Quiz Card

The quiz section uses a simple bordered card with:
- Title: "Module Quiz"
- Subtitle: Progress message or score
- Button: "Take Quiz" or "Retake Quiz"

---

## Part 2: Lesson Content Formatting

### Content Structure Overview

Each lesson should follow this general structure:

1. **Opening Section** - Title + Key Concept/Definition
2. **Core Content** - Multiple sections with varied content blocks
3. **Supporting Content** - Tables, timelines, feature lists
4. **Closing** - Tip or summary

---

## Available Content Blocks

### 1. Section Headings

Use `##` for main section headings. These render as bold, styled h2 elements.

```markdown
## What is Artificial Intelligence?

## Core Capabilities of AI

## Key Takeaways
```

### 2. Key Concept Block

Use at the beginning of lessons to define the main topic. Creates a highlighted card with the primary definition.

```markdown
:::key-concept[Definition]
AI is the simulation of human intelligence in machines, enabling them to perform tasks such as visual perception, speech recognition, decision-making, and language translation.
:::
```

### 3. Info Block

Use for supplementary information, context, or grouped facts.

```markdown
:::info
**Purpose**: To predict outcomes or classify data.

**Examples**: Predicting house prices, classifying emails as spam.

**Common Algorithms**: Linear regression, decision trees, neural networks.
:::
```

### 4. Card Grid

Use for presenting multiple related concepts in a tile/card layout. Cards display in a 2-column grid on desktop.

**Available icons**: `eye`, `brain`, `chart`, `chat`, `robot`, `cog`, `database`, `book`, `star`, `car`, `heart`, `shield`, `check`, `cart`, `microphone`

```markdown
:::card-grid
:::card[eye][Visual Perception]
AI can analyze visual data for tasks like object detection, facial recognition, and image classification.
:::card[brain][Machine Learning]
A subset of AI that focuses on building algorithms allowing machines to learn from data.
:::card[chat][Natural Language Processing]
AI enables machines to understand, generate, and respond in human-like language.
:::end-grid
```

### 5. Timeline

Use for historical progressions, step-by-step processes, or chronological events.

```markdown
:::timeline
:::event[1950s][Early Foundations]
AI concepts emerged with pioneers like Alan Turing and John McCarthy.
:::event[1990s][Rise of Machine Learning]
Advances in algorithms and computational power led to AI resurgence.
:::event[2020s][AI Everywhere]
AI is now integrated into healthcare, finance, and autonomous systems.
:::end-timeline
```

### 6. Feature List

Use for listing features, benefits, or capabilities. Displays as tiles in a 2-column grid.

```markdown
:::feature-list
:::feature[AI's Learning Abilities]
Through machine learning and deep learning, AI can learn from vast datasets and improve over time.
:::feature[Impact on Industries]
AI is revolutionizing healthcare, finance, and manufacturing with increased efficiency.
:::feature[Enhancing Productivity]
AI automates routine tasks and enables faster data-driven decision-making.
:::end-list
```

### 7. Warning Block

Use for challenges, considerations, or important cautions.

```markdown
:::warning
Healthcare AI comes with significant challenges:
- **Data Privacy**: Protecting sensitive patient information
- **Accuracy & Liability**: Determining responsibility when AI makes errors
- **Bias**: Addressing potential biases in training data
:::
```

### 8. Tip Block

Use for helpful advice, best practices, or concluding thoughts. Often placed at the end of a lesson.

```markdown
:::tip
Machine learning plays a critical role in improving decision-making. Supervised learning focuses on predictions, while unsupervised learning uncovers hidden patterns.
:::
```

### 9. Tables

Use for comparisons, structured data, or reference information.

```markdown
| Aspect | Supervised Learning | Unsupervised Learning |
|--------|--------------------|-----------------------|
| **Data** | Uses labeled data | Uses unlabeled data |
| **Output** | Predicts outcomes | Identifies patterns |
| **Use Cases** | Spam detection | Customer segmentation |
```

---

## Lesson Template

Here's a template showing the recommended structure:

```markdown
## [Main Topic Title]

:::key-concept[Definition/Key Concept]
Primary definition or concept explanation for this lesson.
:::

## [First Content Section]

:::card-grid
:::card[icon1][Card Title 1]
Description of first concept.
:::card[icon2][Card Title 2]
Description of second concept.
:::end-grid

## [Second Content Section]

:::timeline
:::event[Step/Date 1][Event Title]
Description of this step or event.
:::event[Step/Date 2][Event Title]
Description of this step or event.
:::end-timeline

## [Third Content Section]

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1 | Data 2 | Data 3 |

## [Features/Benefits Section]

:::feature-list
:::feature[Feature Title 1]
Description of first feature or benefit.
:::feature[Feature Title 2]
Description of second feature or benefit.
:::end-list

:::tip
Concluding thought or key takeaway for the lesson.
:::
```

---

## Best Practices

### Module Pages

1. **Keep descriptions concise** - Module descriptions should be 1-2 sentences summarizing the learning objectives.

2. **Use consistent duration formats** - Display as "X hours" or "X mins" using the Badge component.

3. **Show progress clearly** - The large progress bar helps learners track their advancement.

4. **Maintain visual hierarchy** - Module number → Title → Description → Badges → Progress.

5. **Color coding** - Colorful tiles make the page visually engaging and help differentiate items.

### Lesson Content

1. **Start with a key concept** - Every lesson should open with a `:::key-concept` block defining the main topic.

2. **Use card grids for related concepts** - When presenting 2-5 related items, use `:::card-grid` for visual consistency.

3. **Use timelines for processes** - Step-by-step workflows or historical progressions should use `:::timeline`.

4. **Use feature lists for benefits** - When listing features, impacts, or capabilities, use `:::feature-list`.

5. **Include tables for comparisons** - Side-by-side comparisons work best in table format.

6. **End with a tip** - Summarize key takeaways in a `:::tip` block at the end.

7. **Use warnings sparingly** - Reserve `:::warning` for genuine challenges or important cautions.

8. **Keep descriptions concise** - Card and feature descriptions should be 1-3 sentences.

9. **Choose meaningful icons** - Select icons that visually represent the content.

---

## Module 1 Reference

### Module Structure

| Component | Content |
|-----------|---------|
| Title | Introduction to AI & Its Impact |
| Duration | 2 hours |
| Lessons | 5 |
| Labs | 3 |
| Quiz | 1 |

### Lessons Reference

| Lesson | Key Blocks Used |
|--------|----------------|
| Understanding AI | key-concept, timeline, card-grid, feature-list, table |
| AI in Everyday Life | key-concept, table, card-grid, feature-list, tip |
| Introduction to Machine Learning | key-concept, card-grid, info, timeline, table, tip |
| Use-Case: AI in Healthcare | key-concept, card-grid, feature-list, warning, timeline, tip |
| Case Study: AI in Self-Driving Cars | key-concept, info, warning, card-grid, timeline, feature-list, tip |

---

## Color Reference

### Theme Colors (CSS Variables)

| Variable | Usage |
|----------|-------|
| `--primary` | Primary actions, highlights |
| `--foreground` | Main text |
| `--foreground-muted` | Secondary text |
| `--background` | Page background |
| `--card` | Card backgrounds |
| `--border` | Borders |
| `--success` | Completion indicators |

### Gradient Color Schemes

| Scheme | Primary | Via | To |
|--------|---------|-----|-----|
| Cyan | cyan-500/10 | blue-500/5 | indigo-500/10 |
| Emerald | emerald-500/10 | green-500/5 | teal-500/10 |
| Orange | orange-500/10 | amber-500/5 | yellow-500/10 |
| Violet | violet-500/10 | purple-500/5 | fuchsia-500/10 |
| Rose | rose-500/10 | pink-500/5 | red-500/10 |

---

## File Locations

| Component | Path |
|-----------|------|
| Module Page | `src/app/(dashboard)/modules/[moduleId]/page.tsx` |
| Lesson Page | `src/app/(dashboard)/modules/[moduleId]/[lessonId]/page.tsx` |
| Lab Page | `src/app/(dashboard)/modules/[moduleId]/labs/[labId]/page.tsx` |
| Lesson Content Parser | `src/components/features/LessonContent.tsx` |
| Lab Content Parser | `src/components/features/LabContent.tsx` |
| Module Data | `src/lib/data/modules.ts` |
