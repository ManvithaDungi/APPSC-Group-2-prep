import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { load, save } from '../utils/storage';

const Ctx = createContext(null);
export const useProgress = () => useContext(Ctx);

const MIN_SIZE = 16;
const MAX_SIZE = 26;

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => load('g2.progress', {}));
  const [last, setLast] = useState(() => load('g2.last', null));
  const [fontSize, setFontSize] = useState(() => load('g2.fontSize', 18));

  useEffect(() => save('g2.progress', progress), [progress]);
  useEffect(() => save('g2.last', last), [last]);
  useEffect(() => {
    save('g2.fontSize', fontSize);
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const setStudied = useCallback((leafId, value) => {
    setProgress((p) => ({ ...p, [leafId]: { ...p[leafId], studied: value } }));
  }, []);

  // correct / wrong / total for one finished quiz attempt.
  const recordQuiz = useCallback((leafId, { correct, wrong, total }) => {
    const marks = Math.round((correct - wrong / 3) * 100) / 100;
    const pct = Math.round((correct / total) * 100);
    setProgress((p) => {
      const prev = p[leafId] || {};
      const better = prev.bestMarks == null || marks > prev.bestMarks;
      return {
        ...p,
        [leafId]: {
          ...prev,
          attempts: (prev.attempts || 0) + 1,
          bestMarks: better ? marks : prev.bestMarks,
          bestPct: better ? pct : prev.bestPct,
          bestTotal: better ? total : prev.bestTotal,
        },
      };
    });
  }, []);

  const value = useMemo(
    () => ({
      progress,
      setStudied,
      recordQuiz,
      last,
      setLast,
      fontSize,
      biggerText: () => setFontSize((s) => Math.min(MAX_SIZE, s + 2)),
      smallerText: () => setFontSize((s) => Math.max(MIN_SIZE, s - 2)),
    }),
    [progress, last, fontSize, setStudied, recordQuiz],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
