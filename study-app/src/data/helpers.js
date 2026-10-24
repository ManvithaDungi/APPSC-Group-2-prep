import { TABS } from './syllabus';
import { TOPIC_SECTIONS } from './topicSections';
import { QUIZ_TOPICS } from './quizTopics';
import { EXTRA_QUIZ } from './extraQuiz';

// Navigation tree: Tab (section) -> Group (e.g. Indian History) -> Leaf (e.g. Ancient History,
// the "subject" she opens) -> Topic (one syllabus line, with its own Notes and Quiz).
export const findTab = (id) => TABS.find((t) => t.id === id);
export const findGroup = (tab, id) => tab?.subjects.find((s) => s.id === id);
export const findLeaf = (group, id) => group?.leaves.find((l) => l.id === id);

const slug = (s) =>
  s
    .toLowerCase()
    .split(':')[0]
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .slice(0, 5)
    .join('-');

// Topics of a leaf. A topic is a string, or { title, sub: [string] } when it is split into sub-topics.
// Returns a flat list: { id, title, short, index, parent? }.
export function leafTopics(leaf) {
  const list = [];
  const used = new Set();
  const add = (title, parent) => {
    let id = slug(title) || 'topic';
    if (used.has(id)) id += '-' + (list.length + 1);
    used.add(id);
    list.push({ id, title, short: title.split(':')[0], index: list.length, parent });
  };
  leaf.topics.forEach((t) => {
    if (typeof t === 'string') add(t);
    else t.sub.forEach((s) => add(s, t.title));
  });
  return list;
}

export const findTopic = (leaf, id) => leafTopics(leaf).find((t) => t.id === id);

// Key used to save progress for a topic ('all' is the subject's mixed quiz).
export const topicKey = (leafId, topicId) => `${leafId}.${topicId}`;

// Every topic of a tab in study order (used for Next / Previous).
export const tabTopics = (tab) =>
  tab.subjects.flatMap((g) =>
    g.leaves.flatMap((l) =>
      leafTopics(l).map((t) => ({ ...t, leaf: l, group: g, key: topicKey(l.id, t.id) })),
    ),
  );

export const leafPath = (tabId, groupId, leafId) => `/${tabId}/${groupId}/${leafId}`;
export const topicPath = (tabId, groupId, leafId, topicId, page) =>
  `/${tabId}/${groupId}/${leafId}/${topicId}${page ? `/${page}` : ''}`;

// ---- content (loaded on demand, one folder per section) ----
const FOLDERS = {
  screening: import.meta.glob('./screening/*.js'),
  'mains-1': import.meta.glob('./mains1/*.js'),
  'mains-2': import.meta.glob('./mains2/*.js'),
  cpt: import.meta.glob('./cpt/*.js'),
};
const cache = {};

// Every file exports { 'leaf-id': { notes, quick, quiz, items } }; they are merged per section.
export function loadSectionContent(tabId) {
  if (!cache[tabId]) {
    const loaders = Object.values(FOLDERS[tabId] || {});
    cache[tabId] = Promise.all(loaders.map((l) => l())).then((mods) => {
      const all = {};
      mods.forEach((m) => Object.assign(all, m.default));
      return all;
    });
  }
  return cache[tabId];
}

// Split a leaf's notes into sections: one per "h" block (blocks before the first heading join section 0).
function noteSections(notes) {
  const sections = [];
  notes.forEach((b) => {
    if (b.type === 'h' || sections.length === 0) sections.push([]);
    sections[sections.length - 1].push(b);
  });
  return sections;
}

// Notes, news items and quiz questions for one topic. topicId 'all' gives the whole leaf (mixed quiz).
export function topicContent(leaf, topicId, leafContent) {
  const c = leafContent || {};
  const topic = leafTopics(leaf).find((t) => t.id === topicId);
  const questions = [...(c.quiz || []), ...(EXTRA_QUIZ[leaf.id] || [])].map((q, i) => ({ ...q, qid: `${leaf.id}.q${i}` }));
  if (!topic || topicId === 'all') return { notes: c.notes, items: c.items, questions };

  const secMap = TOPIC_SECTIONS[leaf.id];
  let notes = c.notes;
  if (c.notes && secMap && secMap[topic.index]) {
    const sections = noteSections(c.notes);
    notes = secMap[topic.index].flatMap((s) => sections[s] || []);
  }
  const qMap = QUIZ_TOPICS[leaf.id];
  const picked = qMap ? (qMap[topic.index] || []).map((i) => questions[i]).filter(Boolean) : questions;
  return { notes, items: c.items, questions: picked };
}

// ---- progress helpers ----
export const topicStatus = (progress, key) => {
  const p = progress[key];
  if (p?.attempts > 0) return 'quiz';
  if (p?.studied) return 'studied';
  return 'none';
};

const fmt = (n) => String(Math.round(n * 100) / 100);

// Plain text, never dots: "Not started", "Studied", "Quiz done · Best 24/30 (with negative marking)".
export function statusText(progress, key) {
  const s = topicStatus(progress, key);
  if (s === 'none') return 'Not started';
  if (s === 'studied') return 'Studied';
  const p = progress[key];
  return `Quiz done · Best ${fmt(p.bestMarks)}/${p.bestTotal} (with negative marking)`;
}

export const isDone = (progress, key) => topicStatus(progress, key) !== 'none';
