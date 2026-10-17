# Group 2 Study

A study app for the APPSC Group 2 exam (syllabus dated 27-04-2023). React 18 + Vite. No backend.
Progress, quiz scores, text size and the last page are saved in the browser (`localStorage`).

## Run it

```bash
npm install
npm run dev
```

Open the address shown (usually http://localhost:5173).
To make a build: `npm run build`.

## Folder map

```
src/
  data/
    syllabus.js            <- the whole navigation tree (tabs, subjects, subtopics)
    helpers.js             <- finds content files automatically
    typingPassages.js      <- passages for the typing practice
    screening/*.js         <- notes + quizzes for the Screening Test
    mains1/*.js            <- notes + quizzes for Mains Paper I
    mains2/*.js            <- notes + quizzes for Mains Paper II
    cpt/*.js               <- notes + quizzes for CPT
  components/              <- TopBar, Sidebar, Breadcrumb, Quiz, NoteBlocks, Mermaid, Chart
  pages/                   <- Dashboard, TabArea, Overview, NotesPage, QuizPage, TypingPage
  context/ProgressContext.jsx
  styles/global.css        <- colours are CSS variables at the top
```

## Add or edit notes and quiz questions

1. Open (or create) a file in `src/data/<tab>/`, for example `src/data/screening/geography.js`.
   Any `.js` file in those folders is picked up automatically (folders: `screening`, `mains1`, `mains2`, `cpt`).
2. Export one object. Each key is a **leaf id** from `syllabus.js`:

```js
export default {
  'physical-geography': {
    notes: [ /* blocks, see below */ ],
    quick: ['5 to 8 short revision points'],
    quiz: [
      {
        q: 'Question text?',
        options: ['A text', 'B text', 'C text', 'D text'],
        answer: 1,            // index of the right option: 0 = first, 1 = second ...
        explain: 'One to three lines.',
        // optional chart or table for Data Analysis:
        // visual: { type: 'bar', title: 'Sales', labels: ['A','B'], values: [10, 20] }
      },
    ],
  },
};
```

Options are shuffled every attempt, so write them in any order.

### Note blocks

| `type` | Fields | Looks like |
| --- | --- | --- |
| `h` | `text` | Section heading |
| `h3` | `text` | Small heading |
| `p` | `text` | Short paragraph |
| `ul` | `items[]` | Bullet list |
| `steps` | `items[]` | Numbered steps |
| `remember` | `title?`, `text?`, `items?[]` | Pink "Remember This" box |
| `mnemonic` | `title?`, `word`, `explain?` | Yellow memory-trick box |
| `changing` | `year`, `text` | Box for data that changes (adds "Check for the latest figures.") |
| `tip` | `text` | Blue tip box |
| `table` | `caption?`, `head[]`, `rows[][]` | Table |
| `timeline` | `items[{when, what}]` | Vertical line with dots |
| `flow` | `title?`, `chart` | Flowchart in [Mermaid](https://mermaid.js.org/) text |
| `example` | `q`, `steps[]`, `answer?` | Solved example (Mental Ability) |

`visual.type` can be `table` (`head`, `rows`), `bar`, `line` or `pie` (`labels`, `values`).

### Current Affairs

Use `items` instead of (or with) `notes`:

```js
'national': {
  items: [{ date: '2025-01-15', headline: '...', keyPoints: ['...'], category: 'National' }],
  quiz: [],
}
```

Each item can carry `sources: [{ name, url }]` (shown as links under the item), and the leaf can carry
`updated: 'YYYY-MM-DD'` (shown as "Last checked"). See `src/data/screening/currentAffairs.js`.

### Add a new subject or subtopic

Edit `src/data/syllabus.js`: add a subject under a tab, or a leaf (with `id`, `title`, `topics`) under a subject.
Leaf ids must be unique. The sidebar, pages and URLs are created automatically.

## URLs

`/screening/indian-history/ancient-history/notes` follows the pattern `/<tab>/<subject>/<subtopic>/<notes|quiz>`.
Tab ids: `screening`, `mains-1`, `mains-2`, `cpt`.

## Status

The app shell, navigation, quiz engine, typing practice and dashboard are complete.
Subtopics with no data file show "Notes for this topic are being added" until content is added.
Content written so far: see `src/data/**`.
