import { useState } from 'react';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
import Chart from './Chart';

export const LETTERS = ['A', 'B', 'C', 'D'];

// Questions may use the original short fields (q, explain) or the content-guideline fields (stem, explanation).
export const stemOf = (q) => q.stem ?? q.q;
export const explanationOf = (q) => q.explanation ?? q.explain;

// The stem and its structured parts. Multi-part questions are never shown as one run-on paragraph.
// `compact` is used in the mistake review, where the data table is not kept sticky.
export default function QuestionParts({ q, compact = false }) {
  const [showData, setShowData] = useState(true);
  const format = q.format || (q.assertion ? 'assertion' : q.list1 ? 'match' : q.statements ? 'statement' : q.items ? 'chronology' : q.visual ? 'data' : 'direct');

  return (
    <>
      {format === 'data' && q.visual && (
        <div className={compact ? 'q-block' : 'q-data'}>
          {!compact && (
            <button type="button" className="btn" onClick={() => setShowData((s) => !s)} aria-expanded={showData}>
              {showData ? <LuChevronUp size={20} className="icon" aria-hidden="true" /> : <LuChevronDown size={20} className="icon" aria-hidden="true" />}
              {showData ? 'Hide data' : 'Show data'}
            </button>
          )}
          {(compact || showData) && <Chart visual={q.visual} />}
        </div>
      )}

      {format === 'assertion' ? (
        <>
          <div className="q-block">
            <p className="q-label">Assertion (A)</p>
            <p className="stem">{q.assertion}</p>
          </div>
          <div className="q-block">
            <p className="q-label">Reason (R)</p>
            <p className="stem">{q.reason}</p>
          </div>
        </>
      ) : (
        <p className="stem">{stemOf(q)}</p>
      )}

      {format === 'statement' && (
        <ol className="q-statements">
          {q.statements.map((s, i) => (
            <li key={i}><span>{i + 1}.</span><span>{s}</span></li>
          ))}
        </ol>
      )}
      {format === 'statement' && q.ask && <p className="stem">{q.ask}</p>}

      {format === 'match' && (
        <div className="q-lists">
          <div>
            <h4>List I</h4>
            <ol type="A">{q.list1.map((s, i) => <li key={i}>{s}</li>)}</ol>
          </div>
          <div>
            <h4>List II</h4>
            <ol>{q.list2.map((s, i) => <li key={i}>{s}</li>)}</ol>
          </div>
        </div>
      )}

      {format === 'chronology' && (
        <ol className="q-statements">
          {q.items.map((s, i) => (
            <li key={i}><span>{i + 1}.</span><span>{s}</span></li>
          ))}
        </ol>
      )}

      {format !== 'data' && q.visual && <Chart visual={q.visual} />}
    </>
  );
}
