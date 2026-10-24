import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuChevronRight, LuX } from 'react-icons/lu';
import { KEYS, load, save } from '../utils/storage';

function Collapse({ open, children }) {
  return (
    <div className={'collapse' + (open ? ' open' : '')}>
      <div>{children}</div>
    </div>
  );
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// The topic tree. A fixed sidebar on laptops (900px and up), a slide-in drawer below that.
// Only subjects (Ancient History ...) are links; each opens that subject's Home page.
export default function Sidebar({ tab, groupId, leafId, open, onClose, returnFocusRef }) {
  const [exp, setExp] = useState(() => load(KEYS.tree, {}));
  const ref = useRef(null);
  const wasOpen = useRef(false);

  // The group that holds the current page stays expanded.
  useEffect(() => {
    if (!groupId) return;
    setExp((e) => (e[groupId] ? e : { ...e, [groupId]: true }));
  }, [groupId]);
  useEffect(() => save(KEYS.tree, exp), [exp]);

  // Drawer behaviour: Escape closes, focus stays inside while open and returns to "Topics" afterwards.
  useEffect(() => {
    const el = ref.current;
    if (open && el) {
      const items = el.querySelectorAll(FOCUSABLE);
      (items[0] || el).focus();
    } else if (wasOpen.current) {
      returnFocusRef?.current?.focus();
    }
    wasOpen.current = open;
  }, [open, returnFocusRef]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !ref.current) return;
      const items = [...ref.current.querySelectorAll(FOCUSABLE)].filter((n) => n.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const lastItem = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        lastItem.focus();
      } else if (!e.shiftKey && document.activeElement === lastItem) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const toggle = (id) => setExp((e) => ({ ...e, [id]: !e[id] }));

  return (
    <>
      <div className={'overlay' + (open ? ' show' : '')} onClick={onClose} aria-hidden="true" />
      <aside
        ref={ref}
        className={'sidebar' + (open ? ' open' : '')}
        aria-label="Topics"
        role={open ? 'dialog' : undefined}
        aria-modal={open ? 'true' : undefined}
        tabIndex={-1}
      >
        <div className="sidebar-head">
          <strong>{tab.title}</strong>
          <button type="button" className="icon-btn" onClick={onClose}>
            <LuX size={24} className="icon" aria-hidden="true" />
            <span className="sr-only">Close topics</span>
          </button>
        </div>
        <nav aria-label={`${tab.title} topics`}>
          {tab.subjects.map((g) => {
            const isOpen = !!exp[g.id];
            return (
              <div key={g.id}>
                <button type="button" className="tree-group-btn" aria-expanded={isOpen} onClick={() => toggle(g.id)}>
                  <span>{g.title}</span>
                  <LuChevronRight size={20} className={'icon chevron' + (isOpen ? ' open' : '')} aria-hidden="true" />
                </button>
                <Collapse open={isOpen}>
                  {g.leaves.map((l) => (
                    <Link
                      key={l.id}
                      to={`/${tab.id}/${g.id}/${l.id}`}
                      className="tree-leaf"
                      aria-current={leafId === l.id ? 'page' : undefined}
                      tabIndex={isOpen ? 0 : -1}
                    >
                      {l.title}
                    </Link>
                  ))}
                </Collapse>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
