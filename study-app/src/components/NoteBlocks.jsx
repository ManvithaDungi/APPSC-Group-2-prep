import { useEffect, useRef, useState } from 'react';
import { LuBookmark, LuCalendarClock, LuLightbulb, LuPencilLine, LuTarget } from 'react-icons/lu';
import Mermaid from './Mermaid';
import NoteImage from './NoteImage';

// Text may contain **bold** markers: bold is for names, dates, numbers and Article numbers worth remembering.
export function rich(text) {
  if (typeof text !== 'string' || !text.includes('**')) return text;
  return text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

// One callout style for every type: an icon and a heading on a subtle tint, no side stripe.
export function Callout({ icon: Icon, title, children }) {
  return (
    <aside className="callout">
      <div className="callout-title">
        <Icon size={20} className="icon" aria-hidden="true" />
        <span>{title}</span>
      </div>
      {children}
    </aside>
  );
}

// Wide tables scroll inside their own box; a hint and an edge shadow show when there is more to see.
function ScrollTable({ b }) {
  const ref = useRef(null);
  const [can, setCan] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const check = () => setCan(el.scrollWidth > el.clientWidth + 2 && el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    check();
    el.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      el.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);
  return (
    <div className={'table-scroll' + (can ? ' can-scroll' : '')}>
      <div className="table-wrap" ref={ref} tabIndex={0} role="region" aria-label={b.caption || 'Table'}>
        <table className={"stack-table cols-" + b.head.length}>
          {b.caption && <caption>{b.caption}</caption>}
          <thead><tr>{b.head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
          <tbody>
            {b.rows.map((r, i) => (
              <tr key={i}>{r.map((c, j) => <td key={j} data-label={b.head[j]}>{rich(c)}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="scroll-hint">Scroll sideways to see more columns.</p>
    </div>
  );
}

// Renders the "notes" array of a topic. Block types are documented in the README.
function Block({ b }) {
  switch (b.type) {
    case 'h':
      return <h2>{rich(b.text)}</h2>;
    case 'h3':
      return <h3>{rich(b.text)}</h3>;
    case 'p':
      return <p>{rich(b.text)}</p>;
    case 'image':
      return <NoteImage {...b} />;
    case 'source':
      return <p className="source">Source: {b.text}</p>;
    case 'ul':
      return <ul>{b.items.map((t, i) => <li key={i}>{rich(t)}</li>)}</ul>;
    case 'steps':
      return <ol>{b.items.map((t, i) => <li key={i}>{rich(t)}</li>)}</ol>;
    case 'remember':
      return (
        <Callout icon={LuBookmark} title={b.title || 'Remember this'}>
          {b.text && <p>{rich(b.text)}</p>}
          {b.items && <ul>{b.items.map((t, i) => <li key={i}>{rich(t)}</li>)}</ul>}
        </Callout>
      );
    case 'mnemonic':
      return (
        <Callout icon={LuLightbulb} title={b.title ? `Memory trick: ${b.title}` : 'Memory trick'}>
          <p className="mnemonic-word">{b.word}</p>
          {b.explain && <p>{rich(b.explain)}</p>}
        </Callout>
      );
    case 'changing':
      return (
        <Callout icon={LuCalendarClock} title={`Data as of ${b.year}`}>
          <p>{rich(b.text)} Check for the latest figures.</p>
        </Callout>
      );
    case 'tip':
      return (
        <Callout icon={LuTarget} title="Exam tip">
          <p>{rich(b.text)}</p>
        </Callout>
      );
    case 'table':
      return <ScrollTable b={b} />;
    case 'timeline':
      return (
        <ul className="timeline">
          {b.items.map((it, i) => (
            <li key={i}>
              <span className="when">{it.when}</span>
              <span>{rich(it.what)}</span>
            </li>
          ))}
        </ul>
      );
    case 'flow':
      return (
        <figure className="flow-figure">
          {b.title && <figcaption>{b.title}</figcaption>}
          <Mermaid chart={b.chart} />
        </figure>
      );
    case 'example':
      return (
        <Callout icon={LuPencilLine} title="Solved example">
          <p><strong>Question:</strong> {rich(b.q)}</p>
          <ol>{b.steps.map((s, i) => <li key={i}>{rich(s)}</li>)}</ol>
          {b.answer && <p><strong>Answer:</strong> {b.answer}</p>}
        </Callout>
      );
    default:
      return null;
  }
}

export default function NoteBlocks({ notes }) {
  return (
    <div className="notes">
      {notes.map((b, i) => <Block key={i} b={b} />)}
    </div>
  );
}
