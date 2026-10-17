import { useRef, useState } from 'react';
import { PASSAGES } from '../data/typingPassages';
import { load, save } from '../utils/storage';

const KEY = 'g2.typingBest';

export default function TypingPage() {
  const [pIndex, setPIndex] = useState(0);
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [best, setBest] = useState(() => load(KEY, null));
  const startRef = useRef(null);
  const passage = PASSAGES[pIndex];

  const finish = (typed) => {
    const minutes = Math.max((Date.now() - startRef.current) / 60000, 1 / 600);
    let right = 0;
    for (let i = 0; i < typed.length; i++) if (typed[i] === passage[i]) right++;
    const accuracy = Math.round((right / Math.max(typed.length, 1)) * 100);
    const wpm = Math.round(typed.length / 5 / minutes);
    const r = { wpm, accuracy };
    setResult(r);
    // Best = highest speed among attempts with at least 90% accuracy.
    if (accuracy >= 90 && (!best || wpm > best.wpm)) {
      setBest(r);
      save(KEY, r);
    }
  };

  const onChange = (e) => {
    if (result) return;
    const v = e.target.value.slice(0, passage.length);
    if (!startRef.current && v.length > 0) startRef.current = Date.now();
    setText(v);
    if (v.length === passage.length) finish(v);
  };

  const reset = (nextIndex) => {
    setPIndex(nextIndex);
    setText('');
    setResult(null);
    startRef.current = null;
  };

  return (
    <div>
      <h1>Typing Practice</h1>
      <p className="lead">Type the passage below. The timer starts when you press the first key.</p>
      <div className="passage" aria-label="Passage to type">
        {passage.split('').map((ch, i) => {
          let cls = '';
          if (i < text.length) cls = text[i] === ch ? 'ok' : 'bad';
          else if (i === text.length) cls = 'cursor';
          return <span key={i} className={cls}>{ch}</span>;
        })}
      </div>
      <textarea
        className="typing-box"
        value={text}
        onChange={onChange}
        placeholder="Start typing here…"
        rows={4}
        disabled={!!result}
        spellCheck={false}
        autoComplete="off"
        onPaste={(e) => e.preventDefault()}
      />
      {result && (
        <div className="score-cards">
          <div className="score-card"><span className="big">{result.wpm}</span>words per minute</div>
          <div className="score-card"><span className="big">{result.accuracy}%</span>accuracy</div>
        </div>
      )}
      <p className="small">
        Best so far: {best ? `${best.wpm} words per minute at ${best.accuracy}% accuracy` : 'none yet'} (best counts only when accuracy is 90% or more).
      </p>
      <div className="btn-row">
        <button className="btn primary" onClick={() => reset(pIndex)}>Try this again</button>
        <button className="btn" onClick={() => reset((pIndex + 1) % PASSAGES.length)}>New passage</button>
      </div>
    </div>
  );
}
