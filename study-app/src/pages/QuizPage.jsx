import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { getContent, leafPath } from '../data/helpers';

export default function QuizPage({ tab, subject, leaf }) {
  const content = getContent(leaf.id);
  const quiz = content?.quiz || [];
  const notesPath = leafPath(tab.id, subject.id, leaf.id, 'notes');

  if (quiz.length === 0) {
    return (
      <div>
        <h1>{leaf.title} – Quiz</h1>
        <div className="box tip">
          <strong>Questions for this topic are being added.</strong>
          {leaf.monthly ? ' Quiz questions are added with each monthly update.' : ' Please check back soon.'}
        </div>
        <Link className="btn primary" to={notesPath}>Back to Notes</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>{leaf.title} – Quiz</h1>
      {/* key makes the quiz restart when she opens a different topic */}
      <Quiz key={leaf.id} leafId={leaf.id} quiz={quiz} notesPath={notesPath} />
    </div>
  );
}
