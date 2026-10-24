import { lazy, Suspense, useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import SectionPage from './SectionPage';
import LeafHome from './LeafHome';
import NotesPage from './NotesPage';
import QuizPage from './QuizPage';
import NotFound from './NotFound';
import { findGroup, findLeaf, findTab, findTopic } from '../data/helpers';
import { CHECKLISTS } from '../data/cptChecklists';
import { useProgress } from '../context/ProgressContext';
import { useDrawer } from '../context/DrawerContext';

const TypingPage = lazy(() => import('./TypingPage'));
const ChecklistPage = lazy(() => import('./ChecklistPage'));

// Everything under /:tabId. Routes (see APP_DESIGN_GUIDELINES.md section 2.4):
//   /screening                                         section page
//   /screening/indian-history/ancient-history          subject Home (lists every topic)
//   .../ancient-history/<topic>/notes  and  /quiz      one topic
//   .../ancient-history/all/quiz                       mixed quiz of the subject
//   .../typing/practice, .../ms-word/checklist         CPT practice pages
export default function TabArea() {
  const { tabId, '*': splat } = useParams();
  const { pathname } = useLocation();
  const { setLast } = useProgress();
  const { open, close, setAvailable, buttonRef } = useDrawer();

  const [groupId, leafId, third, page] = (splat || '').split('/').filter(Boolean);
  const tab = findTab(tabId);
  const group = findGroup(tab, groupId);
  const leaf = findLeaf(group, leafId);
  const topic = leaf && third ? findTopic(leaf, third) : null;

  // The menu button in the top bar only appears while a section page is shown.
  const hasTree = !!tab && (!groupId || !!group) && (!leafId || !!leaf);
  useEffect(() => {
    setAvailable(hasTree);
    return () => setAvailable(false);
  }, [hasTree, setAvailable]);
  useEffect(() => close(), [pathname, close]);
  useEffect(() => {
    if (leaf) setLast(tab.id, pathname);
  }, [leaf, tab, pathname, setLast]);

  if (!tab) return <NotFound />;
  if (groupId && !group) return <NotFound />;
  if (groupId && !leafId) return <Navigate to={`/${tab.id}`} replace />;
  if (leafId && !leaf) return <NotFound />;

  let body;
  if (!leaf) {
    body = <SectionPage tab={tab} />;
  } else if (!third) {
    body = <LeafHome tab={tab} group={group} leaf={leaf} />;
  } else if (third === 'practice' && leaf.practice && !page) {
    body = <TypingPage tab={tab} group={group} leaf={leaf} />;
  } else if (third === 'checklist' && CHECKLISTS[leaf.id] && !page) {
    body = <ChecklistPage tab={tab} group={group} leaf={leaf} />;
  } else if (third === 'all' && page === 'quiz') {
    body = <QuizPage tab={tab} group={group} leaf={leaf} topic={null} />;
  } else if (topic && page === 'notes') {
    body = <NotesPage tab={tab} group={group} leaf={leaf} topic={topic} />;
  } else if (topic && page === 'quiz') {
    body = <QuizPage tab={tab} group={group} leaf={leaf} topic={topic} />;
  } else {
    return <NotFound />;
  }

  return (
    <div className="shell">
      <Sidebar tab={tab} groupId={groupId} leafId={leafId} open={open} onClose={close} returnFocusRef={buttonRef} />
      <main className="content" id="main">
        <div className="content-inner">
          <Suspense fallback={<p className="caption">Loading…</p>}>
            <div key={pathname} className="fade">{body}</div>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
