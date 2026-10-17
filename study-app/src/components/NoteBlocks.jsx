import Mermaid from './Mermaid';

// Renders the "notes" array of a leaf. Block types are documented in the README.
function Block({ b }) {
  switch (b.type) {
    case 'h':
      return <h2 className="note-h">{b.text}</h2>;
    case 'h3':
      return <h3 className="note-h3">{b.text}</h3>;
    case 'p':
      return <p>{b.text}</p>;
    case 'ul':
      return (
        <ul className="bullets">
          {b.items.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      );
    case 'steps':
      return (
        <ol className="steps">
          {b.items.map((t, i) => <li key={i}>{t}</li>)}
        </ol>
      );
    case 'remember':
      return (
        <div className="box remember">
          <div className="box-title">⭐ {b.title || 'Remember This'}</div>
          {b.text && <p>{b.text}</p>}
          {b.items && <ul className="bullets">{b.items.map((t, i) => <li key={i}>{t}</li>)}</ul>}
        </div>
      );
    case 'mnemonic':
      return (
        <div className="box mnemonic">
          <div className="box-title">🧠 Memory Trick{b.title ? `: ${b.title}` : ''}</div>
          <p className="mnemonic-word">{b.word}</p>
          {b.explain && <p>{b.explain}</p>}
        </div>
      );
    case 'changing':
      return (
        <div className="box changing">
          <strong>Data from {b.year}.</strong> {b.text} <em>Check for the latest figures.</em>
        </div>
      );
    case 'tip':
      return <div className="box tip"><strong>Tip:</strong> {b.text}</div>;
    case 'table':
      return (
        <div className="table-wrap">
          <table>
            {b.caption && <caption>{b.caption}</caption>}
            <thead><tr>{b.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'timeline':
      return (
        <ul className="timeline">
          {b.items.map((it, i) => (
            <li key={i}>
              <span className="when">{it.when}</span>
              <span className="what">{it.what}</span>
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
        <div className="box example">
          <div className="box-title">✏️ Solved Example</div>
          <p><strong>Question:</strong> {b.q}</p>
          <ol className="steps">{b.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
          {b.answer && <p><strong>Answer:</strong> {b.answer}</p>}
        </div>
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
