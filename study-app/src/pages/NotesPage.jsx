import { Link } from 'react-router-dom';
import { LuArrowLeft, LuArrowRight, LuCircleHelp } from 'react-icons/lu';
import Breadcrumb from '../components/Breadcrumb';
import NoteBlocks from '../components/NoteBlocks';
import useSectionContent from '../hooks/useSectionContent';
import { tabTopics, topicContent, topicKey, topicPath } from '../data/helpers';
import { useProgress } from '../context/ProgressContext';

function NewsItems({ items }) {
  return (
    <div>
      {items.map((it, i) => (
        <article key={i} className="news-item">
          <p className="news-meta">{it.category} · {it.date}</p>
          <h3>{it.headline}</h3>
          <ul>{it.keyPoints.map((k, j) => <li key={j}>{k}</li>)}</ul>
          {it.sources && (
            <p className="news-meta">
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

// Notes of one topic (one syllabus line).
export default function NotesPage({ tab, group, leaf, topic }) {
  const { progress, setStudied } = useProgress();
  const { content, loading } = useSectionContent(tab.id);
  const key = topicKey(leaf.id, topic.id);
  const studied = !!progress[key]?.studied;
  const leafHome = `/${tab.id}/${group.id}/${leaf.id}`;

  const all = tabTopics(tab);
  const at = all.findIndex((t) => t.key === key);
  const prev = all[at - 1];
  const next = all[at + 1];
  const data = content ? topicContent(leaf, topic.id, content[leaf.id]) : null;

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
          { label: `${topic.short} (Notes)` },
        ]}
      />
      <h1>{topic.title}</h1>
      <p className="caption">Notes</p>
      {tab.provisional && <p className="notice">The CPT pattern is provisional. Check the official notification for the latest.</p>}
      {leaf.monthly && <p className="notice">Updated monthly. Check the date on each item.</p>}

      {loading && <p className="caption">Loading notes…</p>}
      {data && !data.notes && !data.items && <p className="notice">Notes for this topic are being added.</p>}
      {data?.items && <NewsItems items={data.items} />}
      {data?.notes && <NoteBlocks notes={data.notes} />}

      <label className="study-done">
        <input type="checkbox" checked={studied} onChange={(e) => setStudied(key, e.target.checked)} />
        I have studied this topic
      </label>

      <div className="pager">
        <Link className="btn primary" to={topicPath(tab.id, group.id, leaf.id, topic.id, 'quiz')}>
          <LuCircleHelp size={24} className="icon" aria-hidden="true" />
          Take the quiz on this topic
        </Link>
        {next && (
          <Link className="btn" to={topicPath(tab.id, next.group.id, next.leaf.id, next.id, 'notes')}>
            <span>Next topic: {next.short}</span>
            <LuArrowRight size={24} className="icon" aria-hidden="true" />
          </Link>
        )}
        {prev && (
          <Link className="btn" to={topicPath(tab.id, prev.group.id, prev.leaf.id, prev.id, 'notes')}>
            <LuArrowLeft size={24} className="icon" aria-hidden="true" />
            <span>Previous topic: {prev.short}</span>
          </Link>
        )}
      </div>
    </div>
  );
}
