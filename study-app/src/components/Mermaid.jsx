import { useEffect, useId, useState } from 'react';

// Mermaid cannot render several diagrams at the same moment, so renders run one after another.
let queue = Promise.resolve();

function renderDiagram(id, chart) {
  const job = queue.then(async () => {
    const { default: mermaid } = await import('mermaid');
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        primaryColor: '#FDEEF4',
        primaryBorderColor: '#D86A93',
        primaryTextColor: '#1A1A1A',
        lineColor: '#D86A93',
        fontFamily: 'Nunito, sans-serif',
        fontSize: '16px',
      },
    });
    return mermaid.render(id, chart);
  });
  queue = job.catch(() => {});
  return job;
}

// Draws a flowchart from Mermaid text. Mermaid is loaded only when a diagram is shown.
export default function Mermaid({ chart }) {
  const id = 'mmd' + useId().replace(/[^a-zA-Z0-9]/g, '');
  const [svg, setSvg] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    renderDiagram(id, chart)
      .then((r) => !cancelled && setSvg(r.svg))
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (failed) return <pre className="flow-fallback">{chart}</pre>;
  return <div className="flow" dangerouslySetInnerHTML={{ __html: svg }} aria-label="Diagram" />;
}
