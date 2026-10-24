import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './pages/Dashboard';
import TabArea from './pages/TabArea';
import NotFound from './pages/NotFound';

// Rarely opened pages load only when needed, to keep the first load small.
const ExamFacts = lazy(() => import('./pages/ExamFacts'));

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <TopBar />
      <Suspense fallback={<main id="main" className="page"><p className="caption">Loading…</p></main>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exam-facts" element={<ExamFacts />} />
          <Route path="/:tabId/*" element={<TabArea />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
