import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { applyTheme, currentTheme, saveTheme, storedTheme, systemTheme } from '../utils/theme';

// First load follows the system setting. After she toggles, her choice is remembered.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (storedTheme()) return; // she chose a theme herself
      const next = systemTheme();
      applyTheme(next);
      setTheme(next);
    };
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    saveTheme(next);
    setTheme(next);
  };

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <button type="button" className="icon-btn" onClick={toggle}>
      {theme === 'dark' ? <LuSun size={24} className="icon" aria-hidden="true" /> : <LuMoon size={24} className="icon" aria-hidden="true" />}
      <span className="sr-only">{label}</span>
    </button>
  );
}
