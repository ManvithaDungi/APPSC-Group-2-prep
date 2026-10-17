import { Link } from 'react-router-dom';
import { TABS } from '../data/syllabus';
import { isStudied, leafPath, tabLeaves } from '../data/helpers';
import { useProgress } from '../context/ProgressContext';

function tabPercent(tab, progress) {
  const leaves = tabLeaves(tab);
  const done = leaves.filter((l) => isStudied(progress, l.id)).length;
  return { done, total: leaves.length, pct: Math.round((done / leaves.length) * 100) };
}

export default function Dashboard() {
  const { progress, last } = useProgress();
  const first = TABS[0].subjects[0].leaves[0];
  const startPath = last || leafPath(TABS[0].id, TABS[0].subjects[0].id, first.id, 'notes');

  return (
    <main className="page">
      <h1>Welcome! Let’s study a little every day.</h1>
      <div className="btn-row">
        <Link className="btn primary big-btn" to={startPath}>
          {last ? 'Continue where you left off →' : 'Start studying →'}
        </Link>
      </div>

      <div className="box remember">
        <div className="box-title">⚠️ Negative marking</div>
        <p>Wrong answers lose 1/3 mark. Skip if unsure.</p>
      </div>

      <h2>Exam overview</h2>
      <div className="cards">
        {TABS.map((t) => (
          <Link key={t.id} to={`/${t.id}`} className="card">
            <h3>{t.title}</h3>
            <p className="card-sub">{t.summary}</p>
            <p>{t.details}</p>
          </Link>
        ))}
      </div>

      <h2>Your progress</h2>
      <div className="progress-list">
        {TABS.map((t) => {
          const { done, total, pct } = tabPercent(t, progress);
          return (
            <div key={t.id} className="progress-row">
              <div className="progress-label">
                <strong>{t.title}</strong>
                <span>{done} of {total} topics · {pct}%</span>
              </div>
              <div className="bar big"><div className="bar-fill" style={{ width: `${pct}%` }} /></div>
            </div>
          );
        })}
      </div>
      <p className="small">A topic counts as done when you tick “I have studied this” or finish its quiz.</p>
    </main>
  );
}
