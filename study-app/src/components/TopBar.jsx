import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TABS } from '../data/syllabus';
import { LuMenu } from 'react-icons/lu';
import ThemeToggle from './ThemeToggle';
import { useDrawer } from '../context/DrawerContext';

// Brand and theme toggle on the first line, the four section tabs on one compact line below.
// If the tabs do not fit they scroll sideways and an edge fade shows which side has more.
export default function TopBar() {
  const { open, setOpen, available, buttonRef } = useDrawer();
  const ref = useRef(null);
  const [fade, setFade] = useState({ left: false, right: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () =>
      setFade({
        left: el.scrollLeft > 4,
        right: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
      });
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-row">
        <div className="brand-group">
          {available && (
            <button type="button" className="icon-btn menu-btn" ref={buttonRef} onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
              <LuMenu size={24} className="icon" aria-hidden="true" />
              <span className="sr-only">Open topics</span>
            </button>
          )}
          <Link to="/" className="brand">Group 2 Study</Link>
        </div>
        <ThemeToggle />
      </div>
      <div className={'tabs-wrap' + (fade.left ? ' fade-left' : '') + (fade.right ? ' fade-right' : '')}>
        <nav className="tabs" aria-label="Exam sections" ref={ref}>
          {TABS.map((t) => (
            <NavLink key={t.id} to={`/${t.id}`} className={({ isActive }) => 'tab' + (isActive ? ' active' : '')}>
              <span className="tab-long">{t.title}</span>
              <span className="tab-short" aria-hidden="true">{t.short}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
