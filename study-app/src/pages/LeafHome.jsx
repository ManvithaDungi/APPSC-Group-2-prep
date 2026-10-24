import { Link } from 'react-router-dom';
import { LuBookOpen, LuCircleHelp, LuKeyboard, LuListChecks, LuTarget } from 'react-icons/lu';
import Breadcrumb from '../components/Breadcrumb';
import { Callout } from '../components/NoteBlocks';
import useSectionContent from '../hooks/useSectionContent';
import { CHECKLISTS } from '../data/cptChecklists';
import { leafPath, leafTopics, statusText, topicKey, topicPath } from '../data/helpers';
import { useProgress } from '../context/ProgressContext';

// Home page of a subject (for example Ancient History): every syllabus line under "Topics covered",
// each with its own Notes and Quiz buttons. Nothing else is opened by choosing the subject.
export default function LeafHome({ tab, group, leaf }) {
  const { progress } = useProgress();
  const { content } = useSectionContent(tab.id);
  const topics = leafTopics(leaf);
  const leafContent = content?.[leaf.id];
  const mixedKey = topicKey(leaf.id, 'all');
  const checklist = CHECKLISTS[leaf.id];
  let lastParent = null;

  return (
    <div>
      <Breadcrumb
        crumbs={[
          { label: tab.title, to: `/${tab.id}` },
          { label: group.title },
          { label: leaf.title },
        ]}
      />
      <h1>{leaf.title}</h1>
      <p className="lead">
        {group.title}: {group.marks} marks{tab.marks ? ` of ${tab.marks}` : ''}
        {group.questions != null ? `, about ${group.questions} questions` : ''}.
      </p>
      {tab.provisional && (
        <p className="notice">The CPT pattern is provisional. Check the official notification for the latest.</p>
      )}
      {leaf.monthly && (
        <p className="notice">Updated monthly. New items are added to the data file, newest first.</p>
      )}

      {(leaf.practice || checklist) && (
        <>
          <h2>Practice</h2>
          <div className="btn-row">
            {leaf.practice && (
              <Link className="btn" to={`${leafPath(tab.id, group.id, leaf.id)}/practice`}>
                <LuKeyboard size={24} className="icon" aria-hidden="true" />
                Typing practice
              </Link>
            )}
            {checklist && (
              <Link className="btn" to={`${leafPath(tab.id, group.id, leaf.id)}/checklist`}>
                <LuListChecks size={24} className="icon" aria-hidden="true" />
                Task checklist ({checklist.marks} marks)
              </Link>
            )}
          </div>
        </>
      )}

      <h2>Topics covered</h2>
      <ul className="topic-list">
        {topics.map((t) => {
          const key = topicKey(leaf.id, t.id);
          const showParent = t.parent && t.parent !== lastParent;
          lastParent = t.parent || null;
          return (
            <li key={t.id}>
              {showParent && <h3 className="topic-parent">{t.parent}</h3>}
              <div className={'topic-card' + (t.parent ? ' topic-sub' : '')}>
                <h3>{t.title}</h3>
                <p className="topic-status">{statusText(progress, key)}</p>
                <div className="topic-actions">
                  <Link className="btn" to={topicPath(tab.id, group.id, leaf.id, t.id, 'notes')}>
                    <LuBookOpen size={24} className="icon" aria-hidden="true" />
                    <span>Notes<span className="sr-only"> for {t.title}</span></span>
                  </Link>
                  <Link className="btn primary" to={topicPath(tab.id, group.id, leaf.id, t.id, 'quiz')}>
                    <LuCircleHelp size={24} className="icon" aria-hidden="true" />
                    <span>Quiz<span className="sr-only"> for {t.title}</span></span>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {leafContent?.quiz?.length > 0 && topics.length > 1 && (
        <>
          <h2>Mixed quiz</h2>
          <div className="topic-card">
            <h3>All topics of {leaf.title}</h3>
            <p className="topic-status">{statusText(progress, mixedKey)}</p>
            <div className="topic-actions">
              <Link className="btn primary" to={topicPath(tab.id, group.id, leaf.id, 'all', 'quiz')}>
                <LuCircleHelp size={24} className="icon" aria-hidden="true" />
                <span>Quiz<span className="sr-only"> on all topics of {leaf.title}</span></span>
              </Link>
            </div>
          </div>
        </>
      )}

      {leafContent?.quick && (
        <details className="quick">
          <summary>Quick revision for {leaf.title}</summary>
          <div className="notes">
            <ul>{leafContent.quick.map((q, i) => <li key={i}>{q}</li>)}</ul>
          </div>
        </details>
      )}

      <h2>About this subject</h2>
      <ul>{group.why.map((w, i) => <li key={i}>{w}</li>)}</ul>
      <Callout icon={LuTarget} title="Exam tip"><p>{group.tip}</p></Callout>
      <p><Link className="text-link" to="/exam-facts">Exam facts</Link></p>
    </div>
  );
}
