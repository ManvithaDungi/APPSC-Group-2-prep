import { Link, NavLink } from 'react-router-dom';
import { TABS } from '../data/syllabus';
import { useProgress } from '../context/ProgressContext';

export default function TopBar() {
  const { biggerText, smallerText } = useProgress();
  return (
    <header className="topbar">
      <Link to="/" className="brand">
        Group 2 Study
      </Link>
      <nav className="tabs" aria-label="Main sections">
        {TABS.map((t) => (
          <NavLink key={t.id} to={`/${t.id}`} className={({ isActive }) => 'tab' + (isActive ? ' active' : '')}>
            <span className="tab-long">{t.title}</span>
            <span className="tab-short">{t.short}</span>
          </NavLink>
        ))}
      </nav>
      <div className="textsize" role="group" aria-label="Text size">
        <button onClick={smallerText} aria-label="Smaller text">A−</button>
        <button onClick={biggerText} aria-label="Bigger text">A+</button>
      </div>
    </header>
  );
}
