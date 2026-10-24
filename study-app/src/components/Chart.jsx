// Small hand-made SVG charts and tables for Data Analysis questions.
// visual = { type: 'table'|'bar'|'line'|'pie', title, ... } (see README).
const FILLS = ['var(--accent-tint)', 'var(--surface-2)', 'var(--bg)', 'var(--surface-1)', 'var(--rule)'];

function Table({ head, rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>{head.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Axes({ w, h, pad, max }) {
  const ticks = 4;
  return Array.from({ length: ticks + 1 }, (_, i) => {
    const v = (max / ticks) * i;
    const y = h - pad - ((h - pad * 2) / ticks) * i;
    return (
      <g key={i}>
        <line x1={pad} x2={w - 10} y1={y} y2={y} style={{ stroke: 'var(--rule)' }} />
        <text x={pad - 6} y={y + 5} textAnchor="end" fontSize="13" style={{ fill: 'var(--ink)' }}>{Math.round(v * 10) / 10}</text>
      </g>
    );
  });
}

function Bar({ labels, values }) {
  const w = 480, h = 260, pad = 40;
  const max = Math.max(...values) * 1.15;
  const bw = (w - pad - 10) / values.length;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="chart" role="img" aria-label={"Chart"}>
      <Axes w={w} h={h} pad={pad} max={max} />
      {values.map((v, i) => {
        const bh = ((h - pad * 2) * v) / max;
        return (
          <g key={i}>
            <rect x={pad + i * bw + bw * 0.15} y={h - pad - bh} width={bw * 0.7} height={bh} style={{ fill: 'var(--accent-tint)', stroke: 'var(--ink)', strokeWidth: 1.5 }} />
            <text x={pad + i * bw + bw / 2} y={h - pad - bh - 5} textAnchor="middle" fontSize="13" style={{ fill: 'var(--ink)' }}>{v}</text>
            <text x={pad + i * bw + bw / 2} y={h - pad + 18} textAnchor="middle" fontSize="13" style={{ fill: 'var(--ink)' }}>{labels[i]}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Line({ labels, values }) {
  const w = 480, h = 260, pad = 40;
  const max = Math.max(...values) * 1.15;
  const step = (w - pad - 20) / (values.length - 1 || 1);
  const pts = values.map((v, i) => [pad + 10 + i * step, h - pad - ((h - pad * 2) * v) / max]);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="chart" role="img" aria-label={"Chart"}>
      <Axes w={w} h={h} pad={pad} max={max} />
      <polyline points={pts.map((p) => p.join(',')).join(' ')} fill="none" style={{ stroke: 'var(--ink)' }} strokeWidth="2.5" />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p[0]} cy={p[1]} r="5" style={{ fill: 'var(--ink)' }} />
          <text x={p[0]} y={p[1] - 10} textAnchor="middle" fontSize="13" style={{ fill: 'var(--ink)' }}>{values[i]}</text>
          <text x={p[0]} y={h - pad + 18} textAnchor="middle" fontSize="13" style={{ fill: 'var(--ink)' }}>{labels[i]}</text>
        </g>
      ))}
    </svg>
  );
}

function Pie({ labels, values }) {
  const total = values.reduce((a, b) => a + b, 0);
  const cx = 110, cy = 110, r = 95;
  let angle = -Math.PI / 2;
  return (
    <div className="pie">
      <svg viewBox="0 0 220 220" className="chart pie-svg" role="img" aria-label={"Chart"}>
        {values.map((v, i) => {
          const a2 = angle + (v / total) * Math.PI * 2;
          const large = a2 - angle > Math.PI ? 1 : 0;
          const d = `M${cx},${cy} L${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)} A${r},${r} 0 ${large} 1 ${cx + r * Math.cos(a2)},${cy + r * Math.sin(a2)} Z`;
          const mid = (angle + a2) / 2;
          angle = a2;
          return (
            <g key={i}>
              <path d={d} style={{ fill: FILLS[i % FILLS.length], stroke: 'var(--ink)' }} strokeWidth="1.5" />
              <text x={cx + r * 0.62 * Math.cos(mid)} y={cy + r * 0.62 * Math.sin(mid) + 5} textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: 'var(--ink)' }}>
                {Math.round((v / total) * 100)}%
              </text>
            </g>
          );
        })}
      </svg>
      <ul className="legend">
        {labels.map((l, i) => (
          <li key={i}><span className="swatch" style={{ background: FILLS[i % FILLS.length] }} /> {l}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Chart({ visual }) {
  if (!visual) return null;
  return (
    <figure className="visual-chart" style={{ margin: 0 }}>
      {visual.title && <figcaption className="q-label">{visual.title}</figcaption>}
      {visual.type === 'table' && <Table head={visual.head} rows={visual.rows} />}
      {visual.type === 'bar' && <Bar labels={visual.labels} values={visual.values} />}
      {visual.type === 'line' && <Line labels={visual.labels} values={visual.values} />}
      {visual.type === 'pie' && <Pie labels={visual.labels} values={visual.values} />}
    </figure>
  );
}
