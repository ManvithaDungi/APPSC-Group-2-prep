import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuArrowLeft, LuInfo, LuRotateCcw } from 'react-icons/lu';
import Breadcrumb from '../components/Breadcrumb';
import { PASSAGES } from '../data/typingPassages';
import { KEYS, load, save } from '../utils/storage';

const LENGTHS = [2, 5, 10];

// Enough text for the chosen time, even for a fast typist (about 80 words a minute).
function buildText(minutes, start) {
  const need = minutes * 80 * 6;
  let out = '';
  let n = start;
  while (out.length < need) {
    out += (out ? ' ' : '') + PASSAGES[n % PASSAGES.length];
    n++;
  }
  return out;
}

// Group neighbouring characters with the same state, so a long passage is a few spans, not thousands.
function runs(text, typed) {
  const out = [];
  for (let i = 0; i < typed.length; i++) {
    const miss = typed[i] !== text[i];
    const last = out[out.length - 1];
    if (last && last.miss === miss) last.s += text[i];
    else out.push({ miss, s: text[i] });
  }
  return out;
}

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

export default function TypingPage({ tab, group, leaf }) {
  const [minutes, setMinutes] = useState(2);
  const [round, setRound] = useState(0);
  const text = useMemo(() => buildText(minutes, round), [minutes, round]);
  const [typed, setTyped] = useState('');
  const [startedAt, setStartedAt] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [done, setDone] = useState(false);
  const [saved, setSaved] = useState(() => load(KEYS.typing, { best: null, last: null }));
  const [narrow, setNarrow] = useState(() => window.matchMedia('(max-width: 899px)').matches);
  const box = useRef(null);
  const passageRef = useRef(null);
  const hereRef = useRef(null);
  const leafHome = `/${tab.id}/${group.id}/${leaf.id}`;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 899px)');
    const on = () => setNarrow(mq.matches);
    mq.addEventListener?.('change', on);
    return () => mq.removeEventListener?.('change', on);
  }, []);

  const correct = useMemo(() => {
    let n = 0;
    for (let i = 0; i < typed.length; i++) if (typed[i] === text[i]) n++;
    return n;
  }, [typed, text]);
  const accuracy = typed.length ? Math.round((correct / typed.length) * 100) : 100;
  const wpm = elapsed > 0 ? Math.round(correct / 5 / (elapsed / 60)) : 0;

  const finish = (secs) => {
    setDone(true);
    const result = {
      wpm: Math.round(correct / 5 / (Math.max(secs, 1) / 60)),
      accuracy,
      minutes,
      date: new Date().toISOString().slice(0, 10),
    };
    setSaved((s) => {
      // Best = highest speed among tests with at least 90% accuracy.
      const better = result.accuracy >= 90 && (!s.best || result.wpm > s.best.wpm);
      const next = { best: better ? result : s.best, last: result };
      save(KEYS.typing, next);
      return next;
    });
  };

  useEffect(() => {
    if (!startedAt || done) return undefined;
    const id = setInterval(() => {
      const secs = (Date.now() - startedAt) / 1000;
      setElapsed(secs);
      if (secs >= minutes * 60) finish(minutes * 60);
    }, 250);
    return () => clearInterval(id);
    // finish reads the latest typed text through state when it runs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startedAt, done, minutes, typed]);

  useEffect(() => {
    const c = passageRef.current;
    const h = hereRef.current;
    if (c && h) c.scrollTop = Math.max(0, h.offsetTop - c.clientHeight / 2);
  }, [typed]);

  const onChange = (e) => {
    if (done) return;
    const v = e.target.value.slice(0, text.length);
    if (!startedAt && v.length > 0) setStartedAt(Date.now());
    setTyped(v);
  };

  const reset = (newPassage) => {
    setTyped('');
    setStartedAt(null);
    setElapsed(0);
    setDone(false);
    if (newPassage) setRound((r) => r + 1);
    box.current?.focus();
  };

  const timeLeft = Math.max(0, minutes * 60 - elapsed);
  const pieces = runs(text, typed);

  return (
    <div>
      <Link className="back-link" to={leafHome}>
        <LuArrowLeft size={24} className="icon" aria-hidden="true" />
        Back to {leaf.title}
      </Link>
      <Breadcrumb
        crumbs={[
          { label: tab.title, to: `/${tab.id}` },
          { label: group.title },
          { label: leaf.title, to: leafHome },
          { label: 'Typing practice' },
        ]}
      />
      <h1>Typing practice</h1>
      <p className="caption">Typing is 25 of the 100 CPT marks.</p>

      {narrow && (
        <p className="notice">
          <LuInfo size={20} className="icon" aria-hidden="true" />
          <span>Typing practice works best on a laptop keyboard. You can still practise here.</span>
        </p>
      )}

      <fieldset className="mode-group" disabled={!!startedAt && !done}>
        <legend className="q-label">Test length</legend>
        <div className="length-picker">
          {LENGTHS.map((m) => (
            <label key={m} className={'mode-option' + (minutes === m ? ' selected' : '')}>
              <input
                type="radio"
                name="length"
                checked={minutes === m}
                onChange={() => { setMinutes(m); reset(false); }}
              />
              <span><strong>{m} minutes</strong></span>
            </label>
          ))}
        </div>
      </fieldset>
      <p className="caption">The timer starts when you press the first key. There is no time pressure until then.</p>

      <div className="passage" ref={passageRef} aria-label="Text to type">
        {pieces.map((p, i) => (
          <span key={i} className={p.miss ? 'miss' : 'typed'}>{p.s}</span>
        ))}
        <span className="here" ref={hereRef}>{text[typed.length] ?? ''}</span>
        <span>{text.slice(typed.length + 1)}</span>
      </div>

      <label className="sr-only" htmlFor="typing-input">Type the text here</label>
      <textarea
        id="typing-input"
        ref={box}
        className="typing-box"
        value={typed}
        onChange={onChange}
        onFocus={(e) => e.target.scrollIntoView({ block: 'center', behavior: 'smooth' })}
        onPaste={(e) => e.preventDefault()}
        placeholder="Start typing here"
        rows={3}
        disabled={done}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />

      <p className="live-stats" aria-live="off">
        <span>Time left: {fmt(timeLeft)}</span>
        <span>{wpm} words per minute</span>
        <span>{accuracy}% accuracy</span>
      </p>
      <p className="caption">Mistakes are underlined in the text above.</p>

      {done && (
        <div className="score-card" role="status">
          <h2>Test finished</h2>
          <dl className="score-grid">
            <div><dt>Speed</dt><dd>{saved.last?.wpm} words per minute</dd></div>
            <div><dt>Accuracy</dt><dd>{saved.last?.accuracy}%</dd></div>
          </dl>
        </div>
      )}

      <div className="btn-row">
        <button type="button" className="btn primary" onClick={() => reset(false)}>
          <LuRotateCcw size={20} className="icon" aria-hidden="true" />
          Try this text again
        </button>
        <button type="button" className="btn" onClick={() => reset(true)}>New text</button>
      </div>

      <h2>Your results</h2>
      <p>
        Best: {saved.best ? `${saved.best.wpm} words per minute at ${saved.best.accuracy}% accuracy (${saved.best.minutes}-minute test, ${saved.best.date})` : 'none yet'}.
      </p>
      <p>
        Last: {saved.last ? `${saved.last.wpm} words per minute at ${saved.last.accuracy}% accuracy (${saved.last.minutes}-minute test, ${saved.last.date})` : 'none yet'}.
      </p>
      <p className="caption">A best result counts only when accuracy is 90% or more. Results are saved on this device.</p>
    </div>
  );
}
