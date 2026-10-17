import { Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './pages/Dashboard';
import TabArea from './pages/TabArea';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:tabId/*" element={<TabArea />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
