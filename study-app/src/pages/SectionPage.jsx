import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import Breadcrumb from '../components/Breadcrumb';
import { isDone, leafPath, leafTopics, topicKey } from '../data/helpers';
import { useProgress } from '../context/ProgressContext';

// Page of one exam section (for example Screening Test): its subjects, grouped, with plain-text progress.
export default function SectionPage({ tab }) {
  const { progress, last } = useProgress();
  const resume = last[tab.id];

  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: tab.title }]} />
      <h1>{tab.title}</h1>
      <p className="lead">{tab.summary}. {tab.details}.</p>
      {tab.provisional && (
        <p className="notice">The CPT pattern is provisional. Check the official notification for the latest.</p>
      )}
      {resume && (
        <p>
          <Link className="continue-line" to={resume}>
            Continue where you left off
            <LuArrowRight size={20} className="icon" aria-hidden="true" />
          </Link>
        </p>
      )}
      <p><Link className="text-link" to="/exam-facts">Exam facts</Link></p>

      {tab.subjects.map((g) => (
        <section key={g.id} aria-labelledby={`g-${g.id}`}>
          <h2 id={`g-${g.id}`}>{g.title}</h2>
          <ul className="link-list">
            {g.leaves.map((l) => {
              const topics = leafTopics(l);
              const done = topics.filter((t) => isDone(progress, topicKey(l.id, t.id))).length;
              return (
                <li key={l.id}>
                  <Link to={leafPath(tab.id, g.id, l.id)}>
                    <span>
                      <span className="row-title">{l.title}</span>
                      <span className="row-sub">{done} of {topics.length} topics studied or quizzed</span>
                    </span>
                    <LuArrowRight size={20} className="icon" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
