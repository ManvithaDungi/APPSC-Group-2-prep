import { TABS } from './syllabus';

// Every file in src/data/<tab>/*.js exports { 'leaf-id': { notes, quick, quiz, items } }.
// They are merged here automatically, so adding a file needs no other change.
const modules = import.meta.glob('./{screening,mains1,mains2,cpt}/*.js', { eager: true });
const CONTENT = {};
Object.values(modules).forEach((m) => Object.assign(CONTENT, m.default));

export const getContent = (leafId) => CONTENT[leafId] || null;

export const findTab = (id) => TABS.find((t) => t.id === id);
export const findSubject = (tab, id) => tab?.subjects.find((s) => s.id === id);
export const findLeaf = (subject, id) => subject?.leaves.find((l) => l.id === id);

// All leaves of a tab in study order (used for Next / Previous).
export const tabLeaves = (tab) =>
  tab.subjects.flatMap((s) =>
    s.leaves.map((l) => ({ ...l, subjectId: s.id, subjectTitle: s.title })),
  );

// "Done" = she marked the notes as studied OR finished the quiz at least once.
export const isStudied = (progress, leafId) =>
  !!(progress[leafId]?.studied || progress[leafId]?.attempts > 0);

export const quizFinished = (progress, leafId) => (progress[leafId]?.attempts || 0) > 0;

export const leafPath = (tabId, subjectId, leafId, page) =>
  `/${tabId}/${subjectId}/${leafId}${page ? `/${page}` : ''}`;
