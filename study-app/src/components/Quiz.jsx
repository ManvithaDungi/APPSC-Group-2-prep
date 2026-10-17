import { useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import { useProgress } from '../context/ProgressContext';

const LETTERS = ['A', 'B', 'C', 'D'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Shuffle the options of every question and remember where the right answer moved.
function prepare(quiz) {
  return quiz.map((q) => {
    const order = shuffle(q.options.map((_, i) => i));
    return { ...q, opts: order.map((i) => q.options[i]), correct: order.indexOf(q.answer) };
  });
}

export default function Quiz({ leafId, quiz, notesPath }) {
  const { recordQuiz, progress } = useProgress();
  const [run, setRun] = useState(() => prepare(quiz));
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const q = run[i];
  const total = run.length;

  const next = () => {
    const all = [...answers, { q, picked }];
    setAnswers(all);
    if (i + 1 === total) {
      const correct = all.filter((a) => a.picked === a.q.correct).length;
      recordQuiz(leafId, { correct, wrong: total - correct, total });
      setFinished(true);
    } else {
      setI(i + 1);
      setPicked(null);
    }
  };

  const retry = () => {
    setRun(prepare(quiz));
    setI(0);
    setPicked(null);
    setAnswers([]);
    setFinished(false);
  };

  if (finished) {
    const correct = answers.filter((a) => a.picked === a.q.correct).length;
    const wrong = total - correct;
    const marks = Math.round((correct - wrong / 3) * 100) / 100;
    const pct = Math.round((correct / total) * 100);
    const wrongs = answers.filter((a) => a.picked !== a.q.correct);
    const best = progress[leafId];
    return (
      <div className="results">
        <h2>Quiz finished!</h2>
        <div className="score-cards">
          <div className="score-card"><span className="big">{correct} / {total}</span>Correct ({pct}%)</div>
          <div className="score-card"><span className="big">{marks}</span>Marks with −1/3 negative marking</div>
          <div className="score-card"><span className="big">{best?.bestMarks ?? marks}</span>Your best marks</div>
        </div>
        {wrongs.length === 0 ? (
          <div className="box remember">🎉 Every answer was right. Wonderful!</div>
        ) : (
          <>
            <h3>Questions to review ({wrongs.length})</h3>
            {wrongs.map((a, n) => (
              <div key={n} className="review">
                <p className="review-q">{a.q.q}</p>
                <p>✗ Your answer: {a.q.opts[a.picked]}</p>
                <p>✓ Correct answer: <strong>{a.q.opts[a.q.correct]}</strong></p>
                {a.q.explain && <p className="explain-small">{a.q.explain}</p>}
              </div>
            ))}
          </>
        )}
        <div className="btn-row">
          <button className="btn primary" onClick={retry}>Retry Quiz</button>
          <Link className="btn" to={notesPath}>Back to Notes</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-progress">
        <span>Question {i + 1} of {total}</span>
        <div className="bar"><div className="bar-fill" style={{ width: `${(i / total) * 100}%` }} /></div>
      </div>
      <h2 className="question">{q.q}</h2>
      <Chart visual={q.visual} />
      <div className="options">
        {q.opts.map((text, idx) => {
          let cls = 'option';
          let mark = '';
          if (picked !== null) {
            if (idx === q.correct) { cls += ' correct'; mark = '✓'; }
            else if (idx === picked) { cls += ' wrong'; mark = '✗'; }
          }
          return (
            <button key={idx} className={cls} disabled={picked !== null && idx !== picked && idx !== q.correct} onClick={() => picked === null && setPicked(idx)} aria-disabled={picked !== null}>
              <span className="letter">{LETTERS[idx]}</span>
              <span className="opt-text">{text}</span>
              <span className="mark">{mark}</span>
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="explain">
          <strong>{picked === q.correct ? 'Correct! ' : 'Not quite. '}</strong>
          {q.explain}
        </div>
      )}
      {picked !== null && (
        <button className="btn primary" onClick={next}>
          {i + 1 === total ? 'See Results →' : 'Next Question →'}
        </button>
      )}
    </div>
  );
}
