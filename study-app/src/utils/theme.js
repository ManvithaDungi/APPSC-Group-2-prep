import { KEYS, load, save } from './storage';

// The inline script in index.html sets data-theme before first paint; these helpers keep it in sync.
export const systemTheme = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const currentTheme = () => document.documentElement.dataset.theme || systemTheme();

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#1C1917' : '#FAF7F2');
}

export const storedTheme = () => load(KEYS.theme, null);
export const saveTheme = (theme) => save(KEYS.theme, theme);
