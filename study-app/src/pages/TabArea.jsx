import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import { SubjectHome, LeafHome } from './Overview';
import NotesPage from './NotesPage';
import QuizPage from './QuizPage';
import TypingPage from './TypingPage';
import NotFound from './NotFound';
import { findLeaf, findSubject, findTab } from '../data/helpers';
import { useProgress } from '../context/ProgressContext';

export default function TabArea() {
  const { tabId, '*': splat } = useParams();
  const location = useLocation();
  const { setLast } = useProgress();
  const [drawer, setDrawer] = useState(false);

  const [subjectId, leafId, page] = (splat || '').split('/').filter(Boolean);
  const tab = findTab(tabId);
  const subject = findSubject(tab, subjectId);
  const leaf = findLeaf(subject, leafId);

  useEffect(() => setDrawer(false), [location.pathname]);
  useEffect(() => {
    if (leaf) setLast(location.pathname);
  }, [leaf, location.pathname, setLast]);

  const valid = tab && (!subjectId || subject) && (!leafId || leaf) && (!page || ['notes', 'quiz', ...(leaf?.practice ? ['practice'] : [])].includes(page));
  if (!valid) return <NotFound />;

  let body;
  if (!subject) {
    body = (
      <div>
        <h1>{tab.title}</h1>
        <p className="lead">{tab.summary}. {tab.details}.</p>
        {tab.provisional && <div className="box changing">Check the latest CPT pattern in the official notification.</div>}
        <div className="cards">
          {tab.subjects.map((s) => (
            <Link key={s.id} to={`/${tab.id}/${s.id}`} className="card">
              <h3>{s.title}</h3>
              <p>{s.marks} marks · {s.leaves.length} topics</p>
            </Link>
          ))}
        </div>
      </div>
    );
  } else if (!leaf) {
    body = <SubjectHome tab={tab} subject={subject} />;
  } else if (!page) {
    body = <LeafHome tab={tab} subject={subject} leaf={leaf} />;
  } else if (page === 'notes') {
    body = <NotesPage tab={tab} subject={subject} leaf={leaf} />;
  } else if (page === 'quiz') {
    body = <QuizPage tab={tab} subject={subject} leaf={leaf} />;
  } else {
    body = <TypingPage />;
  }

  return (
    <div className="shell">
      <Sidebar tab={tab} subjectId={subjectId} leafId={leafId} page={page} open={drawer} onClose={() => setDrawer(false)} />
      <main className="content">
        <button className="drawer-btn" onClick={() => setDrawer(true)}>☰ Topics</button>
        <Breadcrumb tab={tab} subject={subject} leaf={leaf} page={page} />
        <div key={location.pathname} className="fade">{body}</div>
      </main>
    </div>
  );
}
