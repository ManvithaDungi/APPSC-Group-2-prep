// Every localStorage read/write is wrapped in try/catch (private mode, full disk, blocked storage).
// Keys are versioned, for example "appsc.v1.progress". If storage is unavailable the app still works.
export const KEYS = {
  progress: 'appsc.v1.progress',
  wrong: 'appsc.v1.wrong',
  last: 'appsc.v1.last',
  tree: 'appsc.v1.tree',
  theme: 'appsc.v1.theme',
  typing: 'appsc.v1.typing',
  checklist: 'appsc.v1.checklist',
};

export function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw == null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore: the app still works without saving */
  }
}
