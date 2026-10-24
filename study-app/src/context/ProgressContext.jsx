import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { KEYS, load, save } from '../utils/storage';

const Ctx = createContext(null);
export const useProgress = () => useContext(Ctx);

const today = () => new Date().toISOString().slice(0, 10);
const round2 = (n) => Math.round(n * 100) / 100;

export function ProgressProvider({ children }) {
  // progress[topicKey] = { studied, attempts, bestMarks, bestTotal, bestCorrect, lastDate }
  const [progress, setProgress] = useState(() => load(KEYS.progress, {}));
  // wrong[topicKey] = { [questionId]: 'YYYY-MM-DD' of the day it was last answered wrongly }
  const [wrong, setWrong] = useState(() => load(KEYS.wrong, {}));
  // last[tabId] = path of the last topic page she opened in that section
  const [last, setLastState] = useState(() => load(KEYS.last, {}));

  useEffect(() => save(KEYS.progress, progress), [progress]);
  useEffect(() => save(KEYS.wrong, wrong), [wrong]);
  useEffect(() => save(KEYS.last, last), [last]);

  const setStudied = useCallback((key, value) => {
    setProgress((p) => ({ ...p, [key]: { ...p[key], studied: value } }));
  }, []);

  const setLast = useCallback((tabId, path) => {
    setLastState((l) => (l[tabId] === path && l._latest === path ? l : { ...l, [tabId]: path, _latest: path }));
  }, []);

  // One finished attempt. `results` = [{ qid, outcome: 'correct' | 'wrong' | 'skipped' }].
  // A revision round (`revise`) updates the mistakes list only, never the best score.
  const recordQuiz = useCallback((key, results, { revise = false } = {}) => {
    const correct = results.filter((r) => r.outcome === 'correct').length;
    const wrongCount = results.filter((r) => r.outcome === 'wrong').length;
    const total = results.length;
    const marks = round2(correct - wrongCount / 3);
    const day = today();

    if (!revise) {
      setProgress((p) => {
        const prev = p[key] || {};
        const better = prev.bestMarks == null || marks > prev.bestMarks;
        return {
          ...p,
          [key]: {
            ...prev,
            attempts: (prev.attempts || 0) + 1,
            lastDate: day,
            bestMarks: better ? marks : prev.bestMarks,
            bestTotal: better ? total : prev.bestTotal,
            bestCorrect: better ? correct : prev.bestCorrect,
          },
        };
      });
    }

    setWrong((w) => {
      const mine = { ...(w[key] || {}) };
      results.forEach((r) => {
        if (r.outcome === 'wrong') mine[r.qid] = day;
        // answered correctly on a later day than the mistake: it leaves the list
        else if (r.outcome === 'correct' && mine[r.qid] && mine[r.qid] < day) delete mine[r.qid];
      });
      return { ...w, [key]: mine };
    });
    return { correct, wrong: wrongCount, skipped: total - correct - wrongCount, total, marks };
  }, []);

  const value = useMemo(
    () => ({ progress, wrong, last, setStudied, setLast, recordQuiz }),
    [progress, wrong, last, setStudied, setLast, recordQuiz],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
