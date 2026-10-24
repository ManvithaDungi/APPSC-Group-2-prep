import { Link } from 'react-router-dom';
import { LuChevronRight } from 'react-icons/lu';

// crumbs = [{ label, to? }]; the last one is the current page.
export default function Breadcrumb({ crumbs }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={i}>
              {c.to && !last ? <Link to={c.to}>{c.label}</Link> : <span aria-current={last ? 'page' : undefined}>{c.label}</span>}
              {!last && <LuChevronRight size={16} className="icon" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
