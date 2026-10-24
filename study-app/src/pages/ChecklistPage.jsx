import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuArrowLeft, LuDownload } from 'react-icons/lu';
import Breadcrumb from '../components/Breadcrumb';
import { CHECKLISTS } from '../data/cptChecklists';
import { topicPath } from '../data/helpers';
import { KEYS, load, save } from '../utils/storage';

// CPT Part B: a task checklist she ticks off while working in Word, Excel or PowerPoint on her laptop.
export default function ChecklistPage({ tab, group, leaf }) {
  const list = CHECKLISTS[leaf.id];
  const [ticks, setTicks] = useState(() => load(KEYS.checklist, {}));
  const leafHome = `/${tab.id}/${group.id}/${leaf.id}`;
  const done = list.tasks.filter((t) => ticks[`${leaf.id}.${t.id}`]).length;

  const toggle = (id) => {
    setTicks((t) => {
      const next = { ...t, [id]: !t[id] };
      save(KEYS.checklist, next);
      return next;
    });
  };

  return (
    <div>
      <Link className="back-link" to={leafHome}>
        <LuArrowLeft size={24} className="icon" aria-hidden="true" />
        Back to {leaf.title}
      </Link>
      <Breadcrumb
        crumbs={[
          { label: tab.title, to: `/${tab.id}` },
          { label: group.title },
          { label: leaf.title, to: leafHome },
          { label: 'Task checklist' },
        ]}
      />
      <h1>{list.title}</h1>
      <p className="caption">CPT Part B: {list.marks} marks. {list.scope}</p>
      <p>Open the program on your laptop, do each task, then tick it here. {done} of {list.tasks.length} done.</p>

      {list.sample && (
        <p>
          <a className="btn" href={import.meta.env.BASE_URL + list.sample.href.replace(/^\/+/, '')} download>
            <LuDownload size={24} className="icon" aria-hidden="true" />
            {list.sample.label}
          </a>
        </p>
      )}

      <ul className="check-list">
        {list.tasks.map((t) => {
          const id = `${leaf.id}.${t.id}`;
          const on = !!ticks[id];
          return (
            <li key={t.id}>
              <div className={'check-item' + (on ? ' done' : '')}>
                <input id={id} type="checkbox" checked={on} onChange={() => toggle(id)} />
                <label htmlFor={id}>
                  <span className="task">{t.text}</span>
                  {on && <span className="sr-only"> (done)</span>}
                </label>
              </div>
              <div style={{ paddingLeft: '2.25rem', paddingBottom: '0.5rem' }}>
                <Link className="howto" to={topicPath(tab.id, group.id, leaf.id, t.how, 'notes')}>
                  How to<span className="sr-only"> for: {t.text}</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="caption">Ticks are saved on this device.</p>
    </div>
  );
}
