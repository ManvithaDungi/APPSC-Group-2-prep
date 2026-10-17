import { Link } from 'react-router-dom';

const PAGE_NAMES = { notes: 'Notes', quiz: 'Quiz', practice: 'Practice' };

export default function Breadcrumb({ tab, subject, leaf, page }) {
  const crumbs = [{ label: tab.title, to: `/${tab.id}` }];
  if (subject) crumbs.push({ label: subject.title, to: `/${tab.id}/${subject.id}` });
  if (leaf) crumbs.push({ label: leaf.title, to: `/${tab.id}/${subject.id}/${leaf.id}` });
  if (page) crumbs.push({ label: PAGE_NAMES[page] || page });
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i}>
          {i > 0 && <span className="sep"> › </span>}
          {c.to && i < crumbs.length - 1 ? <Link to={c.to}>{c.label}</Link> : <span className="here">{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}
