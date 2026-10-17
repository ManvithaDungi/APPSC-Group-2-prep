import { Link } from 'react-router-dom';
import NoteBlocks from '../components/NoteBlocks';
import { getContent, leafPath, tabLeaves } from '../data/helpers';
import { useProgress } from '../context/ProgressContext';

function Items({ items }) {
  return (
    <div className="ca-list">
      {items.map((it, i) => (
        <article key={i} className="ca-item">
          <div className="ca-meta"><span className="pill">{it.category}</span> {it.date}</div>
          <h3>{it.headline}</h3>
          <ul className="bullets">{it.keyPoints.map((k, j) => <li key={j}>{k}</li>)}</ul>
          {it.sources && (
            <p className="ca-sources">
              Source:{' '}
              {it.sources.map((s, j) => (
                <span key={j}>
                  {j > 0 && ', '}
                  <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
                </span>
              ))}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

export default function NotesPage({ tab, subject, leaf }) {
  const { progress, setStudied } = useProgress();
  const content = getContent(leaf.id);
  const studied = !!progress[leaf.id]?.studied;

  const list = tabLeaves(tab);
  const idx = list.findIndex((l) => l.id === leaf.id);
  const prev = list[idx - 1];
  const next = list[idx + 1];

  return (
    <div>
      <h1>{leaf.title} – Notes</h1>
      {leaf.monthly && (
        <div className="box changing">
          <strong>Update monthly.</strong> Add new items in the data file. Newest first.
        </div>
      )}
      {tab.provisional && (
        <div className="box changing">Check the latest CPT pattern in the official notification.</div>
      )}

      {!content && (
        <div className="box tip">
          <strong>Notes for this topic are being added.</strong> They will appear here soon. You can still try the quiz or move to the next topic.
        </div>
      )}
      {content?.updated && (
        <div className="box changing">
          Last checked: {content.updated}. Facts come from news and exam-prep sites. Confirm key facts on official sites (PIB, RBI, AP government) before the exam.
        </div>
      )}
      {content?.items && <Items items={content.items} />}
      {content?.notes && <NoteBlocks notes={content.notes} />}

      {content?.quick && (
        <div className="box quick">
          <div className="box-title">📝 Quick Revision</div>
          <ul className="bullets">{content.quick.map((q, i) => <li key={i}>{q}</li>)}</ul>
        </div>
      )}

      <label className="done-check">
        <input type="checkbox" checked={studied} onChange={(e) => setStudied(leaf.id, e.target.checked)} />
        I have studied this topic
      </label>

      <div className="btn-row">
        <Link className="btn primary" to={leafPath(tab.id, subject.id, leaf.id, 'quiz')}>Take the Quiz</Link>
      </div>

      <div className="pager">
        {prev ? (
          <Link className="btn" to={leafPath(tab.id, prev.subjectId, prev.id, 'notes')}>← Previous: {prev.title}</Link>
        ) : <span />}
        {next ? (
          <Link className="btn primary" to={leafPath(tab.id, next.subjectId, next.id, 'notes')}>Next: {next.title} →</Link>
        ) : <span />}
      </div>
    </div>
  );
}
