import { Link } from 'react-router-dom';
import { LuArrowLeft } from 'react-icons/lu';
import Breadcrumb from '../components/Breadcrumb';
import Quiz from '../components/Quiz';
import useSectionContent from '../hooks/useSectionContent';
import { topicContent, topicKey, topicPath } from '../data/helpers';

// Quiz of one topic, or (topic = null) the mixed quiz of the whole subject.
export default function QuizPage({ tab, group, leaf, topic }) {
  const { content, loading } = useSectionContent(tab.id);
  const leafHome = `/${tab.id}/${group.id}/${leaf.id}`;
  const topicId = topic ? topic.id : 'all';
  const key = topicKey(leaf.id, topicId);
  const title = topic ? topic.title : `All topics of ${leaf.title}`;
  const data = content ? topicContent(leaf, topicId, content[leaf.id]) : null;
  const questions = data?.questions || [];
  const notesPath = topic ? topicPath(tab.id, group.id, leaf.id, topic.id, 'notes') : leafHome;

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
          { label: topic ? `${topic.short} (Quiz)` : 'Mixed quiz' },
        ]}
      />
      <h1>{title}</h1>
      <p className="caption">{topic ? 'Quiz' : 'Mixed quiz'}</p>

      {loading && <p className="caption">Loading questions…</p>}
      {data && questions.length === 0 && (
        <>
          <p className="notice">
            Questions for this topic are being added.
            {leaf.monthly ? ' Quiz questions are added with each monthly update.' : ''}
          </p>
          <div className="btn-row">
            {topic && <Link className="btn" to={notesPath}>Read the notes</Link>}
            <Link className="btn" to={leafHome}>Back to {leaf.title}</Link>
          </div>
        </>
      )}
      {data && questions.length > 0 && (
        // key restarts the quiz when she opens a different topic
        <Quiz key={key} storageKey={key} questions={questions} notesPath={notesPath} />
      )}
    </div>
  );
}
