import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import { TABS } from '../data/syllabus';
import { isDone, tabTopics } from '../data/helpers';
import { useProgress } from '../context/ProgressContext';

export default function Dashboard() {
  const { progress, last } = useProgress();
  const resume = last._latest;

  return (
    <main className="page" id="main">
      <h1>Group 2 Study</h1>
      <p className="lead">Notes and quizzes for the APPSC Group 2 exam. Study a little every day.</p>

      {resume ? (
        <p>
          <Link className="continue-line" to={resume}>
            Continue where you left off
            <LuArrowRight size={20} className="icon" aria-hidden="true" />
          </Link>
        </p>
      ) : (
        <p>Pick a section below to begin.</p>
      )}

      <h2>Sections</h2>
      <ul className="link-list">
        {TABS.map((t) => {
          const topics = tabTopics(t);
          const done = topics.filter((x) => isDone(progress, x.key)).length;
          return (
            <li key={t.id}>
              <Link to={`/${t.id}`}>
                <span>
                  <span className="row-title">{t.title}</span>
                  <span className="row-sub">{t.summary}</span>
                  <span className="row-sub">{done} of {topics.length} topics studied or quizzed</span>
                </span>
                <LuArrowRight size={20} className="icon" aria-hidden="true" />
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="caption">
        Wrong answers lose 1/3 mark in the exam, so in a quiz it is fine to skip a question you are unsure of.{' '}
        <Link className="text-link" to="/exam-facts">Exam facts</Link>
      </p>
    </main>
  );
}
