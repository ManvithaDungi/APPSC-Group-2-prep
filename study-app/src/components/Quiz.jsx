import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuArrowLeft, LuArrowRight, LuCheck, LuCircleCheck, LuCircleX, LuRotateCcw, LuTimer, LuX } from 'react-icons/lu';
import QuestionParts, { LETTERS, explanationOf, stemOf } from './QuestionParts';
import { useProgress } from '../context/ProgressContext';
import { statusText } from '../data/helpers';

const FORMATS_IN_ORDER = ['statement', 'assertion', 'match', 'chronology'];
const CODED = /^(both\b|neither\b|all of\b|none of\b|only\b|\d+(\s*(,|and|&)\s*\d+)*(\s+only)?$|[A-Da-d]\s*-\s*\d)/i;

// Options keep their order when the question says so, when the format is coded or ordered,
// when the options look like codes ("1 and 3 only", "A-2, B-4"), or when they are all numbers.
function mustKeepOrder(q) {
  if (q.shuffle === false) return true;
  if (FORMATS_IN_ORDER.includes(q.format) || q.assertion || q.list1 || q.statements || q.items) return true;
  if (q.options.every((o) => CODED.test(String(o).trim()))) return true;
  if (q.options.every((o) => /^[\d.,\s\-–/]+$/.test(String(o)))) return true;
  return false;
}

function shuffled(n) {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Reorders the options (unless order matters) and remembers where the right answer moved.
function prepare(questions) {
  return questions.map((q) => {
    const order = mustKeepOrder(q) ? q.options.map((_, i) => i) : shuffled(q.options.length);
    return { ...q, opts: order.map((i) => q.options[i]), correct: order.indexOf(q.answer) };
  });
}

const clock = (ms) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')} left`;
};
const fmt = (n) => String(Math.round(n * 100) / 100);

// storageKey: where this quiz saves progress. questions: [{ qid, ... }]. title: used in labels.
export default function Quiz({ storageKey, questions, notesPath }) {
  const { recordQuiz, progress, wrong } = useProgress();
  const [phase, setPhase] = useState('intro'); // intro | run | results
  const [mode, setMode] = useState('practice');
  const [revise, setRevise] = useState(false);
  const [run, setRun] = useState([]);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [deadline, setDeadline] = useState(null);
  const [left, setLeft] = useState(0);
  const [summary, setSummary] = useState(null);
  const [announce, setAnnounce] = useState('');
  const topRef = useRef(null);

  const wrongIds = useMemo(() => Object.keys(wrong[storageKey] || {}), [wrong, storageKey]);
  const reviseSet = useMemo(() => questions.filter((q) => wrongIds.includes(q.qid)), [questions, wrongIds]);

  const begin = (set, chosenMode, isRevise) => {
    setRun(prepare(set));
    setMode(chosenMode);
    setRevise(isRevise);
    setI(0);
    setAnswers(Array(set.length).fill(null));
    setSummary(null);
    setAnnounce('');
    if (chosenMode === 'exam') {
      const ms = set.length * 60000; // about 1 minute per question
      setDeadline(Date.now() + ms);
      setLeft(ms);
    } else {
      setDeadline(null);
    }
    setPhase('run');
  };

  const finish = useCallback(
    (finalAnswers) => {
      const results = run.map((q, n) => ({
        qid: q.qid,
        outcome: finalAnswers[n] == null ? 'skipped' : finalAnswers[n] === q.correct ? 'correct' : 'wrong',
      }));
      setSummary(recordQuiz(storageKey, results, { revise }));
      setAnswers(finalAnswers);
      setDeadline(null);
      setPhase('results');
    },
    [run, recordQuiz, storageKey, revise],
  );

  // Exam timer: plain text, never flashing. When it reaches zero the paper is handed in.
  const answersRef = useRef(answers);
  answersRef.current = answers;
  useEffect(() => {
    if (!deadline) return undefined;
    const id = setInterval(() => {
      const ms = deadline - Date.now();
      setLeft(ms);
      if (ms <= 0) finish(answersRef.current);
    }, 1000);
    return () => clearInterval(id);
  }, [deadline, finish]);

  useEffect(() => {
    if (phase !== 'intro') topRef.current?.scrollIntoView({ block: 'start' });
  }, [phase, i]);

  const pick = useCallback(
    (idx) => {
      if (phase !== 'run') return;
      const q = run[i];
      if (mode === 'practice' && answers[i] != null) return; // locked after answering
      setAnswers((a) => {
        const next = [...a];
        next[i] = mode === 'exam' && a[i] === idx ? null : idx; // tap again in exam mode to clear
        return next;
      });
      if (mode === 'practice') {
        setAnnounce(idx === q.correct ? 'Correct.' : `Wrong. The correct answer is ${LETTERS[q.correct]}.`);
      }
    },
    [phase, run, i, mode, answers],
  );

  // Laptop keyboard: A to D or 1 to 4 choose an option.
  useEffect(() => {
    if (phase !== 'run') return undefined;
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey || /input|textarea|select/i.test(e.target.tagName)) return;
      const k = e.key.toLowerCase();
      const idx = 'abcd'.indexOf(k) >= 0 ? 'abcd'.indexOf(k) : '1234'.indexOf(k);
      if (idx >= 0 && idx < (run[i]?.opts.length || 0)) pick(idx);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [phase, run, i, pick]);

  const total = run.length;
  const lastQ = i + 1 === total;
  const next = () => (lastQ ? finish(answers) : (setI(i + 1), setAnnounce('')));
  const prev = () => i > 0 && (setI(i - 1), setAnnounce(''));

  /* ---------- intro ---------- */
  if (phase === 'intro') {
    const p = progress[storageKey];
    const minutes = questions.length;
    return (
      <div ref={topRef}>
        <p className="caption">
          {questions.length} questions. {p?.attempts ? statusText(progress, storageKey) : 'Not started'}
        </p>
        <fieldset className="mode-group">
          <legend className="q-label">Choose a mode</legend>
          <label className={'mode-option' + (mode === 'practice' ? ' selected' : '')}>
            <input type="radio" name="mode" checked={mode === 'practice'} onChange={() => setMode('practice')} />
            <span>
              <strong>Practice</strong>
              Right or wrong, with the explanation, after each answer. No timer. You can skip.
            </span>
          </label>
          <label className={'mode-option' + (mode === 'exam' ? ' selected' : '')}>
            <input type="radio" name="mode" checked={mode === 'exam'} onChange={() => setMode('exam')} />
            <span>
              <strong>Exam</strong>
              About 1 minute per question ({minutes} {minutes === 1 ? 'minute' : 'minutes'} in all). Results only at the end. Skipping scores 0.
            </span>
          </label>
        </fieldset>
        <p className="caption">Marking: +1 for each correct answer, −1/3 for each wrong answer, 0 for a skipped question.</p>
        <div className="btn-row">
          <button type="button" className="btn primary" onClick={() => begin(questions, mode, false)}>
            Start {mode === 'exam' ? 'exam' : 'practice'}
          </button>
          {reviseSet.length > 0 && (
            <button type="button" className="btn" onClick={() => begin(reviseSet, 'practice', true)}>
              <LuRotateCcw size={20} className="icon" aria-hidden="true" />
              Revise my mistakes ({reviseSet.length})
            </button>
          )}
        </div>
      </div>
    );
  }

  /* ---------- results ---------- */
  if (phase === 'results') {
    const s = summary;
    const best = progress[storageKey];
    const review = run
      .map((q, n) => ({ q, picked: answers[n], n }))
      .filter((r) => r.picked !== r.q.correct);
    return (
      <div ref={topRef}>
        <div className="score-card" role="region" aria-label="Score">
          <h2>{revise ? 'Revision finished' : mode === 'exam' ? 'Exam finished' : 'Practice finished'}</h2>
          <dl className="score-grid">
            <div><dt>Raw score</dt><dd>{s.correct} / {s.total}</dd></div>
            <div><dt>With negative marking</dt><dd>{fmt(s.marks)} / {s.total}</dd></div>
            <div><dt>Correct</dt><dd>{s.correct}</dd></div>
            <div><dt>Wrong</dt><dd>{s.wrong}</dd></div>
            <div><dt>Skipped</dt><dd>{s.skipped}</dd></div>
            <div><dt>Best so far</dt><dd>{revise || !best?.attempts ? '—' : `${fmt(best.bestMarks)} / ${best.bestTotal}`}</dd></div>
          </dl>
          {revise && <p className="caption" style={{ marginTop: '0.75rem' }}>A revision round does not change your best score.</p>}
        </div>

        <div className="btn-row">
          {!revise && <button type="button" className="btn primary" onClick={() => begin(questions, mode, false)}>
            <LuRotateCcw size={20} className="icon" aria-hidden="true" />
            Try again
          </button>}
          {reviseSet.length > 0 && (
            <button type="button" className="btn" onClick={() => begin(reviseSet, 'practice', true)}>
              Revise my mistakes ({reviseSet.length})
            </button>
          )}
          <button type="button" className="btn" onClick={() => setPhase('intro')}>Choose mode</button>
          <Link className="btn" to={notesPath}>Back to topic</Link>
        </div>

        <h2>Review: wrong and skipped</h2>
        {review.length === 0 ? (
          <p>Every answer was right.</p>
        ) : (
          review.map(({ q, picked, n }) => (
            <article key={q.qid + n} className="review-item">
              <p className="caption">Question {n + 1}</p>
              <QuestionParts q={q} compact />
              <p>
                {picked == null ? (
                  <span className="tag bad"><LuX size={20} className="icon" aria-hidden="true" /> Skipped</span>
                ) : (
                  <span className="tag bad"><LuCircleX size={20} className="icon" aria-hidden="true" /> Wrong. Your answer: {LETTERS[picked]}. {q.opts[picked]}</span>
                )}
              </p>
              <p><span className="tag ok"><LuCircleCheck size={20} className="icon" aria-hidden="true" /> Correct answer: {LETTERS[q.correct]}. {q.opts[q.correct]}</span></p>
              {explanationOf(q) && <p>{explanationOf(q)}</p>}
            </article>
          ))
        )}
      </div>
    );
  }

  /* ---------- running ---------- */
  const q = run[i];
  const picked = answers[i];
  const locked = mode === 'practice' && picked != null;
  const answeredCount = answers.filter((a) => a != null).length;

  return (
    <div ref={topRef}>
      <div className="quiz-head">
        <span>Question {i + 1} of {total}</span>
        {mode === 'exam' ? (
          <span className="timer"><LuTimer size={20} className="icon" aria-hidden="true" /> {clock(left)}</span>
        ) : (
          <span className="caption">{revise ? 'Revising mistakes' : 'Practice'}</span>
        )}
      </div>

      <section className="question-card" aria-label={`Question ${i + 1}`}>
        <QuestionParts q={q} />
        <div className="options" role="radiogroup" aria-label="Answer options">
          {q.opts.map((text, idx) => {
            let cls = 'option';
            let verdict = null;
            if (locked) {
              if (idx === q.correct) {
                cls += ' correct';
                verdict = <><LuCheck size={20} className="icon" aria-hidden="true" /> Correct</>;
              } else if (idx === picked) {
                cls += ' wrong';
                verdict = <><LuX size={20} className="icon" aria-hidden="true" /> Wrong</>;
              }
            } else if (picked === idx) {
              cls += ' chosen';
            }
            return (
              <button
                key={idx}
                type="button"
                role="radio"
                aria-checked={picked === idx}
                className={cls}
                disabled={locked}
                onClick={() => pick(idx)}
              >
                <span className="letter" aria-hidden="true">{LETTERS[idx]}</span>
                <span>
                  <span className="sr-only">Option {LETTERS[idx]}. </span>
                  {text}
                </span>
                <span className="verdict">{verdict}</span>
              </button>
            );
          })}
        </div>
        {locked && (
          <div className="explain">
            <p className="q-label">{picked === q.correct ? 'Correct' : `Wrong. The correct answer is ${LETTERS[q.correct]}.`}</p>
            {explanationOf(q) && <p>{explanationOf(q)}</p>}
          </div>
        )}
        <div className="sr-only" aria-live="polite" role="status">{announce}</div>
      </section>

      <div className="quiz-bar">
        <button type="button" className="btn" onClick={prev} disabled={i === 0}>
          <LuArrowLeft size={24} className="icon" aria-hidden="true" />
          Previous
        </button>
        <button type="button" className="btn primary" onClick={next}>
          {lastQ ? (mode === 'exam' ? `Hand in (${answeredCount}/${total})` : 'See results') : mode === 'practice' && picked == null ? 'Skip' : 'Next'}
          {!lastQ && <LuArrowRight size={24} className="icon" aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
