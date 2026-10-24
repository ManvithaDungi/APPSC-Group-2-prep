# APPSC Group 2 Study

Study material and a web app for the **APPSC Group 2** exam (syllabus dated 27-04-2023).

## What's in this repo

| Folder | Contents |
| --- | --- |
| [study-app/](study-app/) | The study web app (React 18 + Vite, no backend): notes, quizzes, typing practice and a progress dashboard. |
| [Notes/](Notes/) | Notes folders that mirror the syllabus structure (see below). |

### Syllabus coverage

- **Screening Test:** Indian History, Geography, Indian Society, Current Affairs, Mental Ability
- **Main Paper I:** Section A, Social and Cultural History of AP. Section B, Indian Constitution.
- **Main Paper II:** Section A, Indian and AP Economy. Section B, Science and Technology.
- **CPT:** Computer Proficiency Test practice, including typing.

## Quick start

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
cd study-app
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |

Progress, quiz scores, text size and the last visited page are saved in the browser (`localStorage`).

## Adding content

Notes and quiz questions live in `study-app/src/data/`, and the navigation tree is in `study-app/src/data/syllabus.js`.
See the [study-app README](study-app/README.md) for the file format, the note block types and how to add subjects.

## License

[MIT](LICENSE)
