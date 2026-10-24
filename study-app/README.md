# Group 2 Study

A study app for the APPSC Group 2 exam (syllabus dated 27-04-2023). React 18 + Vite. No backend.
Progress, quiz scores, mistakes, theme and the last page are saved in the browser (`localStorage`, keys `appsc.v1.*`).

## Run it

```bash
npm install
npm run dev
```

Open the address shown (usually http://localhost:5173). To make a build: `npm run build`.

## Design rules

All design and behaviour rules are in `.claude/APP_DESIGN_GUIDELINES.md`. Read it with `INSTRUCTIONS.md` and `CONTENT_GUIDELINES.md` before changing a page. Colours and fonts are CSS variables at the top of `src/styles/global.css`.

The app is private study material (NCERT images are copyrighted). `index.html` carries `noindex`; keep any public deployment password-protected.

## Folder map

```
src/
  data/
    syllabus.js        navigation tree: section > group > subject > topics (syllabus lines)
    helpers.js         topic ids, lazy loading of content, splitting notes and quiz into topics
    topicSections.js   which note sections ("h" blocks) cover each topic of a subject
    quizTopics.js      which quiz questions belong to each topic of a subject
    cptChecklists.js   CPT Part B task checklists
    typingPassages.js  passages for typing practice
    screening/ mains1/ mains2/ cpt/   notes and quiz data
  components/          TopBar, ThemeToggle, Sidebar (drawer), Breadcrumb, Quiz, QuestionParts, NoteBlocks, Mermaid, Chart
  pages/               Dashboard, SectionPage, LeafHome, NotesPage, QuizPage, TypingPage, ChecklistPage, ExamFacts
  context/ProgressContext.jsx
public/sample-data/    sample dataset for the Excel checklist
```

Routes:

```
/screening/indian-history/ancient-history                  subject Home (lists every topic)
/screening/indian-history/ancient-history/<topic>/notes
/screening/indian-history/ancient-history/<topic>/quiz
/screening/indian-history/ancient-history/all/quiz         mixed quiz of the subject
/cpt/cpt-subjects/typing/practice                          typing practice
/cpt/cpt-subjects/ms-word/checklist                        Part B task checklist
/exam-facts
```

## Add or edit notes and quiz questions

1. Open (or create) a file in `src/data/<section>/`. Any `.js` file there is picked up automatically. Each key is a subject id from `syllabus.js`.
2. Notes are split into topics by their `h` headings. List which headings belong to each topic in `topicSections.js` (headings counted from 0).
3. List which questions belong to each topic in `quizTopics.js` (questions counted from 0). A topic with an empty list shows "Questions for this topic are being added". Its questions still appear in the mixed quiz.

```js
export default {
  'physical-geography': {
    notes: [ /* blocks, see below */ ],
    quick: ['5 to 8 short revision points'],
    quiz: [
      {
        q: 'Question text?',            // or "stem"
        options: ['A text', 'B text', 'C text', 'D text'],
        answer: 1,                      // index of the right option
        explain: 'One to three lines.', // or "explanation"
        // Optional: format ('statement' | 'assertion' | 'match' | 'chronology'),
        // statements, assertion + reason, list1 + list2, items,
        // shuffle: false, visual (table or chart for data questions)
      },
    ],
  },
};
```

Options are shuffled each attempt, except coded or ordered options (for example "1 and 3 only", "A-2, B-4", numbers) and any question marked `shuffle: false`.

### Note blocks

| `type` | Fields | Looks like |
| --- | --- | --- |
| `h` | `text` | Section heading (starts a new section) |
| `h3` | `text` | Small heading |
| `p` | `text` | Short paragraph |
| `ul` | `items[]` | Bullet list |
| `steps` | `items[]` | Numbered steps |
| `remember` | `title?`, `text?`, `items?[]` | "Remember this" callout |
| `mnemonic` | `title?`, `word`, `explain?` | "Memory trick" callout |
| `changing` | `year`, `text` | "Data as of" callout for figures that change |
| `tip` | `text` | "Exam tip" callout |
| `table` | `caption?`, `head[]`, `rows[][]` | Table that scrolls sideways inside its box |
| `timeline` | `items[{when, what}]` | Dated list |
| `flow` | `title?`, `chart` | Flowchart in [Mermaid](https://mermaid.js.org/) text (drawn top to bottom) |
| `example` | `q`, `steps[]`, `answer?` | "Solved example" callout |

All callouts share one style. `visual.type` for data questions can be `table` (`head`, `rows`), `bar`, `line` or `pie` (`labels`, `values`).

## Publish on GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds this app and publishes it on every push to `main` (or by hand from the Actions tab).

One-time setup: on GitHub, open the repository's **Settings > Pages** and set **Source** to **GitHub Actions**.

The site address is `https://<user>.github.io/<repository>/`. The workflow sets the sub-path for you (`VITE_BASE`), and copies `index.html` to `404.html` so links to inner pages still open.

**A Pages site is public.** Anyone with the link can open it, and search engines are only asked, not forced, to skip it (`noindex`). Because the NCERT pictures are copyrighted, the workflow **leaves them out** of the published site by default; notes still show, without the pictures. To include them, add a repository variable `INCLUDE_TEXTBOOK_IMAGES` with the value `true` (Settings > Secrets and variables > Actions > Variables). Quiz scores and progress are saved only in each visitor's own browser.

To test a Pages-style build locally:

```bash
VITE_BASE=/your-repo/ npm run build
VITE_BASE=/your-repo/ npx vite preview
```
