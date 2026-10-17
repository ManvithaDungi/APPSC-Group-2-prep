import { Link } from 'react-router-dom';
import { isStudied, quizFinished } from '../data/helpers';
import { useProgress } from '../context/ProgressContext';

function Why({ subject }) {
  return (
    <>
      <h2>Why this matters</h2>
      <ul className="bullets">{subject.why.map((w, i) => <li key={i}>{w}</li>)}</ul>
      <div className="box tip"><strong>Study tip:</strong> {subject.tip}</div>
    </>
  );
}

// Home page of a subject (lists its subtopics).
export function SubjectHome({ tab, subject }) {
  const { progress } = useProgress();
  const done = subject.leaves.filter((l) => isStudied(progress, l.id)).length;
  const scores = subject.leaves.map((l) => progress[l.id]?.bestPct).filter((x) => x != null);
  const best = scores.length ? `${Math.max(...scores)}%` : 'No quiz taken yet';
  const first = subject.leaves[0];

  return (
    <div>
      <h1>{subject.title}</h1>
      <div className="facts">
        <div className="fact"><span className="big">{subject.marks}</span>marks{tab.marks ? ` out of ${tab.marks}` : ''}</div>
        {subject.questions != null && <div className="fact"><span className="big">~{subject.questions}</span>questions expected</div>}
        <div className="fact"><span className="big">{done}/{subject.leaves.length}</span>topics studied</div>
        <div className="fact"><span className="big">{best}</span>best quiz score</div>
      </div>
      {tab.provisional && (
        <div className="box changing">Check the latest CPT pattern in the official notification.</div>
      )}
      {subject.monthly && (
        <div className="box changing"><strong>Update monthly.</strong> Add new items to the data file every month.</div>
      )}
      <h2>Topics covered</h2>
      <div className="leaf-list">
        {subject.leaves.map((l) => (
          <Link key={l.id} className="leaf-card" to={`/${tab.id}/${subject.id}/${l.id}`}>
            <span>{l.title}</span>
            <span className="leaf-status">{quizFinished(progress, l.id) ? '✓ Quiz done' : isStudied(progress, l.id) ? '✓ Studied' : 'Not started'}</span>
          </Link>
        ))}
      </div>
      <Why subject={subject} />
      <div className="btn-row">
        <Link className="btn primary big-btn" to={`/${tab.id}/${subject.id}/${first.id}/notes`}>Start Notes</Link>
        <Link className="btn big-btn" to={`/${tab.id}/${subject.id}/${first.id}/quiz`}>Take Quiz</Link>
      </div>
    </div>
  );
}

// Home page of a leaf (subtopic).
export function LeafHome({ tab, subject, leaf }) {
  const { progress } = useProgress();
  const p = progress[leaf.id];
  const base = `/${tab.id}/${subject.id}/${leaf.id}`;
  return (
    <div>
      <h1>{leaf.title}</h1>
      <p className="lead">Part of {subject.title}.</p>
      <div className="facts">
        <div className="fact"><span className="big">{subject.marks}</span>marks for {subject.title}{tab.marks ? ` (of ${tab.marks})` : ''}</div>
        {subject.questions != null && <div className="fact"><span className="big">~{subject.questions}</span>questions in the whole subject</div>}
        <div className="fact"><span className="big">{isStudied(progress, leaf.id) ? 'Yes' : 'Not yet'}</span>studied</div>
        <div className="fact"><span className="big">{p?.bestPct != null ? `${p.bestPct}%` : '—'}</span>best quiz score</div>
      </div>
      {leaf.monthly && <div className="box changing"><strong>Update monthly.</strong> New items are added through the data file.</div>}
      <h2>Topics covered</h2>
      <ul className="bullets">{leaf.topics.map((t, i) => <li key={i}>{t}</li>)}</ul>
      <Why subject={subject} />
      <div className="btn-row">
        <Link className="btn primary big-btn" to={`${base}/notes`}>Start Notes</Link>
        <Link className="btn big-btn" to={`${base}/quiz`}>Take Quiz</Link>
        {leaf.practice && <Link className="btn big-btn" to={`${base}/practice`}>Typing Practice</Link>}
      </div>
    </div>
  );
}
