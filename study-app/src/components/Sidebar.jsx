import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { quizFinished } from '../data/helpers';
import { useProgress } from '../context/ProgressContext';

function Collapse({ open, children }) {
  return (
    <div className={'collapse' + (open ? ' open' : '')}>
      <div>{children}</div>
    </div>
  );
}

function Arrow({ open, onClick, label }) {
  return (
    <button className={'arrow' + (open ? ' open' : '')} onClick={onClick} aria-expanded={open} aria-label={label}>
      ▸
    </button>
  );
}

export default function Sidebar({ tab, subjectId, leafId, page, open, onClose }) {
  const { progress } = useProgress();
  const [exp, setExp] = useState({});

  // The current page's parents always stay open.
  useEffect(() => {
    setExp((e) => ({
      ...e,
      ...(subjectId ? { ['s:' + subjectId]: true } : {}),
      ...(leafId ? { ['l:' + leafId]: true } : {}),
    }));
  }, [subjectId, leafId]);

  const toggle = (key) => setExp((e) => ({ ...e, [key]: !e[key] }));

  return (
    <>
      <div className={'overlay' + (open ? ' show' : '')} onClick={onClose} />
      <aside className={'sidebar' + (open ? ' open' : '')} aria-label="Topics">
        <div className="sidebar-head">
          <strong>{tab.title}</strong>
          <button className="close-drawer" onClick={onClose} aria-label="Close topics">✕</button>
        </div>
        {tab.subjects.map((s) => {
          const sKey = 's:' + s.id;
          const sOpen = !!exp[sKey];
          const sActive = subjectId === s.id && !leafId;
          return (
            <div key={s.id} className="tree-group">
              <div className={'row subject' + (sActive ? ' active' : '')}>
                <Link to={`/${tab.id}/${s.id}`} className="row-link">{s.title}</Link>
                <Arrow open={sOpen} onClick={() => toggle(sKey)} label={`Show or hide ${s.title}`} />
              </div>
              <Collapse open={sOpen}>
                {s.leaves.map((l) => {
                  const lKey = 'l:' + l.id;
                  const lOpen = !!exp[lKey];
                  const base = `/${tab.id}/${s.id}/${l.id}`;
                  const pages = [
                    ['', 'Home'],
                    ['notes', 'Notes'],
                    ['quiz', 'Quiz'],
                    ...(l.practice ? [['practice', 'Practice']] : []),
                  ];
                  return (
                    <div key={l.id} className="tree-leaf">
                      <div className={'row leaf' + (leafId === l.id ? ' current' : '')}>
                        <Link to={base} className="row-link">
                          {l.title}
                          {quizFinished(progress, l.id) && <span className="tick" title="Quiz finished"> ✓</span>}
                        </Link>
                        <Arrow open={lOpen} onClick={() => toggle(lKey)} label={`Show or hide pages of ${l.title}`} />
                      </div>
                      <Collapse open={lOpen}>
                        <div className="pages">
                          {pages.map(([p, label]) => (
                            <Link
                              key={label}
                              to={p ? `${base}/${p}` : base}
                              className={'page-chip' + (leafId === l.id && (page || '') === p ? ' active' : '')}
                            >
                              {label}
                            </Link>
                          ))}
                        </div>
                      </Collapse>
                    </div>
                  );
                })}
              </Collapse>
            </div>
          );
        })}
      </aside>
    </>
  );
}
